import { onMounted, onBeforeUnmount, ref } from '@vue/composition-api';

export const useEvent = (
  eventName: string,
  handler: any,
  options: AddEventListenerOptions = {},
  elementRef = ref<any>(document),
) => {
  const el = elementRef?.value;
  const remove = () => {
    if (!el) {
      return;
    }
    el.removeEventListener(eventName, handler);
  };

  onMounted(() => {
    if (!el) {
      return;
    }
    el.addEventListener(eventName, handler, options);
  });

  onBeforeUnmount(remove);

  return remove;
};
