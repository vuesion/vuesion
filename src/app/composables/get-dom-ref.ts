import { shallowRef } from 'vue';

export const getDomRef = <T>(element: unknown) => {
  return shallowRef(element as T);
};
