
#!/bin/sh
# cd /workspaces/porfolio/portfolio-api
# Use environment variables `APP_HOST` and `APP_PORT` with sensible defaults
: ${APP_HOST:=0.0.0.0}
: ${APP_PORT:=8000}
echo "Starting uvicorn on ${APP_HOST}:${APP_PORT}"
exec uvicorn app.main:app --host ${APP_HOST} --port ${APP_PORT} --reload
