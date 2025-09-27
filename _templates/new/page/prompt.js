const path = require('path');
const glob = require('glob');
const { startCase, camelCase } = require('lodash');

const storeFiles = glob
  .sync('./src/app/store/*.ts')
  .filter((file) => file.includes('spec') === false)
  .map((file) => {
    const fileObj = path.parse(file);
    const storeName = fileObj.name;

    return startCase(camelCase(storeName)).replaceAll(' ', '');
  });

const prompts = [
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
];

if (storeFiles.length > 0) {
  prompts.push({
    type: 'multiselect',
    name: 'stores',
    message: 'Please select a store?',
    choices: [...storeFiles],
  });
} else {
  prompts.push({
    type: 'multiselect',
    name: 'stores',
    choices: ['None'],
    default: [],
  });
}

module.exports = prompts;
