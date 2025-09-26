import { describe, test, expect } from 'vitest';
import { createId } from './create-id';

describe('createId', () => {
  test('createId', () => {
    expect(createId()).toHaveLength(32);
  });
});
