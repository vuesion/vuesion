<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import {
  horizontalAlignmentValidator,
  responsivePropValidator,
  spacingValidator,
  verticalAlignmentValidator,
} from '@/components/prop-validators';
import { CreateElement } from 'vue/types/vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import {
  applyResponsiveClasses,
  decorateChildComponents,
  getComponentElementType,
  parseResponsivePropValue,
} from '@/components/utils';
import { VNode } from 'vue/types/vnode';

export default defineComponent({
  name: 'VueInline',
  components: { VueBox },
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
    noWrap: { type: Boolean, default: false },
    stackPhone: { type: Boolean, default: false },
    stackTabletPortrait: { type: Boolean, default: false },
    stackTabletLandscape: { type: Boolean, default: false },
    stackSmallDesktop: { type: Boolean, default: false },
    stackLargeDesktop: { type: Boolean, default: false },
  },
  render(createElement: CreateElement) {
    const items = decorateChildComponents(this.$slots.default, (vNode: VNode) => {
      return createElement(
        'vue-box',
        {
          props: {
            padding: null,
            margin: null,
            as: getComponentElementType(this.as),
            autoHeight: true,
            alignY: this.alignY,
          },
        },
        [vNode],
      );
    });

    const cssClasses: any = {};

    cssClasses[this.$style.vueInline] = true;

    if (this.noWrap) {
      cssClasses[this.$style.noWrap] = true;
    }

    const responsiveSpacings = parseResponsivePropValue(this.space);
    applyResponsiveClasses(this.$style, cssClasses, responsiveSpacings, 'space');

    const responsiveHorizontalAlignments = parseResponsivePropValue(this.align);
    applyResponsiveClasses(this.$style, cssClasses, responsiveHorizontalAlignments, 'align');

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

    return createElement(this.as, { class: cssClasses }, items);
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

.vueInline {
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: row;

  &.alignv-top {
    align-items: flex-start;
  }

  &.alignv-center {
    align-items: center;
  }

  &.alignv-bottom {
    align-items: flex-end;
  }

  &.align-left {
    justify-content: flex-start;
  }

  &.align-center {
    justify-content: center;
  }

  &.align-right {
    justify-content: flex-end;
  }

  &.noWrap {
    flex-wrap: nowrap;
  }

  @each $name, $space in $spacings {
    &.space-#{$name} {
      gap: $space;
    }
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

    &.align-tp-left {
      justify-content: flex-start;
    }

    &.align-tp-center {
      justify-content: center;
    }

    &.align-tp-right {
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

    &.align-tl-left {
      justify-content: flex-start;
    }

    &.align-tl-center {
      justify-content: center;
    }

    &.align-tl-right {
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

    &.align-sd-left {
      justify-content: flex-start;
    }

    &.align-sd-center {
      justify-content: center;
    }

    &.align-sd-right {
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

    &.align-ld-left {
      justify-content: flex-start;
    }

    &.align-ld-center {
      justify-content: center;
    }

    &.align-ld-right {
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
    }
  }

  @include mediaMinMax(tabletPortrait) {
    &.revert-tp {
      flex-direction: row-reverse;
    }

    &.stack-tp {
      flex-direction: column;
    }
  }

  @include mediaMinMax(tabletLandscape) {
    &.revert-tl {
      flex-direction: row-reverse;
    }

    &.stack-tl {
      flex-direction: column;
    }
  }

  @include mediaMinMax(smallDesktop) {
    &.revert-sd {
      flex-direction: row-reverse;
    }

    &.stack-sd {
      flex-direction: column;
    }
  }
}
</style>
