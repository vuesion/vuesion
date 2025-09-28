---
to: "src/server/services/use-<%= h.inflection.dasherize(h.inflection.underscore(name, true)) %>-service.spec.ts"
unless_exists: true
---
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { use<%= h.inflection.camelize(name) %>Service } from '~/server/services/use-<%= h.inflection.dasherize(h.inflection.underscore(name, true)) %>-service';

const prisma = {
  <%= h.inflection.camelize(name, true) %>: {
    findMany: vi.fn(),
    count: vi.fn(),
    findFirst: vi.fn(),
    create: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
  },
} as any;

describe('use<%= h.inflection.camelize(name) %>Service', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('get<%= h.inflection.camelize(h.inflection.pluralize(name)) %>', () => {
    it('should return a paginated list and call Prisma with where/orderBy/include/take/skip', async () => {
      prisma.<%= h.inflection.camelize(name, true) %>.findMany.mockResolvedValueOnce([{ id: 'o1' }]);
      prisma.<%= h.inflection.camelize(name, true) %>.count.mockResolvedValueOnce(5);

      const service = use<%= h.inflection.camelize(name) %>Service(prisma);
      const query = { q: 'foo', sort: 'createdAt:asc', selectedPage: 2, itemsPerPage: 5 } as any;
      const res = await service.get<%= h.inflection.camelize(h.inflection.pluralize(name)) %>(query);

      expect(res.records).toEqual([{ id: 'o1' }]);
      expect(res.totalRecords).toBe(5);
      expect(res.selectedPage).toBe(2);
      expect(res.itemsPerPage).toBe(5);

      expect(prisma.<%= h.inflection.camelize(name, true) %>.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.any(Object),
          orderBy: expect.any(Object),
          include: expect.any(Object),
          take: expect.any(Number),
          skip: expect.any(Number),
        }),
      );
      expect(prisma.<%= h.inflection.camelize(name, true) %>.count).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.any(Object),
        }),
      );
    });

    it('should bubble errors from Prisma when get<%= h.inflection.camelize(h.inflection.pluralize(name)) %> fails', async () => {
      prisma.<%= h.inflection.camelize(name, true) %>.findMany.mockRejectedValueOnce(new Error('db down'));
      const service = use<%= h.inflection.camelize(name) %>Service(prisma);
      await expect(service.get<%= h.inflection.camelize(h.inflection.pluralize(name)) %>({} as any)).rejects.toThrow('db down');
    });
  });

  describe('get<%= h.inflection.camelize(name) %>Details', () => {
    it('should return a record when get<%= h.inflection.camelize(name) %>Details finds one', async () => {
      prisma.<%= h.inflection.camelize(name, true) %>.findFirst.mockResolvedValueOnce({ id: 'x' });
      const service = use<%= h.inflection.camelize(name) %>Service(prisma);
      const res = await service.get<%= h.inflection.camelize(name) %>Details('x');

      expect(prisma.<%= h.inflection.camelize(name, true) %>.findFirst).toHaveBeenCalledWith({
        where: { id: 'x' },
        include: expect.any(Object),
      });
      expect(res).toEqual({ id: 'x' });
    });

    it('should return null when get<%= h.inflection.camelize(name) %>Details finds nothing', async () => {
      prisma.<%= h.inflection.camelize(name, true) %>.findFirst.mockResolvedValueOnce(null);
      const service = use<%= h.inflection.camelize(name) %>Service(prisma);
      const res = await service.get<%= h.inflection.camelize(name) %>Details('missing');
      expect(res).toBeNull();
    });

    it('should bubble errors from Prisma when get<%= h.inflection.camelize(name) %>Details fails', async () => {
      prisma.<%= h.inflection.camelize(name, true) %>.findFirst.mockRejectedValueOnce(new Error('boom'));
      const service = use<%= h.inflection.camelize(name) %>Service(prisma);
      await expect(service.get<%= h.inflection.camelize(name) %>Details('x')).rejects.toThrow('boom');
    });
  });

  describe('create<%= h.inflection.camelize(name) %>', () => {
    it('should remove undefined fields, use include, and return the created record', async () => {
      prisma.<%= h.inflection.camelize(name, true) %>.create.mockResolvedValueOnce({ id: 'new', name: 'N' });

      const service = use<%= h.inflection.camelize(name) %>Service(prisma);
      const res = await service.create<%= h.inflection.camelize(name) %>({ name: 'N', description: undefined } as any);

      expect(prisma.<%= h.inflection.camelize(name, true) %>.create).toHaveBeenCalledWith({
        data: { name: 'N' },
        include: expect.any(Object),
      });
      expect(res).toEqual({ id: 'new', name: 'N' });
    });

    it('should bubble errors from Prisma when create<%= h.inflection.camelize(name) %> fails', async () => {
      prisma.<%= h.inflection.camelize(name, true) %>.create.mockRejectedValueOnce(new Error('unique_violation'));
      const service = use<%= h.inflection.camelize(name) %>Service(prisma);
      await expect(service.create<%= h.inflection.camelize(name) %>({ name: 'X' } as any)).rejects.toThrow('unique_violation');
    });
  });

  describe('update<%= h.inflection.camelize(name) %>', () => {
    it('should remove undefined fields, use include, and return the updated record', async () => {
      prisma.<%= h.inflection.camelize(name, true) %>.update.mockResolvedValueOnce({ id: 'u1', name: 'U' });

      const service = use<%= h.inflection.camelize(name) %>Service(prisma);
      const res = await service.update<%= h.inflection.camelize(name) %>('u1', { name: 'U', description: undefined } as any);

      expect(prisma.<%= h.inflection.camelize(name, true) %>.update).toHaveBeenCalledWith({
        data: { name: 'U' },
        where: { id: 'u1' },
        include: expect.any(Object),
      });
      expect(res).toEqual({ id: 'u1', name: 'U' });
    });

    it('should bubble errors from Prisma when update<%= h.inflection.camelize(name) %> fails', async () => {
      prisma.<%= h.inflection.camelize(name, true) %>.update.mockRejectedValueOnce(new Error('P2025'));
      const service = use<%= h.inflection.camelize(name) %>Service(prisma);
      await expect(service.update<%= h.inflection.camelize(name) %>('nope', { name: 'X' } as any)).rejects.toThrow('P2025');
    });
  });

  describe('delete<%= h.inflection.camelize(name) %>', () => {
    it('should call prisma.delete and return the result when delete<%= h.inflection.camelize(name) %> succeeds', async () => {
      prisma.<%= h.inflection.camelize(name, true) %>.delete.mockResolvedValueOnce({ id: 'gone' });

      const service = use<%= h.inflection.camelize(name) %>Service(prisma);
      const res = await service.delete<%= h.inflection.camelize(name) %>('gone');

      expect(prisma.<%= h.inflection.camelize(name, true) %>.delete).toHaveBeenCalledWith({ where: { id: 'gone' } });
      expect(res).toEqual({ id: 'gone' });
    });

    it('should bubble errors from Prisma when delete<%= h.inflection.camelize(name) %> fails', async () => {
      prisma.<%= h.inflection.camelize(name, true) %>.delete.mockRejectedValueOnce(new Error('P2025'));
      const service = use<%= h.inflection.camelize(name) %>Service(prisma);
      await expect(service.delete<%= h.inflection.camelize(name) %>('missing')).rejects.toThrow('P2025');
    });
  });
});
