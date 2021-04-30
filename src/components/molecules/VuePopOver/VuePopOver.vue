<template>
  <span
    tabindex="0"
    data-testid="pop-over"
    :class="[$style.vuePopOver, $style[alignment]]"
    @focus="onFocus"
    @blur="onBlur"
  >
    <vue-icon-info-circle />
    <vue-text ref="popOverRef" appearance="default" color="text-medium" as="div">
      <slot />
    </vue-text>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import VueText from '@/components/atoms/VueText/VueText.vue';
import VueIconInfoCircle from '@/components/atoms/icons/VueIconInfoCircle/VueIconInfoCircle.vue';

export default defineComponent({
  name: 'VuePopOver',
  components: { VueIconInfoCircle, VueText },
  props: {
    align: {
      type: String,
      validator: (value: string) => {
        return ['left', 'right'].includes(value.toLowerCase());
      },
      default: 'left',
    },
  },
  setup(props) {
    const popOverRef = ref<any>(null);
    const alignment = ref<string>(props.align);
    const onFocus = () => {
      const popOver: HTMLElement = popOverRef.value.$el;

      popOver.style.display = 'block';

      const elementLeft = Math.ceil(popOver.getBoundingClientRect().left);
      const elementRight = Math.ceil(popOver.getBoundingClientRect().right);
      const negativeMargin = elementLeft - 16;
      const parent = popOver.parentElement.parentElement;
      const parentLeft = parent.getBoundingClientRect().left;
      const parentRight = parent.getBoundingClientRect().right;

      popOver.style.display = 'none';
      popOver.style.marginLeft = `-${negativeMargin}px`;

      /* istanbul ignore next */
      if (elementRight > parentRight) {
        alignment.value = 'right';
      } else if (elementLeft < parentLeft) {
        alignment.value = 'left';
      }

      popOver.style.display = 'block';
    };
    const onBlur = () => {
      const popOver: HTMLElement = popOverRef.value.$el;
      popOver.style.display = 'none';
      popOver.style.marginLeft = `0`;
    };

    return {
      popOverRef,
      alignment,
      onFocus,
      onBlur,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vuePopOver {
  position: relative;
  display: inline-block;
  width: $pop-over-icon-size;
  height: $pop-over-icon-size;

  &:active,
  &:focus {
    > i {
      &:after {
        content: ' ';
        display: inline-block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 $space-12 $space-12 $space-12;
        border-color: transparent transparent $pop-over-bg transparent;
        position: absolute;
        top: 100%;
        z-index: 101;
      }
    }
  }

  > i {
    color: palette-color-level('info', 0);
    width: $pop-over-icon-size;
    height: $pop-over-icon-size;
    cursor: pointer;
    position: relative;
  }

  > div {
    position: absolute;
    padding: $pop-over-padding;
    background-color: $pop-over-bg;
    margin: -1px 0 0;
    display: none;
    z-index: 100;
    text-align: left;
    top: $pop-over-icon-size + $space-12;
    width: calc(100vw - #{$space-32});
    box-shadow: $pop-over-shadow;
    border-radius: $pop-over-border-radius;
  }

  @include mediaMin(smallDesktop) {
    > div {
      width: 320px;
      margin: 0 !important;
      left: -$space-24;
      right: unset;
    }

    &.left {
      > div {
        left: -$space-24;
        right: unset;
      }
    }

    &.right {
      > div {
        left: unset;
        right: -$space-24;
      }
    }
  }
}
</style>
