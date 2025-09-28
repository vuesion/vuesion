---
to: "src/shared/interfaces/ui/forms/<%= h.capitalize(name) %>FormModel.ts"
unless_exists: true
---
import type { I<%= h.capitalize(name) %>Update } from '#shared/interfaces/domain/I<%= h.capitalize(name) %>';

export interface I<%= h.capitalize(name) %>FormModel extends I<%= h.capitalize(name) %>Update {
  id?: string;
}
