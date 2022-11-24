FROM node:16.18.1-alpine
ENV SRC_DIR=/usr/src/app
COPY . ${SRC_DIR}
WORKDIR ${SRC_DIR}
EXPOSE 8080
RUN npm install --force
CMD npm run serve