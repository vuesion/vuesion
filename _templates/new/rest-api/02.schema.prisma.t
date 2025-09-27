---
to: "prisma/schema.prisma"
inject: true
after: // generated models
skip_if: model <%= h.inflection.camelize(name) %>
sh: prisma format
---
model <%= h.inflection.camelize(name) %> {
  id      String  @id @default(ulid())
  name    String

  account Account? @relation(fields: [accountId], references: [id])
  accountId String?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
