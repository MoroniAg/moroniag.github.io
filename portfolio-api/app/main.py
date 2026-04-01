from fastapi import FastAPI, status
from .models import ContactRequest
from fastapi import Depends, HTTPException, Header, Request
import os
import secrets
import logging

logging.basicConfig(level=logging.DEBUG)

app = FastAPI(title="Portfolio API")

from starlette.middleware.cors import CORSMiddleware
FRONTEND_ORIGIN = os.environ.get("FRONTEND_ORIGIN", "https://mi-frontend.com")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_ORIGIN],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type", "tokenkey"],
)


@app.get("/")
def read_root():
    return {"message": "Hello from Portfolio API"}


@app.get("/health")
def health():
    return {"status": "ok"}


def verify_tokenkey(request: Request, tokenkey: str | None = Header(None)) -> None:
    expected = os.environ.get("CONTACT_API_TOKEN")
    logging.debug("verify_tokenkey: received tokenkey=%r, expected=%r", tokenkey, expected)
    headers = dict(request.headers)
    logging.debug("verify_tokenkey: incoming headers: %s", headers)

    if not expected:
        raise HTTPException(status_code=500, detail="Server token not configured")

    if not tokenkey or not secrets.compare_digest(tokenkey, expected):
        raise HTTPException(status_code=401, detail="Invalid or missing tokenkey")


@app.post("/api/v1/contact_me", status_code=status.HTTP_201_CREATED)
def contact_me(payload: ContactRequest, _token: None = Depends(verify_tokenkey)):
    from datetime import datetime
    import csv
    from pathlib import Path

    data = payload.model_dump()
    today = datetime.utcnow().strftime("%d%m%Y")
    out_dir = Path("/data/contacts")
    out_dir.mkdir(parents=True, exist_ok=True)
    filename = out_dir / f"contact_{today}.csv"

    fieldnames = ["timestamp", "name", "email", "message"]

    is_new = not filename.exists()
    with filename.open("a", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames, delimiter=";")
        if is_new:
            writer.writeheader()
        writer.writerow({
            "timestamp": datetime.utcnow().isoformat(),
            "name": data.get("name", ""),
            "email": data.get("email", ""),
            "message": data.get("message", ""),
        })

    return {"status": "received", "saved_to": str(filename)}


@app.get("/routes")
def list_routes():
    routes = []
    for r in app.routes:
        methods = []
        if hasattr(r, "methods") and r.methods:
            methods = sorted(list(r.methods))
        path = getattr(r, "path", None) or getattr(r, "template", None)
        routes.append({"path": path, "methods": methods, "name": getattr(r, "name", None)})
    return {"routes": routes}


