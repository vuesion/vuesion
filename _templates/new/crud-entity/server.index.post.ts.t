---
to: "src/server/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/index.post.ts"
unless_exists: true
---
import { usePrisma } from '@sidebase/nuxt-prisma';
import { getServerSession } from '#auth';
import { I<%= h.inflection.camelize(name) %> } from '~/interfaces/I<%= h.inflection.camelize(name) %>';
import { checkUserSession } from '~/utils/accessControl';

export default eventHandler(async (event) => {
  const session = await getServerSession(event);
  <% if(auth === true) { -%>

  checkUserSession(session);

<% } -%>
  const prisma = await usePrisma(event);
  const <%= h.inflection.camelize(name, true) %>Data = await readBody<I<%= h.inflection.camelize(name) %>>(event);

  <%= h.inflection.camelize(name, true) %>Data.ownerId = session?.user?.id || '';

  return prisma.<%= h.inflection.camelize(name, true) %>.create({ data: <%= h.inflection.camelize(name, true) %>Data });
});