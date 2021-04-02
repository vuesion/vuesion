import { storiesOf } from '@storybook/vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueHidden from './VueHidden.vue';

const story = storiesOf('Design System|Utils/Hidden', module) as any;

story.add(
  'Hide content on phone and large desktop',
  () => ({
    components: { VueHidden, VueBox },
    template: `<vue-box><vue-hidden phone large-desktop>
    Only visible on tabletPortrait, tabletLandscape and smallDesktop
    </vue-hidden></vue-box>`,
  }),
  {
    info: {
      components: { VueHidden },
    },
  },
);

story.add(
  'Show content only for screen readers',
  () => ({
    components: { VueHidden },
    template: `<vue-hidden on-screen>Only visible for screen readers</vue-hidden>`,
  }),
  {
    info: {
      components: { VueHidden },
    },
  },
);
