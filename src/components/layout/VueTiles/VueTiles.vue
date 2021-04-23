<template>
  <component
    :is="as"
    :class="[
      $style.vueTiles,
      ...applyResponsiveClasses($style, {}, responsiveVerticalSpacings, 'spacev'),
      ...applyResponsiveClasses($style, {}, responsiveHorizontalSpacings, 'spaceh'),
    ]"
    :style="styles"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import defaultTo from 'lodash/defaultTo';
import { computed, defineComponent } from '@vue/composition-api';
import { responsivePropValidator, spacingValidator } from '@/components/prop-validators';
import { applyResponsiveClasses, parseResponsivePropValue } from '@/components/utils';

export default defineComponent({
  name: 'VueTiles',
  components: {},
  props: {
    as: {
      type: String,
      default: 'div',
    },
    space: {
      type: [Number, String, Array as () => Array<string | number>],
      validator: responsivePropValidator(spacingValidator),
      default: '24',
    },
    verticalSpace: {
      type: [Number, String, Array as () => Array<string | number>],
      validator: responsivePropValidator(spacingValidator),
      default: null,
    },
    horizontalSpace: {
      type: [Number, String, Array as () => Array<string | number>],
      validator: responsivePropValidator(spacingValidator),
      default: null,
    },
    columns: {
      type: [Number, String, Array as () => Array<string | number>],
      default: 1,
    },
  },
  setup(props) {
    const responsiveVerticalSpacings = computed(() =>
      parseResponsivePropValue(defaultTo(props.verticalSpace, props.space)),
    );
    const responsiveHorizontalSpacings = computed(() =>
      parseResponsivePropValue(defaultTo(props.horizontalSpace, props.space)),
    );
    const responsiveColumns = computed(() => parseResponsivePropValue(props.columns, true));
    const styles = computed(() => {
      return {
        '--phone': responsiveColumns.value.phone,
        '--tablet-portrait': responsiveColumns.value.tabletPortrait,
        '--tablet-landscape': responsiveColumns.value.tabletLandscape,
        '--small-desktop': responsiveColumns.value.smallDesktop,
        '--large-desktop': responsiveColumns.value.largeDesktop,
      };
    });

    return {
      responsiveVerticalSpacings,
      responsiveHorizontalSpacings,
      styles,
      applyResponsiveClasses,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

.vueTiles {
  display: grid;
  grid-template-columns: repeat(var(--phone), minmax(min-content, 1fr));

  @each $name, $space in $spacings {
    &.spacev-#{$name} {
      row-gap: $space;
    }

    &.spaceh-#{$name} {
      column-gap: $space;
    }
  }

  @include mediaMin(tabletPortrait) {
    grid-template-columns: repeat(var(--tablet-portrait), minmax(min-content, 1fr));

    @each $name, $space in $spacings {
      &.spacev-tp-#{$name} {
        row-gap: $space;
      }

      &.spaceh-tp-#{$name} {
        column-gap: $space;
      }
    }
  }

  @include mediaMin(tabletLandscape) {
    grid-template-columns: repeat(var(--tablet-landscape), minmax(min-content, 1fr));

    @each $name, $space in $spacings {
      &.spacev-tl-#{$name} {
        row-gap: $space;
      }

      &.spaceh-tl-#{$name} {
        column-gap: $space;
      }
    }
  }

  @include mediaMin(smallDesktop) {
    grid-template-columns: repeat(var(--small-desktop), minmax(min-content, 1fr));

    @each $name, $space in $spacings {
      &.spacev-sd-#{$name} {
        row-gap: $space;
      }

      &.spaceh-sd-#{$name} {
        column-gap: $space;
      }
    }
  }

  @include mediaMin(largeDesktop) {
    grid-template-columns: repeat(var(--large-desktop), minmax(min-content, 1fr));

    @each $name, $space in $spacings {
      &.spacev-ld-#{$name} {
        row-gap: $space;
      }

      &.spaceh-ld-#{$name} {
        column-gap: $space;
      }
    }
  }
}
</style>
