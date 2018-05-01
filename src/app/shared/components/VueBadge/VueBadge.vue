<template>
  <span :class="cssClasses">
    <slot />
  </span>
</template>

<script lang="ts">
  export default {
    name:     'VueBadge',
    props:    {
      cssClass: {
        type:    String,
        default: 'vueBadge',
      },
      primary:  {
        type: Boolean,
      },
      accent:   {
        type: Boolean,
      },
      warn:     {
        type: Boolean,
      },
    },
    computed: {
      cssClasses() {
        const classes: string[] = [this.$style.vueBadge, this.cssClass];

        if (this.primary) {
          classes.push(this.$style.primary);
        } else if (this.accent) {
          classes.push(this.$style.accent);
        } else if (this.warn) {
          classes.push(this.$style.warn);
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
    letter-spacing: $badge-letter-spacing;
    border-radius:  $badge-border-radius;
    color:          $badge-default-color;
    background:     $badge-default-bg;
  }

  .primary {
    color:      $badge-primary-color;
    background: $badge-primary-bg;
  }

  .accent {
    color:      $badge-accent-color;
    background: $badge-accent-bg;
  }

  .warn {
    color:      $badge-warn-color;
    background: $badge-warn-bg;
  }
</style>
