import FeatureList from './FeatureList.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Marketing/FeatureList',
  component: FeatureList,
};

const Template = (args) => ({
  components: { FeatureList, ComponentDocs },
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="FeatureList"
      usage="Used to display the most important features of your product."
      story="Display Vuesion features"
  >
  <feature-list/>
  </component-docs>`,
});

export const Default = Template.bind({});
Default.args = {};
