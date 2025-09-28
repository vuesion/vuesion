import type { PrismaClient as PrismaClientType } from '@prisma/client';

let prisma: PrismaClientType | null = null;

declare global {
  // eslint-disable-next-line no-var
  var __PRISMA__: PrismaClientType | undefined;
}

export function getPrisma(): PrismaClientType {
  if (prisma) return prisma;

  if (globalThis.__PRISMA__) {
    prisma = globalThis.__PRISMA__;
    return prisma;
  }

  // eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/consistent-type-imports
  const { PrismaClient } = require('@prisma/client') as typeof import('@prisma/client');

  prisma = new PrismaClient({ log: ['error'] });

  if (process.env.NODE_ENV !== 'production') {
    globalThis.__PRISMA__ = prisma;
  }

  return prisma;
}
