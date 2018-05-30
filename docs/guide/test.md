# Run the tests for the first time

Your app is installed and runs in development mode, but does every component in the app work correctly?

To check if all the features, components, services, etc. work as intended, you should run the tests suite with `npm run test:coverage`.

You will see something like this:

```bash
--------------|----------|----------|----------|----------|-------------------|
File          |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
--------------|----------|----------|----------|----------|-------------------|
All files     |      100 |      100 |      100 |      100 |                   |

...

Test Suites: 55 passed, 55 total
Tests:       184 passed, 184 total
Snapshots:   0 total
Time:        4.605s

Process finished with exit code 0
```

It shows that you have an application that is well tested and from now on
you should get feedback if you accidentally break included features every time you run the tests.

The `npm test` command will be executed in the before-commit hook,
that guarantees that the code you are going to commit will not break the application.

::: tip Jest config
By default, the coverage threshold is set to `100`%.

If you think this is just too much for your project, configure the appropriate thresholds in the `./package.json`.

```json
    "coverageThreshold": {
      "global": {
        "branches": 100,
        "functions": 100,
        "lines": 100,
        "statements": 100
      }
    },
```
:::
