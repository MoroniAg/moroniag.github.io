# Portfolio API Devcontainer

Este devcontainer proporciona un entorno para desarrollar APIs en Python con FastAPI.

Instrucciones rápidas:

1. Construir y abrir en VS Code (Remote - Containers): abrir la carpeta `portfolio-api` y Reopen in Container.
2. O desde terminal Docker (opcional):

```bash
# desde portfolio-api/.devcontainer (subir un nivel si es necesario)
docker build -t portfolio-api -f .devcontainer/Dockerfile ..
docker run -p 8000:8000 -v "$PWD":/workspace portfolio-api
```

3. Acceder a la API en http://localhost:8000

Docker (recomendado)

1. Copia `.env.example` a `.env` y ajusta valores (no subir `.env` a git):

```bash
cp .env.example .env
# editar .env y establecer CONTACT_API_TOKEN
```

2. Construir y ejecutar con docker:

```bash
docker build -t portfolio-api:latest .
docker run --env-file .env -p 8000:8000 portfolio-api:latest
```

3. O usar `docker-compose`:

```bash
docker compose up --build
```

4. Script helper `scripts/build.sh` — construye la imagen (crea `.env` desde `.env.example` si falta). No arranca contenedores:

```bash
./scripts/build.sh
```

Arrancar el contenedor (después del build):

```bash
# con docker
docker run --env-file .env -p 8000:8000 portfolio-api:latest

# o con docker-compose
docker compose up --build
```

La API estará disponible en `http://localhost:${APP_PORT:-8000}`.

Variables de entorno requeridas

 - `CONTACT_API_TOKEN`: token secreto que el frontend debe enviar en el header `tokenkey`.
 - `FRONTEND_ORIGIN`: origen permitido por CORS (ej. `http://localhost:3000`).
 - `APP_HOST`: host donde uvicorn escuchará (por defecto `0.0.0.0`).
 - `APP_PORT`: puerto donde uvicorn escuchará (por defecto `8000`).

Opcionalmente puedes definir otras variables en `.env` según necesites.
