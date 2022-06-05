<template>
  <vue-stack space="64">
    <color-tokens-section
      title="Brand Variations"
      description="These are the default shades for each color ramp of the palette."
      :columns="[
        {
          dark: false,
          tokens: [
            { figmaVar: 'Primary', cssVar: 'brand-primary', paletteColor: 'primary 7' },
            { figmaVar: 'Warning', cssVar: 'brand-warning', paletteColor: 'warning 7' },
          ],
        },
        {
          dark: false,
          tokens: [
            { figmaVar: 'Neutral', cssVar: 'brand-neutral', paletteColor: 'neutral 7' },
            { figmaVar: 'Danger', cssVar: 'brand-danger', paletteColor: 'danger 7' },
          ],
        },
        {
          dark: false,
          tokens: [{ figmaVar: 'Success', cssVar: 'brand-success', paletteColor: 'success 7' }],
        },
      ]"
    />
    <color-tokens-section
      title="Background Colors"
      description="The role of these tokens are for the body that sits behind scrollable content."
      :columns="[
        {
          dark: true,
          tokens: [
            { figmaVar: '📀 Bg - Default - High', cssVar: 'brand-bg-default-high', paletteColor: 'neutral 1' },
            {
              figmaVar: '📀 Bg - Default - Medium',
              cssVar: 'brand-bg-default-medium',
              paletteColor: 'neutral 2',
            },
            { figmaVar: '📀 Bg - Default - Low', cssVar: 'brand-bg-default-low', paletteColor: 'neutral 3' },
          ],
        },
        {
          dark: false,
          tokens: [
            { figmaVar: '📀 Bg - Inverse - High', cssVar: 'brand-bg-inverse-high', paletteColor: 'neutral 10' },
            {
              figmaVar: '📀 Bg - Inverse - Medium',
              cssVar: 'brand-bg-inverse-medium',
              paletteColor: 'neutral 9',
            },
            { figmaVar: '📀 Bg - Inverse - Low', cssVar: 'brand-bg-inverse-low', paletteColor: 'neutral 8' },
          ],
        },
      ]"
    />
    <color-tokens-section
      title="Surface Colors"
      description="The role of these tokens are for component surfaces like card, content panels and sections, tooltips, and menus."
      :columns="[
        {
          dark: true,
          tokens: [
            {
              figmaVar: '📀 Surface - Default - High',
              cssVar: 'brand-surface-default-high',
              paletteColor: 'neutral 0',
            },
            {
              figmaVar: '📀 Surface - Default - Medium',
              cssVar: 'brand-surface-default-medium',
              paletteColor: 'neutral 1',
            },
            {
              figmaVar: '📀 Surface - Default - Low',
              cssVar: 'brand-surface-default-low',
              paletteColor: 'neutral 2',
            },
          ],
        },
        {
          dark: false,
          tokens: [
            {
              figmaVar: '📀 Surface - Inverse - High',
              cssVar: 'brand-surface-inverse-high',
              paletteColor: 'neutral 9',
            },
            {
              figmaVar: '📀 Surface - Inverse - Medium',
              cssVar: 'brand-surface-inverse-medium',
              paletteColor: 'neutral 8',
            },
            {
              figmaVar: '📀 Surface - Inverse - Low',
              cssVar: 'brand-surface-inverse-low',
              paletteColor: 'neutral 7',
            },
            {
              figmaVar: '📀 Surface - Success - High',
              cssVar: 'brand-surface-success-high',
              paletteColor: 'success 3',
            },
            {
              figmaVar: '📀 Surface - Success - Medium',
              cssVar: 'brand-surface-success-medium',
              paletteColor: 'success 2',
            },
            {
              figmaVar: '📀 Surface - Success - Low',
              cssVar: 'brand-surface-success-low',
              paletteColor: 'success 1',
            },
            {
              figmaVar: '📀 Surface - Danger - High',
              cssVar: 'brand-surface-danger-high',
              paletteColor: 'danger 3',
            },
            {
              figmaVar: '📀 Surface - Danger - Medium',
              cssVar: 'brand-surface-danger-medium',
              paletteColor: 'danger 2',
            },
            {
              figmaVar: '📀 Surface - Danger - Low',
              cssVar: 'brand-surface-danger-low',
              paletteColor: 'danger 1',
            },
          ],
        },
        {
          dark: false,
          tokens: [
            {
              figmaVar: '📀 Surface - Info - High',
              cssVar: 'brand-surface-info-high',
              paletteColor: 'info 3',
            },
            {
              figmaVar: '📀 Surface - Info - Medium',
              cssVar: 'brand-surface-info-medium',
              paletteColor: 'info 2',
            },
            {
              figmaVar: '📀 Surface - Info - Low',
              cssVar: 'brand-surface-info-low',
              paletteColor: 'info 1',
            },
            {
              figmaVar: '📀 Surface - Warning - High',
              cssVar: 'brand-surface-warning-high',
              paletteColor: 'warning 3',
            },
            {
              figmaVar: '📀 Surface - Warning - Medium',
              cssVar: 'brand-surface-warning-medium',
              paletteColor: 'warning 2',
            },
            {
              figmaVar: '📀 Surface - Warning - Low',
              cssVar: 'brand-surface-warning-low',
              paletteColor: 'warning 1',
            },
          ],
        },
      ]"
    />
    <color-tokens-section
      title="Border Colors"
      description="These tokens are for borders of components and dividers."
      :columns="[
        {
          dark: false,
          tokens: [
            {
              figmaVar: '📀 Border - Default - Medium',
              cssVar: 'brand-border-default-medium',
              paletteColor: 'neutral 3',
            },
            {
              figmaVar: '📀 Border - Default - Low',
              cssVar: 'brand-border-default-low',
              paletteColor: 'neutral 2',
            },
            {
              figmaVar: '📀 Border - Success - High',
              cssVar: 'brand-border-success-high',
              paletteColor: 'success 7',
            },
            {
              figmaVar: '📀 Border - Success - Low',
              cssVar: 'brand-border-success-low',
              paletteColor: 'success 2',
            },
          ],
        },
        {
          dark: false,
          tokens: [
            {
              figmaVar: '📀 Border - inverse - Medium',
              cssVar: 'brand-border-inverse-medium',
              paletteColor: 'neutral 6',
            },
            {
              figmaVar: '📀 Border - inverse - Low',
              cssVar: 'brand-border-inverse-low',
              paletteColor: 'neutral 7',
            },
            {
              figmaVar: '📀 Border - Warning - High',
              cssVar: 'brand-border-warning-high',
              paletteColor: 'warning 7',
            },
            {
              figmaVar: '📀 Border - Warning - Low',
              cssVar: 'brand-border-warning-low',
              paletteColor: 'warning 2',
            },
          ],
        },
        {
          dark: false,
          tokens: [
            {
              figmaVar: '📀 Border - Info - High',
              cssVar: 'brand-border-info-high',
              paletteColor: 'info 7',
            },
            {
              figmaVar: '📀 Border - Info - Low',
              cssVar: 'brand-border-info-low',
              paletteColor: 'info 2',
            },
            {
              figmaVar: '📀 Border - Danger - High',
              cssVar: 'brand-border-danger-high',
              paletteColor: 'danger 7',
            },
            {
              figmaVar: '📀 Border - Danger - Low',
              cssVar: 'brand-border-danger-low',
              paletteColor: 'danger 2',
            },
          ],
        },
      ]"
    />
    <color-tokens-section
      title="Text Colors"
      description="These tokens are to be applied to text, content, and icons."
      :columns="[
        {
          dark: false,
          tokens: [
            {
              figmaVar: '📀 Text - Default - High',
              cssVar: 'brand-text-default-high',
              paletteColor: 'neutral 10',
            },
            {
              figmaVar: '📀 Text - Default - Medium',
              cssVar: 'brand-text-default-medium',
              paletteColor: 'neutral 8',
            },
            {
              figmaVar: '📀 Text - Default - Low',
              cssVar: 'brand-text-default-low',
              paletteColor: 'neutral 6',
            },
          ],
        },
        {
          dark: true,
          tokens: [
            {
              figmaVar: '📀 Text - Inverse - High',
              cssVar: 'brand-text-inverse-high',
              paletteColor: 'neutral 0',
            },
            {
              figmaVar: '📀 Text - Inverse - Medium',
              cssVar: 'brand-text-inverse-medium',
              paletteColor: 'neutral 2',
            },
            {
              figmaVar: '📀 Text - Inverse - Low',
              cssVar: 'brand-text-inverse-low',
              paletteColor: 'neutral 4',
            },
          ],
        },
        {
          dark: false,
          tokens: [
            {
              figmaVar: '📀 Text - Info',
              cssVar: 'brand-text-info',
              paletteColor: 'primary 7',
            },
            {
              figmaVar: '📀 Text - Success',
              cssVar: 'brand-text-success',
              paletteColor: 'success 7',
            },
            {
              figmaVar: '📀 Text - Warning',
              cssVar: 'brand-text-warning',
              paletteColor: 'warning 7',
            },
            {
              figmaVar: '📀 Text - Danger',
              cssVar: 'brand-text-danger',
              paletteColor: 'danger 7',
            },
          ],
        },
      ]"
    />
    <color-tokens-section
      title="Interaction"
      description="Interactive color tokens for user interface elements and components like links, hover/focus/selected/activated states, and toast."
      :columns="[
        {
          dark: false,
          tokens: [
            {
              figmaVar: '📀 Interaction - Primary - Enabled',
              cssVar: 'brand-interaction-primary-enabled',
              paletteColor: 'primary 7',
            },
            {
              figmaVar: '📀 Interaction - Primary - Hovered',
              cssVar: 'brand-interaction-primary-hovered',
              paletteColor: 'primary 6',
            },
            {
              figmaVar: '📀 Interaction - Primary - Activated',
              cssVar: 'brand-interaction-primary-activated',
              paletteColor: 'primary 8',
            },
            {
              figmaVar: '📀 Interaction - Warning - Enabled',
              cssVar: 'brand-interaction-warning-enabled',
              paletteColor: 'warning 7',
            },
            {
              figmaVar: '📀 Interaction - Warning - Hovered',
              cssVar: 'brand-interaction-warning-hovered',
              paletteColor: 'warning 6',
            },
            {
              figmaVar: '📀 Interaction - Warning - Activated',
              cssVar: 'brand-interaction-warning-activated',
              paletteColor: 'warning 8',
            },
          ],
        },
        {
          dark: false,
          tokens: [
            {
              figmaVar: '📀 Interaction - Neutral - Enabled',
              cssVar: 'brand-interaction-neutral-enabled',
              paletteColor: 'neutral 0',
            },
            {
              figmaVar: '📀 Interaction - Neutral - Hovered',
              cssVar: 'brand-interaction-neutral-hovered',
              paletteColor: 'neutral 1',
            },
            {
              figmaVar: '📀 Interaction - Neutral - Activated',
              cssVar: 'brand-interaction-neutral-activated',
              paletteColor: 'neutral 3',
            },
            {
              figmaVar: '📀 Interaction - Danger - Enabled',
              cssVar: 'brand-interaction-danger-enabled',
              paletteColor: 'danger 7',
            },
            {
              figmaVar: '📀 Interaction - Danger - Hovered',
              cssVar: 'brand-interaction-danger-hovered',
              paletteColor: 'danger 6',
            },
            {
              figmaVar: '📀 Interaction - Danger - Activated',
              cssVar: 'brand-interaction-danger-activated',
              paletteColor: 'danger 8',
            },
          ],
        },
        {
          dark: false,
          tokens: [
            {
              figmaVar: '📀 Interaction - Success - Enabled',
              cssVar: 'brand-interaction-success-enabled',
              paletteColor: 'success 7',
            },
            {
              figmaVar: '📀 Interaction - Success - Hovered',
              cssVar: 'brand-interaction-success-hovered',
              paletteColor: 'success 6',
            },
            {
              figmaVar: '📀 Interaction - Success - Activated',
              cssVar: 'brand-interaction-success-activated',
              paletteColor: 'success 8',
            },
            {
              figmaVar: '📀 Interaction - Secondary - Enabled',
              cssVar: 'brand-interaction-secondary-enabled',
              paletteColor: 'info 2',
            },
            {
              figmaVar: '📀 Interaction - Secondary - Hovered',
              cssVar: 'brand-interaction-secondary-hovered',
              paletteColor: 'info 1',
            },
            {
              figmaVar: '📀 Interaction - Secondary - Activated',
              cssVar: 'brand-interaction-secondary-activated',
              paletteColor: 'info 3',
            },
          ],
        },
      ]"
    />
  </vue-stack>
</template>

<script lang="ts">
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import ColorTokensSection from '@/assets/design-system/docs/components/ColorTokensSection.vue';

export default {
  name: 'ColorTokens',
  components: { ColorTokensSection, VueStack },
};
</script>

<style lang="scss" module>
@import '~@/assets/design-system';
</style>
