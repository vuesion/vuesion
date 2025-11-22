export const TextStyleValues = [
  'hero',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'description-lg',
  'description-md',
  'description-sm',
  'title-lg',
  'title-md',
  'title-sm',
  'default',
  'label',
  'button-lg',
  'button-md',
  'button-sm',
  'support-lg',
  'support-md',
  'support-sm',
] as const;
export type TextStyle = (typeof TextStyleValues)[number];

export const FontWeightValues = ['regular', 'semi-bold', 'bold', 'extra-bold'] as const;
export type FontWeight = (typeof FontWeightValues)[number];

export const AlignmentValues = ['start', 'center', 'end', 'inherit', 'initial', 'justify'] as const;
export type Alignment = (typeof AlignmentValues)[number];
