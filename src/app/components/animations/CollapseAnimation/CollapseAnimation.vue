<template>
  <transition :css="false" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
    <slot />
  </transition>
</template>

<script setup lang="ts">
import { animate, utils } from 'animejs';
import { TRANSITION_DURATION } from '~/constants/transition-duration';

const props = defineProps({
  duration: {
    type: Number,
    default: TRANSITION_DURATION,
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
  animate(hel, {
    height: {
      to: `${el.scrollHeight}px`,
      duration: props.duration,
      modifier: utils.round(2),
    },
    opacity: {
      to: 1,
      duration: props.duration,
      modifier: utils.round(2),
    },
    ease: 'easeInOutCirc',
    onComplete: () => {
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
  const hel = el as HTMLElement;

  animate(hel, {
    height: {
      to: `0`,
      duration: props.duration,
      modifier: utils.round(2),
    },
    opacity: {
      to: 0,
      duration: props.duration,
      modifier: utils.round(2),
    },
    paddingTop: {
      to: 0,
      duration: props.duration,
      modifier: utils.round(2),
    },
    paddingBottom: {
      to: 0,
      duration: props.duration,
      modifier: utils.round(2),
    },
    marginTop: {
      to: 0,
      duration: props.duration,
      modifier: utils.round(2),
    },
    marginBottom: {
      to: 0,
      duration: props.duration,
      modifier: utils.round(2),
    },
    ease: 'easeInOutCirc',
    onComplete: done,
  });
};
</script>
