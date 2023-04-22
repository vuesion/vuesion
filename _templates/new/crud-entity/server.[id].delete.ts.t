---
to: "src/server/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/[id].delete.ts"
unless_exists: true
---
import { usePrisma } from '@sidebase/nuxt-prisma';
<% if(auth === true) { -%>
import { getServerSession } from '#auth';
import { checkUserSession, checkUserAuthorization } from '~/utils/accessControl';
<% } %>
export default eventHandler(async (event) => {
<% if(auth === true) { -%>
  const session = await getServerSession(event);

  checkUserSession(session);

<% } -%>
  const <%= h.inflection.camelize(name, true) %>Id = event.context.params?.id;
  const prisma = await usePrisma(event);
  <% if(auth === true) { -%>
const current<%= h.inflection.camelize(name) %> = await prisma.<%= h.inflection.camelize(name, true) %>.findFirst({ where: { id: <%= h.inflection.camelize(name, true) %>Id } });

  checkUserAuthorization(session?.user?.id, current<%= h.inflection.camelize(name) %>?.ownerId);
  <% } %>
  return prisma.<%= h.inflection.camelize(name, true) %>.delete({ where: { id: <%= h.inflection.camelize(name, true) %>Id } });
});
