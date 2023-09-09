---
to: "src/server/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/index.post.ts"
unless_exists: true
---
import { defineEventHandler } from 'h3';
import { PrismaClient } from '@prisma/client';
<% if(auth === true) { -%>
import { getServerSession } from '#auth';
<% } -%>
import { <%= h.inflection.camelize(name) %>Include, I<%= h.inflection.camelize(name) %>Create } from '~/interfaces/I<%= h.inflection.camelize(name) %>';
<% if(auth === true) { -%>
import { checkUserSession } from '~/server/utils/accessControl';
<% } -%>

export default defineEventHandler(async (event) => {
<% if(auth === true) { -%>
  const session = await getServerSession(event);

  checkUserSession(session);

<% } -%>
  const prisma = new PrismaClient();
  const <%= h.inflection.camelize(name, true) %>Data = await readBody<I<%= h.inflection.camelize(name) %>Create>(event);

  <%= h.inflection.camelize(name, true) %>Data.ownerId = session?.user?.id || '';

  return prisma.<%= h.inflection.camelize(name, true) %>.create({
    include: {
      ...<%= h.inflection.camelize(name) %>Include,
    },
    data: <%= h.inflection.camelize(name, true) %>Data,
  });
});
