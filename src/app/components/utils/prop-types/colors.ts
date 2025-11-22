export const TextColorValues = [
  'high',
  'medium',
  'low',
  'dark',
  'inverse-high',
  'inverse-medium',
  'inverse-low',
  'light',
  'primary',
  'success',
  'info',
  'warning',
  'danger',
  'link',
] as const;
export type TextColor = (typeof TextColorValues)[number];

export const SurfaceColorValues = ['high', 'medium', 'low', 'inverse-high', 'inverse-medium', 'inverse-low'] as const;
export type SurfaceColor = (typeof SurfaceColorValues)[number];
