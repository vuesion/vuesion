const { startCase, camelCase, kebabCase } = require('lodash');

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Component name:',
    result(value) {
      return startCase(camelCase(value)).replace(/ /g, '');
    },
    validate(value) {
      if (!value.length) {
        return 'Components must have a name.';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'folder',
    message: 'Component folder:',
    initial: 'common',
    result(value) {
      return kebabCase(value);
    },
  },
];
