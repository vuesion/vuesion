---
to: "server/services/use-<%= h.inflection.dasherize(h.inflection.underscore(name, true)) %>-service.ts"
unless_exists: true
---
import type { PrismaClient } from "@prisma/client";
import type { I<%= h.inflection.camelize(name) %>Create, I<%= h.inflection.camelize(name) %>Update } from '~/interfaces/I<%= h.inflection.camelize(name) %>';
import { <%= h.inflection.camelize(name) %>Args } from '~/interfaces/I<%= h.inflection.camelize(name) %>';

export const use<%= h.inflection.camelize(name) %>Service = (prisma: PrismaClient) => {
  const get<%= h.inflection.pluralize(h.inflection.camelize(name)) %> = () => {
    return prisma.<%= h.inflection.camelize(name, true) %>.findMany({
      include: {
        ...<%= h.inflection.camelize(name) %>Args.include,
      },
    });
  };
  const get<%= h.inflection.camelize(name) %> = (id: string) => {
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
    get<%= h.inflection.camelize(name) %>,
    create<%= h.inflection.camelize(name) %>,
    update<%= h.inflection.camelize(name) %>,
    delete<%= h.inflection.camelize(name) %>,
  };
};
