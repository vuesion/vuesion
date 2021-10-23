<template>
  <component
    :is="as"
    ref="buttonRef"
    :to="isRouterLink && href"
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
    :event="!isDisabled && isRouterLink ? 'click' : null"
    :tabindex="isDisabled ? -1 : 0"
    :aria-hidden="isDisabled"
    :type="type"
    v-on="{
      ...$listeners,
      click: onClick,
    }"
  >
    <component
      :is="`vue-icon-${leadingIcon}`"
      v-if="leadingIcon && loading === false"
      aria-hidden="true"
      :class="[$style.leadingIcon, $slots.default && $style.addSpace]"
    />

    <vue-text v-if="loading === false" :class="$style.text" look="button" weight="semi-bold" as="span">
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

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import { getDomRef } from '@/composables/get-dom-ref';
import { shirtSizeValidator, buttonStyleValidator } from '@/components/prop-validators';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueLoader from '@/components/data-display/VueLoader/VueLoader.vue';

export default defineComponent({
  name: 'VueButton',
  components: {
    VueLoader,
    VueText,
  },
  props: {
    disabled: { type: Boolean, default: false },
    block: { type: Boolean, default: false },
    look: { type: String, validator: buttonStyleValidator, default: 'secondary' },
    size: { type: String, validator: shirtSizeValidator, default: 'md' },
    loading: { type: Boolean, default: false },
    as: { type: String, default: 'button' },
    type: { type: String, default: 'button' },
    href: { type: String, default: null },
    leadingIcon: { type: String, default: null },
    trailingIcon: { type: String, default: null },
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
@import '~@/assets/_design-system.scss';

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

  // Sizes
  &.sm {
    padding: $button-sm-padding;
    height: $input-control-sm-height;

    &.hasLeadingIcon {
      &.addSpace {
        padding-left: $button-sm-has-icon-space;
      }
    }

    &.hasTrailingIcon {
      &.addSpace {
        padding-right: $button-sm-has-icon-space;
      }
    }
  }

  &.md {
    padding: $button-md-padding;
    height: $input-control-md-height;

    &.hasLeadingIcon {
      &.addSpace {
        padding-left: $button-md-has-icon-space;
      }
    }

    &.hasTrailingIcon {
      &.addSpace {
        padding-right: $button-md-has-icon-space;
      }
    }
  }

  &.lg {
    padding: $button-lg-padding;
    height: $input-control-lg-height;

    &.hasLeadingIcon {
      &.addSpace {
        padding-left: $button-lg-has-icon-space;
      }
    }

    &.hasTrailingIcon {
      &.addSpace {
        padding-right: $button-lg-has-icon-space;
      }
    }
  }

  // Styles
  @each $variation, $values in $button-variations {
    &.#{$variation} {
      color: map-get($values, 'color');
      background: map-get($values, 'bg');

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

  .leadingIcon {
    &.addSpace {
      margin-right: $button-icon-gap;
    }
  }
  .trailingIcon {
    &.addSpace {
      margin-left: $button-icon-gap;
    }
  }
}
</style>
