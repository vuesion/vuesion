export const sleep = (ms: number): Promise<unknown> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  await sleep(500);

  return { count: parseInt(body.count, 10) - 1 };
});
