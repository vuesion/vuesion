<template>
  <vue-stack space="64">
    <color-tokens-section
      title="Brand Variations"
      description="These are the default shades for each color ramp of the palette."
      :columns="[
        {
          dark: false,
          tokens: [
            { figmaVar: 'Primary', cssVar: 'primary', paletteColor: 'primary 7' },
            { figmaVar: 'Warning', cssVar: 'warning', paletteColor: 'warning 7' },
          ],
        },
        {
          dark: false,
          tokens: [
            { figmaVar: 'Neutral', cssVar: 'neutral', paletteColor: 'neutral 7' },
            { figmaVar: 'Danger', cssVar: 'danger', paletteColor: 'danger 7' },
          ],
        },
        {
          dark: false,
          tokens: [{ figmaVar: 'Success', cssVar: 'success', paletteColor: 'success 7' }],
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
            { figmaVar: 'Bg - Default - High', cssVar: 'bg-default-high', paletteColor: 'neutral 1' },
            {
              figmaVar: 'Bg - Default - Medium',
              cssVar: 'bg-default-medium',
              paletteColor: 'neutral 2',
            },
            { figmaVar: 'Bg - Default - Low', cssVar: 'bg-default-low', paletteColor: 'neutral 3' },
          ],
        },
        {
          dark: false,
          tokens: [
            { figmaVar: 'Bg - Inverse - High', cssVar: 'bg-inverse-high', paletteColor: 'neutral 10' },
            {
              figmaVar: 'Bg - Inverse - Medium',
              cssVar: 'bg-inverse-medium',
              paletteColor: 'neutral 9',
            },
            { figmaVar: 'Bg - Inverse - Low', cssVar: 'bg-inverse-low', paletteColor: 'neutral 8' },
          ],
        },
      ]"
    />
    <color-tokens-section
      title="Surface Colors"
      description="The role of these tokens are for component surfaces like card, content panels and sections, tooltips, and menus."
      :columns="[
        {
          dark: false,
          tokens: [
            {
              figmaVar: 'Surface - Default - High',
              cssVar: 'surface-default-high',
              paletteColor: 'neutral 0',
            },
            {
              figmaVar: 'Surface - Default - Medium',
              cssVar: 'surface-default-medium',
              paletteColor: 'neutral 1',
            },
            {
              figmaVar: 'Surface - Default - Low',
              cssVar: 'surface-default-low',
              paletteColor: 'neutral 2',
            },
            {
              figmaVar: 'Surface - Success - High',
              cssVar: 'surface-success-high',
              paletteColor: 'success 3',
            },
            {
              figmaVar: 'Surface - Success - Medium',
              cssVar: 'surface-success-medium',
              paletteColor: 'success 2',
            },
            {
              figmaVar: 'Surface - Success - Low',
              cssVar: 'surface-success-low',
              paletteColor: 'success 1',
            },
          ],
        },
        {
          dark: false,
          tokens: [
            {
              figmaVar: 'Surface - Inverse - High',
              cssVar: 'surface-inverse-high',
              paletteColor: 'neutral 9',
            },
            {
              figmaVar: 'Surface - Inverse - Medium',
              cssVar: 'surface-inverse-medium',
              paletteColor: 'neutral 8',
            },
            {
              figmaVar: 'Surface - Inverse - Low',
              cssVar: 'surface-inverse-low',
              paletteColor: 'neutral 7',
            },
            {
              figmaVar: 'Surface - Warning - High',
              cssVar: 'surface-warning-high',
              paletteColor: 'warning 3',
            },
            {
              figmaVar: 'Surface - Warning - Medium',
              cssVar: 'surface-warning-medium',
              paletteColor: 'warning 2',
            },
            {
              figmaVar: 'Surface - Warning - Low',
              cssVar: 'surface-warning-low',
              paletteColor: 'warning 1',
            },
          ],
        },
        {
          dark: false,
          tokens: [
            {
              figmaVar: 'Surface - Info - High',
              cssVar: 'surface-info-high',
              paletteColor: 'info 3',
            },
            {
              figmaVar: 'Surface - Info - Medium',
              cssVar: 'surface-info-medium',
              paletteColor: 'info 2',
            },
            {
              figmaVar: 'Surface - Info - Low',
              cssVar: 'surface-info-low',
              paletteColor: 'info 1',
            },
            {
              figmaVar: 'Surface - Danger - High',
              cssVar: 'surface-danger-high',
              paletteColor: 'danger 3',
            },
            {
              figmaVar: 'Surface - Danger - Medium',
              cssVar: 'surface-danger-medium',
              paletteColor: 'danger 2',
            },
            {
              figmaVar: 'Surface - Danger - Low',
              cssVar: 'surface-danger-low',
              paletteColor: 'danger 1',
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
              figmaVar: 'Border - Default - High',
              cssVar: 'border-default-high',
              paletteColor: 'neutral 5',
            },
            {
              figmaVar: 'Border - Default - Medium',
              cssVar: 'border-default-medium',
              paletteColor: 'neutral 3',
            },
            {
              figmaVar: 'Border - Default - Low',
              cssVar: 'border-default-low',
              paletteColor: 'neutral 2',
            },
            {
              figmaVar: 'Border - Success - High',
              cssVar: 'border-success-high',
              paletteColor: 'success 7',
            },
            {
              figmaVar: 'Border - Success - Medium',
              cssVar: 'border-success-medium',
              paletteColor: 'success 5',
            },
            {
              figmaVar: 'Border - Success - Low',
              cssVar: 'border-success-low',
              paletteColor: 'success 2',
            },
          ],
        },
        {
          dark: false,
          tokens: [
            {
              figmaVar: 'Border - inverse - High',
              cssVar: 'border-inverse-high',
              paletteColor: 'neutral 8',
            },
            {
              figmaVar: 'Border - inverse - Medium',
              cssVar: 'border-inverse-medium',
              paletteColor: 'neutral 7',
            },
            {
              figmaVar: 'Border - inverse - Low',
              cssVar: 'border-inverse-low',
              paletteColor: 'neutral 6',
            },
            {
              figmaVar: 'Border - Warning - High',
              cssVar: 'border-warning-high',
              paletteColor: 'warning 7',
            },
            {
              figmaVar: 'Border - Warning - Medium',
              cssVar: 'border-warning-medium',
              paletteColor: 'warning 5',
            },
            {
              figmaVar: 'Border - Warning - Low',
              cssVar: 'border-warning-low',
              paletteColor: 'warning 2',
            },
          ],
        },
        {
          dark: false,
          tokens: [
            {
              figmaVar: 'Border - Info - High',
              cssVar: 'border-info-high',
              paletteColor: 'info 7',
            },
            {
              figmaVar: 'Border - Info - Medium',
              cssVar: 'border-info-medium',
              paletteColor: 'info 5',
            },
            {
              figmaVar: 'Border - Info - Low',
              cssVar: 'border-info-low',
              paletteColor: 'info 2',
            },
            {
              figmaVar: 'Border - Danger - High',
              cssVar: 'border-danger-high',
              paletteColor: 'danger 7',
            },
            {
              figmaVar: 'Border - Danger - Medium',
              cssVar: 'border-danger-medium',
              paletteColor: 'danger 5',
            },
            {
              figmaVar: 'Border - Danger - Low',
              cssVar: 'border-danger-low',
              paletteColor: 'danger 2',
            },
          ],
        },
      ]"
    />
    <color-tokens-section
      title="Typography"
      description="These tokens are to be applied to text, content, and icons."
      :columns="[
        {
          dark: false,
          tokens: [
            {
              figmaVar: 'Text - Default - High',
              cssVar: 'text-default-high',
              paletteColor: 'neutral 10',
            },
            {
              figmaVar: 'Text - Default - Medium',
              cssVar: 'text-default-medium',
              paletteColor: 'neutral 8',
            },
            {
              figmaVar: 'Text - Default - Low',
              cssVar: 'text-default-low',
              paletteColor: 'neutral 6',
            },
          ],
        },
        {
          dark: true,
          tokens: [
            {
              figmaVar: 'Text - Inverse - High',
              cssVar: 'text-inverse-high',
              paletteColor: 'neutral 0',
            },
            {
              figmaVar: 'Text - Inverse - Medium',
              cssVar: 'text-inverse-medium',
              paletteColor: 'neutral 2',
            },
            {
              figmaVar: 'Text - Inverse - Low',
              cssVar: 'text-inverse-low',
              paletteColor: 'neutral 4',
            },
          ],
        },
        {
          dark: false,
          tokens: [
            {
              figmaVar: 'Text - Info',
              cssVar: 'text-info',
              paletteColor: 'primary 7',
            },
            {
              figmaVar: 'Text - Success',
              cssVar: 'text-success',
              paletteColor: 'success 7',
            },
            {
              figmaVar: 'Text - Warning',
              cssVar: 'text-warning',
              paletteColor: 'warning 7',
            },
            {
              figmaVar: 'Text - Danger',
              cssVar: 'text-danger',
              paletteColor: 'danger 7',
            },
            {
              figmaVar: 'Text - Link',
              cssVar: 'text-link',
              paletteColor: 'info 6',
            },
          ],
        },
      ]"
    />
    <color-tokens-section
      title="Interactions"
      description="These Tokens are used for user interface elements and components like links, hover/focus/selected/activated states, and toast"
      :columns="[
        {
          dark: false,
          tokens: [
            {
              figmaVar: 'Interaction - Primary - Enabled',
              cssVar: 'interaction-primary-enabled',
              paletteColor: 'primary 7',
            },
            {
              figmaVar: 'Interaction - Primary - Hovered',
              cssVar: 'interaction-primary-hovered',
              paletteColor: 'primary 6',
            },
            {
              figmaVar: 'Interaction - Primary - Activated',
              cssVar: 'interaction-primary-activated',
              paletteColor: 'primary 8',
            },
            {
              figmaVar: 'Interaction - Secondary - Enabled',
              cssVar: 'interaction-secondary-enabled',
              paletteColor: 'info 2',
            },
            {
              figmaVar: 'Interaction - Secondary - Hovered',
              cssVar: 'interaction-secondary-hovered',
              paletteColor: 'info 1',
            },
            {
              figmaVar: 'Interaction - Secondary - Activated',
              cssVar: 'interaction-secondary-activated',
              paletteColor: 'info 3',
            },
          ],
        },
        {
          dark: false,
          tokens: [
            {
              figmaVar: 'Interaction - Neutral - Enabled',
              cssVar: 'interaction-neutral-enabled',
              paletteColor: 'neutral 0',
            },
            {
              figmaVar: 'Interaction - Neutral - Hovered',
              cssVar: 'interaction-neutral-hovered',
              paletteColor: 'neutral 1',
            },
            {
              figmaVar: 'Interaction - Neutral - Activated',
              cssVar: 'interaction-neutral-activated',
              paletteColor: 'neutral 3',
            },
            {
              figmaVar: 'Interaction - Success - Enabled',
              cssVar: 'interaction-success-enabled',
              paletteColor: 'success 7',
            },
            {
              figmaVar: 'Interaction - Success - Hovered',
              cssVar: 'interaction-success-hovered',
              paletteColor: 'success 6',
            },
            {
              figmaVar: 'Interaction - Success - Activated',
              cssVar: 'interaction-success-activated',
              paletteColor: 'success 8',
            },
          ],
        },
        {
          dark: false,
          tokens: [
            {
              figmaVar: 'Interaction - Warning - Enabled',
              cssVar: 'interaction-warning-enabled',
              paletteColor: 'warning 7',
            },
            {
              figmaVar: 'Interaction - Warning - Hovered',
              cssVar: 'interaction-warning-hovered',
              paletteColor: 'warning 6',
            },
            {
              figmaVar: 'Interaction - Warning - Activated',
              cssVar: 'interaction-warning-activated',
              paletteColor: 'warning 8',
            },
            {
              figmaVar: 'Interaction - Danger - Enabled',
              cssVar: 'interaction-danger-enabled',
              paletteColor: 'danger 7',
            },
            {
              figmaVar: 'Interaction - Danger - Hovered',
              cssVar: 'interaction-danger-hovered',
              paletteColor: 'danger 6',
            },
            {
              figmaVar: 'Interaction - Danger - Activated',
              cssVar: 'interaction-danger-activated',
              paletteColor: 'danger 8',
            },
          ],
        },
      ]"
    />
  </vue-stack>
</template>

<script lang="ts">
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import ColorTokensSection from '~/assets/design-system/docs/components/ColorTokensSection.vue';

export default {
  name: 'ColorTokens',
  components: { ColorTokensSection, VueStack },
};
</script>
