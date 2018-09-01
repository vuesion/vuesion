FROM node:8-alpine AS builder
RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM node:8-alpine
ENV NODE_ENV=production
RUN mkdir /app /app/logs
WORKDIR /app
COPY --from=builder /app/package* ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/i18n ./i18n
RUN npm install --only=production
EXPOSE 3001
CMD PORT=3001 npm start
