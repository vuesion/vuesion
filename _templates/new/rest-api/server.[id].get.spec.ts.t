---
to: "src/server/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/[id]/index.get.spec.ts"
unless_exists: true
---
import { describe, it, expect, vi, beforeEach } from 'vitest';
import request from 'supertest';
import { makeServer } from '~/server/test/helpers/make-server';
import handler from './index.get';
import { getAuthorizedServerSession } from '~/server/utils/get-authorized-server-session';
import { getPrisma } from '~/server/services/use-prisma';

vi.mock('~/server/utils/get-authorized-server-session', () => ({
  getAuthorizedServerSession: vi.fn(),
}));

const prisma = getPrisma();

describe('GET /api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/:id (details)', () => {
  beforeEach(async () => {
    vi.clearAllMocks();
    (getAuthorizedServerSession as any).mockResolvedValue({ user: { id: 'u1' } });
  });

  it('returns 200 for existing record', async () => {
    const rec = await prisma.<%= h.inflection.camelize(name, true) %>.create({ data: { name: 'One' } });
    const server = makeServer({ path: '/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/:id', method: 'GET', handler });

    const res = await request(server).get(`/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/${rec.id}`).expect(200);
    expect(res.body).toMatchObject({ id: rec.id, name: 'One' });
  });

  it('404 for non-existing id', async () => {
    const server = makeServer({ path: '/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/:id', method: 'GET', handler });
    await request(server).get('/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/not-found').expect(404);
  });

  it('returns 400 when id is missing (MissingIdError)', async () => {
    const server = makeServer({ method: 'GET', path: '/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>', handler });
    await request(server).get('/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>').expect(400);
  });

  it<% if(auth === false) { -%>.skip<% } -%>('401 when unauthorized', async () => {
    (getAuthorizedServerSession as any).mockRejectedValue({ statusCode: 401 });
    const server = makeServer({ path: '/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/:id', method: 'GET', handler });
    await request(server).get('/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/any').expect(401);
  });
});
