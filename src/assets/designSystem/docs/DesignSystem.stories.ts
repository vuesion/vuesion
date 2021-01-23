import { storiesOf } from '@storybook/vue';
import VueMarkdown from '@/components/organisms/VueMarkdown/VueMarkdown.vue';
import BrandColors from './components/BrandColors.vue';
import ColorPalette from './components/ColorPalette.vue';

let story = storiesOf('Design System|Design System', module) as any;

story.addParameters({ options: { showAddonPanel: false } });

story.add('Intro', () => ({
  components: { VueMarkdown },
  template: `<vue-markdown :style="{padding:'32px'}" :use-router="false">
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
</vue-markdown>
`,
}));

story = storiesOf('Design System|Branding', module) as any;

story.addParameters({ options: { showAddonPanel: false } });

story.add('Color Palette', () => ({
  components: { VueMarkdown, ColorPalette },
  template: `<div :style="{padding:'32px'}">
<vue-markdown :use-router="false">
### Color Palette
</vue-markdown>
<color-palette />
</div>
`,
}));

story.add('Color Tokens', () => ({
  components: { VueMarkdown, BrandColors },
  template: `<div :style="{padding:'32px'}">
<vue-markdown :use-router="false">
### Brand Colors
Every brand color is related to a color in the color palette.
</vue-markdown>
<brand-colors/>
</div>
`,
}));

story.addParameters({ options: { showAddonPanel: false } });

story = storiesOf('Design System|Layout', module) as any;

story.addParameters({ options: { showAddonPanel: false } });

story.add('Layout', () => ({
  components: { VueMarkdown },
  template: `<vue-markdown :style="{padding:'32px'}" :use-router="false">
## Layout
The Grid-System is based on Flex box and comes in form of three included components.

Component     | Purpose
--------------|-------
VueGrid       | Container that is limited in the width, general page layout
VueGridRow    | Row that is always 100% width and will be stacked on the page
VueGridColumn | Column in the row that will be distributed equally on the page

### Spacing
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
$space-84  |  84px
</vue-markdown>
`,
}));

story = storiesOf('Design System|Break points', module) as any;

story.addParameters({ options: { showAddonPanel: false } });

story.add('Break points', () => ({
  components: { VueMarkdown },
  template: `<vue-markdown :style="{padding:'32px'}" :use-router="false">
## Break points
If you want to use a break point inside one of your components, we provide you width
mixins to keep everything consistent and to avoid unnecessary media definitions:

\`@include mediaMin(break-point-id)\`

\`@include mediaMax(break-point-id)\`

Break Point Id   | MinWidth | MaxWidth | GutterWidth
-----------------|----------|----------|------------
phone            | 320px    | 319px    | 3.2rem
tabletPortrait   | 768px    | 767px    | 3.2rem
tabletLandscape  | 1024px   | 1023px   | 3.2rem
smallDesktop     | 1280px   | 1279px   | 3.2rem
largeDesktop     | 1440px   | 1439px   | 3.2rem
</vue-markdown>
`,
}));
