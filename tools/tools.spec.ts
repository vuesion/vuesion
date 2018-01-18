const nixt = require('nixt');

describe('tools', () => {

  test('should extract i18n messages', (done) => {
    nixt()
      .run(`npm run extract-i18n-messages`)
      .stdout(/finished/)
      .end(done);
  });

});
