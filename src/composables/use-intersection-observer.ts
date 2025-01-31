import { onMounted, onBeforeUnmount, type Ref, ref } from 'vue';

export const useIntersectionObserver = (
  elementRef: Ref<HTMLElement | null>,
  callback: (entries: IntersectionObserverEntry[], observer?: IntersectionObserver) => void,
) => {
  const observer = ref<IntersectionObserver | null>(null);

  onMounted(() => {
    if ((window as any).IntersectionObserver && elementRef.value) {
      observer.value = new IntersectionObserver(callback, {
        root: elementRef.value.parentElement,
        threshold: 1,
      });
      observer.value.observe(elementRef.value);
    } else {
      callback([]);
    }
  });

  onBeforeUnmount(() => {
    observer.value = null;
  });

  return {
    observer,
  };
};
