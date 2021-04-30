import { storiesOf } from '@storybook/vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueMarkdown from '@/components/organisms/VueMarkdown/VueMarkdown.vue';
import BrandColors from './components/BrandColors.vue';
import ColorPalette from './components/ColorPalette.vue';

let story = storiesOf('Foundation|Intro', module) as any;

story.addParameters({ options: { showAddonPanel: false } });

story.add('Design System', () => ({
  components: { VueMarkdown, VueBox },
  template: `<vue-box><vue-markdown :use-router="false">
# Design System

Vuesion comes with a Design System that you can 100% customize.

**_The files for customizing the Design System are located in \`./src/assets/shared/designSystem\`._**

Design Systems are really complex and the key to a good Design System is
consistency.

It is hard to achieve a unique Brand Identity with a UI toolkit that is already build on top of another Design System (e.g. Material Design).
It is also hard to achieve consistency if you have to combine multiple UI libraries without forking
and customizing them to fit your Brand Identity.

_Over the years we discovered that it's much harder to maintain all of these forks for a project than
building our own set of components that are **100% customizable** because the code is 100% accessible in your code base._

This Design System is the next step, it is a blueprint that enables you to create your very own Design System that perfectly fits your
Brand or your clients Corporate Identity.

We are aware that not everyone has to implement their own professional Design System.
If this is the case for you, you might be interested in [Vuetify](https://github.com/nuxt-community/vuetify-module) or [tailwind](https://tailwindcss.nuxtjs.org/)
</vue-markdown></vue-box>
`,
}));

story = storiesOf('Foundation|General', module) as any;

story.addParameters({ options: { showAddonPanel: false } });

story.add('Color Palette', () => ({
  components: { VueMarkdown, ColorPalette, VueBox },
  template: `<vue-box>
<vue-markdown :use-router="false">
### Color Palette
</vue-markdown>
<color-palette />
</vue-box>
`,
}));

story.add('Color Tokens', () => ({
  components: { VueMarkdown, BrandColors, VueBox },
  template: `<vue-box>
<vue-markdown :use-router="false">
### Brand Colors
Every brand color is related to a color in the color palette.
</vue-markdown>
<brand-colors/>
</vue-box>
`,
}));

story.add('Spacings', () => ({
  components: { VueMarkdown, VueBox },
  template: `<vue-box><vue-markdown :use-router="false">
## Spacings
To keep the spacing consistent we have a couple of variables with the prefix \`$space-\`

Variable   | Space in pixel
-----------|---------------
$space-2   |   2px
$space-4   |   4px
$space-8   |   8px
$space-12  |  12px
$space-16  |  16px
$space-20  |  20px
$space-24  |  24px
$space-32  |  32px
$space-40  |  40px
$space-48  |  48px
$space-52  |  52px
$space-56  |  56px
$space-64  |  64px
$space-72  |  72px
$space-84  |  84px
$space-96  |  96px
$space-120  |  120px
$space-128  |  128px
$space-192  |  192px
</vue-markdown></vue-box>
`,
}));

story.add('Break points', () => ({
  components: { VueMarkdown, VueBox },
  template: `<vue-box><vue-markdown :use-router="false">
## Break points
If you want to use a break points inside one of your components, we provide you width
mixins to keep everything consistent and to avoid unnecessary media definitions:

\`@include mediaMin(break-point-id)\`

\`@include mediaMax(break-point-id)\`

\`@include mediaMinMax(break-point-id)\`

Break Point Id   | Min-width | Max-width
-----------------|----------|----------
phone            | 0        | 767px
tabletPortrait   | 768px    | 1023px
tabletLandscape  | 1024px   | 1279px
smallDesktop     | 1280px   | 1439px
largeDesktop     | 1440px   | 4095px
</vue-markdown></vue-box>
`,
}));

story.add('Elevation / Box shadows', () => ({
  components: { VueMarkdown, VueBox },
  template: `<vue-box>
  <vue-markdown :use-router="false">
    ### Box Shadows

    We have three different kinds of elevations:.

    \`--brand-elevation-1: 0 -1px 2px rgba(19, 20, 22, 0.08), 0 3px 5px rgba(19, 20, 22, 0.12);\`
    \`--brand-elevation-2: 0 -1px 3px rgba(19, 20, 22, 0.1), 0 4px 6px rgba(19, 20, 22, 0.2);\`
    \`--brand-elevation-3: 0 -1px 3px rgba(19, 20, 22, 0.1), 0 4px 6px rgba(19, 20, 22, 0.2);\`

    We have one box-shadow that is used as outline, e.g. for focus states
    \`--brand-shadow-outline: 0 0 0 #{$space-8} #{rgba(palette-color-level('primary', 6), 0.5)};\`
  </vue-markdown>
  </vue-box>
  `,
}));

story.add('Border Radius', () => ({
  components: { VueMarkdown, VueBox },
  template: `<vue-box>
  <vue-markdown :use-router="false">

    ### Border Radius

    We have three different kinds of border radius.

    \`--brand-border-radius-sm: #{$space-4};\`
    \`--brand-border-radius-md: #{$space-8};\`
    \`--brand-border-radius-lg: #{$space-16};\`
  </vue-markdown>
  </vue-box>
  `,
}));
