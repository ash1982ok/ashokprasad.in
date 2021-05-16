FROM node:lts-alpine3.10 as builder
ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /app/builder
COPY . .
RUN npm ci

# Run this before docker-compose
#docker build . -t my-base-image:nx-base
