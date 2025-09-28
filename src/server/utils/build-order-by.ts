import type { IListQuery } from '#shared/interfaces/api/IListQuery';

type Direction = 'asc' | 'desc';

interface BuildOrderByOptions {
  defaultField?: string;
  defaultDirection?: Direction;
  allowedFields?: readonly string[];
}

export function buildOrderBy<TOrderBy extends object>(
  query: Partial<IListQuery>,
  options: BuildOrderByOptions = {},
): TOrderBy {
  const defaultField = options.defaultField ?? 'createdAt';
  const defaultDirection: Direction = options.defaultDirection ?? 'desc';

  const raw = query.sort?.toString().trim();

  if (raw) {
    const [fieldPart, dirPart] = raw.split(':');
    const field = fieldPart?.trim();
    const direction = (dirPart?.trim()?.toLowerCase() as Direction) || defaultDirection;
    const isDirValid = direction === 'asc' || direction === 'desc';
    const isFieldAllowed = !options.allowedFields || (field && options.allowedFields.includes(field));

    if (field && isDirValid && isFieldAllowed) {
      return { [field]: direction } as unknown as TOrderBy;
    }
  }

  return { [defaultField]: defaultDirection } as unknown as TOrderBy;
}
