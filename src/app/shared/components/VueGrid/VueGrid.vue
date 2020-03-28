<template>
  <div
    :class="[$style.grid, fill && $style.fill, space && $style[space], withVerticalSpace && $style.withVerticalSpace]"
    :style="{ textAlign }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from '@vue/composition-api';
import { spacingValidator } from '@components/utils';

export default defineComponent({
  name: 'VueGrid',
  props: {
    space: { type: String, validator: spacingValidator, default: 'md' },
    textAlign: { type: String, default: 'left' },
    withVerticalSpace: { type: Boolean, default: false },
    fill: { type: Boolean, default: false },
  },
  setup(props) {
    provide('gridSpace', props.space);
    provide('gridWithVerticalSpace', props.withVerticalSpace);
    provide('gridTextAlign', props.textAlign);
  },
});
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.grid {
  max-width: 425px;
  margin: 0 auto;
  position: relative;
  padding: 0;

  @include mediaMin(tabletPortrait) {
    max-width: $screen-tablet-portrait;
  }

  @include mediaMin(tabletLandscape) {
    max-width: $screen-tablet-landscape;
  }

  @include mediaMin(smallDesktop) {
    max-width: $screen-small-desktop;
  }

  @include mediaMin(largeDesktop) {
    max-width: $screen-large-desktop;
  }

  &.fill {
    width: 100%;
    max-width: 100%;
  }

  &.sm {
    padding: 0 $gutter-sm;

    &.withVerticalSpace {
      padding-bottom: $gutter-sm;
    }
  }

  &.md {
    padding: 0 $gutter-md;

    &.withVerticalSpace {
      padding-bottom: $gutter-md;
    }
  }

  &.lg {
    padding: 0 $gutter-lg;

    &.withVerticalSpace {
      padding-bottom: $gutter-lg;
    }
  }
}
</style>
