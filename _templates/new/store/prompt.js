const { camelCase } = require('lodash');
const inflection = require('inflection');
const { EXCLUDE_SINGULARIZE } = require('../../config');

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Store name:',
    result(value) {
      const isExcluded = EXCLUDE_SINGULARIZE.some((plural) => value.toLowerCase().endsWith(plural));
      const name = (isExcluded ? camelCase(value) : camelCase(inflection.singularize(value))).replace(/ /g, '');

      return name;
    },
    validate(value) {
      if (!value.length) {
        return 'Store must have a name.';
      }
      return true;
    },
  },
];
