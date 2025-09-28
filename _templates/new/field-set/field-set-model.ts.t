---
to: "src/shared/interfaces/ui/field-sets/<%= h.capitalize(name) %>FieldSetModel.ts"
unless_exists: true
---
import type { I<%= h.capitalize(name) %>Update } from '#shared/interfaces/domain/I<%= h.capitalize(name) %>';

export interface <%= h.capitalize(name) %>FieldSetModel extends I<%= h.capitalize(name) %>Update {
  id?: string;
}
