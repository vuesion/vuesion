import moduleGenerator          = require('./module/index');
import componentGenerator       = require( './component/index');
import connectedGenerator       = require( './connected/index');
import sharedComponentGenerator = require( './shared-component/index');

import { hyphenate } from './helpers';

export = (plop: any) => {
  plop.setHelper('hyphenate', hyphenate);
  plop.setGenerator('module', moduleGenerator);
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('shared component', sharedComponentGenerator);
  plop.setGenerator('connected', connectedGenerator);
};
