import type { BreakPoint } from '#shared/enums/BreakPoint';

export type IBreakpoints<T = any> = Record<BreakPoint, T>;
