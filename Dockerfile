FROM node:14.8.1-alpine
WORKDIR /app
ADD package*.json ./
RUN npm ci --only=production
ADD . .
CMD npm run start