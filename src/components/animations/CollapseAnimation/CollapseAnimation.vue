<template>
  <transition :css="false" @beforeEnter="beforeEnter" @enter="enter" @beforeLeave="beforeLeave" @leave="leave">
    <slot />
  </transition>
</template>

<script lang="ts">
import anime from 'animejs';

export default {
  name: 'CollapseAnimation',
  props: {
    duration: { type: Number, default: 250 },
  },
  methods: {
    beforeEnter(el: HTMLElement) {
      el.style.height = '0';
      el.style.opacity = '0';
      el.style.overflow = 'hidden';
    },
    enter(el: HTMLElement, done: any) {
      anime({
        targets: el,
        height: {
          value: `${el.scrollHeight}px`,
          duration: this.duration,
        },
        opacity: {
          value: 1,
          duration: this.duration,
        },
        round: 1,
        easing: 'easeInOutCirc',
        complete: () => {
          el.style.height = null;
          el.style.overflow = null;
          done();
        },
      });
    },
    beforeLeave(el: HTMLElement) {
      el.style.overflow = 'hidden';
    },
    leave(el: HTMLElement, done: any) {
      anime({
        targets: el,
        height: {
          value: `0`,
          duration: this.duration,
        },
        opacity: {
          value: 0,
          duration: this.duration,
        },
        paddingTop: {
          value: 0,
          duration: this.duration,
        },
        paddingBottom: {
          value: 0,
          duration: this.duration,
        },
        marginTop: {
          value: 0,
          duration: this.duration,
        },
        marginBottom: {
          value: 0,
          duration: this.duration,
        },
        round: 1,
        easing: 'easeInOutCirc',
        complete: done,
      });
    },
  },
};
</script>
