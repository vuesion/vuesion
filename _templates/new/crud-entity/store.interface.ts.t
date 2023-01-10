---
to: "src/interfaces/I<%= h.inflection.camelize(name) %>.ts"
unless_exists: true
---
import { <%= h.inflection.camelize(name) %> } from '.prisma/client';

export interface I<%= h.inflection.camelize(name) %> extends <%= h.inflection.camelize(name) %> {}
