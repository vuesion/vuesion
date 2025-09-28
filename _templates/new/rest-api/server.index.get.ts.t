---
to: "src/server/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/index.get.ts"
unless_exists: true
---
import { defineEventHandler, getQuery } from 'h3';
<% if(auth === true) { -%>
import { getAuthorizedServerSession } from '~/server/utils/get-authorized-server-session';
<% } -%>
import { use<%= h.inflection.camelize(name) %>Service } from '~/server/services/use-<%= h.inflection.dasherize(h.inflection.underscore(name, true)) %>-service';
import type { IPaginatedResponse } from '#shared/interfaces/api/IPaginatedResponse';
import type { IListQuery } from '#shared/interfaces/api/IListQuery';
import type { I<%= h.inflection.camelize(name) %> } from '#shared/interfaces/domain/I<%= h.inflection.camelize(name) %>';

export default defineEventHandler(async (event): Promise<IPaginatedResponse<I<%= h.inflection.camelize(name) %>>> => {
<% if(auth === true) { -%>
  const session = await getAuthorizedServerSession(event);
<% } -%>
  const { get<%= h.inflection.camelize(h.inflection.pluralize(name)) %> } = use<%= h.inflection.camelize(name) %>Service();
  const query = getQuery<IListQuery>(event);
  const { records, selectedPage, itemsPerPage, totalRecords } = await get<%= h.inflection.camelize(h.inflection.pluralize(name)) %>(query);

  return {
    records,
    selectedPage,
    itemsPerPage,
    totalRecords,
  };
});
