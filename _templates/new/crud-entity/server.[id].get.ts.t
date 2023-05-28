---
to: "src/server/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/[id].get.ts"
unless_exists: true
---
import { usePrisma } from '@sidebase/nuxt-prisma';
import { <%= h.inflection.camelize(name) %>Include } from '~/interfaces/I<%= h.inflection.camelize(name) %>';

export default eventHandler(async (event) => {
  const <%= h.inflection.camelize(name, true) %>Id = event.context.params?.id;
  const prisma = await usePrisma(event);

  return prisma.<%= h.inflection.camelize(name, true) %>.findFirst({
    include: {
      ...<%= h.inflection.camelize(name) %>Include,
    },
    where: { id: fooId },
  });
});
