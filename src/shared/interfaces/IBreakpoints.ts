import type { BreakPoint } from '#shared/enums/BreakPoint';

export type IBreakpoints = {
  [key in BreakPoint]: any;
};
