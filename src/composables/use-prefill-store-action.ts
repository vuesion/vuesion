// Use this composable to prefill a store with an action
// Hack to tell nuxt that this function was executed
export const usePrefillStoreAction = async (action: () => Promise<unknown>, returnValue: unknown) => {
  await useAsyncData(async () => {
    await action();
    return returnValue;
  });
};
