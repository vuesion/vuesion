<template>
  <div :class="$style.components">

    <div :class="$style.header">
      <vue-grid>
        <vue-grid-item>
          <h1>{{ $t('App.nav.components' /*Components*/) }}</h1>
          <p>
            This Boilerplate comes with an initial set of solutions for common UX/UI patterns.
          </p>
          <p>
            That makes it easy for you to add specific features for your business logic and
            keeps the code as lean as possible, because you don't have to ship unnecessary features to your users.
          </p>
        </vue-grid-item>
      </vue-grid>
    </div>

    <vue-grid>
      <vue-grid-item>
        <div class="h1">Tabs</div>
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
        <div class="h1">Collapse</div>
        <vue-button @click="collapseDemo = !collapseDemo" accent>Collapse toggle</vue-button>
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
        <div class="h1">Buttons</div>

        <vue-button>Default</vue-button>
        <vue-button disabled>Default</vue-button>
        <!--<vue-button loading>Loading</vue-button>-->
        <vue-button pulse>Pulse</vue-button>
        <br />
        <vue-button primary>Primary</vue-button>
        <vue-button primary disabled>Primary</vue-button>
        <!--<vue-button primary loading>Loading</vue-button>-->
        <vue-button primary pulse>Pulse</vue-button>
        <br />
        <vue-button accent>Primary</vue-button>
        <vue-button accent disabled>Primary</vue-button>
        <!--<vue-button accent loading>Loading</vue-button>-->
        <vue-button accent pulse>Pulse</vue-button>
        <br />
        <vue-button warn>Primary</vue-button>
        <vue-button warn disabled>Primary</vue-button>
        <!--<vue-button warn loading>Loading</vue-button>-->
        <vue-button warn pulse>Pulse</vue-button>
      </vue-grid-item>

      <vue-grid-item>
        <div class="h1">Loader</div>

        <vue-loader />
        <vue-loader primary />
        <vue-loader accent />
        <vue-loader warn />
      </vue-grid-item>

      <vue-grid-item>
        <div class="h1">Headlines</div>
        <h1>Headline 1</h1>
        <h2>Headline 2</h2>
        <h3>Headline 3</h3>
        <h4>Headline 4</h4>
        <h5>Headline 5</h5>
        <h6>Headline 6</h6>
      </vue-grid-item>

      <vue-grid-item>
        <div class="h1">Panels</div>

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

      <vue-grid-item>
        <div class="h1">Inputs</div>

        <vue-input placeholder="Placeholder" message="test" :value="inputValue"
                   @change="inputValue = $event.target.value" />
        <vue-input placeholder="Placeholder" disabled :value="inputValue" @change="inputValue = $event.target.value" />
      </vue-grid-item>

      <vue-grid-item>
        <div class="h1">Modal</div>

        <vue-button primary @click="showModal = !showModal">Show Modal</vue-button>
        <vue-modal :show="showModal" @close="showModal = !showModal">
          <vue-button warn @click="showModal = !showModal">X</vue-button>
          TEST
        </vue-modal>
      </vue-grid-item>

      <vue-grid-item>
        <div class="h1">Checkboxes / RadioButtons</div>

        <vue-check-box id="check" label="checkbox" :checked="checked" @click="checked = !checked" />
        <br />
        <vue-check-box id="check2" label="checkbox" :checked="checked" @click="checked = !checked" :disabled="true" />
        <br />
        <br />
        <vue-check-box id="radio" label="radio" :checked="radio === 'radio1'" radio @click="radio = 'radio1'" />
        <br />
        <vue-check-box id="radio2" label="radio" :checked="radio === 'radio2'" radio @click="radio = 'radio2'" />
        <br />
        <vue-check-box id="radio3" label="radio" :checked="radio === 'radio3'" radio @click="radio = 'radio3'"
                       :disabled="true" />
      </vue-grid-item>

      <vue-grid-item>
        <div class="h1">Tooltip</div>

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

      <vue-grid-item>
        <div class="h1">Slider</div>

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
        <div class="h1">Accordion</div>

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
        <vue-accordion :multi="true">
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

      <vue-grid-item>
        <div class="h1">Pagination</div>

        <vue-pagination :pages="10" :current="page" @change="page = $event" />
      </vue-grid-item>

      <vue-grid-item>
        <div class="h1">Select</div>

        <vue-select :options="options" @change="selectChange" />

        <p>Multi</p>
        <vue-select :options="options" :multiple="true" @change="selectChange" />
      </vue-grid-item>

      <vue-grid-item>
        <div class="h1">Calendar</div>

        <vue-calendar @change="calendarChange" :min-date="today" :max-date="nextWeek" />
      </vue-grid-item>

      <vue-grid-item>
        <div class="h1">DatePicker</div>

        <vue-date-picker
          @change="calendarChange"
          :first-day-of-week="1"
          placeholder="Select a date" />
      </vue-grid-item>

      <vue-grid-item>
        <div class="h1">DateRange</div>

        <vue-date-range-picker
          @change="calendarChange"
          :first-day-of-week="1"
          placeholder-start="Select a start date"
          placeholder-end="Select a end date" />
      </vue-grid-item>

      <vue-grid-item>
        <div class="h1">Notification Stack</div>
        <vue-button accent @click="addNotification">add notification</vue-button>
      </vue-grid-item>
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
  import VueTabItem                         from '../../shared/components/VueTabItem/VueTabItem.vue';
  import VueCheckBox                        from '../../shared/components/VueCheckBox/VueCheckBox.vue';
  import VueTooltip                         from '../../shared/components/VueTooltip/VueTooltip.vue';
  import VueSlider                          from '../../shared/components/VueSlider/VueSlider.vue';
  import VueAccordion                       from '../../shared/components/VueAccordion/VueAccordion.vue';
  import VueAccordionItem                   from '../../shared/components/VueAccordionItem/VueAccordionItem.vue';
  import VuePagination                      from '../../shared/components/VuePagination/VuePagination.vue';
  import VueSelect, { IVueSelectOption }    from '../../shared/components/VueSelect/VueSelect.vue';
  import VueCalendar                        from '../../shared/components/VueCalendar/VueCalendar.vue';
  import VueDatePicker                      from '../../shared/components/VueDatePicker/VueDatePicker.vue';
  import VueDateRangePicker                 from '../../shared/components/VueDateRangePicker/VueDateRangePicker.vue';
  import { addNotification, INotification } from '../../shared/components/VueNotificationStack/utils';

  export default {
    metaInfo:   {
      title: 'Components',
    },
    components: {
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
    data() {
      return {
        collapseDemo: true,
        showModal:    false,
        checked:      true,
        radio:        'radio1',
        page:         1,
        options:      [
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
        inputValue:   'test',
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
      addNotification() {
        addNotification(
          {
            title: 'this is a test',
            text:  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
          } as INotification);
      },
      selectChange(options: IVueSelectOption[]) {
        console.log(options);
      },
    },
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";

  .components {

    :global {
      .h1 {
        border-bottom: 1px solid $divider-color;
        margin:        $grid-unit * 4 0 $grid-unit * 4 0;
        font-size:     $font-size-h1;
      }

      .vue-grid-item {
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
    padding:    $grid-unit * 2;
    background: $panel-bg;
    box-shadow: $panel-shadow;
    color:      #FFF
  }
</style>
