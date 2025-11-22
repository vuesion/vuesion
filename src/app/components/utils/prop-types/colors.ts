export const TextColorValues = [
  'info',
  'danger',
  'warning',
  'success',
  'link',
  'high',
  'medium',
  'low',
  'inverse-high',
  'inverse-medium',
  'inverse-low',
  'light',
  'dark',
] as const;
export type TextColor = (typeof TextColorValues)[number];

export const SurfaceColorValues = ['high', 'medium', 'low', 'inverse-high', 'inverse-medium', 'inverse-low'] as const;
export type SurfaceColor = (typeof SurfaceColorValues)[number];
