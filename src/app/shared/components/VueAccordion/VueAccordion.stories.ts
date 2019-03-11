import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueAccordion from './VueAccordion.vue';
import VueAccordionItem from './VueAccordionItem/VueAccordionItem.vue';

const story = storiesOf('Organisms|Accordion', module) as any;
const storySchema = [
  {
    label: 'Default',
  },
  {
    label: 'Multiple',
    props: ['multiple'],
  },
];

for (const item of storySchema) {
  story.add(
    item.label,
    withInfo({})(() => ({
      components: {
        VueAccordion,
        VueAccordionItem,
      },
      template: `<vue-accordion ${item.props ? item.props.join(' ') : ''}>
  <vue-accordion-item title="Item 1" :initOpen="true">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  </vue-accordion-item>
  <vue-accordion-item title="Item 2">
    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  </vue-accordion-item>
</vue-accordion>`,
    })),
  );
}
