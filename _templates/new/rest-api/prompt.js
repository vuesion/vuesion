const { camelCase } = require('lodash');
const inflection = require('inflection');

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Entity name:',
    result(value) {
      value = inflection.singularize(value);

      return camelCase(value).replace(/ /g, '');
    },
    validate(value) {
      if (!value.length) {
        return 'Entity must have a name.';
      }
      return true;
    },
  },
  {
    type: 'confirm',
    name: 'auth',
    message: 'Is the entity protected by Authentication?',
    initial: true,
  },
];
