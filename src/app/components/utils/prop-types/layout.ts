import { BreakPoint } from '#shared/enums/BreakPoint';

export const FlexJustifyValues = ['start', 'end', 'center', 'between', 'around', 'evenly'] as const;
export type FlexJustify = (typeof FlexJustifyValues)[number];

export const FlexAlignValues = ['start', 'end', 'center', 'baseline', 'stretch'] as const;
export type FlexAlign = (typeof FlexAlignValues)[number];

export const WidthValues = [
  '1/10',
  '2/10',
  '3/10',
  '4/10',
  '5/10',
  '6/10',
  '7/10',
  '8/10',
  '9/10',
  '10/10',
  '1/12',
  '2/12',
  '3/12',
  '4/12',
  '5/12',
  '6/12',
  '7/12',
  '8/12',
  '9/12',
  '10/12',
  '11/12',
  '12/12',
  'auto',
  'full',
  'screen',
  'min',
  'max',
  'fit',
] as const;
export type Width = (typeof WidthValues)[number];

export const BreakpointValues = Object.keys(BreakPoint);

export const VerticalDirectionValues = ['top', 'bottom'] as const;
export type VerticalDirection = (typeof VerticalDirectionValues)[number];

export const HorizontalDirectionValues = ['left', 'right'] as const;
export type HorizontalDirection = (typeof HorizontalDirectionValues)[number];
