<template>
  <div :class="$style.sections">
    <div v-for="section in colorSections">
      <vue-headline level="4">{{ section.name.toUpperCase() }}</vue-headline>
      <div :class="$style.palette">
        <div v-for="color in section.colors" :style="{ background: color.hex }">
          <span>{{ color.name }} ({{ color.hex }})</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VueHeadline from '@/app/shared/components/VueHeadline/VueHeadline.vue';

export default {
  name: 'ColorPalette',
  components: { VueHeadline },
  computed: {
    colorSections() {
      const sections: any = {};
      const arr: any[] = [];

      Object.keys(this.$style).forEach((key: string) => {
        const split = key.split('-');
        const section = split.shift();
        const name = split.join('-');
        const hex = this.$style[key];

        if (!sections[section]) {
          sections[section] = [];
        }

        sections[section].push({ name, hex });
      });

      Object.keys(sections).forEach((key: string) => {
        if (['sections', 'palette'].indexOf(key) === -1) {
          arr.push({ name: key, colors: sections[key] });
        }
      });

      return arr;
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.sections {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: $space-20;
}

.palette {
  display: grid;
  grid-template-rows: 1fr;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      background: inherit;
      background-clip: text;
      color: transparent;
      filter: invert(1) grayscale(1) unquote('contrast(100)');
    }
  }
}

:export {
  wine-wine-200: palette-color-level('wine', 200);
  wine-wine-180: palette-color-level('wine', 180);
  wine-wine-160: palette-color-level('wine', 160);
  wine-wine-140: palette-color-level('wine', 140);
  wine-wine-120: palette-color-level('wine', 120);
  wine-wine-110: palette-color-level('wine', 110);
  wine-wine-105: palette-color-level('wine', 105);
  wine-wine-100: palette-color-level('wine', 100);
  wine-wine-80: palette-color-level('wine', 80);
  wine-wine-60: palette-color-level('wine', 60);
  wine-wine-40: palette-color-level('wine', 40);
  wine-wine-30: palette-color-level('wine', 30);
  wine-wine-20: palette-color-level('wine', 20);
  wine-wine-10: palette-color-level('wine', 10);
  wine-wine-5: palette-color-level('wine', 5);
  wine-wine-0: palette-color-level('wine', 0);

  sea-sea-200: palette-color-level('sea', 200);
  sea-sea-180: palette-color-level('sea', 180);
  sea-sea-160: palette-color-level('sea', 160);
  sea-sea-140: palette-color-level('sea', 140);
  sea-sea-120: palette-color-level('sea', 120);
  sea-sea-110: palette-color-level('sea', 110);
  sea-sea-105: palette-color-level('sea', 105);
  sea-sea-100: palette-color-level('sea', 100);
  sea-sea-80: palette-color-level('sea', 80);
  sea-sea-60: palette-color-level('sea', 60);
  sea-sea-40: palette-color-level('sea', 40);
  sea-sea-30: palette-color-level('sea', 30);
  sea-sea-20: palette-color-level('sea', 20);
  sea-sea-10: palette-color-level('sea', 10);
  sea-sea-5: palette-color-level('sea', 5);
  sea-sea-0: palette-color-level('sea', 0);

  green-green-200: palette-color-level('green', 200);
  green-green-180: palette-color-level('green', 180);
  green-green-160: palette-color-level('green', 160);
  green-green-140: palette-color-level('green', 140);
  green-green-120: palette-color-level('green', 120);
  green-green-110: palette-color-level('green', 110);
  green-green-105: palette-color-level('green', 105);
  green-green-100: palette-color-level('green', 100);
  green-green-80: palette-color-level('green', 80);
  green-green-60: palette-color-level('green', 60);
  green-green-40: palette-color-level('green', 40);
  green-green-30: palette-color-level('green', 30);
  green-green-20: palette-color-level('green', 20);
  green-green-10: palette-color-level('green', 10);
  green-green-5: palette-color-level('green', 5);
  green-green-0: palette-color-level('green', 0);

  yellow-yellow-200: palette-color-level('yellow', 200);
  yellow-yellow-180: palette-color-level('yellow', 180);
  yellow-yellow-160: palette-color-level('yellow', 160);
  yellow-yellow-140: palette-color-level('yellow', 140);
  yellow-yellow-120: palette-color-level('yellow', 120);
  yellow-yellow-110: palette-color-level('yellow', 110);
  yellow-yellow-105: palette-color-level('yellow', 105);
  yellow-yellow-100: palette-color-level('yellow', 100);
  yellow-yellow-80: palette-color-level('yellow', 80);
  yellow-yellow-60: palette-color-level('yellow', 60);
  yellow-yellow-40: palette-color-level('yellow', 40);
  yellow-yellow-30: palette-color-level('yellow', 30);
  yellow-yellow-20: palette-color-level('yellow', 20);
  yellow-yellow-10: palette-color-level('yellow', 10);
  yellow-yellow-5: palette-color-level('yellow', 5);
  yellow-yellow-0: palette-color-level('yellow', 0);

  red-red-200: palette-color-level('red', 200);
  red-red-180: palette-color-level('red', 180);
  red-red-160: palette-color-level('red', 160);
  red-red-140: palette-color-level('red', 140);
  red-red-120: palette-color-level('red', 120);
  red-red-110: palette-color-level('red', 110);
  red-red-105: palette-color-level('red', 105);
  red-red-100: palette-color-level('red', 100);
  red-red-80: palette-color-level('red', 80);
  red-red-60: palette-color-level('red', 60);
  red-red-40: palette-color-level('red', 40);
  red-red-30: palette-color-level('red', 30);
  red-red-20: palette-color-level('red', 20);
  red-red-10: palette-color-level('red', 10);
  red-red-5: palette-color-level('red', 5);
  red-red-0: palette-color-level('red', 0);

  black-black-100: palette-color-level('black', 100);
  black-black-80: palette-color-level('black', 80);
  black-black-60: palette-color-level('black', 60);
  black-black-40: palette-color-level('black', 40);
  black-black-20: palette-color-level('black', 20);
  black-black-10: palette-color-level('black', 10);
  black-black-5: palette-color-level('black', 5);
  black-black-0: palette-color-level('black', 0);
}
</style>
