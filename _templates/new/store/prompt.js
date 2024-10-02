const { camelCase } = require('lodash');
const inflection = require('inflection');

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Store name:',
    result(value) {
      value = inflection.singularize(value);

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
