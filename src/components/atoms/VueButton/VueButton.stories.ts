import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';
import VueText from '@/components/atoms/VueText/VueText.vue';
import VueIconGithub from '../icons/VueIconGithub/VueIconGithub.vue';
import { brandColorVariations } from '../../prop-validators';
import VueButton from './VueButton.vue';

const story = storiesOf('Atoms|Button', module) as any;

story.add(
  'Button Variants',
  () => ({
    components: { VueButton, VueIconGithub, VueBox, VueStack, VueInline, VueText },
    data(): any {
      return {
        variations: brandColorVariations,
        loading: false,
      };
    },
    template: `<vue-box>
  <vue-stack>
    <vue-stack v-for="variation in variations" space="4" stack-phone>
      <vue-text uppercase>{{ variation }}</vue-text>
      <vue-inline space="8" stack-phone>
        <vue-button @click="onClick" :color="variation">{{ variation }}</vue-button>
        <vue-button @click="onClick" :color="variation"><vue-icon-github />&nbsp;{{ variation }} with icon</vue-button>
        <vue-button @click="onClick" :color="variation" disabled>{{ variation }} disabled</vue-button>
        <vue-button @click="onClick" :color="variation" :loading="loading">{{ variation }} loading</vue-button>
        <vue-button @click="onClick" :color="variation" ghost>{{ variation }} ghost</vue-button>
        <vue-button @click="onClick" :color="variation" block>{{ variation }} block</vue-button>
      </vue-inline>
    </vue-stack>
  </vue-stack>
</vue-box>
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
  'Button as Link',
  () => ({
    components: { VueButton, VueBox, VueStack, VueInline, VueText },
    data(): any {
      return {
        loading: false,
      };
    },
    template: `<vue-box>
    <vue-stack>
      <vue-stack space="4">
        <vue-text>Router-Link</vue-text>
        <vue-inline space="8" stack-phone>
          <vue-button @click="onClick" as="nuxt-link" color="primary" href="/">Nuxt Link</vue-button>
          <vue-button @click="onClick" as="nuxt-link" color="primary" href="/" disabled>Nuxt Link Disabled</vue-button>
          <vue-button @click="onClick" as="nuxt-link" color="primary" href="/" :loading="loading">Nuxt Link Loading</vue-button>
        </vue-inline>
      </vue-stack>

      <vue-stack space="4">
        <vue-text>A-Element</vue-text>
        <vue-inline space="8" stack-phone>
          <vue-button @click="onClick" as="a" color="primary" href="/">Anchor</vue-button>
          <vue-button @click="onClick" as="a" color="primary" href="/" disabled>Anchor</vue-button>
          <vue-button @click="onClick" as="a" color="primary" href="/" outlined>Anchor</vue-button>
          <vue-button @click="onClick" as="a" color="primary" href="/" ghost>Anchor</vue-button>
          <vue-button @click="onClick" as="a" color="primary" href="/" :loading="loading">Anchor</vue-button>
        </vue-inline>
      </vue-stack>
    </vue-stack>
</vue-box>
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
