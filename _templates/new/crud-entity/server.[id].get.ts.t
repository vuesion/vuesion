---
to: "src/server/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/[id].get.ts"
unless_exists: true
---
import { defineEventHandler } from 'h3';
import { PrismaClient } from '@prisma/client';
import { <%= h.inflection.camelize(name) %>Include } from '~/interfaces/I<%= h.inflection.camelize(name) %>';

export default defineEventHandler((event) => {
  const <%= h.inflection.camelize(name, true) %>Id = event.context.params?.id;
  const prisma = new PrismaClient();

  return prisma.<%= h.inflection.camelize(name, true) %>.findFirst({
    include: {
      ...<%= h.inflection.camelize(name) %>Include,
    },
    where: { id: <%= h.inflection.camelize(name, true) %>Id },
  });
});
