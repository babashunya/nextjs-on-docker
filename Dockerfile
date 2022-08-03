FROM node:lts-alpine

RUN npm install

WORKDIR /usr/src/app
