#!/usr/bin/env bash
set -euo pipefail

# Build and run: create .env, build image, and start with docker-compose
# ROOT_DIR=$(cd "$(dirname "$0")/.." && pwd)
# cd "$ROOT_DIR"

# support optional -p flag to deploy to production directory/compose file
PROD=false
if [ "${1:-}" = "-p" ]; then
  PROD=true
  shift
fi

host=${1:-}
tag=${2:-}

# Validate inputs: require both host and tag
if [ -z "$host" ] || [ -z "$tag" ]; then
  echo "Usage: $0 [-p] <host> <tag>"
  echo "  -p    deploy to production (remote folder: portfolio_prod)"
  echo "Example: $0 -p usuario 1.0"
  echo "You must provide both a Docker host (e.g. usuario) and a tag (e.g. 1.0)."
  exit 2
fi
COMPOSE_FILE=portfolio_ui_docker-compose.yml
# choose remote directory and compose filename
if [ "$PROD" = true ]; then
  REMOTE_DIR=portfolio_prod
else
  REMOTE_DIR=portfolio_dev
fi

echo "Building Docker image portfolio-ui:$tag..."
# build versionado
docker build -t portfolio-ui:$tag .

# tag para registry
docker tag portfolio-ui:$tag $host/portfolio-ui:$tag
docker tag portfolio-ui:$tag $host/portfolio-ui:latest

# save images to tar.gz instead of pushing
outfile_tag="portfolio-ui_${tag}.tar.gz"
outfile_latest="portfolio-ui_latest.tar.gz"

echo "Saving image $host/portfolio-ui:$tag to $outfile_tag..."
docker save $host/portfolio-ui:$tag | gzip -c > "$outfile_tag"

echo "Saving image $host/portfolio-ui:latest to $outfile_latest..."
docker save $host/portfolio-ui:latest | gzip -c > "$outfile_latest"

echo "Build complete. This script only builds the image. Run the container separately with docker run or docker compose."

# copy artifacts to host:~/portfolio_dev
echo "Copying artifacts to $host:~/${REMOTE_DIR}..."
scp -C "$outfile_tag" "$host":~/${REMOTE_DIR}/
scp -C "$outfile_latest" "$host":~/${REMOTE_DIR}/

ssh -v $host "cd ~/${REMOTE_DIR} && \
docker-compose -f ${COMPOSE_FILE} down && \
gunzip -c ${outfile_latest} | docker load && \
docker-compose -f ${COMPOSE_FILE} up -d && \
exit"

# delete .env
# rm .env
rm "$outfile_tag" "$outfile_latest"
