import { describe, it, expect } from 'vitest';
import { mustBeRelatedToEntity } from './access-control';
import { NotAuthorizedError } from '~/server/utils/errors';

describe('mustBeRelatedToEntity', () => {
  it('does nothing when sessionUserId equals recordUserId (string)', () => {
    expect(() => mustBeRelatedToEntity('u1', 'u1')).not.toThrow();
  });

  it('throws NotAuthorizedError when sessionUserId does not match recordUserId (string)', () => {
    expect(() => mustBeRelatedToEntity('u1', 'u2')).toThrow(NotAuthorizedError);
  });

  it('throws NotAuthorizedError when recordUserId is null', () => {
    expect(() => mustBeRelatedToEntity('u1', null)).toThrow(NotAuthorizedError);
  });

  it('throws NotAuthorizedError when sessionUserId is null', () => {
    expect(() => mustBeRelatedToEntity(null, 'u1')).toThrow(NotAuthorizedError);
  });

  it('does nothing when sessionUserId is included in recordUserId array', () => {
    expect(() => mustBeRelatedToEntity('u1', ['u1', 'u2'])).not.toThrow();
  });

  it('throws NotAuthorizedError when sessionUserId is not in recordUserId array', () => {
    expect(() => mustBeRelatedToEntity('u1', ['u2', 'u3'])).toThrow(NotAuthorizedError);
  });

  it('throws NotAuthorizedError when recordUserId array is empty', () => {
    expect(() => mustBeRelatedToEntity('u1', [])).toThrow(NotAuthorizedError);
  });

  it('throws NotAuthorizedError when both sessionUserId and recordUserId are undefined', () => {
    expect(() => mustBeRelatedToEntity(undefined, undefined)).toThrow();
  });

  it('throws NotAuthorizedError when recordUserId is undefined but sessionUserId is set', () => {
    expect(() => mustBeRelatedToEntity('u1', undefined)).toThrow(NotAuthorizedError);
  });
});
