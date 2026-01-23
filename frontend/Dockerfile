# Frontend Dockerfile - Multi-stage build
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --silent

# Copy source code
COPY . .

# Build the application
RUN npm run build


# Production stage
FROM nginx:alpine AS production

# Copy custom nginx config
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy built app from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Create non-root user
RUN addgroup -g 1001 -S frontend && \
    adduser -S frontend -u 1001 -G frontend -S

# ✅ Make runtime dirs writable for non-root + create temp dirs nginx needs
RUN mkdir -p /var/cache/nginx /var/log/nginx /var/run \
    /tmp/client_temp /tmp/proxy_temp /tmp/fastcgi_temp /tmp/uwsgi_temp /tmp/scgi_temp && \
    chown -R frontend:frontend /usr/share/nginx/html /var/cache/nginx /var/log/nginx /var/run /tmp /etc/nginx/conf.d && \
    chmod -R 755 /var/cache/nginx /var/log/nginx /var/run && \
    chmod -R 777 /tmp

# Switch to non-root user
USER frontend

# Expose port
EXPOSE 3000

# Health check (health endpoint exists in nginx.conf below)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

# Start nginx (PID is set inside nginx.conf to /tmp/nginx.pid)
CMD ["nginx", "-g", "pid /tmp/nginx.pid; daemon off;"]
