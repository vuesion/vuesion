---
to: "src/interfaces/I<%= h.inflection.camelize(name) %>.ts"
unless_exists: true
---
import { Prisma } from '.prisma/client';

export const <%= h.inflection.camelize(name) %>Include: Prisma.<%= h.inflection.camelize(name) %>Include = {
  owner: true,
};
export interface I<%= h.inflection.camelize(name) %>
  extends Prisma.<%= h.inflection.camelize(name) %>GetPayload<{
    include: typeof <%= h.inflection.camelize(name) %>Include;
  }> {}
export interface I<%= h.inflection.camelize(name) %>Create extends Prisma.<%= h.inflection.camelize(name) %>UncheckedCreateInput {}
export interface I<%= h.inflection.camelize(name) %>Update extends Prisma.<%= h.inflection.camelize(name) %>UncheckedUpdateInput {}
