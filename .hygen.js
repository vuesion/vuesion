module.exports = {
  helpers: {
    pathToKey: (input) => {
      while (input.charAt(0) === '/') {
        input = input.substr(1);
      }

      input = input.replace(/\//g, '.');

      return input;
    },
  },
};
