import * as Errors from '../../../src/server/utils/errors';

export const API_ROOT = 'src/server/api';
export const OUT_FILE = 'src/public/swagger/openapi.json';
export const KNOWN_ERROR_STATUS: Record<string, { statusCode: number; statusMessage: string }> = Object.fromEntries(
  Object.entries(Errors).map(([key, err]) => [
    key,
    { statusCode: (err as any).statusCode, statusMessage: (err as any).statusMessage },
  ]),
);
