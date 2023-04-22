---
to: "prisma/schema.prisma"
inject: true
after: // generated models
skip_if: model <%= h.inflection.camelize(name) %>
sh: prisma format
---
model <%= h.inflection.singularize(h.inflection.camelize(name)) %> {
  id      String  @id @default(dbgenerated("gen_random_uuid()"))
  ownerId String
  owner   Account @relation(fields: [ownerId], references: [id])
  name    String

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
