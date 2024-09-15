# FROM node:16.18.1-alpine
# ENV SRC_DIR=/usr/src/app
# COPY . ${SRC_DIR}
# WORKDIR ${SRC_DIR}
# EXPOSE 8080
# RUN npm install
# CMD npm run serve

FROM nginx:1.26.2-alpine

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY ./dist /usr/share/nginx/html

EXPOSE 80