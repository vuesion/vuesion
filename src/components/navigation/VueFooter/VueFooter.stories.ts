import VueFooter from './VueFooter.vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Navigation/Footer',
  component: VueFooter,
  argTypes: {},
};

const Template = (args) => ({
  components: {
    VueFooter,
    ComponentDocs,
  },
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="Footer"
      usage="Secondary navigation element used to surface specific, not-often-accessed content."
      story="Show footer and all its properties."
  >
    <vue-footer v-bind="args" />
  </component-docs>`,
});

export const Default = Template.bind({});

Default.args = {
  slim: false,
  languages: [
    { label: 'English', value: 'en' },
    { label: 'Deutsch', value: 'de' },
  ],
  themes: [
    { label: 'Dark', value: 'dark' },
    { label: 'Light', value: 'light' },
  ],
  selectedLocale: 'en',
  selectDuration: 250,
};
