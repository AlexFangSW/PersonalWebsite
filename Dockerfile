FROM node:22-alpine

WORKDIR /app

COPY ./package.json \
  ./package-lock.json \
  ./next.config.ts \
  ./tsconfig.json \
  /app/

COPY ./public/ /app/public
COPY ./src/ /app/src

RUN npm i

RUN npm run build

CMD [ "npm", "run", "start" ]
