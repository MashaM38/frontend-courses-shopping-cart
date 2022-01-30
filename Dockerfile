FROM node:16.13.0-alpine3.14

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
COPY ./ ./

RUN npm update
RUN npm install

COPY . ./

CMD ["npm", "run", "start"]
