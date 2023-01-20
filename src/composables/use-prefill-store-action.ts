// Use this composable to prefill a store with an action
// Hack to tell nuxt that this function was executed
import { useAsyncData } from '#app';

export const usePrefillStoreAction = async (action: () => Promise<unknown>, returnValue: unknown) => {
  await useAsyncData(async () => {
    await action();
    return returnValue;
  });
};
