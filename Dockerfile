# build happens in the CI pipeline
# no build inside this container because it would be redundant

FROM node:12.11.0-alpine
ENV NODE_ENV=production
ENV HOST=0.0.0.0
WORKDIR app
COPY ./.nuxt ./.nuxt
COPY ./.vuesion ./.vuesion
COPY ./i18n ./i18n
COPY ./src ./src
COPY ./storybook-static ./storybook-static
COPY ./nuxt.config.ts ./
COPY ./package*.json ./
COPY ./tsconfig.json ./
RUN ls -la
RUN npm install --silent --only=production
EXPOSE 3000
CMD npm start
