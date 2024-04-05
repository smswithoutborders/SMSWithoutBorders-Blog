# build environment
FROM node:18-alpine as build
WORKDIR /app

# Install global dependencies
RUN npm install -g pnpm

# Copy only necessary files
COPY package.json pnpm-lock.yaml tsconfig.json ./
COPY scripts ./scripts

# Install dependencies
RUN pnpm install

# Build the application
COPY . .
ARG PORT
ARG SSL_PORT
ARG SERVER_NAME
RUN export PORT=${PORT} SSL_PORT=${SSL_PORT} SERVER_NAME=${SERVER_NAME} && \
    ./scripts/generate_env.sh && \
    pnpm build

# production environment
FROM nginx:stable-alpine

# Copy built files to NGINX html directory
COPY --from=build /app/out /usr/share/nginx/html

# Copy NGINX configuration template
COPY nginx/nginx.conf.template /etc/nginx/conf.d/default.template

# Copy entry script
COPY scripts/docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# Expose ports
EXPOSE 80
EXPOSE 443

# Start NGINX using entry script
CMD ["/docker-entrypoint.sh"]
