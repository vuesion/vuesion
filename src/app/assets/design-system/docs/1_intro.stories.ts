import VueCard from '@/components/design-system/surfaces-and-feedback/VueCard/VueCard.vue';
import VueStack from '@/components/design-system/layout/VueStack/VueStack.vue';
import VueText from '@/components/design-system/typography/VueText/VueText.vue';

export default {
  title: 'Design System Foundation',
  component: null,
  argTypes: {},
  parameters: { controls: { disabled: true } },
};

const Template = () => ({
  components: {
    VueCard,
    VueStack,
    VueText,
  },
  template: `<vue-card>
  <vue-stack space="16">
    <vue-text look="title-lg" weight="semi-bold">Design System</vue-text>
    <vue-text color="low" italic>All necessary files are located under <vue-text look="description-sm" weight="semi-bold">./src/assets/design-system.</vue-text></vue-text>
    <vue-text>
      Achieving a unique Brand Identity with a UI toolkit that is already build on top of<br/>
      another Design System (e.g. Material Design, Bootstrap, Ant) isn't easy and<br/>
      the same applies to consistency, especially by combining multiple UI libraries.
      <br/>
      <br/>
      Our component blueprints provide the most common features for you<br/>
      to extend and give you the ability to fit their appearance your Corporate Design.<br/>
      <br/>
      <br/>
      We are aware that not everyone has to implement their own Design System.<br/>
      If this is the case for you, you might be interested in <a href="https://github.com/nuxt-community/vuetify-module" target="_blank" rel="noopener">Vuetify</a> or <a href="https://tailwindcss.nuxtjs.org/" target="_blank" rel="noopener">Tailwind</a>
    </vue-text>
  </vue-stack>
  </vue-card>`,
});

export const Intro = {
  render: Template,
};
