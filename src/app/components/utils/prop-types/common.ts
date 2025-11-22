export const ShirtSizeValues = ['sm', 'md', 'lg'] as const;
export type ShirtSize = (typeof ShirtSizeValues)[number];
