FROM node:16.18.1-alpine
ENV SRC_DIR=${PWD}
COPY . ${SRC_DIR}
WORKDIR ${SRC_DIR}
EXPOSE 8080
RUN npm install
CMD npm run serve