import { storiesOf }    from '@storybook/vue';
import { action }       from '@storybook/addon-actions';
import VueInfoAddon     from 'storybook-addon-vue-info';
import VueCookieConsent from './VueCookieConsent.vue';

const story = (storiesOf('VueCookieConsent', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { VueCookieConsent },
  template:   `<vue-cookie-consent current-version="1.0.0" cookie-consent-version="" :set-cookie-consent-version="action">
                  VueCookieConsent
                </vue-cookie-consent>`,
  methods:    {
    action: action('@onClick'),
  },
}));
