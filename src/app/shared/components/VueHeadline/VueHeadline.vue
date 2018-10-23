<template>
  <component :is="component" :class="[$style.vueHeadline, cssClass]" v-on="$listeners">
    <slot />
  </component>
</template>

<script lang="ts">
  export default {
    name:       'VueHeadline',
    components: {},
    props:      {
      level:           {
        type:     String,
        required: true,
      },
      appearanceLevel: {
        type:     String,
        required: false,
      },
      native:          {
        type:    Boolean,
        default: true,
      },
    },
    computed:   {
      component() {
        let component: string = `h${this.level}`;

        if (this.native === false) {
          component = 'div';
        }

        return component;
      },
      cssClass() {
        return this.appearanceLevel
               ? this.$style[`h${this.appearanceLevel}`]
               : this.$style[`h${this.level}`];
      },
    },
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .vueHeadline {
    font-family: $font-family-headings;
    margin:      $space-unit * 3 0 $space-unit * 2 0;
  }

  .h1 {
    font-size:      $font-size-h1;
    font-weight:    $font-weight-h1;
    letter-spacing: $letter-spacing-h1;
    line-height:    $line-height-h1;
  }

  .h2 {
    font-size:      $font-size-h2;
    font-weight:    $font-weight-h2;
    letter-spacing: $letter-spacing-h2;
    line-height:    $line-height-h2;
  }

  .h3 {
    font-size:      $font-size-h3;
    font-weight:    $font-weight-h3;
    letter-spacing: $letter-spacing-h3;
    line-height:    $line-height-h3;
  }

  .h4 {
    font-size:      $font-size-h4;
    font-weight:    $font-weight-h4;
    letter-spacing: $letter-spacing-h4;
    line-height:    $line-height-h4;
  }

  .h5 {
    font-size:      $font-size-h5;
    font-weight:    $font-weight-h5;
    letter-spacing: $letter-spacing-h5;
    line-height:    $line-height-h5;
  }

  .h6 {
    font-size:      $font-size-h6;
    font-weight:    $font-weight-h6;
    letter-spacing: $letter-spacing-h6;
    line-height:    $line-height-h6;
  }
</style>
