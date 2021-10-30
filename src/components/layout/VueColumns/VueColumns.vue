<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { CreateElement } from 'vue/types/vue';
import {
  horizontalAlignmentValidator,
  responsivePropValidator,
  spacingValidator,
  verticalAlignmentValidator,
} from '@/components/prop-validators';
import {
  applyResponsiveClasses,
  decorateChildComponents,
  getComponentElementType,
  parseResponsivePropValue,
} from '@/components/utils';

export default defineComponent({
  name: 'VueColumns',
  components: {},
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
    revert: { type: [Boolean, Array as () => Array<boolean>], default: null },
    stackPhone: { type: Boolean, default: false },
    stackTabletPortrait: { type: Boolean, default: false },
    stackTabletLandscape: { type: Boolean, default: false },
    stackSmallDesktop: { type: Boolean, default: false },
    stackLargeDesktop: { type: Boolean, default: false },
    fullPage: { type: Boolean, default: false },
  },
  render(createElement: CreateElement) {
    const items = decorateChildComponents(this.$slots.default, (vNode) => {
      (vNode.componentOptions.propsData as any).space = this.space;
      (vNode.componentOptions.propsData as any).as = getComponentElementType(this.as);

      return vNode;
    });

    const cssClasses: any = {};

    cssClasses[this.$style.vueColumns] = true;

    const responsiveSpacings = parseResponsivePropValue(this.space);
    applyResponsiveClasses(this.$style, cssClasses, responsiveSpacings, 'space');

    const responsiveHorizontalAlignments = parseResponsivePropValue(this.align);
    applyResponsiveClasses(this.$style, cssClasses, responsiveHorizontalAlignments, 'alignh');

    const responsiveVerticalAlignments = parseResponsivePropValue(this.alignY);
    applyResponsiveClasses(this.$style, cssClasses, responsiveVerticalAlignments, 'alignv');

    const responsiveRevert = parseResponsivePropValue(this.revert, true);
    applyResponsiveClasses(this.$style, cssClasses, responsiveRevert, 'revert', false);

    if (this.stackPhone) {
      cssClasses[this.$style.stack] = true;
    }

    if (this.stackTabletPortrait) {
      cssClasses[this.$style[`stack-tp`]] = true;
    }

    if (this.stackTabletLandscape) {
      cssClasses[this.$style[`stack-tl`]] = true;
    }

    if (this.stackSmallDesktop) {
      cssClasses[this.$style[`stack-sd`]] = true;
    }

    if (this.stackLargeDesktop) {
      cssClasses[this.$style[`stack-ld`]] = true;
    }

    if (this.fullPage) {
      cssClasses[this.$style.fullPage] = true;
    }

    return createElement(this.as, { class: cssClasses }, items);
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

.vueColumns {
  display: flex;
  flex-direction: row;

  &.fullPage {
    width: 100%;
    height: 100vh;
  }

  @each $name, $space in $spacings {
    &.space-#{$name} {
      gap: $space;
    }
  }

  &.alignv-top {
    align-items: flex-start;
  }

  &.alignv-center {
    align-items: center;
  }

  &.alignv-bottom {
    align-items: flex-end;
  }

  &.alignh-left {
    justify-content: flex-start;
  }

  &.alignh-center {
    justify-content: center;
  }

  &.alignh-right {
    justify-content: flex-end;
  }

  @include mediaMin(tabletPortrait) {
    @each $name, $space in $spacings {
      &.space-tp-#{$name} {
        gap: $space;
      }
    }

    &.alignv-tp-top {
      align-items: flex-start;
    }

    &.alignv-tp-center {
      align-items: center;
    }

    &.alignv-tp-bottom {
      align-items: flex-end;
    }

    &.alignh-tp-left {
      justify-content: flex-start;
    }

    &.alignh-tp-center {
      justify-content: center;
    }

    &.alignh-tp-right {
      justify-content: flex-end;
    }
  }

  @include mediaMin(tabletLandscape) {
    @each $name, $space in $spacings {
      &.space-tl-#{$name} {
        gap: $space;
      }
    }

    &.alignv-tl-top {
      align-items: flex-start;
    }

    &.alignv-tl-center {
      align-items: center;
    }

    &.alignv-tl-bottom {
      align-items: flex-end;
    }

    &.alignh-tl-left {
      justify-content: flex-start;
    }

    &.alignh-tl-center {
      justify-content: center;
    }

    &.alignh-tl-right {
      justify-content: flex-end;
    }
  }

  @include mediaMin(smallDesktop) {
    @each $name, $space in $spacings {
      &.space-sd-#{$name} {
        gap: $space;
      }
    }

    &.alignv-sd-top {
      align-items: flex-start;
    }

    &.alignv-sd-center {
      align-items: center;
    }

    &.alignv-sd-bottom {
      align-items: flex-end;
    }

    &.alignh-sd-left {
      justify-content: flex-start;
    }

    &.alignh-sd-center {
      justify-content: center;
    }

    &.alignh-sd-right {
      justify-content: flex-end;
    }
  }

  @include mediaMin(largeDesktop) {
    @each $name, $space in $spacings {
      &.space-ld-#{$name} {
        gap: $space;
      }
    }

    &.alignv-ld-top {
      align-items: flex-start;
    }

    &.alignv-ld-center {
      align-items: center;
    }

    &.alignv-ld-bottom {
      align-items: flex-end;
    }

    &.alignh-ld-left {
      justify-content: flex-start;
    }

    &.alignh-ld-center {
      justify-content: center;
    }

    &.alignh-ld-right {
      justify-content: flex-end;
    }

    &.revert-ld {
      flex-direction: row-reverse;
    }

    &.stack-ld {
      flex-direction: column;
    }
  }

  @include mediaMinMax(phone) {
    &.revert {
      flex-direction: row-reverse;
    }

    &.stack {
      flex-direction: column;

      &.revert {
        flex-direction: column-reverse;
      }
    }
  }

  @include mediaMinMax(tabletPortrait) {
    &.revert-tp {
      flex-direction: row-reverse;
    }

    &.stack-tp {
      flex-direction: column;

      &.revert {
        flex-direction: column-reverse;
      }
    }
  }

  @include mediaMinMax(tabletLandscape) {
    &.revert-tl {
      flex-direction: row-reverse;
    }

    &.stack-tl {
      flex-direction: column;

      &.revert {
        flex-direction: column-reverse;
      }
    }
  }

  @include mediaMinMax(smallDesktop) {
    &.revert-sd {
      flex-direction: row-reverse;
    }

    &.stack-sd {
      flex-direction: column;

      &.revert {
        flex-direction: column-reverse;
      }
    }
  }
}
</style>
