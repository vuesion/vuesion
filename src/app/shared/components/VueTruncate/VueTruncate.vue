<template>
  <div :class="$style.vueTruncate">
    <div :class="$style.text" ref="text">

      <slot />

      <div :class="$style.fadeOut" ref="fadeOut"
           :style="{height: `${height}px`}"
           v-show="isTruncated"></div>

    </div>

    <a v-show="isTruncated && showMoreButton"
       href="#"
       @click.prevent="showMore">
      {{ $t('components.truncate.showMore' /* Show more */) }}
    </a>

    <a v-show="isTruncated && !showMoreButton"
       href="#"
       @click.prevent="showLess">
      {{ $t('components.truncate.showLess' /* Show less */) }}
    </a>
  </div>
</template>

<script lang="ts">
  import anime from 'animejs';

  export default {
    name:     'VueTruncate',
    props:    {
      lines:    {
        type:     Number,
        required: false,
        default:  3,
      },
      duration: {
        type:     Number,
        required: false,
        default:  250,
      },
    },
    computed: {
      height() {
        return this.lineHeight * (this.lines > 1 ? 2 : 0.6);
      },
    },
    data(): any {
      return {
        offsetHeight:    0,
        collapsedHeight: 0,
        lineHeight:      0,
        isTruncated:     false,
        showMoreButton:  false,
      };
    },
    methods:  {
      showMore() {
        anime(
          {
            targets:  this.$refs.text,
            height:   {
              value:    `${this.offsetHeight}px`,
              duration: this.duration,
            },
            round:    1,
            easing:   'easeInOutCirc',
            complete: () => this.showMoreButton = false,
          },
        );
        anime(
          {
            targets: this.$refs.fadeOut,
            opacity: {
              value:    0,
              duration: this.duration,
            },
            round:   1,
            easing:  'easeInOutCirc',
          },
        );
      },
      showLess() {
        anime(
          {
            targets:  this.$refs.text,
            height:   {
              value:    `${this.collapsedHeight}px`,
              duration: this.duration,
            },
            round:    1,
            easing:   'easeInOutCirc',
            complete: () => this.showMoreButton = true,
          },
        );
        anime(
          {
            targets: this.$refs.fadeOut,
            opacity: {
              value:    1,
              duration: this.duration,
            },
            round:   1,
            easing:  'easeInOutCirc',
          },
        );
      },
    },
    mounted() {
      this.offsetHeight = this.$refs.text.offsetHeight;
      this.lineHeight = parseFloat((window as any).getComputedStyle(this.$refs.text)['line-height']);
      this.collapsedHeight = this.lines * this.lineHeight;

      if (this.offsetHeight <= this.collapsedHeight) {
        return;
      }

      this.isTruncated = true;
      this.showMoreButton = true;
      this.$refs.text.style.height = this.collapsedHeight + 'px';
    },
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .vueTruncate {
    display: block;
  }

  .text {
    position: relative;
    overflow: hidden;
  }

  .fadeOut {
    position: absolute;
    bottom:   0;
    width:    100%;
    @include background-gradient(rgba(red($bg-color), green($bg-color), blue($bg-color), 0), $bg-color, 'vertical');
  }
</style>
