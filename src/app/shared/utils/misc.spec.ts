import { createGUID } from './misc';

describe('misc.ts', () => {

  test('createGUID', () => {
    expect(createGUID()).toHaveLength(32);
  });
});
