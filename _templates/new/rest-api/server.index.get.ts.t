---
to: "src/server/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/index.get.ts"
unless_exists: true
---
import { defineEventHandler } from 'h3';
import { prisma } from '~/server/services/use-prisma';
<% if(auth === true) { -%>
import { getServerSession } from '#auth';
import { NotAuthorizedError } from "~/server/utils/errors";
<% } -%>
import { use<%= h.inflection.camelize(name) %>Service } from '~/server/services/use-<%= h.inflection.dasherize(h.inflection.underscore(name, true)) %>-service';

export default defineEventHandler(<% if(auth === true) { -%>async <% } -%>(<% if(auth === true) { -%>event<% } -%>) => {
<% if(auth === true) { -%>
  const session = await getServerSession(event);

  if (!session || !session.user || !session.user.id) {
    throw NotAuthorizedError;
  }

<% } -%>
  const { get<%= h.inflection.camelize(name) %>s } = use<%= h.inflection.camelize(name) %>Service(prisma);

  return get<%= h.inflection.camelize(name) %>s();
});
