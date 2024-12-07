const path = require('path');
const glob = require('glob');
const { startCase, camelCase } = require('lodash');

const storeFiles = glob.sync('./app/store/*.ts').map((file) => {
  const fileObj = path.parse(file);
  const storeName = fileObj.name;

  return startCase(camelCase(storeName));
});

module.exports = [
  {
    type: 'input',
    name: 'path',
    message: 'Route path:',
    validate(value) {
      if (!value.length) {
        return 'Page must have a route path.';
      }
      return true;
    },
  },
  {
    type: 'confirm',
    name: 'auth',
    message: 'Is the page protected by Authentication?',
    initial: true,
  },
  {
    type: 'select',
    name: 'store',
    message: 'Please select a store?',
    choices: ['None', ...storeFiles],
  },
];
