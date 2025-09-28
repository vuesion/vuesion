// NOTE: if this fails, try deleting "credsStore": "desktop" in ~/.docker/config.json

import { execSync } from 'node:child_process';
import { PostgreSqlContainer, type StartedPostgreSqlContainer } from '@testcontainers/postgresql';

const stdio: any = 'ignore';

export default async () => {
  execSync('docker info', { stdio });
  process.env.DOCKER_AUTH_CONFIG ||= '{}';

  const pg: StartedPostgreSqlContainer = await new PostgreSqlContainer('postgres:16-alpine')
    .withUsername('testuser')
    .withPassword('testpass')
    .withDatabase('testdb')
    .start();

  const host = pg.getHost();
  const port = pg.getMappedPort(5432);
  process.env.DATABASE_URL = `postgresql://testuser:testpass@${host}:${port}/testdb?schema=public`;

  execSync('npx prisma db push --force-reset', { stdio });
  execSync('npx prisma generate', { stdio });

  return async () => {
    try {
      const { getPrisma } = await import('~/server/services/use-prisma');
      await getPrisma().$disconnect();
    } catch {
      /* empty */
    }
    await pg.stop();
  };
};
