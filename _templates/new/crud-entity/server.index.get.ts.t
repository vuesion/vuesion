---
to: "src/server/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/index.get.ts"
unless_exists: true
---
import { usePrisma } from '@sidebase/nuxt-prisma';
import { getServerSession } from '#auth';
import { checkUserSession } from '~/utils/accessControl';

export default eventHandler(async (event) => {
  const session = await getServerSession(event);
  <% if(auth === true) { -%>

  checkUserSession(session);

<% } -%>
  const prisma = await usePrisma(event);

  return prisma.<%= h.inflection.camelize(name, true) %>.findMany({ where: { ownerId: session?.user?.id || '' } });
});
