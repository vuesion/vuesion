import { createRequire } from 'node:module';
import type { PrismaClient as PrismaClientType } from '@prisma/client';

let prisma: PrismaClientType | null = null;

declare global {
  var __PRISMA__: PrismaClientType | undefined;
}

/**
 * Returns a singleton PrismaClient instance (lazy).
 * Works in ESM (Nuxt/Nitro) and CJS by using createRequire.
 */
export function getPrisma(): PrismaClientType {
  if (prisma) return prisma;

  if (globalThis.__PRISMA__) {
    prisma = globalThis.__PRISMA__;
    return prisma;
  }

  const _require = createRequire(import.meta.url);
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  const { PrismaClient } = _require('@prisma/client') as typeof import('@prisma/client');

  prisma = new PrismaClient({ log: ['error'] });

  if (process.env.NODE_ENV !== 'production') {
    globalThis.__PRISMA__ = prisma;
  }

  return prisma;
}
