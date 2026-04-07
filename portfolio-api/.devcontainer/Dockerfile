FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /workspace
# Avoid interactive prompts during package installs
ENV DEBIAN_FRONTEND=noninteractive

# Install git and ssh client for repo operations
RUN apt-get update && apt-get install -y --no-install-recommends git openssh-client \
    && rm -rf /var/lib/apt/lists/*


# Create a non-root user and add to docker group
# Crear usuario compatible con VSCode
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID
ENV USERNAME=${USERNAME} \
    USER_UID=${USER_UID} \
    USER_GID=${USER_GID}
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd -s /bin/bash --uid $USER_UID --gid $USER_GID -m $USERNAME
RUN usermod -aG docker ${USERNAME} || true
# Only change permissions if the Docker socket exists (some build environments don't provide it)
RUN if [ -S /var/run/docker.sock ]; then chmod 666 /var/run/docker.sock; else echo "/var/run/docker.sock not present, skipping chmod"; fi
COPY requirements.txt /workspace/requirements.txt
RUN pip install --no-cache-dir --disable-pip-version-check -r /workspace/requirements.txt

COPY . /workspace

# COPY .devcontainer/entrypoint.sh /usr/local/bin/entrypoint.sh
# RUN chmod +x /usr/local/bin/entrypoint.sh
EXPOSE 8000
WORKDIR /home/$USERNAME

# Entrypoint (runs as root) will map the docker socket group and add the vscode user to it,
# then drop privileges and run the user's start script.
# CMD ["/usr/local/bin/entrypoint.sh"]
