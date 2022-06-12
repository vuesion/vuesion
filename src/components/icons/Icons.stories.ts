import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import IconList from '~/components/icons/IconList.vue';

export default {
  title: 'Foundation/General',
  component: IconList,
  argTypes: {},
  parameters: { controls: { disabled: true } },
};

const Template = (args) => ({
  components: {
    IconList,
    ComponentDocs,
  },
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="Hero Icons"
      usage="Filled ( 20 x 20 )"
      suffix=""
  >
  <icon-list/>
  </component-docs>`,
});

export const Iconography = Template.bind({});
