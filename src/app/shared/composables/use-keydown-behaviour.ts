import { onMounted, onBeforeUnmount } from '@vue/composition-api';

export const useKeyDownBehavior = () => {
  let callback: (event: KeyboardEvent) => void;
  const onKeyDown = (cb: (event: KeyboardEvent) => void) => (callback = cb);
  const handleDocumentKeyPress = (event: KeyboardEvent) => {
    callback(event);
  };

  onMounted(() => {
    document.addEventListener('keydown', handleDocumentKeyPress);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleDocumentKeyPress);
  });

  return { onKeyDown };
};
