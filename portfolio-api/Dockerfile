FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    APP_HOME=/service

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

WORKDIR ${APP_HOME}

# copy requirements first for better caching
COPY requirements.txt ./
RUN pip install --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

RUN useradd --create-home appuser && chown -R appuser:appuser ${APP_HOME}
USER appuser

# ensure app directory exists and has correct permissions, then copy
RUN mkdir -p ${APP_HOME}/app && chown -R appuser:appuser ${APP_HOME}/app || true
COPY app/ ${APP_HOME}/app/
COPY start.sh ${APP_HOME}/

# ensure start script is executable
RUN chmod +x ${APP_HOME}/start.sh || true


ENV APP_HOST=0.0.0.0
ENV APP_PORT=8000

EXPOSE ${APP_PORT}

CMD ["/bin/sh", "-c", "./start.sh"]
