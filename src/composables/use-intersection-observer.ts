import { onMounted, onBeforeUnmount, Ref, ref } from 'vue';

export const useIntersectionObserver = (
  elementRef: Ref<HTMLElement>,
  callback: (entries: IntersectionObserverEntry[], observer: IntersectionObserver | null) => void,
) => {
  const observer = ref<IntersectionObserver | null>(null);

  onMounted(() => {
    if ((window as any).IntersectionObserver) {
      observer.value = new IntersectionObserver(callback, {
        root: elementRef.value.parentElement,
        threshold: 1,
      });
      observer.value.observe(elementRef.value);
    } else {
      // eslint-disable-next-line n/no-callback-literal
      callback([], null);
    }
  });

  onBeforeUnmount(() => {
    observer.value = null;
  });

  return {
    observer,
  };
};
