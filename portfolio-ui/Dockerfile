FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
COPY yarn.lock* ./
RUN npm ci --legacy-peer-deps || npm install

# Copy source and build
COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

# Create nginx config for SPA routing inside image (no external file needed)
RUN rm /etc/nginx/conf.d/default.conf && \
		cat > /etc/nginx/conf.d/default.conf <<'NGINX_CONF'
server {
	listen       80;
	server_name  localhost;

	root   /usr/share/nginx/html;
	index  index.html;

	location / {
		try_files $uri $uri/ /index.html;
	}

	location ~* \.(?:manifest|appcache|xml|json)$ {
		add_header Cache-Control "no-cache";
	}

	location ~* \.(?:css|js|gif|jpe?g|png|svg|ico|woff2?)$ {
		expires 30d;
		add_header Cache-Control "public";
	}
}
NGINX_CONF

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
