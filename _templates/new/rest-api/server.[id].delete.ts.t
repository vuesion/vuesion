---
to: "server/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/[id]/index.delete.ts"
unless_exists: true
---
import { defineEventHandler } from 'h3';
import { prisma } from '~/server/services/use-prisma';
import { MissingIdError, NotFoundError<% if(auth === true) { -%>,  NotAuthorizedError<% } %>} from "~/server/utils/errors";
<% if(auth === true) { -%>
import { getServerSession } from '#auth';
// import { mustBeRelatedToEntity } from '~/server/utils/accessControl';
<% } %>import { use<%= h.inflection.camelize(name) %>Service } from '~/server/services/use-<%= h.inflection.dasherize(h.inflection.underscore(name, true)) %>-service';

export default defineEventHandler(async (event) => {
<% if(auth === true) { -%>
  const session = await getServerSession(event);

  if (!session || !session.user || !session.user.id) {
    throw NotAuthorizedError;
  }

<% } -%>
  const <%= h.inflection.camelize(name, true) %>Id = event.context.params?.id;

  if (!<%= h.inflection.camelize(name, true) %>Id) {
    throw MissingIdError;
  }


  const { get<%= h.inflection.camelize(name) %>, delete<%= h.inflection.camelize(name) %> } = use<%= h.inflection.camelize(name) %>Service(prisma);
  const current<%= h.inflection.camelize(name) %> = await get<%= h.inflection.camelize(name) %>(<%= h.inflection.camelize(name, true) %>Id);

  if(!current<%= h.inflection.camelize(name) %>){
    throw NotFoundError;
  }

  // mustBeRelatedToEntity(session?.user?.id, current<%= h.inflection.camelize(name) %>?.accountId);

  return delete<%= h.inflection.camelize(name) %>(current<%= h.inflection.camelize(name) %>.id);
});
