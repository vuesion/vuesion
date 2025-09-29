---
to: "src/server/services/use-<%= h.inflection.dasherize(h.inflection.underscore(name, true)) %>-service.ts"
unless_exists: true
---
import type { Prisma, PrismaClient } from '@prisma/client';
import { getPrisma } from '~/server/services/use-prisma';
import type {
  I<%= h.inflection.camelize(name) %>ListView,
  I<%= h.inflection.camelize(name) %>DetailView,
  I<%= h.inflection.camelize(name) %>Create,
  I<%= h.inflection.camelize(name) %>Update,
} from '#shared/interfaces/domain/I<%= h.inflection.camelize(name) %>';
// import { I<%= h.inflection.camelize(name) %>ListViewArgs, I<%= h.inflection.camelize(name) %>DetailViewArgs } from '#shared/interfaces/domain/I<%= h.inflection.camelize(name) %>';
import { getPaginationFromQuery } from '~/server/utils/get-pagination-from-query';
import { cleanUndefined } from '~/server/utils/object-clean';
import { buildSearchWhere } from '~/server/utils/build-search-where';
import { buildOrderBy } from '~/server/utils/build-order-by';
import type { IListQuery } from '#shared/interfaces/api/IListQuery';
import type { IPaginatedResponse } from '#shared/interfaces/api/IPaginatedResponse';

export const use<%= h.inflection.camelize(name) %>Service = (prisma: PrismaClient = getPrisma()) => {
  // const listInclude = I<%= h.inflection.camelize(name) %>ListViewArgs.include;
  // const listSelect = I<%= h.inflection.camelize(name) %>ListViewArgs.select;
  // const detailInclude = I<%= h.inflection.camelize(name) %>DetailViewArgs.select;
  // const detailSelect = I<%= h.inflection.camelize(name) %>DetailViewArgs.select;

  const get<%= h.inflection.camelize(h.inflection.pluralize(name)) %> = async (query: IListQuery): Promise<IPaginatedResponse<I<%= h.inflection.camelize(name) %>ListView>> => {
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
        // include: listInclude,
        // select: listSelect,
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
  const get<%= h.inflection.camelize(name) %>Details = (id: string): Promise<I<%= h.inflection.camelize(name) %>DetailView | null> => {
    return prisma.<%= h.inflection.camelize(name, true) %>.findFirst({
      where: { id },
      // include: detailInclude,
      // select: detailSelect,
    });
  };
  const create<%= h.inflection.camelize(name) %> = (data: I<%= h.inflection.camelize(name) %>Create): Promise<I<%= h.inflection.camelize(name) %>DetailView> => {
    data = cleanUndefined(data);

    return prisma.<%= h.inflection.camelize(name, true) %>.create({
      data,
      // include: detailInclude,
      // select: detailSelect,
    });
  };
  const update<%= h.inflection.camelize(name) %> = (id: string, data: I<%= h.inflection.camelize(name) %>Update): Promise<I<%= h.inflection.camelize(name) %>DetailView> => {
    data = cleanUndefined(data);

    return prisma.<%= h.inflection.camelize(name, true) %>.update({
      data,
      where: { id },
      // include: detailInclude,
      // select: detailSelect,
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
