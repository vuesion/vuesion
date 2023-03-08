/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await prisma.account.upsert({
    where: { email: 'account@example.com' },
    update: {},
    create: {
      email: 'account@example.com',
      password: '$2b$10$kloAzr0kZ2mMG8sYInAlHeW8VDjoe9vTuNtBBl4SqjPqdPRwMl7bK',
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
    console.log('Seed completed.');
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
