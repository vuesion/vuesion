<template>
  <transition
    @beforeEnter="beforeEnter"
    @enter="enter"
    @beforeLeave="beforeLeave"
    @leave="leave"
    :css="false">
    <slot />
  </transition>
</template>

<script lang="ts">
  import anime from 'animejs';

  export default {
    components: {},
    props:      {
      duration: {
        type:     Number,
        required: false,
        default:  250,
      },
    },
    data() {
      return {};
    },
    computed:   {},
    methods:    {
      beforeEnter(el: HTMLElement) {
        el.style.height = '0';
        el.style.opacity = '0';
        el.style.overflow = 'hidden';
      },
      enter(el: HTMLElement, done: any) {
        const height: number = el.getClientRects().length > 0 ? el.getClientRects().item(0).height : 0;

        anime(
          {
            targets:  el,
            height:   {
              value:    `${el.scrollHeight - height + 32}px`,
              duration: this.duration,
            },
            opacity:  {
              value:    1,
              duration: this.duration,
            },
            round:    1,
            easing:   'easeInOutCirc',
            complete: done,
          },
        );
      },
      beforeLeave(el: HTMLElement) {
        el.style.overflow = 'hidden';
      },
      leave(el: HTMLElement, done: any) {
        anime(
          {
            targets:       el,
            height:        {
              value:    `0`,
              duration: this.duration,
            },
            opacity:       {
              value:    0,
              duration: this.duration,
            },
            paddingTop:    {
              value:    0,
              duration: this.duration,
            },
            paddingBottom: {
              value:    0,
              duration: this.duration,
            },
            marginTop:     {
              value:    0,
              duration: this.duration,
            },
            marginBottom:  {
              value:    0,
              duration: this.duration,
            },
            round:         1,
            easing:        'easeInOutCirc',
            complete:      done,
          },
        );
      },
    },
  };
</script>
