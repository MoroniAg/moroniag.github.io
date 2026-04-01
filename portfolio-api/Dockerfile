FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    APP_HOME=/app

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

WORKDIR ${APP_HOME}

# copy requirements first for better caching
COPY requirements.txt ./
RUN pip install --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

# copy only app directory and start script
COPY app/ ${APP_HOME}
COPY start.sh ${APP_HOME}/

# ensure start script is executable
RUN chmod +x ${APP_HOME}/start.sh || true

# non-root user
RUN useradd --create-home appuser && chown -R appuser ${APP_HOME}
USER appuser

ENV APP_HOST=0.0.0.0
ENV APP_PORT=8000

EXPOSE ${APP_PORT}

CMD ["/bin/sh", "-c", "./start.sh"]
