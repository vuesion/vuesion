# build happens in the CI pipeline
# no build inside this container because it would be redundant

FROM node:10-alpine
ENV NODE_ENV=production
ENV PORT=3000
RUN mkdir /logs
COPY ./package* ./
COPY ./dist ./dist
COPY ./.vuesion/config.json ./.vuesion/config.json
COPY ./i18n ./i18n
COPY ./storybook-static ./storybook-static
RUN npm install --silent --only=production
EXPOSE 3000
CMD npm start