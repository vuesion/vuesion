---
to: "src/interfaces/field-sets/<%= h.capitalize(name) %>FieldSetModel.ts"
unless_exists: true
---
import type { I<%= h.capitalize(name) %>Update } from '~/interfaces/I<%= h.capitalize(name) %>';

export interface <%= h.capitalize(name) %>FieldSetModel extends I<%= h.capitalize(name) %>Update {
  id?: string;
}
