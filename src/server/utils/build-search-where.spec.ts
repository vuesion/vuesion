import { describe, it, expect } from 'vitest';
import { buildSearchWhere } from './build-search-where';

describe('buildSearchWhere', () => {
  it('returns empty object when query.q is missing', () => {
    const res = buildSearchWhere<any>({}, ['name', 'description']);
    expect(res).toEqual({});
  });

  it('returns empty object when query.q is an empty string', () => {
    const res = buildSearchWhere<any>({ q: '' }, ['name']);
    expect(res).toEqual({});
  });

  it('returns empty object when query.q contains only whitespace', () => {
    const res = buildSearchWhere<any>({ q: '   ' }, ['name']);
    expect(res).toEqual({});
  });

  it('creates OR conditions for all given searchFields with trimmed query.q', () => {
    const res = buildSearchWhere<any>({ q: ' Foo ' }, ['name', 'description']);
    expect(res).toEqual({
      OR: [
        { name: { contains: 'Foo', mode: 'insensitive' } },
        { description: { contains: 'Foo', mode: 'insensitive' } },
      ],
    });
  });

  it('works with a single searchField', () => {
    const res = buildSearchWhere<any>({ q: 'Bar' }, ['title']);
    expect(res).toEqual({
      OR: [{ title: { contains: 'Bar', mode: 'insensitive' } }],
    });
  });

  it('converts non-string q values to string before trimming', () => {
    const res = buildSearchWhere<any>({ q: 1234 as any }, ['code']);
    expect(res).toEqual({
      OR: [{ code: { contains: '1234', mode: 'insensitive' } }],
    });
  });
});
