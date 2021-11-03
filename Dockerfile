FROM node:16.12.0-alpine
WORKDIR /app
ADD package*.json ./
RUN npm ci
EXPOSE 5000
ADD . .
CMD npm run start