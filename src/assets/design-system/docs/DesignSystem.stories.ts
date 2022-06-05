import { storiesOf } from '@storybook/vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueMarkdown from '@/components/data-display/VueMarkdown/VueMarkdown.vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import UtilityTokenSection from '@/assets/design-system/docs/components/UtilityTokenSection.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import TokenItem from '@/assets/design-system/docs/components/TokenItem.vue';
import VueTiles from '@/components/layout/VueTiles/VueTiles.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import ColorTokens from './components/ColorTokens.vue';
import ColorPalette from './components/ColorPalette.vue';

let story = storiesOf('Foundation|Intro', module) as any;

story.addParameters({ options: { showAddonPanel: false } });

story.add('Design System', () => ({
  components: { VueMarkdown, VueBox },
  template: `<vue-box><vue-markdown :use-router="false">
# Design System

**_All necessary files are located under \`./src/assets/design-system\`._**

Achieving a unique Brand Identity with a UI toolkit that is already build on top of
another Design System (e.g. Material Design, Bootstrap, Ant) isn't easy and
the same applies to consistency, especially by combining multiple UI libraries.

Our component blueprints provide the most common features for you
to extend and give you the ability to fit their appearance your Corporate Design.

We are aware that not everyone has to implement their own Design System.
If this is the case for you, you might be interested in [Vuetify](https://github.com/nuxt-community/vuetify-module) or [tailwind](https://tailwindcss.nuxtjs.org/)
</vue-markdown></vue-box>
`,
}));

story = storiesOf('Foundation|General', module) as any;

story.addParameters({ options: { showAddonPanel: false } });

story.add('Color Palette', () => ({
  components: { ColorPalette, ComponentDocs },
  template: `<component-docs
    component-name="Color Palette"
    usage="This palette are the base colors used for the color tokens."
    suffix=""
  >
    <color-palette />
  </component-docs>
`,
}));

story.add('Color Tokens', () => ({
  components: { ColorTokens, ComponentDocs },
  template: `<component-docs
    component-name="Color tokens"
    usage="The Vuesion color system aims to make user interfaces more usable by helping teams apply
    colors in a functional and meaningful way. Color tokens are defined by their function in an interface —
    this allows the designer to focus “how” and “why” rather than “what color should this be?”"
    suffix=""
  >
<color-tokens />
</component-docs>
`,
}));

story.add('Utility Component Tokens', () => ({
  components: { ComponentDocs, UtilityTokenSection, VueStack, TokenItem, VueTiles, VueText, VueBox },
  template: `<component-docs
    component-name="Utility Component Tokens"
    usage="These are other tokenized design values. Some of these tokens do were not able to be properly translated to Figma so new components will have to manually input these values."
    suffix=""
  >
  <vue-stack space="64">
    <utility-token-section title="Elevation" description="These are the possible elevations, or distances between surfaces.">
      <vue-stack>
        <token-item
          figma="Elevation 1"
          css="brand-elevation-1"
          palette="neutral 10"
          :elevation="1"
          circle-color="brand-bg-default-high"
          small-circle-color="brand-bg-inverse-high"
        />
        <token-item
          figma="Elevation 2"
          css="brand-elevation-2"
          palette="neutral 10"
          :elevation="2"
          circle-color="brand-bg-default-high"
          small-circle-color="brand-bg-inverse-high"
        />
        <token-item
          figma="Elevation 3"
          css="brand-elevation-3"
          palette="neutral 10"
          :elevation="3"
          circle-color="brand-bg-default-high"
          small-circle-color="brand-bg-inverse-high"
        />
      </vue-stack>
    </utility-token-section>
    <utility-token-section title="Accessibility" description="Tokens used for accessibility such as focus.">
      <vue-stack>
        <token-item
          figma="📀 Interaction - Focused"
          css="brand-focused"
          palette="primary 3"
          circle-color="brand-interaction-primary-enabled"
          small-circle-color="brand-bg-inverse-high"
          focused
        />
      </vue-stack>
    </utility-token-section>
    <utility-token-section title="Border Radiuses" description="There are a finite list of possible border radiuses to prevent the creation of shapes that inconsistent and introduce unnecessary tension between elements and spacing.">
      <vue-tiles :columns="[1, 3, 5]">
        <vue-box
          v-for="radius in [
            {figma: 'None', css: '---'},
            {figma: 'Extra Small - 2 pixels', css: 'brand-border-radius-xs'},
            {figma: 'Small - 4 pixels', css: 'brand-border-radius-sm'},
            {figma: 'Medium - 8 pixels', css: 'brand-border-radius-md'},
            {figma: 'Large - 16 pixels', css: 'brand-border-radius-lg'},
            ]"
          padding="0"
        >
          <vue-stack space="16" align="center">
            <vue-box
              :styles="{
              height: '80px',
              width:'160px',
              background: 'var(--brand-surface-default-medium)',
              border: '1px solid var(--brand-border-default-high)',
              borderRadius: 'var(--' + radius.css + ')' }"/>
            <vue-stack space="0" align="center">
              <vue-text look="h6" color="text-high">{{ radius.figma }}</vue-text>
              <vue-text color="text-low">{{ radius.css }}</vue-text>
            </vue-stack>
          </vue-stack>
        </vue-box>
      </vue-tiles>
    </utility-token-section>
  </vue-stack>
  </component-docs>`,
}));
