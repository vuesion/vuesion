import { BreakPoint } from '~/enums/BreakPoint';

export const ButtonStyleValues = ['primary', 'secondary', 'outline', 'ghost', 'danger'] as const;

export type ButtonStyle = (typeof ButtonStyleValues)[number];

export const TextStyleValues = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'description',
  'large-description',
  'large-title',
  'medium-title',
  'small-title',
  'default',
  'label',
  'button',
  'support',
] as const;

export type TextStyle = (typeof TextStyleValues)[number];

export const TextColorValues = [
  'info',
  'danger',
  'warning',
  'success',
  'link',
  'text-high',
  'text-medium',
  'text-low',
  'text-inverse-high',
  'text-inverse-medium',
  'text-inverse-low',
] as const;

export type TextColor = (typeof TextColorValues)[number];

export const FontWeightValues = ['regular', 'semi-bold', 'black'] as const;

export type FontWeight = (typeof FontWeightValues)[number];

export const AlignmentValues = ['start', 'center', 'end', 'inherit', 'initial'] as const;

export type Alignment = (typeof AlignmentValues)[number];

export const HorizontalAlignmentValues = ['start', 'end', 'center', 'between', 'around', 'evenly'] as const;

export type HorizontalAlignment = (typeof HorizontalAlignmentValues)[number];

export const VerticalAlignmentValues = ['start', 'end', 'center', 'baseline', 'stretch'] as const;

export type VerticalAlignment = (typeof VerticalAlignmentValues)[number];

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

export type Spacing = (typeof SpacingValues)[number];

export type SpacingWithDirections =
  | Spacing
  | `${Spacing} ${Spacing}`
  | `${Spacing} ${Spacing} ${Spacing}`
  | `${Spacing} ${Spacing} ${Spacing} ${Spacing}`;

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

export const ShirtSizeValues = ['sm', 'md', 'lg'] as const;

export type ShirtSize = (typeof ShirtSizeValues)[number];

export const BadgeStatusValues = ['info', 'warning', 'success', 'danger', 'neutral'];

export type BadgeStatus = (typeof BadgeStatusValues)[number];

export const VerticalDirectionValues = ['top', 'bottom'];

export type VerticalDirection = (typeof VerticalDirectionValues)[number];

export const HorizontalDirectionValues = ['left', 'right'];

export type HorizontalDirection = (typeof HorizontalDirectionValues)[number];
