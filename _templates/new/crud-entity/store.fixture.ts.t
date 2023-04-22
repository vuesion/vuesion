---
to: "src/fixtures/I<%= h.inflection.camelize(name) %>.ts"
unless_exists: true
---
import { I<%= h.inflection.camelize(name) %> } from '~/interfaces/I<%= h.inflection.camelize(name) %>';

export const I<%= h.inflection.camelize(name) %>Fixture: I<%= h.inflection.camelize(name) %> = {
  id: 'id-1',
  name: 'name-1',
  ownerId: 'account-1',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const I<%= h.inflection.camelize(name) %>CollectionFixture: Array<I<%= h.inflection.camelize(name) %>> = [I<%= h.inflection.camelize(name) %>Fixture];
