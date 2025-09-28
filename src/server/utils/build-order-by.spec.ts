// tests/server/utils/build-order-by.spec.ts
import { describe, it, expect } from 'vitest';
import { buildOrderBy } from './build-order-by';

describe('buildOrderBy', () => {
  it('returns defaults when sort is missing', () => {
    const res = buildOrderBy<any>({}, { defaultField: 'createdAt', defaultDirection: 'desc' });
    expect(res).toEqual({ createdAt: 'desc' });
  });

  it('returns defaults when sort is an empty string after trim', () => {
    const res = buildOrderBy<any>({ sort: '   ' } as any, { defaultField: 'createdAt', defaultDirection: 'desc' });
    expect(res).toEqual({ createdAt: 'desc' });
  });

  it('parses "field:asc" and returns { field: "asc" }', () => {
    const res = buildOrderBy<any>({ sort: 'name:asc' } as any);
    expect(res).toEqual({ name: 'asc' });
  });

  it('parses direction case-insensitively (e.g., "ASC")', () => {
    const res = buildOrderBy<any>({ sort: 'name:ASC' } as any);
    expect(res).toEqual({ name: 'asc' });
  });

  it('uses default direction when direction part is missing (e.g., "name:")', () => {
    const res = buildOrderBy<any>({ sort: 'name:' } as any, { defaultDirection: 'desc' });
    expect(res).toEqual({ name: 'desc' });
  });

  it('falls back to defaults when direction is invalid', () => {
    const res = buildOrderBy<any>({ sort: 'name:sideways' } as any, {
      defaultField: 'createdAt',
      defaultDirection: 'desc',
    });
    expect(res).toEqual({ createdAt: 'desc' });
  });

  it('respects allowedFields: returns default when field is not allowed', () => {
    const res = buildOrderBy<any>({ sort: 'name:asc' } as any, {
      allowedFields: ['createdAt', 'updatedAt'],
      defaultField: 'createdAt',
      defaultDirection: 'desc',
    });
    expect(res).toEqual({ createdAt: 'desc' });
  });

  it('respects allowedFields: returns requested field when allowed', () => {
    const res = buildOrderBy<any>({ sort: 'updatedAt:desc' } as any, {
      allowedFields: ['createdAt', 'updatedAt'],
      defaultField: 'createdAt',
      defaultDirection: 'asc',
    });
    expect(res).toEqual({ updatedAt: 'desc' });
  });

  it('trims field and direction parts (whitespace around tokens)', () => {
    const res = buildOrderBy<any>({ sort: '  name  :  asc  ' } as any);
    expect(res).toEqual({ name: 'asc' });
  });

  it('uses custom defaults when provided and sort is missing/invalid', () => {
    const res1 = buildOrderBy<any>({}, { defaultField: 'updatedAt', defaultDirection: 'asc' });
    expect(res1).toEqual({ updatedAt: 'asc' });

    const res2 = buildOrderBy<any>({ sort: 'bad:dir' } as any, { defaultField: 'updatedAt', defaultDirection: 'asc' });
    expect(res2).toEqual({ updatedAt: 'asc' });
  });
});
