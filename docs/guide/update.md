# Stay up to date

::: tip Below version < 1.1.0
Please download the file [./tools/scripts/update.ts](https://github.com/devCrossNet/vue-starter/blob/master/tools/scripts/update.ts)
, copy it to `./tools/scripts/update.ts` and add the following script to your `package.json`:

```json
    "update": "npm run compile-tools && node ./tools/scripts/update.js",
```
:::

## Get the latest changes
If you want to keep your copy of the vue-starter up to date follow these steps:

- check that you use a Version Control System for your app (e.g. github, gitlab, butbucket, etc.)
- clear your change list
- create a new branch
- run `npm run update`

The update script will compare your current copy of the vue-starter with the latest copy on `devCrossNet/vue-starter:master`.

It will create, delete, add or modify all the files that are different.

It is basically the same as if you would rebase your project on top of `devCrossNet/vue-starter:master`.
But usually, you did not keep the history of the vue-starter in your own app so it is not possible to rebase.

## Merge with your local changes

Now you see the changes in your changelog:

- go through all the files and merge your changes (revert the parts that would break your app)
- run the tests and lint your project: `npm run test:coverage`, `npm run test:tools`, `npm run lint`
- start the app

If everything works, commit your changes and merge it into your master.

If not you might want to update manually by comparing your local copy with the [CHANGELOG](https://github.com/devCrossNet/vue-starter/blob/master/CHANGELOG.md).

## Major version upgrades

Our vision is to provide upgrade scripts for every major version, they will update the files and code.
