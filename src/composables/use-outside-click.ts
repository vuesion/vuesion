import { Vue } from 'vue/types/vue';
import { onMounted, onBeforeUnmount, watch, Ref } from '@vue/composition-api';

export const useOutsideClick = (elementRef: Ref<HTMLElement | Vue>, cb: (event: MouseEvent) => void) => {
  let el: HTMLElement | Vue;
  const handleDocumentClick = (event: MouseEvent) => {
    if (el) {
      let htmlElement: Element;

      if ('$el' in el) {
        htmlElement = el.$el;
      } else {
        htmlElement = el;
      }

      if (htmlElement.contains(event.target as Node) === false) {
        cb(event);
      }
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
