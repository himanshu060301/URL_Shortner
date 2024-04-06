FROM node:latest

WORKDIR /home/app/
COPY package*.json ./


RUN npm install
COPY . .
EXPOSE 8001
CMD ["npm", "start"]