<script lang="ts">
import { VNode } from 'vue/types/vnode';
import isArray from 'lodash/isArray';
import { defineComponent } from '@vue/composition-api';
import { horizontalAlignmentValidator, responsivePropValidator, spacingValidator } from '@/components/prop-validators';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import { CreateElement } from 'vue/types/vue';
import {
  applyResponsiveClasses,
  decorateChildComponents,
  getComponentElementType,
  parseResponsivePropValue,
} from '@/components/utils';

export default defineComponent({
  name: 'VueStack',
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
    align: {
      type: [String, Array as () => Array<string>],
      validator: responsivePropValidator(horizontalAlignmentValidator),
      default: null,
    },
  },
  render(createElement: CreateElement) {
    const items = decorateChildComponents(this.$slots.default, (vnode: VNode, idx: number) => {
      let padding: string[] = [];
      const space = idx === 0 ? '0' : this.space;
      const cssClasses: any = {};

      cssClasses[this.$style.stackItem] = true;

      const responsiveAlignments = parseResponsivePropValue(this.align);
      applyResponsiveClasses(this.$style, cssClasses, responsiveAlignments, 'align');

      if (isArray(space)) {
        padding = space.map((space: any) => `${space} null null null`);
      } else {
        padding.push(`${space} null null null`);
      }

      return createElement(
        'vue-box',
        { props: { padding, as: getComponentElementType(this.as), autoHeight: true }, class: cssClasses },
        [vnode],
      );
    });

    const cssClasses: any = {};

    cssClasses[this.$style.vueStack] = true;

    return createElement(this.as, { class: cssClasses }, items);
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

.vueStack {
  .stackItem {
    display: flex;
    flex-direction: column;

    &.align-left {
      align-items: flex-start;
    }

    &.align-center {
      align-items: center;
    }

    &.align-right {
      align-items: flex-end;
    }

    @include mediaMin(tabletPortrait) {
      &.align-tp-left {
        align-items: flex-start;
      }

      &.align-tp-center {
        align-items: center;
      }

      &.align-tp-right {
        align-items: flex-end;
      }
    }

    @include mediaMin(tabletLandscape) {
      &.align-tl-left {
        align-items: flex-start;
      }

      &.align-tl-center {
        align-items: center;
      }

      &.align-tl-right {
        align-items: flex-end;
      }
    }

    @include mediaMin(smallDesktop) {
      &.align-sd-left {
        align-items: flex-start;
      }

      &.align-sd-center {
        align-items: center;
      }

      &.align-sd-right {
        align-items: flex-end;
      }
    }

    @include mediaMin(largeDesktop) {
      &.align-ld-left {
        align-items: flex-start;
      }

      &.align-ld-center {
        align-items: center;
      }

      &.align-ld-right {
        align-items: flex-end;
      }
    }
  }
}
</style>
