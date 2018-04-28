/* tslint:disable:no-console */

import * as fs   from 'fs';
import * as path from 'path';

const nixt = require('nixt');
const rimraf = require('rimraf');
const testModulePath: string = path.join(path.resolve(process.cwd()), 'src/app/testModule');
const testComponentPath: string = path.join(path.resolve(process.cwd()), 'src/app/TestComponent');
const testConnectedComponentPath: string = path.join(path.resolve(process.cwd()), 'src/app/TestConnectedComponent');
const appStorePath: string = path.join(path.resolve(process.cwd()), 'src/app/store.ts');
const appStatePath: string = path.join(path.resolve(process.cwd()), 'src/app/state.ts');
const appRouterPath: string = path.join(path.resolve(process.cwd()), 'src/app/router.ts');

describe('tools', () => {
  afterAll(() => {
    console.log(fs.existsSync(testModulePath));
    console.log(fs.existsSync(testComponentPath));
    console.log(fs.existsSync(testConnectedComponentPath));

    rimraf(testModulePath, () => {
      console.log('testModule deleted');
    });

    rimraf(testComponentPath, () => {
      console.log('testComponent deleted');
    });

    rimraf(testConnectedComponentPath, () => {
      console.log('testConnectedComponent deleted');
    });

    let appStore: string = fs.readFileSync(appStorePath).toString();
    appStore = appStore.replace('\nimport { TestModuleModule }            from \'./testModule/module\';', '');
    appStore = appStore.replace('\nstore.registerModule(\'testModule\', TestModuleModule, { preserveState: true });', '');

    fs.writeFileSync(appStorePath, appStore);

    let appState: string = fs.readFileSync(appStatePath).toString();
    appState = appState.replace('\n  testModule: {\n    ...TestModuleDefaultState,\n  },', '');
    appState = appState.replace('\n  testModule?: ITestModuleState;', '');
    appState = appState.replace('\nimport { TestModuleDefaultState, ITestModuleState }         from \'./testModule/state\';', '');

    fs.writeFileSync(appStatePath, appState);

    let appRouter: string = fs.readFileSync(appRouterPath).toString();
    appRouter = appRouter.replace('\nimport { TestModuleRoutes }         from \'./testModule/routes\';', '');
    appRouter = appRouter.replace('      ...TestModuleRoutes,\n', ' ');

    fs.writeFileSync(appRouterPath, appRouter);
  });

  test('should extract i18n messages', (done) => {
    nixt()
    .run(`npm run extract-i18n-messages`)
    .stdout(/finished/)
    .end(done);
  });

  test('should generate module', (done) => {
    nixt()
    .run(`npm run g -- module "testModule" "yes" "yes"`)
    .expect(() => {
      if (fs.existsSync(testModulePath) === false) {
        return new Error('testModule not created');
      }
    })
    .end(done);
  });

  test('should generate a component', (done) => {
    nixt()
    .run(`npm run g -- component "testComponent" "yes"`)
    .expect((result: any) => {
      if (fs.existsSync(testComponentPath) === false) {
        return new Error('testComponent not created');
      }
    })
    .end(done);
  });

  test('should generate a connected component', (done) => {
    nixt()
    .run(`npm run g -- connected "testConnectedComponent"`)
    .expect((result: any) => {
      if (fs.existsSync(testConnectedComponentPath) === false) {
        return new Error('testConnectedComponent not created');
      }
    })
    .end(done);
  });

});
