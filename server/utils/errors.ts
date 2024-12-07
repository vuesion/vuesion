export const NotAuthorizedError = createError({
  statusCode: 403,
  statusMessage: 'Not Authorized',
});

export const MissingIdError = createError({
  statusCode: 400,
  statusMessage: 'No ID Provided',
});

export const NotFoundError = createError({
  statusCode: 404,
  statusMessage: 'Entity Not Found',
});
