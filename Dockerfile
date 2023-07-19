FROM node:11.6.0-alpine AS builder
COPY . .
WORKDIR /app
RUN npm i
# RUN $ npm build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder dist/angular-tour-of-heroes /usr/share/nginx/html
