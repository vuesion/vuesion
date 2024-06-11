---
to: "prisma/schema.prisma"
inject: true
after: // generated model relations
skip_if: model <%= h.inflection.camelize(name) %>
---
<%= h.inflection.pluralize(h.inflection.camelize(name, true)) %> <%= h.inflection.singularize(h.inflection.camelize(name)) %>[]