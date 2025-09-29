import { describe, it, expect } from 'vitest';
import { mustBeRelatedToEntity } from './access-control';
import { ForbiddenError } from '~/server/utils/errors';

describe('mustBeRelatedToEntity', () => {
  it('does nothing when sessionUserId equals recordUserId (string)', () => {
    expect(() => mustBeRelatedToEntity('u1', 'u1')).not.toThrow();
  });

  it('throws ForbiddenError when sessionUserId does not match recordUserId (string)', () => {
    expect(() => mustBeRelatedToEntity('u1', 'u2')).toThrow(ForbiddenError);
  });

  it('throws ForbiddenError when recordUserId is null', () => {
    expect(() => mustBeRelatedToEntity('u1', null)).toThrow(ForbiddenError);
  });

  it('throws ForbiddenError when sessionUserId is null', () => {
    expect(() => mustBeRelatedToEntity(null, 'u1')).toThrow(ForbiddenError);
  });

  it('does nothing when sessionUserId is included in recordUserId array', () => {
    expect(() => mustBeRelatedToEntity('u1', ['u1', 'u2'])).not.toThrow();
  });

  it('throws ForbiddenError when sessionUserId is not in recordUserId array', () => {
    expect(() => mustBeRelatedToEntity('u1', ['u2', 'u3'])).toThrow(ForbiddenError);
  });

  it('throws ForbiddenError when recordUserId array is empty', () => {
    expect(() => mustBeRelatedToEntity('u1', [])).toThrow(ForbiddenError);
  });

  it('throws ForbiddenError when both sessionUserId and recordUserId are undefined', () => {
    expect(() => mustBeRelatedToEntity(undefined, undefined)).toThrow();
  });

  it('throws ForbiddenError when recordUserId is undefined but sessionUserId is set', () => {
    expect(() => mustBeRelatedToEntity('u1', undefined)).toThrow(ForbiddenError);
  });
});
