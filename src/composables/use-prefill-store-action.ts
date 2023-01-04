// Use this composable to prefill a store with an action
// Hack to tell nuxt that this function was executed
export const usePrefillStoreAction = async (action: () => Promise<unknown>) => {
  await useAsyncData(async () => {
    await action();
    // TODO: create issue that Pinia somehow needs to return a value from the action?
    return Promise.resolve('true');
  });
};
