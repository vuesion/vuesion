<template>
  <div>
    <br />
    <div v-for="section in colorSections" :key="section.name">
      <vue-text appearance="h4" as="h4">
        {{ section.name.toUpperCase() }}
      </vue-text>
      <div :class="$style.section">
        <div v-for="color in section.colors" :key="color.hex" :style="{ background: color.hex }">
          <span>{{ color.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VueText from '@/components/atoms/VueText/VueText.vue';

export default {
  name: 'BrandColors',
  components: { VueText },
  computed: {
    colorSections() {
      const sections: any = {};
      const arr: any[] = [];

      Object.keys(this.$style).forEach((key: string) => {
        const split = key.split('-');
        const section = split.shift();
        const name = split.join('-');
        const hex = this.$style[key];

        if (!sections[section] && name) {
          sections[section] = [];
        }

        if (name) {
          sections[section].push({ name, hex });
        }
      });

      Object.keys(sections).forEach((key: string) => {
        if (!['section'].includes(key)) {
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

.section {
  padding: $space-32 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: $space-16;
  grid-auto-rows: 200px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: var(--brand-elevation-3);
    border-radius: var(--brand-border-radius-sm);
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
  brand_variations-brand-primary: var(--brand-primary);
  brand_variations-brand-neutral: var(--brand-neutral);
  brand_variations-brand-danger: var(--brand-danger);
  brand_variations-brand-warning: var(--brand-warning);
  brand_variations-brand-success: var(--brand-success);
  brand_variations-brand-info: var(--brand-info);

  background_Colors-brand-primary-bg-color: var(--brand-primary-bg-color);
  background_Colors-brand-secondary-bg-color-variant: var(--brand-secondary-bg-color);
  background_Colors-brand-tertiary-bg-color-variant: var(--brand-tertiary-bg-color);
  background_Colors-brand-primary-bg-color-inverse: var(--brand-primary-bg-color-inverse);
  background_Colors-brand-secondary-bg-color-variant-inverse: var(--brand-secondary-bg-color-inverse);
  background_Colors-brand-tertiary-bg-color-variant-inverse: var(--brand-tertiary-bg-color-inverse);

  border_Colors-brand-border-color: var(--brand-primary-border-color);
  border_Colors-brand-border-color-inverse: var(--brand-primary-border-color-inverse);

  text_Colors-brand-high-emphasis-text-color: var(--brand-high-emphasis-text-color);
  text_Colors-brand-text-medium-emphasis-color: var(--brand-medium-emphasis-text-color);
  text_Colors-brand-text-low-emphasis-color: var(--brand-low-emphasis-text-color);
  text_Colors-brand-high-emphasis-text-color-inverse: var(--brand-high-emphasis-text-color-inverse);
  text_Colors-brand-medium-emphasis-text-color-inverse: var(--brand-medium-emphasis-text-color-inverse);
  text_Colors-brand-medium-low-text-color-inverse: var(--brand-low-emphasis-text-color-inverse);
  text_Colors-brand-link-color: var(--brand-link-color);
  text_Colors-brand-link-hover-color: var(--brand-link-hover-color);
}
</style>
