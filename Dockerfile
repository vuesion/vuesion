# HOWTO build and test docker file
# 1. Run: docker build -t vuesion .
# 2. Run: docker run -p 3000:3000 -e DATABASE_URL='postgresql://postgres:postgres@host.docker.internal:5432/vuesion?schema=public' vuesion

# Build step
FROM node:16-alpine as build
WORKDIR build

COPY . .

# Build storybook before creating the docker image and copy it to the public folder so nuxt can pick it up during the build
COPY ./storybook-static ./src/public/storybook
COPY ./storybook-static/stories.json ./src/public/stories.json

RUN npm install --legacy-peer-deps
RUN ./node_modules/.bin/prisma generate
RUN npm run build

FROM node:16-alpine as app
ENV NODE_ENV='production'
ENV HOST='0.0.0.0'
ENV PORT='3000'
WORKDIR app

COPY --from=build ./build/prisma ./prisma
COPY --from=build ./build/.nuxt ./.nuxt
COPY --from=build ./build/.output ./.output
COPY --from=build ./build/package*.json ./

RUN npm pkg delete scripts.prepare && npm install --legacy-peer-deps --omit=dev

EXPOSE 3000
CMD npm start
