---
to: "src/server/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/index.post.ts"
unless_exists: true
---
import { defineEventHandler, setResponseStatus, readBody } from 'h3';
<% if(auth === true) { -%>
import { getAuthorizedServerSession } from '~/server/utils/get-authorized-server-session';
<% } -%>import { use<%= h.inflection.camelize(name) %>Service } from '~/server/services/use-<%= h.inflection.dasherize(h.inflection.underscore(name, true)) %>-service';
import type { I<%= h.inflection.camelize(name) %>Create, I<%= h.inflection.camelize(name) %>DetailView } from '#shared/interfaces/domain/I<%= h.inflection.camelize(name) %>';

export default defineEventHandler(async (event): Promise<I<%= h.inflection.camelize(name) %>DetailView> => {
<% if(auth === true) { -%>
  const session = await getAuthorizedServerSession(event);
<% } -%>
  const data = await readBody<I<%= h.inflection.camelize(name) %>Create>(event);
  const { create<%= h.inflection.camelize(name) %> } = use<%= h.inflection.camelize(name) %>Service();


  setResponseStatus(event, 201);

  return create<%= h.inflection.camelize(name) %>(data);
});
