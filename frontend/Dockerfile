FROM node:18

ENV HOST 0.0.0.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5173

CMD [ "npm", "start" ]