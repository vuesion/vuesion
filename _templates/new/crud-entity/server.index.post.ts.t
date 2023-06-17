---
to: "src/server/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/index.post.ts"
unless_exists: true
---
import { usePrisma } from '@sidebase/nuxt-prisma';
<% if(auth === true) { -%>
import { getServerSession } from '#auth';
<% } -%>
import { <%= h.inflection.camelize(name) %>Include, I<%= h.inflection.camelize(name) %>Create } from '~/interfaces/I<%= h.inflection.camelize(name) %>';
<% if(auth === true) { -%>
import { checkUserSession } from '~/server/utils/accessControl';
<% } -%>

export default eventHandler(async (event) => {
<% if(auth === true) { -%>
  const session = await getServerSession(event);

  checkUserSession(session);

<% } -%>
  const prisma = await usePrisma(event);
  const <%= h.inflection.camelize(name, true) %>Data = await readBody<I<%= h.inflection.camelize(name) %>Create>(event);

  <%= h.inflection.camelize(name, true) %>Data.ownerId = session?.user?.id || '';

  return prisma.<%= h.inflection.camelize(name, true) %>.create({
    include: {
      ...<%= h.inflection.camelize(name) %>Include,
    },
    data: fooData,
  });
});
