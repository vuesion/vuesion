export const SpacingValues = [
  0, 2, 4, 8, 10, 12, 16, 20, 24, 32, 40, 48, 52, 56, 64, 72, 80, 84, 96, 120, 128, 144, 192,
] as const;

type NumericSpacing = (typeof SpacingValues)[number];
type StringSpacing = `${NumericSpacing}`;

export type Spacing = StringSpacing;

export type SpacingWithDirections =
  | Spacing
  | `${Spacing} ${string}`
  | `${Spacing} ${string} ${string}`
  | `${Spacing} ${string} ${string} ${string}`;
