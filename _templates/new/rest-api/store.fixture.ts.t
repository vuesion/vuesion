---
to: "src/shared/fixtures/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>.ts"
unless_exists: true
---
import type { I<%= h.inflection.camelize(name) %>, I<%= h.inflection.camelize(name) %>Create, I<%= h.inflection.camelize(name) %>Update } from '../interfaces/I<%= h.inflection.camelize(name) %>';

export const get<%= h.inflection.camelize(name) %>View = (overrides: Partial<I<%= h.inflection.camelize(name) %>> = {}): I<%= h.inflection.camelize(name) %> => ({
  id: '1',
  name: 'Test<%= h.inflection.camelize(name) %>',
  accountId: 'account-1',
  createdAt: new Date('2025-01-01'),
  updatedAt: new Date('2025-05-05'),
  ...overrides,
});

export const get<%= h.inflection.camelize(name) %>Create = (overrides: Partial<I<%= h.inflection.camelize(name) %>Create> = {}): I<%= h.inflection.camelize(name) %>Create => ({
  name: 'New<%= h.inflection.camelize(name) %>',
  ...overrides,
});

export const get<%= h.inflection.camelize(name) %>CreateView = (overrides: Partial<I<%= h.inflection.camelize(name) %>> = {}): I<%= h.inflection.camelize(name) %> => ({
  ...get<%= h.inflection.camelize(name) %>Create(),
  id: '1',
  accountId: 'account-1',
  createdAt: new Date('2025-01-01'),
  updatedAt: new Date('2025-05-05'),
  ...overrides,
});

export const get<%= h.inflection.camelize(name) %>Update = (overrides: Partial<I<%= h.inflection.camelize(name) %>Update> = {}): I<%= h.inflection.camelize(name) %>Update => ({
  name: 'Updated<%= h.inflection.camelize(name) %>',
  ...overrides,
});

export const get<%= h.inflection.camelize(name) %>UpdateView = (overrides: Partial<I<%= h.inflection.camelize(name) %>> = {}): I<%= h.inflection.camelize(name) %> => ({
  ...get<%= h.inflection.camelize(name) %>Update(),
  id: '1',
  ...overrides,
} as I<%= h.inflection.camelize(name) %>);
