import { describe, expect, test } from 'vitest';
import { getQueryParams } from './get-query-params';

describe('get-query-params.ts', () => {
  test('should handle single value parameter', async () => {
    expect(getQueryParams({ foo: 'bar' })).toBe('?foo=bar');
  });

  test('should handle multi value parameter', async () => {
    expect(getQueryParams({ foo: ['bar', 'baz'] })).toBe('?foo=bar%2Cbaz');
  });

  test('should handle undefined parameter', async () => {
    expect(getQueryParams()).toBe('');
  });

  test('should handle empty values', async () => {
    expect(getQueryParams({ foo: undefined, foo1: null, foo2: '', foo3: [] })).toBe('');
  });
});
