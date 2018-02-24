<template>
  <div :class="[$style.vuePagination, cssClass]">
    <div :class="prevCssClasses" role="button" @click="prevClick"></div>
    <div :class="$style.label">
      {{current}} / {{pages}}
    </div>
    <div :class="nextCssClasses" role="button" @click="nextClick"></div>
  </div>
</template>

<script lang="ts">
  export default {
    name:       'VuePagination',
    components: {},
    props:      {
      cssClass: {
        type:    String,
        default: 'vuePagination',
      },
      pages:   {
        type:     Number,
        required: true,
      },
      current: {
        type:     Number,
        required: true,
      },
    },
    data(): any {
      return {};
    },
    computed:   {
      prevCssClasses() {
        const classes = [this.$style.prev];

        if (this.current <= 1) {
          classes.push(this.$style.disabled);
        }

        return classes;
      },
      nextCssClasses() {
        const classes = [this.$style.next];

        if (this.current >= this.pages) {
          classes.push(this.$style.disabled);
        }

        return classes;
      },
    },
    methods:    {
      prevClick() {
        if (this.current > 1) {
          this.$emit('change', this.current - 1);
        }
      },
      nextClick() {
        if (this.current < this.pages) {
          this.$emit('change', this.current + 1);
        }
      },
    },
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .vuePagination {
    padding: $pagination-padding;
    margin:  $pagination-margin;
    display: inline-flex;
  }

  .label {
    padding:    $pagination-label-padding;
    min-width:  $pagination-label-min-width;
    text-align: center;
  }

  .prev, .next {
    display:    inline-flex;
    width:      $pagination-button-size;
    height:     $pagination-button-size;
    position:   relative;
    box-shadow: $pagination-button-shadow;
    background: $pagination-button-bg;
    cursor:     pointer;

    &:before, &:after {
      content:          "";
      transition:       all 0.25s ease-in-out;
      position:         absolute;
      background-color: $pagination-arrow-color;
      width:            2px;
      height:           16px;
    }

    &.disabled {
      &:before, &:after {
        background-color: $pagination-arrow-disabled-color;
      }
    }
  }

  .prev {
    &:before {
      transform: translate(25px, 26px) rotate(135deg);
    }

    &:after {
      transform: translate(25px, 16px) rotate(-135deg)
    }
  }

  .next {
    &:before {
      transform: translate(28px, 16px) rotate(135deg);
    }

    &:after {
      transform: translate(28px, 26px) rotate(-135deg)
    }
  }
</style>
