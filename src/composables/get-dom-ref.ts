import { shallowRef } from 'vue';

export const getDomRef = <T = HTMLElement>(element: unknown) => {
  return shallowRef(element as T | null);
};
