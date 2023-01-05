---
to: "src/fixtures/I<%= h.inflection.camelize(name) %>.ts"
---
import { I<%= h.inflection.camelize(name) %> } from '~/interfaces/I<%= h.inflection.camelize(name) %>';

export const I<%= h.inflection.camelize(name) %>CollectionFixture: Array<I<%= h.inflection.camelize(name) %>> = [
  {
    id: 'id-1',
  },
];

export const I<%= h.inflection.camelize(name) %>Fixture: I<%= h.inflection.camelize(name) %> = {
  id: 'id-1',
};

