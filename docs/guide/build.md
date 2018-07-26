# Build your application for production

Now you want to bring your app online, it should be fast and optimized.
You want the full package, the PWA package.

In the development mode, you have the non-optimized code,
source maps and all the good things you need to write good code.

But in production you don't want to have unnecessary code, it should
be as small as possible.

## Configure for Cross-Origin Resource Sharing (CORS)

If you find that the Counter example fails in production, it means you have a conflict between your base URL and the actual URL your end-user's browsers use. The Counter makes AJAX calls to the server indicated in the base URL, but browsers reject calls to different hosts than the site from which the current page originates. You must either ensure that they match, or that you have fully implemented CORS support in your server.

For the simple case where page hosting and services have the same origin, the setting to specify the base URL is found in `./src/app/config/default.json`:

```
{
  "api": {
    "baseUrl": "http://localhost:3000"
  },
  "features": {
    "disableParticles": false
  }
}
```

Replace `http://localhost:3000` with the true URL, `https://vue-starter.herokuapp.com/`, for example.


## Optimize your build

In order to optimize your app for production, run the command `npm run build`.

This will optimize your app as following:

- It runs the webpack [production mode](https://webpack.js.org/guides/production/)
- It adds a [service-worker](https://github.com/oliviertassinari/serviceworker-webpack-plugin) to your application to make it a PWA
- It compresses all assets

## Analyze your bundle

Sometimes your bundles are just too big and you have no idea why this is happening.

A tool to find out which parts of your bundles are too big is the [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) plugin for webpack.

To use this tool and get an overview of your bundles, run `npm run analyze-bundle`.

This will display the following overview:

<img :src="$withBase('/analyzer.png')" alt="foo">
