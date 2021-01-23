import { onMounted, onBeforeUnmount, ref } from '@vue/composition-api';

export const useEvent = (
  eventName: string,
  handler: any,
  options: {
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
  } = {},
  elementRef = ref<HTMLElement | Document | Window>(document),
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
