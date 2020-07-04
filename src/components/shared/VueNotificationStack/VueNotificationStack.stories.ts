import { storiesOf } from '@storybook/vue';
import VueButton from '../VueButton/VueButton.vue';
import { addNotification, INotification } from './utils';
import VueNotificationStack from './VueNotificationStack.vue';

const story = storiesOf('Molecules|NotificationStack', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueNotificationStack, VueButton },
    template: `
<div>
  <vue-notification-stack />
  <vue-button color="secondary" @click="addNotificationClick">add notification</vue-button>
</div>
`,
    methods: {
      addNotificationClick() {
        addNotification({
          title: 'this is a test',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
        } as INotification);
      },
    },
  }),
  {
    info: {
      components: { VueNotificationStack },
    },
  },
);
