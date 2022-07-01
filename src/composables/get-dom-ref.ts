import { ComponentPublicInstance, ref } from 'vue';

export const getDomRef = <T extends HTMLElement | Element | ComponentPublicInstance>(element: T) => ref<T>(element);
