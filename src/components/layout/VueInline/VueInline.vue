<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { responsiveAlignmentValidator, responsiveSpacingValidator } from '@/components/prop-validators';
import { CreateElement } from 'vue/types/vue';
import Vue from 'vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import {
  applyResponsiveClasses,
  decorateChildComponents,
  getComponentElementType,
  parseResponsivePropValue,
} from '@/components/utils';
import { VNode } from 'vue/types/vnode';
import isArray from 'lodash/isArray';

Vue.component('VueBox', VueBox);

export default defineComponent({
  name: 'VueInline',
  props: {
    as: {
      type: String,
      default: 'div',
    },
    space: {
      type: [Number, String, Array as () => Array<string | number>],
      validator: responsiveSpacingValidator,
      default: '24',
    },
    align: { type: [String, Array as () => Array<string>], validator: responsiveAlignmentValidator, default: null },
    stackPhone: { type: Boolean, default: false },
    stackTabletPortrait: { type: Boolean, default: false },
    stackTabletLandscape: { type: Boolean, default: false },
    stackSmallDesktop: { type: Boolean, default: false },
    stackLargeDesktop: { type: Boolean, default: false },
  },
  render(createElement: CreateElement) {
    const items = decorateChildComponents(this.$slots.default, (vNode: VNode) => {
      let margin: string[] = [];

      if (isArray(this.space)) {
        margin = this.space.map((space: any) => `${space} 0 0 ${space}`);
      } else {
        margin.push(`${this.space} 0 0 ${this.space}`);
      }

      return createElement('vue-box', { props: { padding: 0, margin, as: getComponentElementType(this.as) } }, [vNode]);
    });

    const cssClasses: any = {};

    cssClasses[this.$style.vueInline] = true;

    const responsiveSpacings = parseResponsivePropValue(this.space);
    applyResponsiveClasses(this.$style, cssClasses, responsiveSpacings, 'space');

    const responsiveAlignments = parseResponsivePropValue(this.align);
    applyResponsiveClasses(this.$style, cssClasses, responsiveAlignments, 'align');

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

  &.align-left {
    justify-content: flex-start;
  }

  &.align-center {
    justify-content: center;
  }

  &.align-right {
    justify-content: flex-end;
  }

  @each $name, $space in $spacings {
    &.space-#{$name} {
      margin: calc(-1 * #{$space}) 0 0 calc(-1 * #{$space});
      width: calc(100% + #{$space});
    }
  }

  @include mediaMin(tabletPortrait) {
    @each $name, $space in $spacings {
      &.space-tp-#{$name} {
        margin: calc(-1 * #{$space}) 0 0 calc(-1 * #{$space});
        width: calc(100% + #{$space});
      }
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
        margin: calc(-1 * #{$space}) 0 0 calc(-1 * #{$space});
        width: calc(100% + #{$space});
      }
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
        margin: calc(-1 * #{$space}) 0 0 calc(-1 * #{$space});
        width: calc(100% + #{$space});
      }
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
        margin: calc(-1 * #{$space}) 0 0 calc(-1 * #{$space});
        width: calc(100% + #{$space});
      }
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

    &.stack-ld {
      flex-direction: column;
    }
  }

  @include mediaMinMax(phone) {
    &.stack {
      flex-direction: column;
    }
  }

  @include mediaMinMax(tabletPortrait) {
    &.stack-tp {
      flex-direction: column;
    }
  }

  @include mediaMinMax(tabletLandscape) {
    &.stack-tl {
      flex-direction: column;
    }
  }

  @include mediaMinMax(smallDesktop) {
    &.stack-sd {
      flex-direction: column;
    }
  }
}
</style>
