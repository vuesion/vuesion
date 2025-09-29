---
to: "src/server/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/[id]/index.put.ts"
unless_exists: true
---
import { defineEventHandler, readBody } from 'h3';
import { MissingIdError, NotFoundError } from "~/server/utils/errors";
<% if(auth === true) { -%>
import { getAuthorizedServerSession } from '~/server/utils/get-authorized-server-session';
// import { mustBeRelatedToEntity } from '~/server/utils/access-control';
<% } %>import { use<%= h.inflection.camelize(name) %>Service } from '~/server/services/use-<%= h.inflection.dasherize(h.inflection.underscore(name, true)) %>-service';
import type { I<%= h.inflection.camelize(name) %>Update, I<%= h.inflection.camelize(name) %>DetailView } from '#shared/interfaces/domain/I<%= h.inflection.camelize(name) %>';

export default defineEventHandler(async (event): Promise<I<%= h.inflection.camelize(name) %>DetailView> => {
<% if(auth === true) { -%>
  const session = await getAuthorizedServerSession(event);
<% } -%>
  const <%= h.inflection.camelize(name, true) %>Id = event.context.params?.id;
  const data = await readBody<I<%= h.inflection.camelize(name) %>Update>(event);

  if (!<%= h.inflection.camelize(name, true) %>Id) {
    throw MissingIdError;
  }

  const { get<%= h.inflection.camelize(name) %>Details, update<%= h.inflection.camelize(name) %> } = use<%= h.inflection.camelize(name) %>Service();
  const current<%= h.inflection.camelize(name) %> = await get<%= h.inflection.camelize(name) %>Details(<%= h.inflection.camelize(name, true) %>Id);

  if(!current<%= h.inflection.camelize(name) %>){
    throw NotFoundError;
  }

  // mustBeRelatedToEntity(session.user.id, current<%= h.inflection.camelize(name) %>.accountId);

  return update<%= h.inflection.camelize(name) %>(current<%= h.inflection.camelize(name) %>.id, data);
});
