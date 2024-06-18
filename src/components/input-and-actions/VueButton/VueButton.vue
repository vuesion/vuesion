<template>
  <nuxt-link
    v-if="isRouterLink"
    ref="buttonRef"
    :to="to"
    :disabled="isDisabled"
    :class="[
      $style.button,
      $style[look],
      $style[size],
      isDisabled && $style.disabled,
      block && $style.block,
      leadingIcon && $style.hasLeadingIcon,
      trailingIcon && $style.hasTrailingIcon,
    ]"
    :style="{ width: actualWidth }"
    :event="!isDisabled && isRouterLink ? 'click' : null"
    :tabindex="isDisabled ? -1 : 0"
    :aria-hidden="isDisabled"
    :type="type"
    v-bind="$attrs"
  >
    <component
      :is="`vue-icon-${leadingIcon}`"
      v-if="leadingIcon && loading === false"
      aria-hidden="true"
      :class="[$style.leadingIcon]"
    />

    <vue-text
      v-if="$slots.default && loading === false"
      :class="$style.text"
      look="button"
      weight="semi-bold"
      as="span"
    >
      <slot />
    </vue-text>

    <component
      :is="`vue-icon-${trailingIcon}`"
      v-if="trailingIcon && loading === false"
      aria-hidden="true"
      :class="[$style.trailingIcon]"
    />

    <vue-loader v-if="loading === true" :class="$style.loader" />
  </nuxt-link>
  <component
    :is="as"
    v-else
    ref="buttonRef"
    :href="isRegularLink && href"
    :disabled="isDisabled"
    :class="[
      $style.button,
      $style[look],
      $style[size],
      isDisabled && $style.disabled,
      block && $style.block,
      leadingIcon && $style.hasLeadingIcon,
      trailingIcon && $style.hasTrailingIcon,
    ]"
    :style="{ width: actualWidth }"
    :tabindex="isDisabled ? -1 : 0"
    :aria-hidden="isDisabled"
    :type="type"
    v-on="{
      click: onClick,
    }"
  >
    <component
      :is="`vue-icon-${leadingIcon}`"
      v-if="leadingIcon && loading === false"
      aria-hidden="true"
      :class="[$style.leadingIcon, $slots.default && $style.addSpace]"
    />

    <vue-text
      v-if="$slots.default && loading === false"
      :class="$style.text"
      look="button"
      weight="semi-bold"
      as="span"
    >
      <slot />
    </vue-text>

    <component
      :is="`vue-icon-${trailingIcon}`"
      v-if="trailingIcon && loading === false"
      aria-hidden="true"
      :class="[$style.trailingIcon, $slots.default && $style.addSpace]"
    />

    <vue-loader v-if="loading === true" :class="$style.loader" />
  </component>
</template>

<script setup lang="ts">
import { computed, useCssModule } from 'vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueLoader from '~/components/data-display/VueLoader/VueLoader.vue';
import type { ButtonStyle, ShirtSize } from '~/components/prop-types';
import { getDomRef } from '~/composables/get-dom-ref';
import type { Icon } from '~/components/icon-options';

// Interface
interface ButtonProps {
  as?: string;
  block?: boolean;
  disabled?: boolean;
  to?: string;
  href?: string;
  leadingIcon?: Icon;
  loading?: boolean;
  look?: ButtonStyle;
  size?: ShirtSize;
  trailingIcon?: Icon;
  type?: string;
}
interface ButtonEmits {
  (event: 'click', e: Event): void;
}
const props = withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
  block: false,
  disabled: false,
  to: undefined,
  href: undefined,
  leadingIcon: undefined,
  loading: false,
  look: 'secondary',
  size: 'md',
  trailingIcon: undefined,
  type: 'button',
});
const emit = defineEmits<ButtonEmits>();

// Deps
const $style = useCssModule();

// Data
const buttonRef = getDomRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
const actualWidth = computed(() => {
  if (buttonRef.value === null) {
    return null;
  }

  return props.loading && buttonRef.value && buttonRef.value.getBoundingClientRect
    ? `${buttonRef.value.getBoundingClientRect().width}px`
    : null;
});
const isDisabled = computed(() => props.disabled || props.loading);
const isRouterLink = computed(() => props.as === 'nuxt-link');
const isRegularLink = computed(() => props.as === 'a');

// Event Handlers
const onClick = (e: Event) => {
  if (isRegularLink.value && isDisabled.value) {
    e.preventDefault();
    e.stopPropagation();
  }
  if (isDisabled.value === false) {
    emit('click', e);
  }
};
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.button {
  display: inline-flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  white-space: nowrap;
  min-width: $button-min-width;
  position: relative;
  overflow: hidden;
  border-radius: $button-border-radius;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  border: none;
  outline: none;
  text-decoration: none;
  gap: $button-gap;

  // Sizes
  &.sm {
    padding: $button-sm-padding;
    height: $input-control-sm-height;
  }

  &.md {
    padding: $button-md-padding;
    height: $input-control-md-height;
  }

  &.lg {
    padding: $button-lg-padding;
    height: $input-control-lg-height;
  }

  // Styles
  @each $variation, $values in $button-variations {
    &.#{$variation} {
      color: map-get($values, 'color');
      background: map-get($values, 'bg');

      > span {
        color: map-get($values, 'color');
      }

      @if map-get($values, 'border') {
        border: map-get($values, 'border');
      } @else {
        border: 1px solid transparent;
      }

      &:hover {
        background: map-get($values, 'hover-bg');
        color: map-get($values, 'hover-color');
      }

      &:focus {
        box-shadow: $button-outline;
      }

      &:active {
        background: map-get($values, 'active-bg');
        color: map-get($values, 'active-color');
      }

      .loader {
        circle {
          stroke: map-get($values, 'color');
        }
      }

      &.disabled,
      &[disabled],
      fieldset[disabled] & {
        color: map-get($values, 'color');
        background: map-get($values, 'bg');
      }
    }
  }

  &.disabled,
  &[disabled] fieldset[disabled] & {
    opacity: $button-disabled-opacity;
    cursor: not-allowed;
  }

  &.block {
    min-width: auto;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .loader {
    position: initial;
    width: $text-2;
    height: $text-2;
  }

  .text {
    display: inline-flex;
    align-items: center;
    height: 100%;
  }

  // icons

  .leadingIcon,
  .trailingIcon {
    height: $button-icon-size;
    width: $button-icon-size;
  }
}
</style>
