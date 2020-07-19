import { onMounted, onBeforeUnmount, watch, Ref } from '@vue/composition-api';

export const useOutsideClick = (elementRef: Ref<HTMLElement>, cb: (event: MouseEvent) => void) => {
  let el: HTMLElement;
  const handleDocumentClick = (event: MouseEvent) => {
    if (el && el.contains(event.target as Node) === false) {
      cb(event);
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
};
