# 第一次运行测试

你的应用已经安装好并且运行在开发模式, 但是,是不是所有组件都正确运行?

为了检查所有的特性,组件,服务,等等,是否如预期运行, 你应该运行测试套件`npm run test:coverage`.

你将会看到类似以下输出:

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

它表明你有一个应用程序经过测试,从现在开始,如果以后你每次运行包含特性的测试时意外中断,你应该会得到提示和反馈.

在提交代码之前`npm test`命令将会被运行,以保证你正在提交的代码不会破坏应用程序.

::: tip Jest配置
默认情况下, 覆盖范围的阀限被设置在`100`%.

如果你认为这对项目来说太多, 那么你可以配置适当的阀限通过 `./package.json`.

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
