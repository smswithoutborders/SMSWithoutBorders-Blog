FROM node:20-alpine as build
WORKDIR /app

RUN npm install -g pnpm

COPY package.json tsconfig.json ./
COPY scripts ./scripts

RUN pnpm install --no-lockfile

COPY . .
ARG PORT
ARG SSL_PORT
ARG SERVER_NAME
RUN export PORT=${PORT} SSL_PORT=${SSL_PORT} SERVER_NAME=${SERVER_NAME} && \
    ./scripts/generate_env.sh && \
    pnpm build

FROM nginx:stable-alpine

COPY --from=build /app/out /usr/share/nginx/html

COPY nginx/nginx.conf.template /etc/nginx/conf.d/default.template

COPY scripts/docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

EXPOSE 80
EXPOSE 443

CMD ["/docker-entrypoint.sh"]
