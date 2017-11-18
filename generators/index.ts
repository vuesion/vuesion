import moduleGenerator = require('./module/index');
import componentGenerator  = require('./component/index');
import connectedGenerator  = require('./connected/index');

export = (plop: any) => {
  plop.setGenerator('module', moduleGenerator);
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('connected', connectedGenerator);
};
