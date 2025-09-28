---
to: "src/server/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/index.post.ts"
unless_exists: true
---
import { defineEventHandler, setResponseStatus } from 'h3';
import { prisma } from '~/server/services/use-prisma';
import { use<%= h.inflection.camelize(name) %>Service } from '~/server/services/use-<%= h.inflection.dasherize(h.inflection.underscore(name, true)) %>-service';
<% if(auth === true) { -%>
import { getAuthorizedServerSession } from '~/server/utils/get-authorized-server-session';
<% } -%>
import type { I<%= h.inflection.camelize(name) %>Create } from '#shared/interfaces/I<%= h.inflection.camelize(name) %>';

export default defineEventHandler(async (event) => {
<% if(auth === true) { -%>
  const session = await getAuthorizedServerSession(event);
<% } -%>
  const data = await readBody<I<%= h.inflection.camelize(name) %>Create>(event);
  const { create<%= h.inflection.camelize(name) %> } = use<%= h.inflection.camelize(name) %>Service(prisma);


  setResponseStatus(event, 201);

  return create<%= h.inflection.camelize(name) %>(data);
});
