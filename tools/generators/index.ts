import moduleGenerator = require('./module');
import componentGenerator = require('./component');
import connectedGenerator = require('./connected');

import { hyphenate } from './helpers';

export = (plop: any) => {
  plop.setHelper('hyphenate', hyphenate);
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('module', moduleGenerator);
  plop.setGenerator('connected', connectedGenerator);
};
