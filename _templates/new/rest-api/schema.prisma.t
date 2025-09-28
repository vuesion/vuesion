---
to: "prisma/schema.prisma"
inject: true
after: EOF
skip_if: model <%= h.inflection.camelize(name) %>
sh: prisma format
---
model <%= h.inflection.camelize(name) %> {
  id      String  @id @default(ulid())
  name    String

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
