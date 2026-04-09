# Portfolio (Workspace)

This repository contains the source code and assets for my personal portfolio, including the web frontend (`portfolio-ui/`) and a lightweight Python API (`portfolio-api/`).

## Repository structure

- `portfolio-ui/` — React frontend (Vite) with components and build configuration.
- `portfolio-api/` — Python API (FastAPI/Flask) with dependencies in `requirements.txt` and startup scripts.
- `portfolio-resources/` — Design files and assets (Figma, graphics, sketches).

## Prerequisites

- Docker and Docker Compose (optional, recommended for consistent runs).
- Node.js + npm (for local frontend development).
- Python 3.10+ and `virtualenv` (if running the API locally without Docker).

## Run locally (development)

- Frontend (dev mode):

```bash
cd portfolio-ui
npm install
npm run dev
```

The Vite development server typically runs on port 5173.

- API (dev mode, inside `portfolio-api/`):

```bash
cd portfolio-api
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
./start.sh
```

See `portfolio-api/README.md` for API details and available routes.

## Run with Docker (recommended)

There are `Dockerfile` and `docker-compose.yml` files in the main folders. To build and start services locally:

```bash
docker compose up --build
```

This will build and start the defined services (frontend and API). Check the `docker-compose.yml` files in `portfolio-ui/` and the project root for service definitions.

## Testing and development tasks

- Frontend: run `npm run lint` or `npm run build` according to `portfolio-ui/package.json`.
- API: scripts and commands are available in `portfolio-api/README.md` and `start.sh`.

## Important links

- Frontend code: [portfolio-ui](portfolio-ui)
- API code: [portfolio-api](portfolio-api)
- Design resources: [portfolio-resources](portfolio-resources)

## Contact

If you need more information or want to report an issue, Please open an issue.

## License

This project is available under the MIT License.

---
Updated: basic instructions for local development and Docker.
