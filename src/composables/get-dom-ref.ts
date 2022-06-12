import { ComponentPublicInstance, ref } from 'vue';

export const getDomRef = (element: HTMLElement) => ref<HTMLElement | Element | ComponentPublicInstance | any>(element);
