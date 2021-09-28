FROM node:14.17.0-alpine

ARG DOMAIN=theseedsquad.com
ENV DOMAIN=$DOMAIN

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=8080

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
RUN npm i

COPY . .

RUN npm run generate

CMD ["npm", "start"]

EXPOSE 8080
