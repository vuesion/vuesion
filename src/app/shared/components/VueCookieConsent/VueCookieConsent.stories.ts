import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import VueCookieConsent from './VueCookieConsent.vue';
import { i18n } from '../../plugins/i18n/i18n';

const story = storiesOf('Organisms|CookieConsent', module) as any;

story.add(
  'Default',
  withInfo({})(() => ({
    i18n,
    components: { VueCookieConsent },
    template: `<vue-cookie-consent current-version="1.0.0" cookie-consent-version="" :set-cookie-consent-version="action">
                  VueCookieConsent
                </vue-cookie-consent>`,
    methods: {
      action: action('@onClick'),
    },
  })),
);
