---
to: "src/server/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/[id]/index.put.spec.ts"
unless_exists: true
---
import { describe, it, expect, vi, beforeEach } from 'vitest';
import request from 'supertest';
import { makeServer } from '~/server/test/helpers/make-server';
import handler from './index.put';
import { getAuthorizedServerSession } from '~/server/utils/get-authorized-server-session';
import { getPrisma } from '~/server/services/use-prisma';

vi.mock('~/server/utils/get-authorized-server-session', () => ({
  getAuthorizedServerSession: vi.fn(),
}));

const prisma = getPrisma();

describe('PUT /api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/:id', () => {
  beforeEach(async () => {
    vi.clearAllMocks();
    (getAuthorizedServerSession as any).mockResolvedValue({ user: { id: 'u1' } });
  });

  it('updates and returns 200', async () => {
    const rec = await prisma.<%= h.inflection.camelize(name, true) %>.create({ data: { name: 'Old' } });
    const server = makeServer({ path: '/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/:id', method: 'PUT', handler });

    const res = await request(server).put(`/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/${rec.id}`).send({ name: 'New' }).expect(200);

    expect(res.body).toMatchObject({ id: rec.id, name: 'New' });

    const inDb = await prisma.<%= h.inflection.camelize(name, true) %>.findUnique({ where: { id: rec.id } });
    expect(inDb?.name).toBe('New');
  });

  it('returns 404 when record does not exist', async () => {
    const server = makeServer({ method: 'PUT', path: '/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/:id', handler });
    await request(server).put('/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/non-existing-id').expect(404);
  });

  it('returns 400 when id is missing (MissingIdError)', async () => {
    const server = makeServer({ method: 'PUT', path: '/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>', handler });
    await request(server).put('/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>').expect(400);
  });

  it<% if(auth === false) { -%>.skip<% } -%>('401 when unauthorized', async () => {
    (getAuthorizedServerSession as any).mockRejectedValue({ statusCode: 401 });
    const server = makeServer({ path: '/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/:id', method: 'PUT', handler });
    await request(server).put('/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/some').send({ name: 'X' }).expect(401);
  });
});
