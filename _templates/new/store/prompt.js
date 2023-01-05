// eslint-disable-next-line @typescript-eslint/no-var-requires
const { camelCase } = require('lodash');

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Store name:',
    result(value) {
      value = value.slice(-1).toLocaleLowerCase() === 's' ? value.slice(0, -1) : value;

      return camelCase(value).replace(/ /g, '');
    },
    validate(value) {
      if (!value.length) {
        return 'Store must have a name.';
      }
      return true;
    },
  },
];
