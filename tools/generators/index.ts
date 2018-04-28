import moduleGenerator          = require('./module/index');
import componentGenerator       = require( './component/index');
import connectedGenerator       = require( './connected/index');

import { hyphenate } from './helpers';

export = (plop: any) => {
  plop.setHelper('hyphenate', hyphenate);
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('module', moduleGenerator);
  plop.setGenerator('connected', connectedGenerator);
};
