FROM node:8 AS builder
RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM node:8-alpine
ENV NODE_ENV=production
RUN mkdir /app /app/logs
WORKDIR /app
COPY --from=builder package* ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/i18n ./i18n
RUN npm install --only=production
EXPOSE 3000
CMD npm start
