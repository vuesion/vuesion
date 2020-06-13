import { ref } from '@vue/composition-api';

export const getDomRef = (element: HTMLElement) => ref<HTMLElement | any>(element);
