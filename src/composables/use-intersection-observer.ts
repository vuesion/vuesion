import { onMounted, onBeforeUnmount, Ref, ref } from '@vue/composition-api';

export const useIntersectionObserver = (elementRef: Ref<HTMLElement>, callback: IntersectionObserverCallback) => {
  const observer = ref<IntersectionObserver>(null);

  onMounted(() => {
    if ((window as any).IntersectionObserver) {
      observer.value = new IntersectionObserver(callback, {
        root: elementRef.value.parentElement,
        threshold: 1,
      });
      observer.value.observe(elementRef.value);
    }
  });

  onBeforeUnmount(() => {
    observer.value = null;
  });

  return {
    observer,
  };
};
