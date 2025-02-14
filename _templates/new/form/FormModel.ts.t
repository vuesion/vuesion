---
to: "src/interfaces/forms/<%= h.capitalize(name) %>FormModel.ts"
unless_exists: true
---
import type { I<%= h.capitalize(name) %>Create } from '~/interfaces/I<%= h.capitalize(name) %>';

export interface I<%= h.capitalize(name) %>FormModel extends I<%= h.capitalize(name) %>Create {
  id?: string;
}
