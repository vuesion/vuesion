import type { BreakPoint } from '~/enums/BreakPoint';

export type IBreakpoints = {
  [key in BreakPoint]: any;
};
