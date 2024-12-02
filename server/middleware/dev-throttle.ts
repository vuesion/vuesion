import { sleep } from '@antfu/utils';

export default defineEventHandler(async () => {
  // Simulate slow hardware or internet connection.
  // Try to use techniques to make it feel more snappy, e.g. loaders, placeholders, lazy-loading, etc.
  if (process.env.NODE_ENV === 'development') {
    await sleep(500);
  }
});
