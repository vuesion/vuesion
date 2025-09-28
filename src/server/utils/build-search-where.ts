import type { IListQuery } from '#shared/interfaces/IListQuery';

export function buildSearchWhere<TWhere extends object>(
  query: Partial<IListQuery>,
  searchFields: readonly string[],
): TWhere {
  const term = query.q?.toString().trim();
  if (!term) return {} as TWhere;

  const or = searchFields.map((field) => ({
    [field]: { contains: term, mode: 'insensitive' as const },
  }));

  return { OR: or } as unknown as TWhere;
}
