<template>
  <component
    :is="as"
    ref="buttonRef"
    :to="isRouterLink && href"
    :href="isRegularLink && href"
    :disabled="isDisabled"
    :class="[$style.button, $style[color], isDisabled && $style.disabled, ghost && $style.ghost, block && $style.block]"
    :style="{ width: actualWidth }"
    :event="!isDisabled && isRouterLink ? 'click' : null"
    :tabindex="isDisabled ? -1 : 0"
    :aria-hidden="isDisabled"
    :type="type"
    v-on="{
      ...$listeners,
      click: onClick,
    }"
  >
    <vue-text v-if="loading === false" :class="$style.text" appearance="button" weight="semi-bold" as="span">
      <slot />
    </vue-text>
    <vue-loader v-else :class="$style.loader" />
  </component>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import { getDomRef } from '@/composables/get-dom-ref';
import { colorVariationValidator } from '@/components/prop-validators';
import VueText from '@/components/atoms/VueText/VueText.vue';
import VueLoader from '@/components/atoms/VueLoader/VueLoader.vue';

export default defineComponent({
  name: 'VueButton',
  components: {
    VueLoader,
    VueText,
  },
  props: {
    disabled: { type: Boolean, default: false },
    block: { type: Boolean, default: false },
    color: { type: String, validator: colorVariationValidator, default: 'neutral' },
    loading: { type: Boolean, default: false },
    ghost: { type: Boolean, default: false },
    as: { type: String, default: 'button' },
    type: { type: String, default: 'button' },
    href: { type: String, default: null },
  },
  setup(props, { emit }) {
    const buttonRef = getDomRef(null);
    const actualWidth = computed(() => {
      if (buttonRef.value === null) {
        return null;
      }

      const $el = buttonRef.value.getBoundingClientRect ? buttonRef.value : buttonRef.value.$el;

      return props.loading ? `${$el.getBoundingClientRect().width}px` : null;
    });
    const isDisabled = computed(() => props.disabled || props.loading);
    const isRouterLink = computed(() => props.as === 'nuxt-link');
    const isRegularLink = computed(() => props.as === 'a');
    const onClick = (e: Event) => {
      if (isRegularLink.value && isDisabled.value) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (isDisabled.value === false) {
        emit('click', e);
      }
    };

    return {
      actualWidth,
      isDisabled,
      isRouterLink,
      isRegularLink,
      onClick,
      buttonRef,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.button {
  display: inline-flex;
  align-items: center;
  padding: $button-padding;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  white-space: nowrap;
  min-width: $button-min-width;
  position: relative;
  overflow: hidden;
  border-radius: $button-border-radius;
  height: $button-height;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  border: $button-border-width solid transparent;
  outline: none;
  text-decoration: none;

  &.disabled,
  &[disabled] fieldset[disabled] & {
    opacity: $button-disabled-opacity;
    cursor: not-allowed;
  }

  @each $variation, $values in $button-variations {
    &.#{$variation} {
      color: map-get($values, 'color');
      background: map-get($values, 'bg');
      border: map-get($values, 'border');

      &:hover {
        background: map-get($values, 'hover-bg');
        color: map-get($values, 'hover-color');
        border-color: map-get($values, 'hover-bg');
      }

      &:focus {
        box-shadow: 0 0 0 2px map-get($values, 'focus-bg');
      }

      &:active {
        background: map-get($values, 'active-bg');
        color: map-get($values, 'active-color');
        border-color: map-get($values, 'active-bg');
      }

      circle {
        stroke: map-get($values, 'color');
      }

      &.ghost {
        color: map-get($values, 'bg');

        &:hover {
          background: map-get($values, 'hover-bg') !important;
          color: map-get($values, 'hover-color') !important;
          border-color: map-get($values, 'hover-bg') !important;
        }

        &:focus {
          box-shadow: 0 0 0 2px map-get($values, 'focus-bg');
          background: map-get($values, 'bg');
          color: map-get($values, 'color');
        }
      }

      &.disabled,
      &[disabled],
      fieldset[disabled] & {
        color: map-get($values, 'color');
        background: map-get($values, 'bg');
        border: map-get($values, 'border');
      }
    }
  }

  &.ghost {
    background: transparent;
    border-color: transparent;
  }

  &.block {
    min-width: auto;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  i {
    height: $button-icon-size;
    width: $button-icon-size;
  }

  .text {
    display: inline-flex;
    align-items: center;
    height: $button-height;
  }
}

.loader {
  position: initial;
  width: $text-2;
  height: $text-2;
}
</style>
