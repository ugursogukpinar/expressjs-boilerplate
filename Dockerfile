FROM node:12.18.4
ARG PORT=3000
ARG ENV=local
WORKDIR /app

COPY package*.json ./
RUN npm install --${ENV}

COPY . .

EXPOSE ${PORT}

CMD [ "node", "bin/www" ]
