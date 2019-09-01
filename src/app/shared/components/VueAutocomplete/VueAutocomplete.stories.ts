import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import VueAutocomplete from './VueAutocomplete.vue';
import { AutocompleteOptionsFixture } from './fixtures/IAutocompleteFixture';
import { i18n } from '../../plugins/i18n/i18n';

const story = storiesOf('Organisms|Autocomplete', module) as any;

story.add(
  'Default',
  withInfo({})(() => ({
    components: { VueAutocomplete },
    data(): any {
      return {
        autocompleteOptions: [],
        model: { label: 'foo9', value: 'bar9' },
      };
    },
    methods: {
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
      change: action('@change'),
    },
    template: `<div>model: {{ model }}
        <br/>
        <br/>
        <vue-autocomplete
            v-model="model"
            name="foo"
            id="foo"
            :options="autocompleteOptions"
            :max-options="3"
            placeholder="Type something (e.g. foo)"
            @request="onRequest($event);request($event)"
            @change="change"/></div>`,
    i18n,
  })),
);

story.add(
  'Loading',
  withInfo({})(() => ({
    components: { VueAutocomplete },
    data(): any {
      return {
        isLoading: false,
        autocompleteOptions: [],
      };
    },
    methods: {
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
      change: action('@change'),
    },
    template: `<vue-autocomplete
            name="foo"
            id="foo"
            validation="required"
            required
            :options="autocompleteOptions"
            message="Type something (e.g. foo)"
            error-message="This field is mandatory"
            :max-options="3"
            :is-loading="isLoading"
            placeholder="Search query"
            @request="onRequest($event);request($event)"
            @change="change"/>`,
    i18n,
  })),
);
