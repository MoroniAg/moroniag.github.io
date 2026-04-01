#!/usr/bin/env sh
set -euo pipefail

# Build and run: create .env, build image, and start with docker-compose
ROOT_DIR=$(cd "$(dirname "$0")/.." && pwd)
cd "$ROOT_DIR"

if [ ! -f .env ]; then
  if [ -f .env.example ]; then
    echo "Creating .env from .env.example"
    cp .env.example .env
    echo "Please edit .env to set CONTACT_API_TOKEN and other values if needed."
  else
    echo "No .env or .env.example found. Create a .env with required variables." >&2
    exit 1
  fi
fi

echo "Building Docker image portfolio-api:latest..."
docker build -t portfolio-api:latest .

echo "Build complete. This script only builds the image. Run the container separately with docker run or docker compose."
