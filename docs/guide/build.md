# Build your application for production

Now you want to bring your app online, it should be fast and optimized.
You want the full package, the PWA package.

In the development mode, you have the non-optimized code,
source maps and all the good things you need to write good code.

But in production you don't want to have unnecessary code, it should
be as small as possible.

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

<img :src="$withBase('/analyzer.png')" alt="webpack-bundle-analyzer">
