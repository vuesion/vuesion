import { storiesOf }                  from '@storybook/vue';
import { action }                     from '@storybook/addon-actions';
import VueInfoAddon                   from 'storybook-addon-vue-info';
import VueAutocomplete                from './VueAutocomplete.vue';
import { AutocompleteOptionsFixture } from './fixtures/IAutocompleteFixture';
import { i18n }                    from '../../plugins/i18n/i18n';

const story = (storiesOf('VueAutocomplete', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { VueAutocomplete },
  data(): any {
    return {
      autocompleteOptions: [],
    };
  },
  methods:    {
    onRequest(query: string) {
      action('@request');

      const returnOptions: boolean = Math.random() > 0.5 || query.indexOf('foo') > -1;

      if (returnOptions) {
        this.autocompleteOptions = AutocompleteOptionsFixture;
      } else {
        this.autocompleteOptions = [];
      }

    },
    request: action('@request'),
    change:  action('@change'),
  },
  template:   `<vue-autocomplete
            :options="autocompleteOptions"
            :max-options="3"
            placeholder="Type something (e.g. foo)"
            @request="onRequest($event);request($event)"
            @change="change"/>`,
  i18n,
}));

story.add('Loading', () => ({
  components: { VueAutocomplete },
  data(): any {
    return {
      isLoading:           false,
      autocompleteOptions: [],
    };
  },
  methods:    {
    onRequest(query: string) {
      action('@request');
      this.isLoading = true;

      setTimeout(() => {
        const returnOptions: boolean = Math.random() > 0.5 || query.indexOf('foo') > -1;

        if (returnOptions) {
          this.autocompleteOptions = AutocompleteOptionsFixture;
        } else {
          this.autocompleteOptions = [];
        }

        this.isLoading = false;
      }, 2000);

    },
    request: action('@request'),
    change:  action('@change'),
  },
  template:   `<vue-autocomplete
            :options="autocompleteOptions"
            :max-options="3"
            :is-loading="isLoading"
            placeholder="Type something (e.g. foo)"
            @request="onRequest($event);request($event)"
            @change="change"/>`,
  i18n,
}));
