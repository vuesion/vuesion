<template>
  <component :is="as" :class="[$style.vueBox, autoHeight && $style.autoHeight, ...cssClasses]">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, useCssModule } from 'vue';
import { Alignment, SpacingWithDirections } from '@/components/prop-types';
import {
  getCssSpacingClasses,
  getResponsiveCssClasses,
  parseCssSpacingProp,
  parseResponsivePropValue,
} from '@/components/utils';

interface BoxProps {
  as?: string;
  padding?: SpacingWithDirections | Array<SpacingWithDirections>;
  alignX?: Alignment | Array<Alignment>;
  alignY?: Alignment | Array<Alignment>;
  autoHeight?: boolean;
}

const props = withDefaults(defineProps<BoxProps>(), {
  as: 'span',
  padding: () => ['24'],
  alignX: null,
  alignY: null,
  autoHeight: false,
});
const $style = useCssModule();
const responsivePaddings = computed(() => parseResponsivePropValue(props.padding));
const responsiveAlignX = computed(() => parseResponsivePropValue(props.alignX));
const responsiveAlignY = computed(() => parseResponsivePropValue(props.alignY));

const cssClasses = computed(() => [
  ...getCssSpacingClasses($style, parseCssSpacingProp(responsivePaddings.value.phone), 'p'),
  ...getCssSpacingClasses($style, parseCssSpacingProp(responsivePaddings.value.tabletPortrait), 'p', 'tp'),
  ...getCssSpacingClasses($style, parseCssSpacingProp(responsivePaddings.value.tabletLandscape), 'p', 'tl'),
  ...getCssSpacingClasses($style, parseCssSpacingProp(responsivePaddings.value.smallDesktop), 'p', 'sd'),
  ...getCssSpacingClasses($style, parseCssSpacingProp(responsivePaddings.value.largeDesktop), 'p', 'ld'),
  ...getResponsiveCssClasses($style, responsiveAlignX.value, 'alignx'),
  ...getResponsiveCssClasses($style, responsiveAlignY.value, 'aligny'),
]);
</script>

<style lang="scss" module>
@import 'assets/_design-system';

.vueBox {
  display: block;
  height: 100%;

  &.autoHeight {
    height: auto;
  }

  // paddings
  @each $name, $space in $spacings {
    &.pt-#{$name} {
      padding-top: $space;
    }

    &.pr-#{$name} {
      padding-right: $space;
    }

    &.pb-#{$name} {
      padding-bottomm: $space;
    }

    &.pl-#{$name} {
      padding-left: $space;
    }
  }
  @include mediaMin(tabletPortrait) {
    @each $name, $space in $spacings {
      &.pt-tp-#{$name} {
        padding-top: $space;
      }

      &.pr-tp-#{$name} {
        padding-right: $space;
      }

      &.pb-tp-#{$name} {
        padding-bottomm: $space;
      }

      &.pl-tp-#{$name} {
        padding-left: $space;
      }
    }
  }
  @include mediaMin(tabletLandscape) {
    @each $name, $space in $spacings {
      &.pt-tl-#{$name} {
        padding-top: $space;
      }

      &.pr-tl-#{$name} {
        padding-right: $space;
      }

      &.pb-tl-#{$name} {
        padding-bottom: $space;
      }

      &.pl-tl-#{$name} {
        padding-left: $space;
      }
    }
  }
  @include mediaMin(smallDesktop) {
    @each $name, $space in $spacings {
      &.pt-sd-#{$name} {
        padding-top: $space;
      }

      &.pr-sd-#{$name} {
        padding-right: $space;
      }

      &.pb-sd-#{$name} {
        padding-bottom: $space;
      }

      &.pl-sd-#{$name} {
        padding-left: $space;
      }
    }
  }
  @include mediaMin(largeDesktop) {
    @each $name, $space in $spacings {
      &.pt-ld-#{$name} {
        padding-top: $space;
      }

      &.pr-ld-#{$name} {
        padding-right: $space;
      }

      &.pb-ld-#{$name} {
        padding-bottom: $space;
      }

      &.pl-ld-#{$name} {
        padding-left: $space;
      }
    }
  }

  // alignments
  &.aligny-start {
    display: flex;
    align-items: flex-start;
  }
  &.aligny-center {
    display: flex;
    align-items: center;
  }
  &.aligny-end {
    display: flex;
    align-items: flex-end;
  }
  &.alignx-start {
    display: flex;
    justify-content: flex-start;
  }
  &.alignx-center {
    display: flex;
    justify-content: center;
  }
  &.alignx-end {
    display: flex;
    justify-content: flex-end;
  }
  @include mediaMin(tabletPortrait) {
    &.aligny-tp-start {
      display: flex;
      align-items: flex-start;
    }
    &.aligny-tp-center {
      display: flex;
      align-items: center;
    }
    &.aligny-tp-end {
      display: flex;
      align-items: flex-end;
    }
    &.alignx-tp-start {
      display: flex;
      justify-content: flex-start;
    }
    &.alignx-tp-center {
      display: flex;
      justify-content: center;
    }
    &.alignx-tp-end {
      display: flex;
      justify-content: flex-end;
    }
  }
  @include mediaMin(tabletLandscape) {
    &.aligny-tl-start {
      display: flex;
      align-items: flex-start;
    }
    &.aligny-tl-center {
      display: flex;
      align-items: center;
    }
    &.aligny-tl-end {
      display: flex;
      align-items: flex-end;
    }
    &.alignx-tl-start {
      display: flex;
      justify-content: flex-start;
    }
    &.alignx-tl-center {
      display: flex;
      justify-content: center;
    }
    &.alignx-tl-end {
      display: flex;
      justify-content: flex-end;
    }
  }
  @include mediaMin(smallDesktop) {
    &.aligny-sd-start {
      display: flex;
      align-items: flex-start;
    }
    &.aligny-sd-center {
      display: flex;
      align-items: center;
    }
    &.aligny-sd-end {
      display: flex;
      align-items: flex-end;
    }
    &.alignx-sd-start {
      display: flex;
      justify-content: flex-start;
    }
    &.alignx-sd-center {
      display: flex;
      justify-content: center;
    }
    &.alignx-sd-end {
      display: flex;
      justify-content: flex-end;
    }
  }
  @include mediaMin(largeDesktop) {
    &.aligny-ld-start {
      display: flex;
      align-items: flex-start;
    }
    &.aligny-ld-center {
      display: flex;
      align-items: center;
    }
    &.aligny-ld-end {
      display: flex;
      align-items: flex-end;
    }
    &.alignx-ld-start {
      display: flex;
      justify-content: flex-start;
    }
    &.alignx-ld-center {
      display: flex;
      justify-content: center;
    }
    &.alignx-ld-end {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
