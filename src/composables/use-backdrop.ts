import { onBeforeMount, Ref, watch } from '@vue/composition-api';

interface IBackdropOptions {
  scrollable: Ref<boolean>;
}

export const useBackdrop = (show: Ref<boolean>, { scrollable }: IBackdropOptions) => {
  const getBackdrop = () => {
    let backdrop: HTMLElement = document.getElementById('modal-backdrop-1337');

    if (backdrop === null) {
      backdrop = document.createElement('div');
      backdrop.id = 'modal-backdrop-1337';
      document.body.appendChild(backdrop);
    }

    return backdrop;
  };

  onBeforeMount(() => {
    getBackdrop().classList.add('backdrop');
  });

  return watch(
    show,
    () => {
      const backdrop = getBackdrop();

      if (show.value === true) {
        backdrop.classList.add('show');

        if (scrollable.value === false) {
          document.body.style.overflow = 'hidden';
        }
      } else {
        backdrop.classList.remove('show');

        if (scrollable.value === false) {
          document.body.style.overflow = 'initial';
        }
      }
    },
    { immediate: false },
  );
};
