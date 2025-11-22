export const ButtonStyleValues = ['primary', 'secondary', 'outline', 'ghost', 'danger'] as const;
export type ButtonStyle = (typeof ButtonStyleValues)[number];

export const BadgeStatusValues = ['info', 'warning', 'success', 'danger', 'neutral'] as const;
export type BadgeStatus = (typeof BadgeStatusValues)[number];
