---
to: "src/server/services/use-<%= h.inflection.dasherize(h.inflection.underscore(name, true)) %>-service.ts"
unless_exists: true
---
import type { Prisma, PrismaClient } from "@prisma/client";
import type { I<%= h.inflection.camelize(name) %>, I<%= h.inflection.camelize(name) %>Create, I<%= h.inflection.camelize(name) %>Update } from '#shared/interfaces/I<%= h.inflection.camelize(name) %>';
import type { IPaginationQueryParameters } from '#shared/interfaces/IPaginationQueryParameters';
import type { IPaginatedResponse } from '#shared/interfaces/IPaginatedResponse';
import { <%= h.inflection.camelize(name) %>Args } from '#shared/interfaces/I<%= h.inflection.camelize(name) %>';
import { getPaginationFromQuery } from '~/server/utils/get-pagination-from-query';

export const use<%= h.inflection.camelize(name) %>Service = (prisma: PrismaClient) => {
  const get<%= h.inflection.pluralize(h.inflection.camelize(name)) %> = async (query: IPaginationQueryParameters): Promise<IPaginatedResponse<I<%= h.inflection.camelize(name) %>>> => {
    const { take, skip, selectedPage, itemsPerPage } = getPaginationFromQuery(query);
    const whereCondition: Prisma.<%= h.inflection.camelize(name) %>WhereInput = {};
    const [records, totalRecords] = await Promise.all([
      prisma.<%= h.inflection.camelize(name, true) %>.findMany({
        where: whereCondition,
        include: {
          ...<%= h.inflection.camelize(name) %>Args.include,
        },
        orderBy: {
          createdAt: 'desc',
        },
        take,
        skip,
      }),
      prisma.<%= h.inflection.camelize(name, true) %>.count({
        where: whereCondition,
      }),
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
      include: {
        ...<%= h.inflection.camelize(name) %>Args.include,
      },
    });
  };
  const create<%= h.inflection.camelize(name) %> = (data: I<%= h.inflection.camelize(name) %>Create) => {
    return prisma.<%= h.inflection.camelize(name, true) %>.create({
      data,
      include: {
        ...<%= h.inflection.camelize(name) %>Args.include,
      },
    });
  };
  const update<%= h.inflection.camelize(name) %> = (id: string, data: I<%= h.inflection.camelize(name) %>Update) => {
    return prisma.<%= h.inflection.camelize(name, true) %>.update({
      data,
      where: { id },
      include: {
        ...<%= h.inflection.camelize(name) %>Args.include,
      },
    });
  };
  const delete<%= h.inflection.camelize(name) %> = (id: string) => {
    return prisma.<%= h.inflection.camelize(name, true) %>.delete({
      where: { id },
      include: {
        ...<%= h.inflection.camelize(name) %>Args.include,
      },
    });
  };

  return {
    get<%= h.inflection.pluralize(h.inflection.camelize(name)) %>,
    get<%= h.inflection.camelize(name) %>Details,
    create<%= h.inflection.camelize(name) %>,
    update<%= h.inflection.camelize(name) %>,
    delete<%= h.inflection.camelize(name) %>,
  };
};
