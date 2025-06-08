import { getIntInRange } from '~/components/utils';

export const sleep = (ms: number): Promise<unknown> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default defineEventHandler(async () => {
  // Simulate slow hardware, because this app runs in the cheapest hardware on AWS
  // Try to use techniques to make it feel more snappy, e.g. loaders, placeholders, lazy-loading, etc.
  if (process.env.NODE_ENV === 'development') {
    await sleep(getIntInRange(250, 1200));
  } else {
    // prevent Timing-Attacks, see: https://wiki.owasp.org/images/a/a5/2018-02-05-AhmadAshraff.pdf
    await sleep(getIntInRange(1, 50));
  }
});
