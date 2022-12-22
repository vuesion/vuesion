import { ref } from 'vue';

export const getDomRef = <T>(element: unknown) => ref<T>(element as T);
