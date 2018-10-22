<template>
  <span :class="cssClasses">
    <slot />
  </span>
</template>

<script lang="ts">
  export default {
    name:     'VueBadge',
    props:    {
      primary:   {
        type: Boolean,
      },
      secondary: {
        type: Boolean,
      },
      tertiary:  {
        type: Boolean,
      },
      danger:    {
        type: Boolean,
      },
      warning: {
        type: Boolean,
      },
      success:   {
        type: Boolean,
      },
      outlined:  {
        type:     Boolean,
        required: false,
        default:  false,
      },
    },
    computed: {
      cssClasses() {
        const classes: string[] = [this.$style.vueBadge];

        if (this.outlined) {
          classes.push(this.$style.outlined);
        }
        if (this.primary) {
          classes.push(this.$style.primary);
        }
        if (this.secondary) {
          classes.push(this.$style.secondary);
        }
        if (this.tertiary) {
          classes.push(this.$style.tertiary);
        }
        if (this.success) {
          classes.push(this.$style.success);
        }
        if (this.warning) {
          classes.push(this.$style.warning);
        }
        if (this.danger) {
          classes.push(this.$style.danger);
        }

        return classes;
      },
    },
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .vueBadge {
    display:        inline-block;
    padding:        $badge-padding;
    margin:         $badge-margin;
    font-size:      $badge-font-size;
    line-height:    $badge-line-height;
    font-weight:    $badge-font-weight;
    letter-spacing: $badge-letter-spacing;
    border-radius:  $badge-border-radius;
  }

  .primary {
    color:      $badge-primary-color;
    background: $badge-primary-bg;
  }

  .secondary {
    color:      $badge-secondary-color;
    background: $badge-secondary-bg;
  }

  .tertiary {
    color:      $badge-tertiary-color;
    background: $badge-tertiary-bg;
  }

  .success {
    color:      $badge-success-color;
    background: $badge-success-bg;
  }

  .warning {
    color:      $badge-warning-color;
    background: $badge-warning-bg;
  }

  .danger {
    color:      $badge-danger-color;
    background: $badge-danger-bg;
  }

  .outlined {
    border:     $badge-outlined-border-width solid transparent;
    background: transparent;

    &.primary {
      border-color: $badge-primary-bg;
      color:        $badge-primary-bg;
    }

    &.secondary {
      border-color: $badge-secondary-bg;
      color:        $badge-secondary-bg;
    }

    &.tertiary {
      border-color: $badge-tertiary-bg;
      color:        $badge-tertiary-color;
    }

    &.danger {
      border-color: $badge-danger-bg;
      color:        $badge-danger-bg;
    }

    &.warning {
      border-color: $badge-warning-bg;
      color:        $badge-warning-bg;
    }

    &.success {
      border-color: $badge-success-bg;
      color:        $badge-success-bg;
    }

  }
</style>
