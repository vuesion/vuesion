<template>
  <transition
    @beforeEnter="beforeEnter"
    @enter="enter"
    @beforeLeave="beforeLeave"
    @leave="leave">
    <section :class="cssClasses" v-if="show" role="tabpanel">
      <slot />
    </section>
  </transition>
</template>

<script lang="ts">
  import anime from 'animejs';

  export default {
    name:       'VueTabItem',
    components: {},
    props:      {
      cssClass: {
        type:    String,
        default: 'vueTabItem',
      },
      isActive: {
        type:     Boolean,
        required: false,
        default:  false,
      },
      title:    {
        type:     String,
        required: true,
      },
      icon:     {
        type:     String,
        required: true,
      },
    },
    data(): any {
      return {
        idx:    null,
        active: false,
      };
    },
    computed:   {
      show() {
        return this.active || this.isActive;
      },
      cssClasses(): any {
        const classes = [this.$style.vueTab];

        if (this.active || this.isActive) {
          classes.push(this.$style.active);
        }

        classes.push(this.cssClass);

        return classes;
      },
    },
    methods:    {
      beforeEnter(el: HTMLElement) {
        el.style.opacity = '0.2';
      },
      enter(el: HTMLElement, done: any) {
        done();
        anime({
                targets:  el,
                opacity:  {
                  value:      '1',
                  duration:   1000,
                  elasticity: 0,
                },
                easing:   'easeInOutSine',
                complete: done,
              });
      },
      beforeLeave(el: HTMLElement) {
        el.style.transform = '0.8';
      },
      leave(el: HTMLElement, done: any) {
        done();
        anime({
                targets:  el,
                opacity:  {
                  value:      '0',
                  duration:   700,
                  elasticity: 0,
                },
                easing:   'easeInOutSine',
                complete: done,
              });
      },
    },
    created() {
      if (this.$parent) {
        this.$parent.register(this);
      }
    },
  };
</script>

<style lang="scss" module>
  @import "../../../styles";

  .vueTab {
    transition: $tab-item-transition;
  }
</style>
