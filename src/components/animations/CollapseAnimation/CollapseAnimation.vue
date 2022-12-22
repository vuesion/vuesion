<template>
  <transition :css="false" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
    <slot />
  </transition>
</template>

<script setup lang="ts">
import anime from 'animejs';

const props = defineProps({
  duration: {
    type: Number,
    default: 250,
  },
});
const beforeEnter = (el: HTMLElement) => {
  el.style.height = '0';
  el.style.opacity = '0';
  el.style.overflow = 'hidden';
};
const enter = (el: HTMLElement, done: any) => {
  anime({
    targets: el,
    height: {
      value: `${el.scrollHeight}px`,
      duration: props.duration,
    },
    opacity: {
      value: 1,
      duration: props.duration,
    },
    round: 1,
    easing: 'easeInOutCirc',
    complete: () => {
      el.style.height = '';
      el.style.overflow = '';
      done();
    },
  });
};
const beforeLeave = (el: HTMLElement) => {
  el.style.overflow = 'hidden';
};
const leave = (el: HTMLElement, done: any) => {
  anime({
    targets: el,
    height: {
      value: `0`,
      duration: props.duration,
    },
    opacity: {
      value: 0,
      duration: props.duration,
    },
    paddingTop: {
      value: 0,
      duration: props.duration,
    },
    paddingBottom: {
      value: 0,
      duration: props.duration,
    },
    marginTop: {
      value: 0,
      duration: props.duration,
    },
    marginBottom: {
      value: 0,
      duration: props.duration,
    },
    round: 1,
    easing: 'easeInOutCirc',
    complete: done,
  });
};
</script>
