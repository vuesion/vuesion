export default eventHandler(() => {
  throw createError({
    statusCode: 404,
    statusMessage: 'Route does not exist.',
  });
});
