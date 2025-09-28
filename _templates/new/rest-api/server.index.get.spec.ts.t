---
to: "src/server/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/index.get.spec.ts"
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

describe('GET /api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %> (list)', () => {
  beforeEach(async () => {
    vi.clearAllMocks();
    (getAuthorizedServerSession as any).mockResolvedValue({ user: { id: 'u1' } });
  });

  it('returns paginated list (200)', async () => {
    const tag = `T_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
    await prisma.<%= h.inflection.camelize(name, true) %>.createMany({
      data: [{ name: `${tag}_A` }, { name: `${tag}_B` }],
    });

    const server = makeServer({ method: 'GET', path: '/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>', handler });

    const res = await request(server)
      .get(`/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>?selectedPage=1&itemsPerPage=10&q=${encodeURIComponent(tag)}`)
      .expect(200);

    expect(res.body).toMatchObject({
      selectedPage: 1,
      itemsPerPage: 10,
      totalRecords: 2,
      records: expect.any(Array),
    });

    const names = (res.body.records as any[]).map((r) => r.name);
    expect(names).toEqual(expect.arrayContaining([`${tag}_A`, `${tag}_B`]));
  });

  it<% if(auth === false) { -%>.skip<% } -%>('401 when unauthorized', async () => {
    (getAuthorizedServerSession as any).mockRejectedValue({ statusCode: 401 });
    const server = makeServer({ path: '/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>', method: 'GET', handler });
    await request(server).get('/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>').expect(401);
  });
});
