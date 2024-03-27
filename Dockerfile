# build environment
FROM node:18-alpine as build
WORKDIR /app

RUN npm install -g pnpm

COPY . .

RUN pnpm install
RUN pnpm build

# production environment
FROM nginx:stable-alpine

# Copy built files to NGINX html directory
COPY --from=build /app/out /usr/share/nginx/html

# Copy NGINX configuration template
COPY nginx/nginx.conf.template /etc/nginx/conf.d/default.template

# Copy entry script
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# Expose ports
EXPOSE 80
EXPOSE 443

# Start NGINX using entry script
CMD ["/docker-entrypoint.sh"]
