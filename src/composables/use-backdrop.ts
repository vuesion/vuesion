import { onBeforeMount, Ref, watch } from '@vue/composition-api';

interface IBackdropOptions {
  scrollable: boolean;
}

export const useBackdrop = (show: Ref<boolean>, { scrollable }: IBackdropOptions) => {
  let overlay: HTMLElement = null;

  onBeforeMount(() => {
    overlay = document.getElementById('overlay');

    if (overlay === null) {
      overlay = document.createElement('div');
      overlay.id = 'overlay';
      document.body.appendChild(overlay);
    }

    overlay.classList.add('backdrop');
  });

  watch(
    show,
    () => {
      if (show.value === true) {
        overlay.classList.add('show');

        if (scrollable === false) {
          document.body.style.overflow = 'hidden';
        }
      } else {
        overlay.classList.remove('show');

        if (scrollable === false) {
          document.body.style.overflow = 'initial';
        }
      }
    },
    { immediate: false },
  );
};
