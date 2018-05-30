# Run your application for the first time

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
e.g. `PORT=8080 npm run dev` in development mode or `PORT=8080 npm start` for your production build.
