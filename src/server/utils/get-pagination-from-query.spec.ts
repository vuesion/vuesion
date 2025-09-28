import { describe, it, expect } from 'vitest';
import { getPaginationFromQuery } from './get-pagination-from-query';

describe('getPaginationFromQuery', () => {
  it('returns defaults when query is empty', () => {
    const res = getPaginationFromQuery({} as any);
    expect(res).toEqual({
      take: 5,
      skip: 0,
      selectedPage: 1,
      itemsPerPage: 5,
    });
  });

  it('parses selectedPage and itemsPerPage from query when provided as numbers', () => {
    const res = getPaginationFromQuery({ selectedPage: 3, itemsPerPage: 10 } as any);
    expect(res).toEqual({
      take: 10,
      skip: 20,
      selectedPage: 3,
      itemsPerPage: 10,
    });
  });

  it('parses selectedPage and itemsPerPage from query when provided as strings', () => {
    const res = getPaginationFromQuery({ selectedPage: '2', itemsPerPage: '7' } as any);
    expect(res).toEqual({
      take: 7,
      skip: 7,
      selectedPage: 2,
      itemsPerPage: 7,
    });
  });

  it('uses function arguments as defaults when query has no values', () => {
    const res = getPaginationFromQuery({} as any, 4, 12);
    expect(res).toEqual({
      take: 12,
      skip: 36,
      selectedPage: 4,
      itemsPerPage: 12,
    });
  });

  it('handles invalid values by falling back to defaults via parseInt NaN behavior', () => {
    const res = getPaginationFromQuery({ selectedPage: 'abc', itemsPerPage: 'def' } as any, 2, 8);
    expect(res).toEqual({
      take: 8,
      skip: 8,
      selectedPage: 2,
      itemsPerPage: 8,
    });
  });
});
