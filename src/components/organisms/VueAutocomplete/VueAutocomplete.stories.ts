import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { i18n } from '@/test/i18n';
import VueAutocomplete from './VueAutocomplete.vue';
import { AutocompleteFixture } from './IAutocompleteFixture';

const story = storiesOf('Organisms|Autocomplete', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueAutocomplete },
    data(): any {
      return {
        isLoading: false,
        items: [],
        model: { label: 'foo3', value: 'bar3' },
      };
    },
    methods: {
      onSearch(query: string) {
        action('@search');
        this.isLoading = true;

        setTimeout(() => {
          const returnItems: boolean = Math.random() > 0.5 || query.includes('foo');

          if (returnItems) {
            this.items = AutocompleteFixture;
          } else {
            this.items = [];
          }

          this.isLoading = false;
        }, 500);
      },
      onInput: action('@input'),
    },
    template: `<div><vue-autocomplete
      v-model="model"
      id="foo"
      name="foo"
      validation="required"
      required
      :items="items"
      description="Type something (e.g. foo)"
      error-message="This field is mandatory"
      :max-items="3"
      :loading="isLoading"
      placeholder="Search query"
      label="items"
      @search="onSearch($event)"
      @input="onInput"/>
    <br/>
    <br/>
    {{ model }}
    </div>`,
    i18n,
  }),
  {
    info: {
      components: { VueAutocomplete },
    },
  },
);
