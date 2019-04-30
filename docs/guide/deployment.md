# Deployment

## Isomorphic Web Application

For a better user experience and search engine optimisation we recommend this method for your deployment.
This project is optimised to produce isomorphic web-apps. All features are available for this kind of deployment.

To create an isomorphic web-app that you can deploy to an Heroku dyno, AWS EC2 instance or any other managed server,
run the command `npm run build`. This will create a server application that serves and renders the app.

**Folders and files to include in your deployments:**

- package.json
- ./dist
- ./i18n
- ./.vuesion/config.json
- ./node_modules (only production dependencies)

## Single Page Application with static HTML

Sometimes it's enough to deploy a static version of your application without server-side-rendering.
For example if you want to host your application on a CDN or a file storage like Netlify, Github pages or AWS S3, run the command `npm run build:spa`.

This will create a build that only contains the client side application and pre-renders an [AppShell](https://developers.google.com/web/fundamentals/architecture/app-shell).
By default it takes the route `/` as the AppShell.

::: tip Configure AppShell
You can configure the AppShell and additional static routes in the `.vuesion/config.json` file.

This enables you to create, for example, a blog or a static marketing page
:::

::: warning Limitations and Caveats

- You need a web-server to serve the static files
- You can not render pages that have route guards or a redirects (e.g. /dashboard)
- You might have issues with `prefetch` (e.g. if the server you try to hit is not available during the rendering)
- You can not use the `App/Runtime Config` features because they depend on the server component
  - That means that you have to replace all references to the vuex state `app.config` with a static value
    :::

**Folders and files to include in your deployments:**

- ./dist
