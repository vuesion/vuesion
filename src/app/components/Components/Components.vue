<template>
  <div :class="$style.components">

    <div :class="$style.header">
      <vue-grid>
        <vue-grid-row>
          <vue-grid-item>
            <h1>{{ $t('App.nav.components' /* Components */) }}</h1>
            <p>
              This Boilerplate comes with an initial set of solutions for common UX/UI patterns.
            </p>
            <p>
              That makes it easy for you to add specific features for your business logic and
              keeps the code as lean as possible.
            </p>
          </vue-grid-item>
        </vue-grid-row>
      </vue-grid>
    </div>

    <vue-grid>
      <vue-grid-row>
        <vue-grid-item>
          <h2>Headlines with badges</h2>
          <h1>Headline 1
            <vue-badge>New</vue-badge>
          </h1>
          <h2>Headline 2
            <vue-badge primary>New</vue-badge>
          </h2>
          <h3>Headline 3
            <vue-badge accent>New</vue-badge>
          </h3>
          <h4>Headline 4
            <vue-badge warn>New</vue-badge>
          </h4>
          <h5>Headline 5
            <vue-badge>New</vue-badge>
          </h5>
          <h6>Headline 6
            <vue-badge>New</vue-badge>
          </h6>
        </vue-grid-item>

        <vue-grid-item>
          <h2>Buttons</h2>

          <vue-button>Default</vue-button>
          <vue-button disabled>Default</vue-button>
          <!--<vue-button loading>Loading</vue-button>-->
          <vue-button pulse>Default</vue-button>
          <br />
          <br />
          <vue-button primary>Primary</vue-button>
          <vue-button primary disabled>Primary</vue-button>
          <!--<vue-button primary loading>Loading</vue-button>-->
          <vue-button primary pulse>Primary</vue-button>
          <br />
          <br />
          <vue-button accent>Accent</vue-button>
          <vue-button accent disabled>Accent</vue-button>
          <!--<vue-button accent loading>Loading</vue-button>-->
          <vue-button accent pulse>Accent</vue-button>
          <br />
          <br />
          <vue-button warn>Warn</vue-button>
          <vue-button warn disabled>Warn</vue-button>
          <!--<vue-button warn loading>Loading</vue-button>-->
          <vue-button warn pulse>Warn</vue-button>
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item>
          <h2>Inputs</h2>

          <vue-input placeholder="Placeholder" message="test" :value="inputValue"
                     @change="inputValue = $event.target.value" />
          <vue-input placeholder="Placeholder" disabled :value="inputValue"
                     @change="inputValue = $event.target.value" />
        </vue-grid-item>

        <vue-grid-item>
          <h2>Modal</h2>

          <vue-button primary @click="showModal = !showModal">Show Modal</vue-button>
          <vue-modal :show="showModal" @close="showModal = !showModal">
            <vue-button warn @click="showModal = !showModal">X</vue-button>
            TEST
          </vue-modal>
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item>
          <h2>Checkboxes / RadioButtons</h2>

          <vue-check-box
            name="check"
            id="check"
            label="checkbox"
            :checked="checked"
            @click="checked = !checked" />
          <br />
          <vue-check-box
            name="check2"
            id="check2"
            label="checkbox"
            :checked="checked"
            @click="checked = !checked"
            :disabled="true" />
          <br />
          <br />
          <vue-check-box
            name="radio"
            id="radio"
            label="radio"
            :checked="radio === 'radio1'"
            radio
            @click="radio = 'radio1'" />
          <br />
          <vue-check-box
            name="radio2"
            id="radio2"
            label="radio"
            :checked="radio === 'radio2'"
            radio
            @click="radio = 'radio2'" />
          <br />
          <vue-check-box
            name="radio3"
            id="radio3"
            label="radio"
            :checked="radio === 'radio3'"
            radio
            @click="radio = 'radio3'"
            :disabled="true" />
        </vue-grid-item>

        <vue-grid-item>
          <h2>Select</h2>

          <vue-select
            :options="options"
            :selected-option="selectedOption"
            @change="selectChange" />

          <p>Multi</p>
          <vue-select
            :options="options"
            :multiple="true"
            @change="selectChange" />
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item>
          <h2>Tabs</h2>
          <vue-tab-group>
            <vue-tab-item title="Profile" icon="fas fa-user">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </vue-tab-item>
            <vue-tab-item title="Settings" icon="fas fa-cog">
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </vue-tab-item>
            <vue-tab-item title="Upload" icon="fas fa-upload">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </vue-tab-item>
          </vue-tab-group>
        </vue-grid-item>

        <vue-grid-item>
          <h2>Panels</h2>

          <vue-panel>
            <vue-panel-header title="Title" subtitle="subtitle"
                              image="https://avatars2.githubusercontent.com/u/1667598?s=460&v=4" />
            <vue-panel-body>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </vue-panel-body>
            <vue-panel-footer>
              <vue-button warn>Delete</vue-button>
              <vue-button>Cancel</vue-button>
            </vue-panel-footer>
          </vue-panel>
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item>
          <h2>Collapse</h2>
          <vue-button @click="collapseDemo = !collapseDemo" accent>Collapse toggle</vue-button>
          <br />
          <br />
          <vue-collapse :show="collapseDemo">
            <div :class="$style.collapseDemo">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </div>
          </vue-collapse>
        </vue-grid-item>

        <vue-grid-item>
          <h2>Tooltip</h2>

          Lorem ipsum dolor sit amet,
          <vue-tooltip tip="This is a tooltip!">consetetur sadipscing elitr</vue-tooltip>
          , sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

          <br />
          <br />
          <vue-tooltip tip="This is a tooltip!">
            <vue-button>TEST</vue-button>
          </vue-tooltip>
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item>
          <h2>Slider</h2>

          <vue-slider
            :min="0"
            :max="200"
            :values="[0, 200]"
            @change="sliderChange"
            :formatValue="formatSliderValue"
          />


          <vue-slider
            :min="0"
            :max="200"
            :values="[50, 120]"
            @change="sliderChange"
            :formatValue="formatSliderValue"
            :disabled="true"
          />

          <vue-slider
            :min="0"
            :max="200"
            :values="[50]"
            @change="sliderChange"
            :formatValue="formatSliderValue"
          />
        </vue-grid-item>

        <vue-grid-item>
          <h2>Accordion</h2>

          <vue-accordion>
            <vue-accordion-item
              title="Item 1"
              :initOpen="true">
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
          </vue-accordion>

          <p>Multi</p>
          <vue-accordion multiple>
            <vue-accordion-item
              title="Item 1">
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
            <vue-accordion-item title="Item 3">
              <vue-button>TEST</vue-button>
            </vue-accordion-item>
          </vue-accordion>
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item>
          <h2>Pagination</h2>

          <vue-pagination :pages="10" :current="page" @change="page = $event" />
        </vue-grid-item>

        <vue-grid-item>
          <h2>Loader</h2>

          <vue-loader />
          <vue-loader primary />
          <vue-loader accent />
          <vue-loader warn />
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item>
          <h2>Calendar</h2>

          <vue-calendar @change="calendarChange" :min-date="today" :max-date="nextWeek" />
        </vue-grid-item>

        <vue-grid-item>
          <h2>DatePicker</h2>

          <vue-date-picker
            @change="calendarChange"
            :first-day-of-week="1"
            placeholder="Select a date" />
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item>
          <h2>DateRange</h2>

          <vue-date-range-picker
            @change="calendarChange"
            :first-day-of-week="1"
            placeholder-start="Select a start date"
            placeholder-end="Select a end date" />
        </vue-grid-item>

        <vue-grid-item>
          <h2>Notification Stack</h2>
          <vue-button accent @click="addNotificationClick">add notification</vue-button>
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item>
          <h2>Markdown renderer</h2>
          <vue-markdown>{{ $t('components.markdown' /*
                        ### Markdown support\n
                        - build on top of marked\n
                        - server side rendering!!!\n
                        - `github style` markdown
                        */) }}
          </vue-markdown>
        </vue-grid-item>

        <vue-grid-item>
          <h2>Autocomplete</h2>
          <vue-autocomplete
            :options="autocompleteOptions"
            :max-options="3"
            :is-loading="autocompleteLoading"
            placeholder="Type something (e.g. foo)"
            @request="onRequest" />
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
  import VueGrid                            from '../../shared/components/VueGrid/VueGrid.vue';
  import VueGridItem                        from '../../shared/components/VueGridItem/VueGridItem.vue';
  import VueButton                          from '../../shared/components/VueButton/VueButton.vue';
  import VueLoader                          from '../../shared/components/VueLoader/VueLoader.vue';
  import VuePanel                           from '../../shared/components/VuePanel/VuePanel.vue';
  import VuePanelHeader                     from '../../shared/components/VuePanel/VuePanelHeader/VuePanelHeader.vue';
  import VuePanelBody                       from '../../shared/components/VuePanel/VuePanelBody/VuePanelBody.vue';
  import VuePanelFooter                     from '../../shared/components/VuePanel/VuePanelFooter/VuePanelFooter.vue';
  import VueInput                           from '../../shared/components/VueInput/VueInput.vue';
  import VueCollapse                        from '../../shared/components/VueCollapse/VueCollapse.vue';
  import VueModal                           from '../../shared/components/VueModal/VueModal.vue';
  import VueTabGroup                        from '../../shared/components/VueTabGroup/VueTabGroup.vue';
  import VueTabItem                         from '../../shared/components/VueTabGroup/VueTabItem/VueTabItem.vue';
  import VueCheckBox                        from '../../shared/components/VueCheckBox/VueCheckBox.vue';
  import VueTooltip                         from '../../shared/components/VueTooltip/VueTooltip.vue';
  import VueSlider                          from '../../shared/components/VueSlider/VueSlider.vue';
  import VueAccordion                       from '../../shared/components/VueAccordion/VueAccordion.vue';
  import VueAccordionItem
                                            from '../../shared/components/VueAccordion/VueAccordionItem/VueAccordionItem.vue';
  import VuePagination                      from '../../shared/components/VuePagination/VuePagination.vue';
  import VueSelect, { IVueSelectOption }    from '../../shared/components/VueSelect/VueSelect.vue';
  import VueCalendar                        from '../../shared/components/VueCalendar/VueCalendar.vue';
  import VueDatePicker                      from '../../shared/components/VueDatePicker/VueDatePicker.vue';
  import VueDateRangePicker                 from '../../shared/components/VueDateRangePicker/VueDateRangePicker.vue';
  import { addNotification, INotification } from '../../shared/components/VueNotificationStack/utils';
  import VueMarkdown                        from '../../shared/components/VueMarkdown/VueMarkdown';
  import VueGridRow                         from '../../shared/components/VueGridRow/VueGridRow';
  import VueAutocomplete                    from '../../shared/components/VueAutocomplete/VueAutocomplete';
  import { AutocompleteOptionsFixture }     from '../../shared/components/VueAutocomplete/fixtures/IAutocompleteFixture';
  import VueBadge                           from '../../shared/components/VueBadge/VueBadge';

  export default {
    metaInfo:   {
      title: 'vue-starter - Components',
      meta:  [
        {
          name:    'description',
          content: 'vue-starter - includes most common UI/UX use cases, for example: calendar, date picker, range slider, accordion and more!',
        },
        {
          name:    'robots',
          content: 'INDEX,FOLLOW',
        },
        {
          name:    'keywords',
          content: 'vue.js, vuex, vuex-persist, seo, server-side-rendering, isomorphic, progressive-web-app',
        },

        { name: 'og:url', content: 'https://vue-starter.herokuapp.com/' },
        { name: 'og:site_name', content: 'vue-starter' },
        { name: 'og:type', content: 'website' },
        { name: 'og:locale', content: 'en' },
        {
          name:    'og:title',
          content: 'vue-starter - includes most common UI/UX use cases, for example: calendar, date picker, range slider, accordion and more!',
        },
        {
          name:    'og:description',
          content: 'vue-starter - includes most common UI/UX use cases, for example: calendar, date picker, range slider, accordion and more!',
        },
        { name: 'og:image:url', content: 'https://vue-starter.herokuapp.com/logo.png' },

        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@_jwerner_' },
        { name: 'twitter:creator', content: '@_jwerner_' },
        {
          name:    'twitter:title',
          content: 'vue-starter - includes most common UI/UX use cases, for example: calendar, date picker, range slider, accordion and more!',
        },
        { name: 'twitter:url', content: 'https://vue-starter.herokuapp.com/' },
        { name: 'twitter:image', content: 'https://vue-starter.herokuapp.com/logo.png' },
        {
          name:    'twitter:description',
          content: 'vue-starter - includes most common UI/UX use cases, for example: calendar, date picker, range slider, accordion and more!',
        },
      ],
    },
    components: {
      VueBadge,
      VueAutocomplete,
      VueMarkdown,
      VueGrid,
      VueGridItem,
      VueButton,
      VueLoader,
      VuePanel,
      VuePanelHeader,
      VuePanelBody,
      VuePanelFooter,
      VueInput,
      VueCollapse,
      VueModal,
      VueTabGroup,
      VueTabItem,
      VueCheckBox,
      VueTooltip,
      VueSlider,
      VueAccordion,
      VueAccordionItem,
      VuePagination,
      VueSelect,
      VueCalendar,
      VueDatePicker,
      VueDateRangePicker,
      VueGridRow,
    },
    computed:   {
      today(): Date {
        const today: Date = new Date();

        return new Date(today.getFullYear(), today.getMonth(), today.getDate());
      },
      nextWeek(): Date {
        return new Date(this.today.getTime() + 7 * 24 * 60 * 60 * 1000);
      },
    },
    data(): any {
      return {
        collapseDemo:        true,
        showModal:           false,
        checked:             true,
        radio:               'radio1',
        page:                1,
        options:             [
          {
            label: 'Foo',
            value: 'foo',
          },
          {
            label: 'Bar',
            value: 'bar',
          },
          {
            label: 'Baz',
            value: 'baz',
          },
          {
            label: 'Bla Bla Bla Bla Bla',
            value: 'bla',
          },
          {
            label: 'Lorem Ipsum la la la',
            value: 'lorem',
          },
        ],
        selectedOption:      {
          label: 'Baz',
          value: 'baz',
        },
        inputValue:          'test',
        autocompleteOptions: [],
        autocompleteLoading: false,
      };
    },
    methods:    {
      sliderChange(sliderOptions: any) {
        console.log(sliderOptions);
      },
      formatSliderValue(value: number) {
        return `${Math.floor(value)} €`;
      },
      calendarChange(date: Date | Date[]) {
        console.log(date);
      },
      addNotificationClick() {
        addNotification(
          {
            title: 'this is a test',
            text:  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
          } as INotification,
        );
      },
      selectChange(options: IVueSelectOption[]) {
        console.log(options);
      },
      /* istanbul ignore next */
      onRequest(query: string, shouldReturn: boolean = true) {
        this.autocompleteLoading = true;

        /* istanbul ignore next */
        setTimeout(() => {
          let returnOptions: boolean = Math.random() > 0.5 || query.indexOf('foo') > -1;

          if (!shouldReturn) {
            returnOptions = shouldReturn;
          }

          if (returnOptions) {
            this.autocompleteOptions = AutocompleteOptionsFixture;
          } else {
            this.autocompleteOptions = [];
          }

          this.autocompleteLoading = false;
        }, 2000);
      },
    },
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";

  .components {
    padding-bottom: $space-unit * 2;

    :global {
      h2 {
        margin-top: 3.6rem;
      }

      .vueGridItem {
        min-width: 46%;
      }
    }
  }

  .header {
    padding:     $nav-bar-height 0 $nav-bar-height * 0.5;
    text-align:  center;
    text-shadow: 0 5px 10px rgba(0, 0, 0, 0.33);
    @include background-gradient($brand-dark-primary, $brand-accent, 152deg);
  }

  .collapseDemo {
    padding:    $space-unit * 2;
    background: $panel-bg;
    box-shadow: $panel-shadow;
    color:      #FFF
  }
</style>
