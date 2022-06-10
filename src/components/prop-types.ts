import { BreakPoint } from '~/enums/BreakPoint';

export const TextStyleValues = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'description',
  'large-title',
  'medium-title',
  'small-title',
  'default',
  'label',
  'button',
  'support',
] as const;

export type TextStyle = typeof TextStyleValues[number];

export const TextColorValues = [
  'info',
  'danger',
  'warning',
  'success',
  'text-high',
  'text-medium',
  'text-low',
  'text-inverse-high',
  'text-inverse-medium',
  'text-inverse-low',
] as const;

export type TextColor = typeof TextColorValues[number];

export const FontWeightValues = ['regular', 'semi-bold'] as const;

export type FontWeight = typeof FontWeightValues[number];

export const AlignmentValues = ['start', 'center', 'end', 'inherit', 'initial'] as const;

export type Alignment = typeof AlignmentValues[number];

export const HorizontalAlignmentValues = ['start', 'end', 'center', 'between', 'around', 'evenly'] as const;

export type HorizontalAlignment = typeof HorizontalAlignmentValues[number];

export const VerticalAlignmentValues = ['start', 'end', 'center', 'baseline', 'stretch'] as const;

export type VerticalAlignment = typeof VerticalAlignmentValues[number];

export const SpacingValues = [
  '0',
  '2',
  '4',
  '8',
  '10',
  '12',
  '16',
  '20',
  '24',
  '32',
  '48',
  '64',
  '80',
  '96',
  '144',
  '192',
] as const;

export type Spacing = typeof SpacingValues[number];

export type SpacingWithDirections =
  | Spacing
  | `${Spacing} ${Spacing}`
  | `${Spacing} ${Spacing} ${Spacing}`
  | `${Spacing} ${Spacing} ${Spacing} ${Spacing}`;

export const BreakpointValues = Object.keys(BreakPoint);
