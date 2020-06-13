import { onMounted, onBeforeUnmount } from '@vue/composition-api';

export const useKeydown = () => {
  let callback: (event: KeyboardEvent) => void;
  const onKeydown = (cb: (event: KeyboardEvent) => void) => (callback = cb);
  const handleDocumentKeyPress = (event: KeyboardEvent) => {
    callback(event);
  };

  onMounted(() => {
    document.addEventListener('keydown', handleDocumentKeyPress);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleDocumentKeyPress);
  });

  return { onKeydown };
};
