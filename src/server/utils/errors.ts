import { createError } from 'h3';

export const UnauthorizedError = createError({
  name: 'UnauthorizedError',
  statusCode: 401,
  statusMessage: 'Authentication required or token invalid',
});

export const ForbiddenError = createError({
  name: 'ForbiddenError',
  statusCode: 403,
  statusMessage: 'You do not have permission to access this resource',
});

export const MissingIdError = createError({
  name: 'MissingIdError',
  statusCode: 400,
  statusMessage: 'No ID Provided',
});

export const NotFoundError = createError({
  name: 'NotFoundError',
  statusCode: 404,
  statusMessage: 'Entity Not Found',
});
