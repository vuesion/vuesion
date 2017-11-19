<template>
  <button :class="[$style.button, $style.ripple, isActive ? $style.active : '']" @click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({
    props: {
      isActive: {
        type: Boolean,
        required: false
      }
    },
  })
  class VueButton extends Vue {
    onClick(e: Event) {
      this.$emit('click', e);
    }
  }

  export default VueButton;
</script>

<style lang="scss" module>
  @import "../variables";

  .button {
    display:          inline-block;
    margin-bottom:    0;
    text-align:       center;
    vertical-align:   middle;
    touch-action:     manipulation;
    cursor:           pointer;
    background-image: none;
    border:           1px solid transparent;
    white-space:      nowrap;
    letter-spacing:   0.5px;
    height:           32px;
    text-transform:   uppercase;
    min-width:        80px;
    position:         relative;
    overflow:         hidden;
    font-size:        16px;
    font-weight:      400;
    border-radius:    3px;

    &.disabled,
    &[disabled],
    fieldset[disabled] & {
      cursor: not-allowed;
    }

    &.active {
      background-color: $link-active-color;
      color:            #FFF;
      font-weight:      700;
    }
  }

  .ripple {
    position:  relative;
    overflow:  hidden;
    transform: translate3d(0, 0, 0);

    &:after {
      content:             "";
      display:             block;
      position:            absolute;
      width:               100%;
      height:              100%;
      top:                 0;
      left:                0;
      pointer-events:      none;
      background-image:    radial-gradient(circle, #000 10%, transparent 10.01%);
      background-repeat:   no-repeat;
      background-position: 50%;
      transform:           scale(10, 10);
      opacity:             0;
      transition:          transform .5s, opacity .5s;
    }

    &:active:after {
      transform:  scale(0, 0);
      opacity:    .2;
      transition: 0s;
    }
  }
</style>
