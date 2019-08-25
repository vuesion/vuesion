<template>
  <component
    :is="as"
    :to="isRouterLink && target"
    :href="isRegularLink && target"
    :disabled="disabled"
    :class="cssClasses"
    @click="click"
    @click.native="click"
    ref="button"
    :style="{ width: actualWidth }"
    :event="!isDisabled && isRouterLink ? 'click' : null"
    :tabindex="isDisabled ? -1 : 0"
    :aria-hidden="isDisabled"
  >
    <slot v-if="loading === false" />
    <vue-loader :class="$style.loader" v-if="loading === true" />
  </component>
</template>

<script lang="ts">
import VueLoader from '@components/VueLoader/VueLoader.vue';
import { variationValidator } from '@components/utils';

export default {
  name: 'VueButton',
  props: {
    color: {
      type: String,
      validator: variationValidator,
      default: 'default',
    },
    disabled: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
    },
    as: {
      type: String,
      default: 'button',
    },
    target: {
      type: String,
    },
    outlined: {
      type: Boolean,
    },
    ghost: {
      type: Boolean,
    },
  },
  components: {
    VueLoader,
  },
  computed: {
    cssClasses() {
      const classes = [this.$style.button, this.$style.ripple];

      if (this.outlined || this.ghost) {
        classes.push(this.$style.outlined);
      }
      if (this.ghost) {
        classes.push(this.$style.ghost);
      }

      classes.push(this.$style[this.color]);

      if (this.disabled || this.loading) {
        classes.push(this.$style.disabled);
      }

      return classes;
    },
    actualWidth() {
      return this.loading && this.$refs.button ? `${this.$refs.button.getBoundingClientRect().width}px` : null;
    },
    isDisabled() {
      return this.disabled || this.loading;
    },
    isRouterLink() {
      return this.as === 'router-link';
    },
    isRegularLink() {
      return this.as === 'a';
    },
  },
  methods: {
    click(e: Event) {
      if (this.isRegularLink && this.isDisabled) {
        e.preventDefault();
        e.stopPropagation();
      }

      if (this.isDisabled === false) {
        this.$emit('click', e);
      }
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.button {
  display: inline-block;
  margin: $button-margin;
  padding: $button-padding;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  white-space: nowrap;
  text-transform: $button-text-transform;
  min-width: $button-min-width;
  position: relative;
  overflow: hidden;
  font-family: $button-font-family;
  font-size: $button-font-size;
  font-weight: $button-font-weight;
  border-radius: $button-border-radius;
  box-shadow: $button-shadow;
  transition: $button-transition;
  transition-property: box-shadow, background-color;
  height: $button-height;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  text-decoration: $button-text-decoration;

  &:active {
    box-shadow: $button-active-shadow;
    text-decoration: $button-hover-text-decoration;
  }

  &:hover {
    text-decoration: $button-hover-text-decoration;
  }

  &.disabled,
  &[disabled],
  fieldset[disabled] & {
    opacity: $button-disabled-opacity;
    cursor: not-allowed;
    box-shadow: none;

    &:hover {
      box-shadow: none;
    }
  }
}

.ripple {
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.5s, opacity 0.5s;
  }

  &:active:before {
    transform: scale(0, 0);
    opacity: 0.2;
    transition: 0s;
  }
}

.loader {
  top: $space-2;
  width: $loader-size - $space-4;
  height: $loader-size - $space-4;
}

@each $variation, $values in $button-variations {
  .#{$variation} {
    color: map-get($values, 'color');
    background: map-get($values, 'bg');
    border: map-get($values, 'border');

    &:hover {
      background: map-get($values, 'hover-bg');
      color: map-get($values, 'hover-color');
      border-color: map-get($values, 'hover-bg');
    }

    :global {
      .vueLoaderPath {
        stroke: map-get($values, 'color');
      }
    }
  }

  .outlined {
    &.#{$variation} {
      color: map-get($values, 'bg');

      &:hover {
        border-color: map-get($values, 'hover-bg');
        color: map-get($values, 'hover-bg');
      }

      :global {
        .vueLoaderPath {
          stroke: map-get($values, 'bg');
        }
      }
    }
  }
}

.outlined {
  border-width: $button-outlined-border-width;
  background: transparent;

  &:hover {
    background: transparent;
  }
}

.ghost {
  border-color: transparent;

  &:hover {
    border-color: transparent !important;
  }
}
</style>
