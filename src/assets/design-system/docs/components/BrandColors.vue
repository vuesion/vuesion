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
  grid-template-columns: repeat(8, 1fr);
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

  interaction_colors_primary-brand-primary-enabled: var(--brand-primary-enabled);
  interaction_colors_primary-brand-primary-hover: var(--brand-primary-hover);
  interaction_colors_primary-brand-primary-focus: var(--brand-primary-focus);
  interaction_colors_primary-brand-primary-active: var(--brand-primary-active);

  interaction_colors_neutral-brand-neutral-enabled: var(--brand-neutral-enabled);
  interaction_colors_neutral-brand-neutral-hover: var(--brand-neutral-hover);
  interaction_colors_neutral-brand-neutral-focus: var(--brand-neutral-focus);
  interaction_colors_neutral-brand-neutral-active: var(--brand-neutral-active);

  interaction_colors_danger-brand-danger-enabled: var(--brand-danger-enabled);
  interaction_colors_danger-brand-danger-hover: var(--brand-danger-hover);
  interaction_colors_danger-brand-danger-focus: var(--brand-danger-focus);
  interaction_colors_danger-brand-danger-active: var(--brand-danger-active);

  interaction_colors_warning-brand-warning-enabled: var(--brand-warning-enabled);
  interaction_colors_warning-brand-warning-hover: var(--brand-warning-hover);
  interaction_colors_warning-brand-warning-focus: var(--brand-warning-focus);
  interaction_colors_warning-brand-warning-active: var(--brand-warning-active);

  interaction_colors_success-brand-success-enabled: var(--brand-success-enabled);
  interaction_colors_success-brand-success-hover: var(--brand-success-hover);
  interaction_colors_success-brand-success-focus: var(--brand-success-focus);
  interaction_colors_success-brand-success-active: var(--brand-success-active);

  interaction_colors_info-brand-info-enabled: var(--brand-info-enabled);
  interaction_colors_info-brand-info-hover: var(--brand-info-hover);
  interaction_colors_info-brand-info-focus: var(--brand-info-focus);
  interaction_colors_info-brand-info-active: var(--brand-info-active);

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
}
</style>
