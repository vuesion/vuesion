<template>
  <div>
    <div v-for="section in colorSections">
      <vue-headline level="4">{{ section.name.toUpperCase() }}</vue-headline>
      <div :class="$style.section">
        <div v-for="color in section.colors" :style="{ background: color.hex }">
          <span>{{ color.name }} ({{ color.hex }})</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';

export default {
  name: 'BrandColors',
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
        if (['section'].indexOf(key) === -1) {
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

.section {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: $space-12;
  grid-auto-rows: 200px;
  margin-bottom: $space-32;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: $brand-shadow-lg;
    border-radius: $brand-border-radius;
    padding: $space-16;

    span {
      background: inherit;
      background-clip: text;
      color: transparent;
      filter: invert(1) grayscale(1) unquote('contrast(100)');
    }
  }
}

:export {
  brand_variations-brand-primary: $brand-primary;
  brand_variations-brand-secondary: $brand-secondary;
  brand_variations-brand-success: $brand-success;
  brand_variations-brand-warning: $brand-warning;
  brand_variations-brand-danger: $brand-danger;

  background_Colors-brand-bg-color: $brand-bg-color;
  background_Colors-brand-bg-color-variant: $brand-bg-color-variant;
  background_Colors-brand-bg-color-inverse: $brand-bg-color-inverse;
  background_Colors-brand-bg-color-variant-inverse: $brand-bg-color-variant-inverse;

  text_Colors-brand-text-color: $brand-text-color;
  text_Colors-brand-text-secondary-color: $brand-text-secondary-color;
  text_Colors-brand-text-color-inverse: $brand-text-color-inverse;
  text_Colors-brand-text-secondary-color-inverse: $brand-text-secondary-color-inverse;
  text_Colors-brand-link-color: $brand-link-color;
  text_Colors-brand-link-hover-color: $brand-link-hover-color;

  border_Colors-brand-border-color: $brand-border-color;
  border_Colors-brand-border-color-inverse: $brand-border-color-inverse;
}
</style>
