import { BreakPoint } from '~/enums/BreakPoint';

export type IBreakpoints = {
  [key in BreakPoint]: any;
};
