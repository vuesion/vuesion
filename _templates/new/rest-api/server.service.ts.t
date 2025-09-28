---
to: "src/server/services/use-<%= h.inflection.dasherize(h.inflection.underscore(name, true)) %>-service.ts"
unless_exists: true
---
import type { Prisma, PrismaClient } from '@prisma/client';
import { getPrisma } from '~/server/services/use-prisma';
import type {
  I<%= h.inflection.camelize(name) %>,
  I<%= h.inflection.camelize(name) %>Create,
  I<%= h.inflection.camelize(name) %>Update,
} from '#shared/interfaces/domain/I<%= h.inflection.camelize(name) %>';
// import { <%= h.inflection.camelize(name) %>Args } from '#shared/interfaces/domain/I<%= h.inflection.camelize(name) %>';
import { getPaginationFromQuery } from '~/server/utils/get-pagination-from-query';
import { cleanUndefined } from '~/server/utils/object-clean';
import { buildSearchWhere } from '~/server/utils/build-search-where';
import { buildOrderBy } from '~/server/utils/build-order-by';
import type { IListQuery } from '#shared/interfaces/api/IListQuery';
import type { IPaginatedResponse } from '#shared/interfaces/api/IPaginatedResponse';

export const use<%= h.inflection.camelize(name) %>Service = (prisma: PrismaClient = getPrisma()) => {
  // const include = <%= h.inflection.camelize(name) %>Args.include;

  const get<%= h.inflection.camelize(h.inflection.pluralize(name)) %> = async (query: IListQuery): Promise<IPaginatedResponse<I<%= h.inflection.camelize(name) %>>> => {
    const where = buildSearchWhere<Prisma.<%= h.inflection.camelize(name) %>WhereInput>(query as Partial<IListQuery>, ['name']);
    const orderBy = buildOrderBy<Prisma.<%= h.inflection.camelize(name) %>OrderByWithRelationInput>(query as Partial<IListQuery>, {
      defaultField: 'createdAt',
      defaultDirection: 'desc',
      allowedFields: ['createdAt', 'updatedAt', 'name'],
    });
    const { take, skip, selectedPage, itemsPerPage } = getPaginationFromQuery(query);
    const [records, totalRecords] = await Promise.all([
      prisma.<%= h.inflection.camelize(name, true) %>.findMany({
        where,
        // include,
        orderBy,
        take,
        skip,
      }),
      prisma.<%= h.inflection.camelize(name, true) %>.count({ where }),
    ]);

    return {
      records,
      selectedPage,
      itemsPerPage,
      totalRecords,
    };
  };
  const get<%= h.inflection.camelize(name) %>Details = (id: string) => {
    return prisma.<%= h.inflection.camelize(name, true) %>.findFirst({
      where: { id },
      // include,
    });
  };
  const create<%= h.inflection.camelize(name) %> = (data: I<%= h.inflection.camelize(name) %>Create) => {
    data = cleanUndefined(data);

    return prisma.<%= h.inflection.camelize(name, true) %>.create({
      data,
      // include,
    });
  };
  const update<%= h.inflection.camelize(name) %> = (id: string, data: I<%= h.inflection.camelize(name) %>Update) => {
    data = cleanUndefined(data);

    return prisma.<%= h.inflection.camelize(name, true) %>.update({
      data,
      where: { id },
      // include,
    });
  };
  const delete<%= h.inflection.camelize(name) %> = (id: string) => {
    return prisma.<%= h.inflection.camelize(name, true) %>.delete({ where: { id } });
  };

  return {
    get<%= h.inflection.camelize(h.inflection.pluralize(name)) %>,
    get<%= h.inflection.camelize(name) %>Details,
    create<%= h.inflection.camelize(name) %>,
    update<%= h.inflection.camelize(name) %>,
    delete<%= h.inflection.camelize(name) %>,
  };
};
