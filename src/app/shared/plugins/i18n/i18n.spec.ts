import axios               from 'axios';
import { loadLocaleAsync } from './i18n';

describe('i18n', () => {
  test('should set new language', (done) => {
    axios.get = jest.fn().mockReturnValue(Promise.resolve({ data: { foo: 'foo' } }));

    loadLocaleAsync('de')
    .then(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
      return loadLocaleAsync('de');
    })
    .then(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
      return loadLocaleAsync('en');
    })
    .then(() => {
      expect(axios.get).toHaveBeenCalledTimes(2);
      done();
    });
  });

  test('should set default locale', (done) => {
    axios.get = jest.fn().mockReturnValue(Promise.resolve({ data: { foo: 'foo' } }));

    loadLocaleAsync('de')
    .then(() => {
      expect(axios.get).toHaveBeenCalledTimes(0);
      done();
    });
  });
});
