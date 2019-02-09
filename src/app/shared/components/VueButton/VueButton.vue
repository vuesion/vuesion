<template>
  <button :class="cssClasses" :disabled="disabled" @click="click" ref="button" :style="{ width: actualWidth }">
    <slot v-if="loading === false" />
    <vue-loader :class="$style.loader" v-if="loading === true" />
  </button>
</template>

<script lang="ts">
import VueLoader from '../VueLoader/VueLoader.vue';

export default {
  name: 'VueButton',
  props: {
    color: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
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
      if (this.color) {
        classes.push(this.$style[this.color]);
      }
      if (this.disabled || this.loading) {
        classes.push(this.$style.disabled);
      }

      return classes;
    },
    actualWidth() {
      return this.loading && this.$refs.button ? `${this.$refs.button.getBoundingClientRect().width}px` : null;
    },
  },
  methods: {
    click(e: Event) {
      if (!this.disabled && !this.loading) {
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
  text-transform: uppercase;
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

  &:active {
    box-shadow: $button-active-shadow;
  }

  &.disabled,
  &[disabled],
  fieldset[disabled] & {
    opacity: 0.6;
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
  position: absolute;
  left: 50%;
  margin-left: -($space-unit * 2);
  top: $space-unit * 0.25;
}

.primary {
  color: $button-primary-color;
  background: $button-primary-bg;
  border: $button-primary-border;

  &:hover {
    background: $button-primary-hover-bg;
  }

  :global {
    .vueLoaderPath {
      stroke: $button-primary-color;
    }
  }
}

.secondary {
  color: $button-secondary-color;
  background: $button-secondary-bg;
  border: $button-secondary-border;

  &:hover {
    background: $button-secondary-hover-bg;
  }

  :global {
    .vueLoaderPath {
      stroke: $button-secondary-color;
    }
  }
}

.tertiary {
  color: $button-tertiary-color;
  background: $button-tertiary-bg;
  border: $button-tertiary-border;

  &:hover {
    background: $button-tertiary-hover-bg;
  }

  :global {
    .vueLoaderPath {
      stroke: $button-tertiary-color;
    }
  }
}

.success {
  color: $button-success-color;
  background: $button-success-bg;
  border: $button-success-border;

  &:hover {
    background: $button-success-hover-bg;
  }

  :global {
    .vueLoaderPath {
      stroke: $button-success-color;
    }
  }
}

.warning {
  color: $button-warning-color;
  background: $button-warning-bg;
  border: $button-warning-border;

  &:hover {
    background: $button-warning-hover-bg;
  }

  :global {
    .vueLoaderPath {
      stroke: $button-warning-color;
    }
  }
}

.danger {
  color: $button-danger-color;
  background: $button-danger-bg;
  border: $button-danger-border;

  &:hover {
    background: $button-danger-hover-bg;
  }

  :global {
    .vueLoaderPath {
      stroke: $button-danger-color;
    }
  }
}

.outlined {
  border-width: $button-outlined-border-width;
  background: transparent;

  &:hover {
    background: transparent;
  }

  &.primary {
    color: $button-primary-bg;

    &:hover {
      border-color: $button-primary-hover-bg;
      color: $button-primary-hover-bg;
    }

    :global {
      .vueLoaderPath {
        stroke: $button-primary-bg;
      }
    }
  }

  &.secondary {
    color: $button-secondary-bg;

    &:hover {
      border-color: $button-secondary-hover-bg;
      color: $button-secondary-hover-bg;
    }

    :global {
      .vueLoaderPath {
        stroke: $button-secondary-bg;
      }
    }
  }

  &.tertiary {
    color: $button-tertiary-color;

    &:hover {
      border-color: $button-tertiary-hover-bg;
      color: darken($button-tertiary-color, 5%);
    }

    :global {
      .vueLoaderPath {
        stroke: $button-tertiary-bg;
      }
    }
  }

  &.danger {
    color: $button-danger-bg;

    &:hover {
      border-color: $button-danger-hover-bg;
      color: $button-danger-hover-bg;
    }

    :global {
      .vueLoaderPath {
        stroke: $button-danger-bg;
      }
    }
  }

  &.warning {
    color: $button-warning-bg;

    &:hover {
      border-color: $button-warning-hover-bg;
      color: $button-warning-hover-bg;
    }

    :global {
      .vueLoaderPath {
        stroke: $button-warning-bg;
      }
    }
  }

  &.success {
    color: $button-success-bg;

    &:hover {
      border-color: $button-success-hover-bg;
      color: $button-success-hover-bg;
    }

    :global {
      .vueLoaderPath {
        stroke: $button-success-bg;
      }
    }
  }
}

.ghost {
  border-color: transparent;

  &:hover {
    border-color: transparent !important;
  }
}
</style>
