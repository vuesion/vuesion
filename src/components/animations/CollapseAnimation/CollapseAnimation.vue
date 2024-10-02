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
const beforeEnter = (el: Element) => {
  const hel = el as HTMLElement;
  hel.style.height = '0';
  hel.style.opacity = '0';
  hel.style.overflow = 'hidden';
};
const enter = (el: Element, done: () => void) => {
  const hel = el as HTMLElement;
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
      hel.style.height = '';
      hel.style.overflow = '';
      done();
    },
  });
};
const beforeLeave = (el: Element) => {
  const hel = el as HTMLElement;
  hel.style.overflow = 'hidden';
};
const leave = (el: Element, done: () => void) => {
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
