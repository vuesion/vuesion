<template>
  <component
    :is="as"
    :class="[
      $style.vueBox,
      autoHeight && $style.autoHeight,
      ...applyClasses($style, paddingPhoneValues, 'p'),
      ...applyClasses($style, paddingTabletPortraitValues, 'p', 'tp'),
      ...applyClasses($style, paddingTabletLandscapeValues, 'p', 'tl'),
      ...applyClasses($style, paddingSmallDesktopValues, 'p', 'sd'),
      ...applyClasses($style, paddingLargeDesktopValues, 'p', 'ld'),

      ...applyClasses($style, marginPhoneValues, 'm'),
      ...applyClasses($style, marginTabletPortraitValues, 'm', 'tp'),
      ...applyClasses($style, marginTabletLandscapeValues, 'm', 'tl'),
      ...applyClasses($style, marginSmallDesktopValues, 'm', 'sd'),
      ...applyClasses($style, marginLargeDesktopValues, 'm', 'ld'),
      ...applyResponsiveClasses($style, {}, responsiveHorizontalAlignments, 'alignh'),
      ...applyResponsiveClasses($style, {}, responsiveVerticalAlignments, 'alignv'),
    ]"
    :style="[styles]"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';
import {
  horizontalAlignmentValidator,
  responsivePropValidator,
  spacingValidator,
  verticalAlignmentValidator,
} from '@/components/prop-validators';
import {
  applyResponsiveClasses,
  isNullOrUndefined,
  parseCssSpacingProp,
  parseResponsivePropValue,
} from '@/components/utils';

export default defineComponent({
  name: 'VueBox',
  components: {},
  props: {
    as: {
      type: String,
      default: 'div',
    },
    padding: {
      type: [Number, String, Array as () => Array<string | number>],
      validator: responsivePropValidator(spacingValidator),
      default: 24,
    },
    margin: {
      type: [Number, String, Array as () => Array<string | number>],
      validator: responsivePropValidator(spacingValidator),
      default: null,
    },
    styles: {
      type: Object,
      default: () => ({}),
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
    autoHeight: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const responsivePaddings = computed(() => parseResponsivePropValue(props.padding));

    const paddingPhone = computed<string>(() => responsivePaddings.value.phone);
    const paddingTabletPortrait = computed<string>(() => responsivePaddings.value.tabletPortrait);
    const paddingTabletLandscape = computed<string>(() => responsivePaddings.value.tabletLandscape);
    const paddingSmallDesktop = computed<string>(() => responsivePaddings.value.smallDesktop);
    const paddingLargeDesktop = computed<string>(() => responsivePaddings.value.largeDesktop);

    const paddingPhoneValues = computed(() => parseCssSpacingProp(paddingPhone.value));
    const paddingTabletPortraitValues = computed(() => parseCssSpacingProp(paddingTabletPortrait.value));
    const paddingTabletLandscapeValues = computed(() => parseCssSpacingProp(paddingTabletLandscape.value));
    const paddingSmallDesktopValues = computed(() => parseCssSpacingProp(paddingSmallDesktop.value));
    const paddingLargeDesktopValues = computed(() => parseCssSpacingProp(paddingLargeDesktop.value));

    const responsiveMargins = computed(() => parseResponsivePropValue(props.margin));

    const marginPhone = computed<string>(() => responsiveMargins.value.phone);
    const marginTabletPortrait = computed<string>(() => responsiveMargins.value.tabletPortrait);
    const marginTabletLandscape = computed<string>(() => responsiveMargins.value.tabletLandscape);
    const marginSmallDesktop = computed<string>(() => responsiveMargins.value.smallDesktop);
    const marginLargeDesktop = computed<string>(() => responsiveMargins.value.largeDesktop);

    const marginPhoneValues = computed(() => parseCssSpacingProp(marginPhone.value));
    const marginTabletPortraitValues = computed(() => parseCssSpacingProp(marginTabletPortrait.value));
    const marginTabletLandscapeValues = computed(() => parseCssSpacingProp(marginTabletLandscape.value));
    const marginSmallDesktopValues = computed(() => parseCssSpacingProp(marginSmallDesktop.value));
    const marginLargeDesktopValues = computed(() => parseCssSpacingProp(marginLargeDesktop.value));

    const responsiveHorizontalAlignments = computed(() => parseResponsivePropValue(props.align));
    const responsiveVerticalAlignments = computed(() => parseResponsivePropValue(props.alignY));

    return {
      paddingPhoneValues,
      paddingTabletPortraitValues,
      paddingTabletLandscapeValues,
      paddingSmallDesktopValues,
      paddingLargeDesktopValues,
      marginPhoneValues,
      marginTabletPortraitValues,
      marginTabletLandscapeValues,
      marginSmallDesktopValues,
      marginLargeDesktopValues,
      responsiveHorizontalAlignments,
      responsiveVerticalAlignments,
      applyClasses: ($style: any, values: any, classNamePrefix: string, breakpointPrefix: string = null) => {
        const result: any = {};
        const map: any = {
          top: 't',
          right: 'r',
          bottom: 'b',
          left: 'l',
        };

        Object.keys(map).forEach((key) => {
          const prefix = map[key];
          const value = values[key];

          if (isNullOrUndefined(value) === false) {
            result[
              $style[`${classNamePrefix}${prefix}-${breakpointPrefix ? breakpointPrefix + '-' : ''}${value}`]
            ] = true;
          }
        });

        return result;
      },
      applyResponsiveClasses,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

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
      padding-bottom: $space;
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
        padding-bottom: $space;
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

  // margins
  @each $name, $space in $spacings {
    &.mt-#{$name} {
      margin-top: $space;
    }

    &.mr-#{$name} {
      margin-right: $space;
    }

    &.mb-#{$name} {
      margin-bottom: $space;
    }

    &.ml-#{$name} {
      margin-left: $space;
    }
  }
  @include mediaMin(tabletPortrait) {
    @each $name, $space in $spacings {
      &.mt-tp-#{$name} {
        margin-top: $space;
      }

      &.mr-tp-#{$name} {
        margin-right: $space;
      }

      &.mb-tp-#{$name} {
        margin-bottom: $space;
      }

      &.ml-tp-#{$name} {
        margin-left: $space;
      }
    }
  }
  @include mediaMin(tabletLandscape) {
    @each $name, $space in $spacings {
      &.mt-tl-#{$name} {
        margin-top: $space;
      }

      &.mr-tl-#{$name} {
        margin-right: $space;
      }

      &.mb-tl-#{$name} {
        margin-bottom: $space;
      }

      &.ml-tl-#{$name} {
        margin-left: $space;
      }
    }
  }
  @include mediaMin(smallDesktop) {
    @each $name, $space in $spacings {
      &.mt-sd-#{$name} {
        margin-top: $space;
      }

      &.mr-sd-#{$name} {
        margin-right: $space;
      }

      &.mb-sd-#{$name} {
        margin-bottom: $space;
      }

      &.ml-sd-#{$name} {
        margin-left: $space;
      }
    }
  }
  @include mediaMin(largeDesktop) {
    @each $name, $space in $spacings {
      &.mt-ld-#{$name} {
        margin-top: $space;
      }

      &.mr-ld-#{$name} {
        margin-right: $space;
      }

      &.mb-ld-#{$name} {
        margin-bottom: $space;
      }

      &.ml-ld-#{$name} {
        margin-left: $space;
      }
    }
  }

  // alignments
  &.alignv-top {
    display: flex;
    align-items: flex-start;

    > * {
      flex: 1;
    }
  }

  &.alignv-center {
    display: flex;
    align-items: center;

    > * {
      flex: 1;
    }
  }

  &.alignv-bottom {
    display: flex;
    align-items: flex-end;

    > * {
      flex: 1;
    }
  }

  &.alignh-left {
    display: flex;
    justify-content: flex-start;

    > * {
      flex: 1;
    }
  }

  &.alignh-center {
    display: flex;
    justify-content: center;

    > * {
      flex: 1;
    }
  }

  &.alignh-right {
    display: flex;
    justify-content: flex-end;

    > * {
      flex: 1;
    }
  }

  @include mediaMin(tabletPortrait) {
    &.alignv-tp-top {
      display: flex;
      align-items: flex-start;

      > * {
        flex: 1;
      }
    }

    &.alignv-tp-center {
      display: flex;
      align-items: center;

      > * {
        flex: 1;
      }
    }

    &.alignv-tp-bottom {
      display: flex;
      align-items: flex-end;

      > * {
        flex: 1;
      }
    }

    &.alignh-tp-left {
      display: flex;
      justify-content: flex-start;

      > * {
        flex: 1;
      }
    }

    &.alignh-tp-center {
      display: flex;
      justify-content: center;

      > * {
        flex: 1;
      }
    }

    &.alignh-tp-right {
      display: flex;
      justify-content: flex-end;

      > * {
        flex: 1;
      }
    }
  }
  @include mediaMin(tabletLandscape) {
    &.alignv-tl-top {
      display: flex;
      align-items: flex-start;

      > * {
        flex: 1;
      }
    }

    &.alignv-tl-center {
      display: flex;
      align-items: center;

      > * {
        flex: 1;
      }
    }

    &.alignv-tl-bottom {
      display: flex;
      align-items: flex-end;

      > * {
        flex: 1;
      }
    }

    &.alignh-tl-left {
      display: flex;
      justify-content: flex-start;

      > * {
        flex: 1;
      }
    }

    &.alignh-tl-center {
      display: flex;
      justify-content: center;

      > * {
        flex: 1;
      }
    }

    &.alignh-tl-right {
      display: flex;
      justify-content: flex-end;

      > * {
        flex: 1;
      }
    }
  }
  @include mediaMin(smallDesktop) {
    &.alignv-sd-top {
      display: flex;
      align-items: flex-start;

      > * {
        flex: 1;
      }
    }

    &.alignv-sd-center {
      display: flex;
      align-items: center;

      > * {
        flex: 1;
      }
    }

    &.alignv-sd-bottom {
      display: flex;
      align-items: flex-end;

      > * {
        flex: 1;
      }
    }

    &.alignh-sd-left {
      display: flex;
      justify-content: flex-start;

      > * {
        flex: 1;
      }
    }

    &.alignh-sd-center {
      display: flex;
      justify-content: center;

      > * {
        flex: 1;
      }
    }

    &.alignh-sd-right {
      display: flex;
      justify-content: flex-end;

      > * {
        flex: 1;
      }
    }
  }
  @include mediaMin(largeDesktop) {
    &.fit-ld {
      flex-basis: var(--large-desktop);
    }

    &.alignv-ld-top {
      display: flex;
      align-items: flex-start;

      > * {
        flex: 1;
      }
    }

    &.alignv-ld-center {
      display: flex;
      align-items: center;

      > * {
        flex: 1;
      }
    }

    &.alignv-ld-bottom {
      display: flex;
      align-items: flex-end;

      > * {
        flex: 1;
      }
    }

    &.alignh-ld-left {
      display: flex;
      justify-content: flex-start;

      > * {
        flex: 1;
      }
    }

    &.alignh-ld-center {
      display: flex;
      justify-content: center;

      > * {
        flex: 1;
      }
    }

    &.alignh-ld-right {
      display: flex;
      justify-content: flex-end;

      > * {
        flex: 1;
      }
    }
  }
}
</style>
