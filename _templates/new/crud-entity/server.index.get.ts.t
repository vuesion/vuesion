---
to: "src/server/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/index.get.ts"
unless_exists: true
---
import { defineEventHandler } from 'h3';
import { PrismaClient } from '@prisma/client';
<% if(auth === true) { -%>
import { getServerSession } from '#auth';
import { checkUserSession } from '~/server/utils/accessControl';
<% } -%>
import { <%= h.inflection.camelize(name) %>Include } from '~/interfaces/I<%= h.inflection.camelize(name) %>';

export default defineEventHandler(async (event) => {
<% if(auth === true) { -%>
  const session = await getServerSession(event);

  checkUserSession(session);

<% } -%>
  const prisma = new PrismaClient();

  return prisma.<%= h.inflection.camelize(name, true) %>.findMany({
    include: {
      ...<%= h.inflection.camelize(name) %>Include,
    },
    where: { ownerId: session?.user?.id || '' },
  });
});
