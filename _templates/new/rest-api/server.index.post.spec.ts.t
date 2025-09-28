---
to: "src/server/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/index.post.spec.ts"
unless_exists: true
---
import { describe, it, expect, vi, beforeEach } from 'vitest';
import request from 'supertest';
import { makeServer } from '~/server/test/helpers/make-server';
import handler from './index.post';
import { getAuthorizedServerSession } from '~/server/utils/get-authorized-server-session';
import { getPrisma } from '~/server/services/use-prisma';

vi.mock('~/server/utils/get-authorized-server-session', () => ({
  getAuthorizedServerSession: vi.fn(),
}));

const prisma = getPrisma();

describe('POST /api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>', () => {
  beforeEach(async () => {
    vi.clearAllMocks();
    (getAuthorizedServerSession as any).mockResolvedValue({ user: { id: 'u1' } });
  });

  it('creates and returns 201', async () => {
    const server = makeServer({ path: '/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>', method: 'POST', handler });

    const res = await request(server).post('/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>').send({ name: 'My <%= h.inflection.camelize(name) %>' }).expect(201);

    expect(res.body).toMatchObject({ name: 'My <%= h.inflection.camelize(name) %>' });

    const inDb = await prisma.<%= h.inflection.camelize(name, true) %>.findUnique({ where: { id: res.body.id } });
    expect(inDb?.name).toBe('My <%= h.inflection.camelize(name) %>');
  });

  it<% if(auth === false) { -%>.skip<% } -%>('401 when unauthorized', async () => {
    (getAuthorizedServerSession as any).mockRejectedValue({ statusCode: 401 });
    const server = makeServer({ path: '/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>', method: 'POST', handler });
    await request(server).post('/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>').send({ name: 'X' }).expect(401);
  });
});
