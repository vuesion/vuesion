<template>
  <vue-inline space="12">
    <div :class="[$style.color, $style[`elevation${elevation}`], focused && $style.focused]">
      <div :style="{ background: `var(--${circleColor || css})` }" />
      <div :style="{ background: `var(--${smallCircleColor || css})` }" />
    </div>
    <vue-stack space="0">
      <vue-text look="h6" :color="inverse ? 'text-inverse-high' : 'text-high'">
        {{ figma }}
      </vue-text>
      <vue-text :color="inverse ? 'text-inverse-high' : 'text-high'">
        {{ css }}
      </vue-text>
      <vue-text :color="inverse ? 'text-inverse-low' : 'text-low'">
        {{ palette }}
      </vue-text>
    </vue-stack>
  </vue-inline>
</template>

<script lang="ts">
import VueText from '@/components/typography/VueText/VueText.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';

export default {
  name: 'TokenItem',
  components: { VueInline, VueStack, VueText },
  props: {
    figma: { type: String, default: null },
    css: { type: String, default: null },
    palette: { type: String, default: null },
    inverse: { type: Boolean, default: false },
    circleColor: { type: String, default: null },
    smallCircleColor: { type: String, default: null },
    elevation: { type: Number, default: 2 },
    focused: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.color {
  position: relative;
  width: $space-72;
  height: $space-64;

  &.elevation1 {
    div {
      box-shadow: var(--brand-elevation-1);
    }
  }

  &.elevation2 {
    div {
      box-shadow: var(--brand-elevation-2);
    }
  }

  &.elevation3 {
    div {
      box-shadow: var(--brand-elevation-3);
    }
  }

  &.focused {
    div {
      box-shadow: var(--brand-focused);
    }
  }

  div {
    border-radius: 50%;
    border: 2px solid var(--brand-surface-default-high);
    &:first-child {
      position: absolute;
      left: 0;
      top: 0;
      width: $space-64;
      height: $space-64;
    }

    &:last-child {
      position: absolute;
      right: 0;
      bottom: 0;
      width: $space-32;
      height: $space-32;
    }
  }
}
</style>
