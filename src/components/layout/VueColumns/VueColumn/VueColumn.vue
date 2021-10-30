<template>
  <vue-box
    :as="as"
    :padding="null"
    :auto-height="autoHeight"
    :margin="null"
    :class="[
      $style.vueColumn,
      canGrow && $style.canGrow,
      canShrink && $style.canShrink,
      ...applyResponsiveClasses($style, {}, responsiveWidth, 'fit', false),
      ...applyResponsiveClasses($style, {}, responsiveHorizontalAlignments, 'alignh'),
      ...applyResponsiveClasses($style, {}, responsiveVerticalAlignments, 'alignv'),
    ]"
    :styles="styles"
  >
    <slot />
  </vue-box>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';
import { applyResponsiveClasses, isNullOrUndefined, parseResponsivePropValue } from '@/components/utils';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import {
  horizontalAlignmentValidator,
  responsivePropValidator,
  spacingValidator,
  verticalAlignmentValidator,
} from '@/components/prop-validators';

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
    width: { type: [String, Array as () => Array<string>], default: (): Array<string> => null },
    align: {
      type: [String, Array as () => Array<string>],
      validator: responsivePropValidator(horizontalAlignmentValidator),
      default: null,
    },
    alignY: {
      type: [String, Array as () => Array<string>],
      validator: responsivePropValidator(verticalAlignmentValidator),
      default: null,
    },
    autoHeight: {
      type: Boolean,
      default: false,
    },
    canGrow: {
      type: Boolean,
      default: false,
    },
    canShrink: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const responsiveWidth = computed(() =>
      parseResponsivePropValue(props.width, true, (value: any) => {
        return !isNullOrUndefined(value) && ['auto', 'initial', 'inherit', 'unset'].includes(value) === false
          ? value
          : null;
      }),
    );
    const responsiveHorizontalAlignments = computed(() => parseResponsivePropValue(props.align));
    const responsiveVerticalAlignments = computed(() => parseResponsivePropValue(props.alignY));
    const styles = computed(() => {
      const result: any = {};

      if (responsiveWidth.value.phone) {
        result['--wp'] = responsiveWidth.value.phone;
      }

      if (responsiveWidth.value.tabletPortrait) {
        result['--wtp'] = responsiveWidth.value.tabletPortrait;
      }

      if (responsiveWidth.value.tabletLandscape) {
        result['--wtl'] = responsiveWidth.value.tabletLandscape;
      }

      if (responsiveWidth.value.smallDesktop) {
        result['--wsd'] = responsiveWidth.value.smallDesktop;
      }

      if (responsiveWidth.value.largeDesktop) {
        result['--wld'] = responsiveWidth.value.largeDesktop;
      }

      return result;
    });

    return {
      responsiveWidth,
      responsiveHorizontalAlignments,
      responsiveVerticalAlignments,
      styles,
      applyResponsiveClasses,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

.vueColumn {
  flex: 0 0 auto;
  width: 100%;

  &.canGrow {
    flex-grow: 1;
  }

  &.canShrink {
    flex-shrink: 1;
  }

  &.alignv-top {
    display: flex;
    align-items: flex-start;
  }

  &.alignv-center {
    display: flex;
    align-items: center;
  }

  &.alignv-bottom {
    display: flex;
    align-items: flex-end;
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
    &.alignv-tp-top {
      display: flex;
      align-items: flex-start;
    }

    &.alignv-tp-center {
      display: flex;
      align-items: center;
    }

    &.alignv-tp-bottom {
      display: flex;
      align-items: flex-end;
    }

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
    &.alignv-tl-top {
      display: flex;
      align-items: flex-start;
    }

    &.alignv-tl-center {
      display: flex;
      align-items: center;
    }

    &.alignv-tl-bottom {
      display: flex;
      align-items: flex-end;
    }

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
    &.alignv-sd-top {
      display: flex;
      align-items: flex-start;
    }

    &.alignv-sd-center {
      display: flex;
      align-items: center;
    }

    &.alignv-sd-bottom {
      display: flex;
      align-items: flex-end;
    }

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
      flex-basis: var(--wld);
    }

    &.alignv-ld-top {
      display: flex;
      align-items: flex-start;
    }

    &.alignv-ld-center {
      display: flex;
      align-items: center;
    }

    &.alignv-ld-bottom {
      display: flex;
      align-items: flex-end;
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
      flex-basis: var(--wp);
    }
  }

  @include mediaMinMax(tabletPortrait) {
    &.fit-tp {
      flex-basis: var(--wtp);
    }
  }

  @include mediaMinMax(tabletLandscape) {
    &.fit-tl {
      flex-basis: var(--wtl);
    }
  }

  @include mediaMinMax(smallDesktop) {
    &.fit-sd {
      flex-basis: var(--wsd);
    }
  }
}
</style>
