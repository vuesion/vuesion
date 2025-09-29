---
to: "src/shared/interfaces/domain/I<%= h.inflection.camelize(name) %>.ts"
unless_exists: true
---
import { Prisma } from '@prisma/client';

export const <%= h.inflection.camelize(name) %>ListViewArgs = Prisma.validator<Prisma.<%= h.inflection.camelize(name) %>DefaultArgs>()({
  // include: {},
  // select: {},
});
export const <%= h.inflection.camelize(name) %>DetailViewArgs = Prisma.validator<Prisma.<%= h.inflection.camelize(name) %>DefaultArgs>()({
  // include: {},
  // select: {},
});
export type I<%= h.inflection.camelize(name) %>ListView = Prisma.<%= h.inflection.camelize(name) %>GetPayload<typeof <%= h.inflection.camelize(name) %>ListViewArgs>;
export type I<%= h.inflection.camelize(name) %>DetailView = Prisma.<%= h.inflection.camelize(name) %>GetPayload<typeof <%= h.inflection.camelize(name) %>DetailViewArgs>;
export interface I<%= h.inflection.camelize(name) %>Create extends Prisma.<%= h.inflection.camelize(name) %>UncheckedCreateInput {}
export interface I<%= h.inflection.camelize(name) %>Update extends Prisma.<%= h.inflection.camelize(name) %>UncheckedUpdateInput {}
