import { storiesOf } from '@storybook/vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import { IItem } from '@/interfaces/IItem';
import VueSelect from './VueSelect.vue';

const story = storiesOf('Input & Actions|Select', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueSelect, ComponentDocs, VueInline, VueText },
    data(): { items: Array<IItem>; model: string } {
      return {
        items: [
          { label: 'foo', value: 'foo' },
          { label: 'bar', value: 'bar' },
          { label: 'baz', value: 'baz' },
        ],
        model: null,
      };
    },
    template: `<component-docs
    component-name="Select"
    usage="Select lets users choose one option from an options menu.
    Consider select when you have 4 or more options, to avoid cluttering the interface.
    Different from dropdown menu because it is used for data entry in forms."
    story="Display single select with options. Please interact with the select to see different states."
    >
    <vue-inline stack-phone stack-tablet-portrait stack-tablet-landscape stack-small-desktop stack-large-desktop>
      <vue-text look="small-title" weight="semi-bold">Model: {{ model }}</vue-text>
      <vue-select
        name="select1"
        id="select1"
        label="Select"
        placeholder="Placeholder"
        description="Description"
        error-message="Error message"
        :items="items"
        v-model="model"
        validation="required"
        required
      />

      <vue-select
        name="select2"
        id="select2"
        label="Select"
        placeholder="Placeholder"
        description="Description"
        error-message="Error message"
        :items="items"
        v-model="model"
        validation="required"
        required
        disabled
      />
    </vue-inline>
    </component-docs>`,
  }),
  {
    info: {
      components: { VueSelect },
    },
  },
);
