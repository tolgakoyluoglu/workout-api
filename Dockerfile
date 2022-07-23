FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000
CMD ["npm", "start"]

ENV NODE_OPTIONS=--max_old_space_size=1024