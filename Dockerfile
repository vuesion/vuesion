# HOWTO build and test docker file
# 1. Run: docker build -t vuesion .
# 2. Run: docker run -p 3000:3000 -e DATABASE_URL='postgresql://postgres:postgres@host.docker.internal:5432/vuesion?schema=public' -e NUXT_AUTH_SECRET='f7c99101-b819-4e98-8477-9d345e0930f3' -e NEXTAUTH_URL='http://localhost:3000/api/auth' -e AUTH_ORIGIN='http://localhost:3000' vuesion
# Run locally without Docker: npm run build && DATABASE_URL='postgresql://postgres:postgres@localhost:5432/vuesion?schema=public' NUXT_AUTH_SECRET='f7c99101-b819-4e98-8477-9d345e0930f3' NEXTAUTH_URL='http://localhost:3000/api/auth' AUTH_ORIGIN='http://localhost:3000' npm start

# Build step
FROM node:22-alpine as build
WORKDIR build

COPY . .

# Build storybook before creating the docker image and copy it to the public folder so nuxt can pick it up during the build
COPY ./storybook-static ./public/storybook


RUN npm install
RUN ./node_modules/.bin/prisma generate
RUN npm run build
RUN rm -rf node_modules/ && npm pkg delete scripts.prepare && npm pkg delete scripts.postinstall && npm ci --force --omit=dev
RUN wget https://gobinaries.com/tj/node-prune --output-document - | /bin/sh && node-prune

FROM node:22-alpine as app
ENV NODE_ENV='production'
ENV HOST='0.0.0.0'
ENV PORT='3000'
WORKDIR app

COPY --from=build ./build/node_modules ./node_modules
COPY --from=build ./build/prisma ./prisma
COPY --from=build ./build/.nuxt ./.nuxt
COPY --from=build ./build/i18n ./i18n
COPY --from=build ./build/.output ./.output
COPY --from=build ./build/package*.json ./
COPY --from=build ./build/.env ./

EXPOSE 3000

## script to show large node modules directories
# CMD du -sh ./node_modules/* | sort -nr | grep '\dM.*'
## script to reset and seed the database
# CMD ./node_modules/.bin/prisma migrate reset --force && npm run db:migrate-deploy && npm run db:seed && npm start
## script to use to set up and sync the database in the production environment
# CMD npm run db:migrate-deploy && npm run db:seed && npm start
CMD npm start
