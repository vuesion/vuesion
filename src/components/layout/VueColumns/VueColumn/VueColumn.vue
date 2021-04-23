<template>
  <vue-box
    :as="as"
    padding="null"
    margin="null"
    :class="[
      $style.vueColumn,
      fullWidth && $style.fullWidth,
      ...applyResponsiveClasses($style, {}, responsiveWidth, 'fit', false),
      ...applyResponsiveClasses($style, {}, responsiveHorizontalAlignments, 'alignh'),
    ]"
    :styles="styles"
  >
    <slot />
  </vue-box>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';
import { applyResponsiveClasses, parseResponsivePropValue } from '@/components/utils';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import { horizontalAlignmentValidator, responsivePropValidator, spacingValidator } from '@/components/prop-validators';
import isArray from 'lodash/isArray';

export default defineComponent({
  name: 'VueColumn',
  components: { VueBox },
  props: {
    as: {
      type: String,
      default: 'div',
    },
    space: {
      type: [Number, String, Array as () => Array<string | number>],
      validator: responsivePropValidator(spacingValidator),
      default: 24,
    },
    width: { type: [String, Array as () => Array<string>], default: () => null },
    align: {
      type: [String, Array as () => Array<string>],
      validator: responsivePropValidator(horizontalAlignmentValidator),
      default: null,
    },
  },
  setup(props) {
    const responsiveWidth = computed(() => parseResponsivePropValue(props.width, true));
    const responsiveHorizontalAlignments = computed(() => parseResponsivePropValue(props.align));
    const styles = computed(() => {
      const result: any = {};

      if (responsiveWidth.value.phone) {
        result['--phone'] = responsiveWidth.value.phone;
      }

      if (responsiveWidth.value.tabletPortrait) {
        result['--tablet-portrait'] = responsiveWidth.value.tabletPortrait;
      }

      if (responsiveWidth.value.tabletLandscape) {
        result['--tablet-landscape'] = responsiveWidth.value.tabletLandscape;
      }

      if (responsiveWidth.value.smallDesktop) {
        result['--small-desktop'] = responsiveWidth.value.smallDesktop;
      }

      if (responsiveWidth.value.largeDesktop) {
        result['--large-desktop'] = responsiveWidth.value.largeDesktop;
      }

      return result;
    });
    const fullWidth = computed(() => {
      const widthAsArray = isArray(props.width) ? props.width : [props.width];

      return widthAsArray.includes('content') === false;
    });

    return {
      responsiveWidth,
      responsiveHorizontalAlignments,
      styles,
      fullWidth,
      applyResponsiveClasses,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

.vueColumn {
  &.fullWidth {
    width: 100%;
  }

  &.alignh-left {
    display: flex;
    justify-content: flex-start;
  }

  &.alignh-center {
    display: flex;
    justify-content: center;
  }

  &.alignh-right {
    display: flex;
    justify-content: flex-end;
  }

  @include mediaMin(tabletPortrait) {
    &.alignh-tp-left {
      display: flex;
      justify-content: flex-start;
    }

    &.alignh-tp-center {
      display: flex;
      justify-content: center;
    }

    &.alignh-tp-right {
      display: flex;
      justify-content: flex-end;
    }
  }

  @include mediaMin(tabletLandscape) {
    &.alignh-tl-left {
      display: flex;
      justify-content: flex-start;
    }

    &.alignh-tl-center {
      display: flex;
      justify-content: center;
    }

    &.alignh-tl-right {
      display: flex;
      justify-content: flex-end;
    }
  }

  @include mediaMin(smallDesktop) {
    &.alignh-sd-left {
      display: flex;
      justify-content: flex-start;
    }

    &.alignh-sd-center {
      display: flex;
      justify-content: center;
    }

    &.alignh-sd-right {
      display: flex;
      justify-content: flex-end;
    }
  }

  @include mediaMin(largeDesktop) {
    &.fit-ld {
      flex-basis: var(--large-desktop);
      flex-grow: 0;
      flex-shrink: 0;
    }

    &.alignh-ld-left {
      display: flex;
      justify-content: flex-start;
    }

    &.alignh-ld-center {
      display: flex;
      justify-content: center;
    }

    &.alignh-ld-right {
      display: flex;
      justify-content: flex-end;
    }
  }

  @include mediaMinMax(phone) {
    &.fit {
      flex-basis: var(--phone);
      flex-grow: 0;
      flex-shrink: 0;
    }
  }

  @include mediaMinMax(tabletPortrait) {
    &.fit-tp {
      flex-basis: var(--tablet-portrait);
      flex-grow: 0;
      flex-shrink: 0;
    }
  }

  @include mediaMinMax(tabletLandscape) {
    &.fit-tl {
      flex-basis: var(--tablet-landscape);
      flex-grow: 0;
      flex-shrink: 0;
    }
  }

  @include mediaMinMax(smallDesktop) {
    &.fit-sd {
      flex-basis: var(--small-desktop);
      flex-grow: 0;
      flex-shrink: 0;
    }
  }
}
</style>
