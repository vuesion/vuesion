<template>
  <div :class="cssClasses" @mouseenter="onEnter" @mouseleave="onLeave" @touchend="onTouchEnd" :data-tip="tip">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'VueTooltip',
  props: {
    tip: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
    },
  },
  data(): any {
    return {
      show: false,
    };
  },
  computed: {
    cssClasses() {
      const classes: string[] = [this.$style.vueTooltip];

      if (this.show) {
        classes.push(this.$style.show);
      }

      if (!this.disabled && this.$slots.default && this.$slots.default[0].tag === undefined) {
        classes.push(this.$style.highlight);
      }

      return classes;
    },
  },
  methods: {
    onEnter() {
      if (!this.disabled) {
        this.show = true;
      }
    },
    onLeave() {
      this.show = false;
    },
    onTouchEnd() {
      if (!this.disabled) {
        this.show = !this.show;
      }
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.vueTooltip {
  display: inline-block;
  position: relative;
  border-bottom: 1px dashed transparent;
  border-radius: $tooltip-border-radius;

  &:before,
  &:after {
    display: block;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    transform: translate3d(0, 8px, 0);
    transition-property: opacity, transform;
    transition-duration: var(--brand-transition-duration);
    transition-timing-function: ease-in-out;
  }

  &:before {
    background: $tooltip-bg;
    color: $tooltip-color;
    content: attr(data-tip);
    padding: $tooltip-padding;
    top: -$space-32;
    white-space: nowrap;
    box-shadow: $tooltip-shadow;
    border-radius: $tooltip-border-radius;
  }

  &:after {
    border-right: $space-8 solid transparent;
    border-top: $space-8 solid $tooltip-bg;
    border-left: $space-8 solid transparent;
    content: '';
    height: 0;
    top: -$space-8;
    left: $space-8;
    width: 0;
  }
}

.show {
  &:before,
  &:after {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.highlight {
  border-bottom: 1px dashed $tooltip-highlight-color;
}
</style>
