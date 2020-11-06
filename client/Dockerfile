FROM node:13-alpine as build-stage

WORKDIR /client

COPY . .

RUN npm install

EXPOSE ${DOCKER_PORT_CLIENT}

CMD ["npm", "start"]