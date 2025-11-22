export const SpacingValues = [0, 2, 4, 8, 10, 12, 16, 20, 24, 32, 48, 64, 80, 96, 144, 192] as const;

type NumericSpacing = (typeof SpacingValues)[number];
type StringSpacing = `${NumericSpacing}`;

export type Spacing = NumericSpacing | StringSpacing;

export type SpacingWithDirections =
  | Spacing
  | `${Spacing} ${string | number}`
  | `${Spacing} ${string | number} ${string | number}`
  | `${Spacing} ${string | number} ${string | number} ${string | number}`;
