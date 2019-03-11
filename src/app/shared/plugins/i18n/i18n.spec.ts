import axios from 'axios';
import { loadLocaleAsync } from './i18n';

describe('i18n', () => {
  test('should set new language', async () => {
    axios.get = jest.fn().mockReturnValue(Promise.resolve({ data: { foo: 'foo' } }));

    await loadLocaleAsync('de');

    expect(axios.get).toHaveBeenCalledTimes(1);

    await loadLocaleAsync('de');

    expect(axios.get).toHaveBeenCalledTimes(1);

    await loadLocaleAsync('en');

    expect(axios.get).toHaveBeenCalledTimes(2);
  });

  test('should throw error', async () => {
    axios.get = jest.fn().mockReturnValue(Promise.reject({ message: 'foo' }));

    try {
      await loadLocaleAsync('de');
    } catch (e) {
      expect(e).toEqual({ message: 'foo' });
    }
  });
});
