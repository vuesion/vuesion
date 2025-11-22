export const TextStyleValues = [
  'hero',
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
  /*new*/
  'description-md',
] as const;
export type TextStyle = (typeof TextStyleValues)[number];

export const FontWeightValues = ['regular', 'semi-bold', 'black'] as const;
export type FontWeight = (typeof FontWeightValues)[number];

export const AlignmentValues = ['start', 'center', 'end', 'inherit', 'initial', 'justify'] as const;
export type Alignment = (typeof AlignmentValues)[number];
