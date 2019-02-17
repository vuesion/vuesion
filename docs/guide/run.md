# Run the application

Of course, you want to know if the application that you just downloaded works.
In order to test if everything works as expected run the following command: `npm run dev`.

You should see a message in your console that says:

```bash
[1] info: server started at http://localhost:3000
```

That means that the dev-server successfully started.

You have to wait for a second message that indicates that the client and the isomorphic code is successfully compiled:

```bash
[1] ℹ ｢wdm｣: Compiled successfully.
```

Now you know that everything works as expected, to see the `vue-starter` in action, go to [http://localhost:3000](http://localhost:3000).

## Development mode and hot reloading

Your application runs now in development mode, that means that webpack watches for changes.

Every file in the `./src` directory will be hot reloaded, so you don't have to reload your browser or restart the dev server during development.

That guarantees a really good dev-experience and will make you much more productive.

::: tip i18n
the only files that are not hot-reloaded are the files in the `./i18n` directory, you have to reload your browser to reflect the changes.
:::

## Change web-server port

Your app runs on port `3000` by default, set the `PORT` environment variable to configure a different port
e.g. `npm run dev -- --port 8080` in development mode or `PORT=8080 npm start` for your production build.

## Run your application with docker

The application can be served via docker too.

In order to build the image run:

```bash
# install vuepress if you need the docs

npm run ci && docker build -t "vue/starter:latest" .
```

When building is complete, you can proceed with firing up the docker container:

```bash
docker run -it --name vue-starter -p 3001:3000 vue/starter:latest
```

You have to wait for the message:

```bash
info: node server started at http://localhost:3000
```

Docker is available at port: 3001 so a developer can have both docker and local server running at the same time

Now you know that everything works as expected, to see the `vue-starter` in action, go to [http://localhost:3001](http://localhost:3001).
