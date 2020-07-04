import { onMounted, onBeforeUnmount, watch, Ref } from '@vue/composition-api';

export const useOutsideClick = (elementRef: Ref<HTMLElement>) => {
  let el: HTMLElement;
  let callback: (event: MouseEvent) => void;
  const onOutsideClick = (cb: (event: MouseEvent) => void) => (callback = cb);
  const handleDocumentClick = (event: MouseEvent) => {
    if (el && el.contains(event.target as Node) === false) {
      callback(event);
    }
  };

  watch(elementRef, () => (el = elementRef.value));

  onMounted(() => {
    document.addEventListener('mousedown', handleDocumentClick);
    document.addEventListener('touchstart', handleDocumentClick);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('mousedown', handleDocumentClick);
    document.removeEventListener('touchstart', handleDocumentClick);
  });

  return { onOutsideClick };
};
