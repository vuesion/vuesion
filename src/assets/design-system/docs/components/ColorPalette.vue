<template>
  <vue-stack space="0" align="right">
    <vue-tiles v-for="section in colorSections" :key="section.name" space="0" columns="11">
      <vue-box v-if="section.name !== 'neutral'" />
      <vue-box
        v-for="color in section.colors"
        :key="color.hex"
        padding="null"
        align-y="center"
        align="center"
        :style="{ background: color.hex, color: color.color, width: '80px', height: '80px' }"
      >
        <vue-text look="support" align="center">{{ color.name }}<br />({{ color.hex }})</vue-text>
      </vue-box>
    </vue-tiles>
  </vue-stack>
</template>

<script lang="ts">
import VueText from '@/components/typography/VueText/VueText.vue';
import VueTiles from '@/components/layout/VueTiles/VueTiles.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';

export default {
  name: 'ColorPalette',
  components: { VueStack, VueBox, VueTiles, VueText },
  computed: {
    colorSections() {
      const sections: any = {};
      const arr: any[] = [];

      Object.keys(this.$style).forEach((key) => {
        const split = key.split('-');
        const section = split.shift();
        const name = split.join('-');
        const idx = parseInt(name.split('-')[1], 10);
        const hex = this.$style[key];
        const color = idx < 6 ? '#000' : '#fff';

        if (!sections[section]) {
          sections[section] = [];
        }

        sections[section].push({ name, hex, color });
      });

      Object.keys(sections).forEach((key: string) => {
        if (!['color', 'light', 'dark'].includes(key)) {
          arr.push({ name: key, colors: sections[key] });
        }
      });

      return arr;
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

:export {
  primary-primary-1: palette-color-level('primary', 1);
  primary-primary-2: palette-color-level('primary', 2);
  primary-primary-3: palette-color-level('primary', 3);
  primary-primary-4: palette-color-level('primary', 4);
  primary-primary-5: palette-color-level('primary', 5);
  primary-primary-6: palette-color-level('primary', 6);
  primary-primary-7: palette-color-level('primary', 7);
  primary-primary-8: palette-color-level('primary', 8);
  primary-primary-9: palette-color-level('primary', 9);
  primary-primary-10: palette-color-level('primary', 10);

  neutral-neutral-0: palette-color-level('neutral', 0);
  neutral-neutral-1: palette-color-level('neutral', 1);
  neutral-neutral-2: palette-color-level('neutral', 2);
  neutral-neutral-3: palette-color-level('neutral', 3);
  neutral-neutral-4: palette-color-level('neutral', 4);
  neutral-neutral-5: palette-color-level('neutral', 5);
  neutral-neutral-6: palette-color-level('neutral', 6);
  neutral-neutral-7: palette-color-level('neutral', 7);
  neutral-neutral-8: palette-color-level('neutral', 8);
  neutral-neutral-9: palette-color-level('neutral', 9);
  neutral-neutral-10: palette-color-level('neutral', 10);

  success-success-1: palette-color-level('success', 1);
  success-success-2: palette-color-level('success', 2);
  success-success-3: palette-color-level('success', 3);
  success-success-4: palette-color-level('success', 4);
  success-success-5: palette-color-level('success', 5);
  success-success-6: palette-color-level('success', 6);
  success-success-7: palette-color-level('success', 7);
  success-success-8: palette-color-level('success', 8);
  success-success-9: palette-color-level('success', 9);
  success-success-10: palette-color-level('success', 10);

  info-info-1: palette-color-level('info', 1);
  info-info-2: palette-color-level('info', 2);
  info-info-3: palette-color-level('info', 3);
  info-info-4: palette-color-level('info', 4);
  info-info-5: palette-color-level('info', 5);
  info-info-6: palette-color-level('info', 6);
  info-info-7: palette-color-level('info', 7);
  info-info-8: palette-color-level('info', 8);
  info-info-9: palette-color-level('info', 9);
  info-info-10: palette-color-level('info', 10);

  warning-warning-1: palette-color-level('warning', 1);
  warning-warning-2: palette-color-level('warning', 2);
  warning-warning-3: palette-color-level('warning', 3);
  warning-warning-4: palette-color-level('warning', 4);
  warning-warning-5: palette-color-level('warning', 5);
  warning-warning-6: palette-color-level('warning', 6);
  warning-warning-7: palette-color-level('warning', 7);
  warning-warning-8: palette-color-level('warning', 8);
  warning-warning-9: palette-color-level('warning', 9);
  warning-warning-10: palette-color-level('warning', 10);

  danger-danger-1: palette-color-level('danger', 1);
  danger-danger-2: palette-color-level('danger', 2);
  danger-danger-3: palette-color-level('danger', 3);
  danger-danger-4: palette-color-level('danger', 4);
  danger-danger-5: palette-color-level('danger', 5);
  danger-danger-6: palette-color-level('danger', 6);
  danger-danger-7: palette-color-level('danger', 7);
  danger-danger-8: palette-color-level('danger', 8);
  danger-danger-9: palette-color-level('danger', 9);
  danger-danger-10: palette-color-level('danger', 10);
}
</style>
