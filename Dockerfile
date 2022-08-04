# syntax=docker/dockerfile:1
FROM node:16-alpine3.15
WORKDIR /app
COPY . .
RUN npm install --production
CMD ["npm", "run", "start"]