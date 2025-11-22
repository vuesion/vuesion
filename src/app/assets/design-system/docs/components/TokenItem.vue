<template>
  <vue-inline padding="16" space="16" no-wrap :class="[$style.tokenItem, inverse && $style.inverse]">
    <div :class="[$style.color, $style[`elevation${elevation}`], focused && $style.focused]">
      <div :style="{ background: `var(--${circleColor || css})` }" />
      <div
        :style="{
          background: `var(--${smallCircleColor || css})`,
          opacity: smallCircleColor ? 1 : 0,
        }"
      />
    </div>

    <vue-stack space="0">
      <vue-text look="label" weight="semi-bold" :color="inverse ? 'inverse-high' : 'high'">
        <vue-icon-figma /> {{ figma }}
      </vue-text>

      <vue-text look="support-lg" :color="inverse ? 'inverse-low' : 'low'"> <vue-icon-code /> --{{ css }} </vue-text>

      <vue-text v-if="normalizedPalette" look="support-lg" :color="inverse ? 'inverse-low' : 'low'">
        <vue-icon-color-palette /> {{ normalizedPalette }}
      </vue-text>
    </vue-stack>
  </vue-inline>
</template>

<script setup lang="ts">
import { computed, useCssModule } from 'vue';
import VueText from '@/components/design-system/typography/VueText/VueText.vue';
import VueStack from '@/components/design-system/layout/VueStack/VueStack.vue';
import VueInline from '@/components/design-system/layout/VueInline/VueInline.vue';
import VueIconCode from '@icons/VueIconCode.vue';
import VueIconFigma from '@icons/VueIconFigma.vue';
import VueIconColorPalette from '@icons/VueIconColorPalette.vue';

interface Props {
  figma?: string;
  css?: string;
  palette?: string;
  inverse?: boolean;
  circleColor?: string;
  smallCircleColor?: string;
  elevation?: number;
  focused?: boolean;
}

const props = withDefaults(defineProps<Props>(), {});

const $style = useCssModule();

// normalize palette string for display
const normalizedPalette = computed(() => (props.palette ? props.palette.replace(' ', '-') : ''));
</script>

<style lang="scss" module>
@use 'assets/design-system/index' as ds;

/* stylelint-disable no-descending-specificity */

.tokenItem {
  height: ds.$space-96;
  border-radius: ds.$space-16;
  border: 1px solid var(--border-default-low);
  background-color: var(--surface-default-high);

  &.inverse {
    border: none;
    background-color: var(--surface-inverse-high);
  }

  .color {
    position: relative;
    width: ds.$space-72;
    height: ds.$space-64;

    &.elevation1 {
      div {
        box-shadow: var(--elevation-1-box);
        filter: var(--elevation-1-filter);
      }
    }

    &.elevation2 {
      div {
        box-shadow: var(--elevation-2-box);
        filter: var(--elevation-2-filter);
      }
    }

    &.elevation3 {
      div {
        box-shadow: var(--elevation-3-box);
        filter: var(--elevation-3-filter);
      }
    }

    &.focused {
      div {
        outline: var(--focused);
      }
    }

    div {
      border-radius: 50%;

      &:first-child {
        position: absolute;
        left: 0;
        top: 0;
        width: ds.$space-64;
        height: ds.$space-64;
      }

      &:last-child {
        position: absolute;
        right: 0;
        bottom: 0;
        width: ds.$space-32;
        height: ds.$space-32;
      }
    }
  }
}
</style>
