FROM node:14.8.1-alpine
WORKDIR /app
ADD package*.json ./
RUN npm ci
ADD . .
CMD npm run start