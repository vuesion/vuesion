import axios from 'axios';
import { loadLanguageAsync } from './i18n';

describe('i18n', () => {
  test('should set new language', (done) => {
    axios.get = jest.fn().mockReturnValue(Promise.resolve({ data: { foo: 'foo' } }));

    loadLanguageAsync('de-DE')
      .then(() => {
        expect(axios.get).toHaveBeenCalledTimes(1);
        return loadLanguageAsync('de-DE');
      })
      .then(() => {
        expect(axios.get).toHaveBeenCalledTimes(1);
        return loadLanguageAsync('en-EN');
      })
      .then(() => {
        expect(axios.get).toHaveBeenCalledTimes(1);
        done();
      });
  });
});
