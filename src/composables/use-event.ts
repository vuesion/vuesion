import { onBeforeUnmount, Ref, watch } from '@vue/composition-api';

export const useEvent = (
  eventName: string,
  handler: any,
  elementRef: Ref<HTMLElement | Document | Window>,
  options?: {
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
  },
) => {
  let el = elementRef?.value;
  const add = () => {
    if (!el) return;

    el.addEventListener(eventName, handler, options);
  };
  const remove = () => {
    if (!el) return;

    el.removeEventListener(eventName, handler, options);
  };

  watch(
    () => elementRef,
    (value) => {
      el = value?.value;
      add();
    },
    { immediate: true },
  );

  onBeforeUnmount(remove);

  return { add, remove };
};
