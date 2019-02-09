<template>
  <span :class="cssClasses"> <slot /> </span>
</template>

<script lang="ts">
export default {
  name: 'VueBadge',
  props: {
    color: {
      type: String,
    },
    outlined: {
      type: Boolean,
    },
  },
  computed: {
    cssClasses() {
      const classes: string[] = [this.$style.vueBadge];

      if (this.outlined) {
        classes.push(this.$style.outlined);
      }

      if (this.color) {
        classes.push(this.$style[this.color]);
      }

      return classes;
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.vueBadge {
  display: inline-block;
  padding: $badge-padding;
  margin: $badge-margin;
  font-size: $badge-font-size;
  line-height: $badge-line-height;
  font-weight: $badge-font-weight;
  letter-spacing: $badge-letter-spacing;
  border-radius: $badge-border-radius;
}

.primary {
  color: $badge-primary-color;
  background: $badge-primary-bg;
}

.secondary {
  color: $badge-secondary-color;
  background: $badge-secondary-bg;
}

.tertiary {
  color: $badge-tertiary-color;
  background: $badge-tertiary-bg;
}

.success {
  color: $badge-success-color;
  background: $badge-success-bg;
}

.warning {
  color: $badge-warning-color;
  background: $badge-warning-bg;
}

.danger {
  color: $badge-danger-color;
  background: $badge-danger-bg;
}

.outlined {
  border: $badge-outlined-border-width solid transparent;
  background: transparent;

  &.primary {
    border-color: $badge-primary-bg;
    color: $badge-primary-bg;
  }

  &.secondary {
    border-color: $badge-secondary-bg;
    color: $badge-secondary-bg;
  }

  &.tertiary {
    border-color: $badge-tertiary-bg;
    color: $badge-tertiary-color;
  }

  &.danger {
    border-color: $badge-danger-bg;
    color: $badge-danger-bg;
  }

  &.warning {
    border-color: $badge-warning-bg;
    color: $badge-warning-bg;
  }

  &.success {
    border-color: $badge-success-bg;
    color: $badge-success-bg;
  }
}
</style>
