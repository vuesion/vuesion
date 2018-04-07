# NPM Scripts

## Development

### Run dev environment
To run your app in development with HMR just run `npm run dev`.

### Run unit tests
- `npm test` runs tests once
- `npm run test:coverage` runs tests with coverage once

Find a detailed coverage report in `coverage/iconv-report/index.html`

### Run e2e tests

For more information about the e2e test set up, have a look at [cypress.io](https://www.cypress.io/).

- run `npm run dev`
- open a second terminal window
- run `npm run e2e`

### i18n and extracting messages
For details please have a look at the [i18n docs](I18N.md).

## Build

### production build
To build and run your in app in production mode, please run `npm run build && npm start`.

### continuous integration
For your CI/CD build we already created a `ci` script. It'll build the project, run the lint/test tasks and deploy the code coverage to codecov.

### bundle analyzer
If you're curious how your client application looks and which code you ship to your customers. You can use the `npm run analyze-bundle` task to get an overview about the webpack bundle. This command uses the [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer).

### Release
To release a new version of your project run one of the following commands:

- `npm run release:major`
- `npm run release:minor`
- `npm run release:patch`

This will automatically generate a change log, change the version in `package.json` and tags the repository.

## Storybook

Storybook runs outside of your app. So you can develop UI components in isolation without worrying about app specific dependencies and requirements.
Run `npm run storybook`. The server runs on port `6006`.
