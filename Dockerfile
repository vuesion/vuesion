# build happens in the CI pipeline
# no build inside this container because it would be redundant

# HOWTO build and test docker file
# 1. Run: npm run ci
# 2. Run: docker build -t vuesion .
# 3. Run: docker run -p 3000:3000 vuesion

FROM node:14-alpine
ENV NODE_ENV=production
ENV HOST=0.0.0.0
WORKDIR app
COPY ./.vuesion ./.vuesion
COPY ./.nuxt ./.nuxt
COPY ./i18n ./i18n
COPY ./src ./src
COPY ./storybook-static ./storybook-static
COPY ./nuxt.config.ts ./
COPY ./package*.json ./
COPY ./tsconfig.json ./
RUN npm install --silent --force --only=production
EXPOSE 3000
CMD npm start
