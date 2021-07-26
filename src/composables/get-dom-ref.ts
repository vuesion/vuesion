import Vue from 'vue';
import { ref } from '@vue/composition-api';

export const getDomRef = (element: HTMLElement) => ref<HTMLElement | Element | Vue | any>(element);
