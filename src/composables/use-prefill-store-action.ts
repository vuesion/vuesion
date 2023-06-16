// Use this composable to prefill a store with an action
// Hack to tell nuxt that this function was executed
import { useAsyncData } from '#app';

export const usePrefillStoreAction = async <T>(action: () => Promise<void>, returnValue: T) => {
  await useAsyncData<T>(async () => {
    await action();
    return returnValue;
  });
};
