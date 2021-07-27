<template>
  <div>
    <br />
    <div v-for="section in colorSections" :key="section.name">
      <vue-text look="h4" as="h4">
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
import VueText from '@/components/typography/VueText/VueText.vue';

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
  grid-template-columns: repeat(2, 1fr);
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

  @include mediaMin(tabletPortrait) {
    grid-template-columns: repeat(6, 1fr);
  }
}

:export {
  brand_variations-brand-primary: var(--brand-primary);
  brand_variations-brand-neutral: var(--brand-neutral);
  brand_variations-brand-danger: var(--brand-danger);
  brand_variations-brand-warning: var(--brand-warning);
  brand_variations-brand-success: var(--brand-success);

  surface_colors-brand-surface-color-high: var(--brand-surface-color-high);
  surface_colors-brand-surface-color-medium: var(--brand-surface-color-medium);
  surface_colors-brand-surface-color-low: var(--brand-surface-color-low);
  surface_colors-brand-surface-color-high-inverse: var(--brand-surface-color-high-inverse);
  surface_colors-brand-surface-color-medium-inverse: var(--brand-surface-color-medium-inverse);
  surface_colors-brand-surface-color-low-inverse: var(--brand-surface-color-low-inverse);
  surface_colors-brand-surface-color-info: var(--brand-surface-color-info);
  surface_colors-brand-surface-color-danger: var(--brand-surface-color-danger);
  surface_colors-brand-surface-color-warning: var(--brand-surface-color-warning);
  surface_colors-brand-surface-color-success: var(--brand-surface-color-success);

  background_colors-brand-bg-color-high: var(--brand-bg-color-high);
  background_colors-brand-bg-color-medium: var(--brand-bg-color-medium);
  background_colors-brand-bg-color-low: var(--brand-bg-color-low);
  background_colors-brand-bg-color-high-inverse: var(--brand-bg-color-high-inverse);
  background_colors-brand-bg-color-medium-inverse: var(--brand-bg-color-medium-inverse);
  background_colors-brand-bg-color-low-inverse: var(--brand-bg-color-low-inverse);

  text_colors-brand-text-color-high: var(--brand-text-color-high);
  text_colors-brand-text-color-medium: var(--brand-text-color-medium);
  text_colors-brand-text-color-low: var(--brand-text-color-low);
  text_colors-brand-text-color-high-inverse: var(--brand-text-color-high-inverse);
  text_colors-brand-text-color-medium-inverse: var(--brand-text-color-medium-inverse);
  text_colors-brand-text-color-low-inverse: var(--brand-text-color-low-inverse);
  text_colors-brand-text-color-info-high: var(--brand-text-color-info-high);
  text_colors-brand-text-color-danger-high: var(--brand-text-color-danger-high);
  text_colors-brand-text-color-warning-high: var(--brand-text-color-warning-high);
  text_colors-brand-text-color-success-high: var(--brand-text-color-success-high);

  border_colors-brand-border-color-high: var(--brand-border-color-high);
  border_colors-brand-border-color-medium: var(--brand-border-color-medium);
  border_colors-brand-border-color-high-inverse: var(--brand-border-color-high-inverse);
  border_colors-brand-border-color-medium-inverse: var(--brand-border-color-medium-inverse);
  border_colors-brand-border-color-info-high: var(--brand-border-color-info-high);
  border_colors-brand-border-color-info-low: var(--brand-border-color-info-low);
  border_colors-brand-border-color-danger-high: var(--brand-border-color-danger-high);
  border_colors-brand-border-color-danger-low: var(--brand-border-color-danger-low);
  border_colors-brand-border-color-warning-high: var(--brand-border-color-warning-high);
  border_colors-brand-border-color-warning-low: var(--brand-border-color-warning-low);
  border_colors-brand-border-color-success-high: var(--brand-border-color-success-high);
  border_colors-brand-border-color-success-low: var(--brand-border-color-success-low);

  interactions_colors-brand-interaction-color-primary-enabled: var(--brand-interaction-color-primary-enabled);
  interactions_colors-brand-interaction-color-primary-hovered: var(--brand-interaction-color-primary-hovered);
  interactions_colors-brand-interaction-color-primary-activated: var(--brand-interaction-color-primary-activated);
  interactions_colors-brand-interaction-color-neutral-enabled: var(--brand-interaction-color-neutral-enabled);
  interactions_colors-brand-interaction-color-neutral-hovered: var(--brand-interaction-color-neutral-hovered);
  interactions_colors-brand-interaction-color-neutral-activated: var(--brand-interaction-color-neutral-activated);
  interactions_colors-brand-interaction-color-danger-enabled: var(--brand-interaction-color-danger-enabled);
  interactions_colors-brand-interaction-color-danger-hovered: var(--brand-interaction-color-danger-hovered);
  interactions_colors-brand-interaction-color-danger-activated: var(--brand-interaction-color-danger-activated);
  interactions_colors-brand-interaction-color-warning-enabled: var(--brand-interaction-color-warning-enabled);
  interactions_colors-brand-interaction-color-warning-hovered: var(--brand-interaction-color-warning-hovered);
  interactions_colors-brand-interaction-color-warning-activated: var(--brand-interaction-color-warning-activated);
  interactions_colors-brand-interaction-color-success-enabled: var(--brand-interaction-color-success-enabled);
  interactions_colors-brand-interaction-color-success-hovered: var(--brand-interaction-color-success-hovered);
  interactions_colors-brand-interaction-color-success-activated: var(--brand-interaction-color-success-activated);
}
</style>
