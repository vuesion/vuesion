---
to: "src/server/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/index.get.ts"
unless_exists: true
---
import { usePrisma } from '@sidebase/nuxt-prisma';
<% if(auth === true) { -%>
import { getServerSession } from '#auth';
import { checkUserSession } from '~/utils/accessControl';
<% } -%>
import { <%= h.inflection.camelize(name) %>Include } from '~/interfaces/I<%= h.inflection.camelize(name) %>';

export default eventHandler(async (event) => {
<% if(auth === true) { -%>
  const session = await getServerSession(event);

  checkUserSession(session);

<% } -%>
  const prisma = await usePrisma(event);

  return prisma.<%= h.inflection.camelize(name, true) %>.findMany({
    include: {
      ...<%= h.inflection.camelize(name) %>Include,
    },
    where: { ownerId: session?.user?.id || '' },
  });
});
