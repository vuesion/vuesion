<template>
  <component
    :is="as"
    :class="[
      $style.vueBox,
      paddingPhoneValues.top && $style[`pt-${paddingPhoneValues.top}`],
      paddingPhoneValues.right && $style[`pr-${paddingPhoneValues.right}`],
      paddingPhoneValues.bottom && $style[`pb-${paddingPhoneValues.bottom}`],
      paddingPhoneValues.left && $style[`pl-${paddingPhoneValues.left}`],

      paddingTabletPortraitValues.top && $style[`pt-tp-${paddingTabletPortraitValues.top}`],
      paddingTabletPortraitValues.right && $style[`pr-tp-${paddingTabletPortraitValues.right}`],
      paddingTabletPortraitValues.bottom && $style[`pb-tp-${paddingTabletPortraitValues.bottom}`],
      paddingTabletPortraitValues.left && $style[`pl-tp-${paddingTabletPortraitValues.left}`],

      paddingTabletLandscapeValues.top && $style[`pt-tl-${paddingTabletLandscapeValues.top}`],
      paddingTabletLandscapeValues.right && $style[`pr-tl-${paddingTabletLandscapeValues.right}`],
      paddingTabletLandscapeValues.bottom && $style[`pb-tl-${paddingTabletLandscapeValues.bottom}`],
      paddingTabletLandscapeValues.left && $style[`pl-tl-${paddingTabletLandscapeValues.left}`],

      paddingSmallDesktopValues.top && $style[`pt-sd-${paddingSmallDesktopValues.top}`],
      paddingSmallDesktopValues.right && $style[`pr-sd-${paddingSmallDesktopValues.right}`],
      paddingSmallDesktopValues.bottom && $style[`pb-sd-${paddingSmallDesktopValues.bottom}`],
      paddingSmallDesktopValues.left && $style[`pl-sd-${paddingSmallDesktopValues.left}`],

      paddingLargeDesktopValues.top && $style[`pt-ld-${paddingLargeDesktopValues.top}`],
      paddingLargeDesktopValues.right && $style[`pr-ld-${paddingLargeDesktopValues.right}`],
      paddingLargeDesktopValues.bottom && $style[`pb-ld-${paddingLargeDesktopValues.bottom}`],
      paddingLargeDesktopValues.left && $style[`pl-ld-${paddingLargeDesktopValues.left}`],

      marginPhoneValues.top && $style[`mt-${marginPhoneValues.top}`],
      marginPhoneValues.right && $style[`mr-${marginPhoneValues.right}`],
      marginPhoneValues.bottom && $style[`mb-${marginPhoneValues.bottom}`],
      marginPhoneValues.left && $style[`ml-${marginPhoneValues.left}`],

      marginTabletPortraitValues.top && $style[`mt-tp-${marginTabletPortraitValues.top}`],
      marginTabletPortraitValues.right && $style[`mr-tp-${marginTabletPortraitValues.right}`],
      marginTabletPortraitValues.bottom && $style[`mb-tp-${marginTabletPortraitValues.bottom}`],
      marginTabletPortraitValues.left && $style[`ml-tp-${marginTabletPortraitValues.left}`],

      marginTabletLandscapeValues.top && $style[`mt-tl-${marginTabletLandscapeValues.top}`],
      marginTabletLandscapeValues.right && $style[`mr-tl-${marginTabletLandscapeValues.right}`],
      marginTabletLandscapeValues.bottom && $style[`mb-tl-${marginTabletLandscapeValues.bottom}`],
      marginTabletLandscapeValues.left && $style[`ml-tl-${marginTabletLandscapeValues.left}`],

      marginSmallDesktopValues.top && $style[`mt-sd-${marginSmallDesktopValues.top}`],
      marginSmallDesktopValues.right && $style[`mr-sd-${marginSmallDesktopValues.right}`],
      marginSmallDesktopValues.bottom && $style[`mb-sd-${marginSmallDesktopValues.bottom}`],
      marginSmallDesktopValues.left && $style[`ml-sd-${marginSmallDesktopValues.left}`],

      marginLargeDesktopValues.top && $style[`mt-ld-${marginLargeDesktopValues.top}`],
      marginLargeDesktopValues.right && $style[`mr-ld-${marginLargeDesktopValues.right}`],
      marginLargeDesktopValues.bottom && $style[`mb-ld-${marginLargeDesktopValues.bottom}`],
      marginLargeDesktopValues.left && $style[`ml-ld-${marginLargeDesktopValues.left}`],
    ]"
    :style="[styles]"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';
import { responsivePropValidator, spacingValidator } from '@/components/prop-validators';
import { parseCssSpacingProp, parseResponsivePropValue } from '@/components/utils';

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
      default: 0,
    },
    styles: {
      type: Object,
      default: () => ({}),
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
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

.vueBox {
  display: block;
  height: 100%;

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
}
</style>
