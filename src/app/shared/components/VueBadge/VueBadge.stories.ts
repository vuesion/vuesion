import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VueBadge      from './VueBadge.vue';

const story = (storiesOf('VueBadge', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { VueBadge },
  template:   `<vue-badge>VueBadge</vue-badge>`,
}));

story.add('Primary', () => ({
  components: { VueBadge },
  template:   `<vue-badge primary>VueBadge</vue-badge>`,
}));

story.add('Accent', () => ({
  components: { VueBadge },
  template:   `<vue-badge accent>VueBadge</vue-badge>`,
}));

story.add('Warn', () => ({
  components: { VueBadge },
  template:   `<vue-badge warn>VueBadge</vue-badge>`,
}));
