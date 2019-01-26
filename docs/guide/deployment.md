# Deployment

## Isomorphic Web Application

For a better user experience and search engine optimisation we recommend this method for your deployment.
This project is optimised to produce isomorphic web-apps. All features are available for this kind of deployment.

To create an isomorphic web-app that you can deploy to an Heroku dyno, AWS EC2 instance or any other managed server,
run the command `npm run build`. This will create a server application that serves and renders the app.

Folders and files to include in your deployments:

- package.json
- ./dist
- ./i18n
- ./.vue-starter/config.json
- ./node_modules (only production dependencies)

## Static Single Page Application

Sometimes it's enough to deploy a static version of your application without server-side-rendering. If you want to host
your application on a CDN or a file storage like Netlify, Github pages or AWS S3, run the command `npm run build:spa`.

This will create a build that only contents the client side application.

You need a webserver to serve the static files.

::: tip Support
The single page application build is not a first class support in this project, you can't use the following features
if you decide for this deployment

- App Config
- Runtime Config

Because this features depend on the server component.

That means that you have to remove all the references to the vuex
state `app.config` e.g. you have to change this line in

`./src/app/shared/services/HttpService/HttpService.ts`

```js
  ...
    baseURL: store && store.state.app.config.api.baseUrl,
  ...
```

to a static value.
:::

Folders and files to include in your deployments:

- ./dist
