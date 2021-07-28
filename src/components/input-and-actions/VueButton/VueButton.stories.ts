import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueColumns from '@/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueHidden from '@/components/utils/VueHidden/VueHidden.vue';
import { shirtSizes, buttonStyles } from '../../prop-validators';
import VueButton from './VueButton.vue';

const story = storiesOf('Input & Actions|Button', module) as any;

story.add(
  'Styles',
  () => ({
    components: {
      VueButton,
      VueStack,
      VueInline,
      VueText,
      ComponentDocs,
      VueColumns,
      VueColumn,
      VueHidden,
    },
    data(): any {
      return {
        styles: buttonStyles,
        sizes: shirtSizes,
        loading: false,
      };
    },
    template: `
<component-docs
  component-name="Button"
  usage="Buttons are used primarily to take action. Each type has a different best-for context: - primary: key action. use for the most important;
- basic: used with primary;
- outline: used for less prominent actions, maybe in actions in a series. used for tasks;
- danger: used to destruct"
  story="Show all button variations and sized. Please interact with the buttons to see different states."
>
  <vue-stack space="64">
    <vue-columns>
        <vue-column :width="['content', '150px']"></vue-column>

      <vue-column v-for="size in sizes" :key="size" width="200px">
        <vue-text look="large-title">{{ size }}</vue-text>
      </vue-column>
    </vue-columns>

    <vue-columns v-for="style in styles" :key="style"stack-phone>
        <vue-column :width="['content', '150px']">
          <vue-text look="large-title">{{ style }}</vue-text>
        </vue-column>

      <vue-column v-for="size in sizes" :key="size":width="['content', '200px']">
        <vue-inline stack-phone stack-tablet-portrait stack-tablet-landscape stack-small-desktop stack-large-desktop>
          <vue-button :look="style" :size="size">Button</vue-button>
          <vue-button :look="style" :size="size" leading-icon="github">
            Button
          </vue-button>
          <vue-button :look="style" :size="size" trailing-icon="github">
            Button
          </vue-button>
          <vue-button :look="style" :size="size" block>Button</vue-button>
          <vue-button :look="style" :size="size" :loading="loading">Button</vue-button>
          <vue-button :look="style" :size="size" disabled>Button</vue-button>
        </vue-inline>
      </vue-column>
    </vue-columns>
  </vue-stack>
</component-docs>
    `,
    methods: {
      onClick: action('@click'),
    },
    mounted() {
      setInterval(() => {
        this.loading = !this.loading;
      }, 2000);
    },
  }),
  {
    info: {
      components: { VueButton },
    },
  },
);

story.add(
  'As Navigation',
  () => ({
    components: { VueButton, VueStack, VueInline, VueText, ComponentDocs },
    data(): any {
      return {
        loading: false,
      };
    },
    template: `
<component-docs story="Display buttons as navigation element (Nuxt-Link or Anchor).">
  <vue-stack>
    <vue-stack space="8">
      <vue-text look="small-title">Nuxt-Link</vue-text>
      <vue-inline stack-phone>
        <vue-button @click="onClick" as="nuxt-link" look="primary" href="/">Nuxt-Link</vue-button>
        <vue-button @click="onClick" as="nuxt-link" look="primary" href="/" disabled>Nuxt-Link Disabled</vue-button>
        <vue-button @click="onClick" as="nuxt-link" look="primary" href="/" :loading="loading">Nuxt-Link Loading
        </vue-button>
      </vue-inline>
    </vue-stack>

    <vue-stack space="8">
      <vue-text look="small-title">Anchor</vue-text>
      <vue-inline stack-phone>
        <vue-button @click="onClick" as="a" look="outline" href="/">Anchor</vue-button>
        <vue-button @click="onClick" as="a" look="outline" href="/" disabled>Anchor Disabled</vue-button>
        <vue-button @click="onClick" as="a" look="outline" href="/" :loading="loading">Anchor Loading</vue-button>
      </vue-inline>
    </vue-stack>
  </vue-stack>
</component-docs>
    `,
    methods: {
      onClick: action('@onClick'),
    },
    mounted() {
      setInterval(() => {
        this.loading = !this.loading;
      }, 2000);
    },
  }),
  {
    info: {
      components: { VueButton },
    },
  },
);
