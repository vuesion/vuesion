<template>
  <div :class="$style.components">

    <div :class="$style.header">
      <vue-grid>
        <vue-grid-row>
          <vue-grid-item class="vueGridItem">
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
        <vue-grid-item class="vueGridItem">
          <h2>Headlines</h2>
          <h1>Headline 1</h1>
          <h2>Headline 2</h2>
          <h3>Headline 3</h3>
          <h4>Headline 4</h4>
          <h5>Headline 5</h5>
          <h6>Headline 6</h6>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <h2>Badges</h2>

          <vue-badge primary>Primary</vue-badge>
          <vue-badge secondary>Secondary</vue-badge>
          <vue-badge tertiary>Tertiary</vue-badge>
          <vue-badge danger>Danger</vue-badge>
          <vue-badge attention>Attention</vue-badge>
          <vue-badge success>Success</vue-badge>

          <br />
          <br />
          <vue-badge primary outlined>Primary</vue-badge>
          <vue-badge secondary outlined>Secondary</vue-badge>
          <vue-badge tertiary outlined>Tertiary</vue-badge>
          <vue-badge danger outlined>Danger</vue-badge>
          <vue-badge attention outlined>Attention</vue-badge>
          <vue-badge success outlined>Success</vue-badge>
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <h2>Buttons</h2>

          <vue-button primary>Primary</vue-button>
          <vue-button primary disabled>Primary</vue-button>
          <br />
          <br />
          <vue-button secondary>Secondary</vue-button>
          <vue-button secondary disabled>Secondary</vue-button>
          <br />
          <br />
          <vue-button tertiary>Tertiary</vue-button>
          <vue-button tertiary disabled>Tertiary</vue-button>
          <br />
          <br />
          <vue-button danger>Danger</vue-button>
          <vue-button danger disabled>Danger</vue-button>
          <br />
          <br />
          <vue-button attention>Attention</vue-button>
          <vue-button attention disabled>Attention</vue-button>
          <br />
          <br />
          <vue-button success>Success</vue-button>
          <vue-button success disabled>Success</vue-button>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <h3>Outlined</h3>

          <vue-button primary outlined>Primary</vue-button>
          <vue-button primary disabled outlined>Primary</vue-button>
          <br />
          <br />
          <vue-button secondary outlined>Secondary</vue-button>
          <vue-button secondary disabled outlined>Secondary</vue-button>
          <br />
          <br />
          <vue-button tertiary outlined>Tertiary</vue-button>
          <vue-button tertiary disabled outlined>Tertiary</vue-button>
          <br />
          <br />
          <vue-button danger outlined>Danger</vue-button>
          <vue-button danger disabled outlined>Danger</vue-button>
          <br />
          <br />
          <vue-button attention outlined>Attention</vue-button>
          <vue-button attention disabled outlined>Attention</vue-button>
          <br />
          <br />
          <vue-button success outlined>Success</vue-button>
          <vue-button success disabled outlined>Success</vue-button>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <h3>Ghost</h3>

          <vue-button primary ghost>Primary</vue-button>
          <vue-button primary disabled ghost>Primary</vue-button>
          <br />
          <br />
          <vue-button secondary ghost>Secondary</vue-button>
          <vue-button secondary disabled ghost>Secondary</vue-button>
          <br />
          <br />
          <vue-button tertiary ghost>Tertiary</vue-button>
          <vue-button tertiary disabled ghost>Tertiary</vue-button>
          <br />
          <br />
          <vue-button danger ghost>Danger</vue-button>
          <vue-button danger disabled ghost>Danger</vue-button>
          <br />
          <br />
          <vue-button attention ghost>Attention</vue-button>
          <vue-button attention disabled ghost>Attention</vue-button>
          <br />
          <br />
          <vue-button success ghost>Success</vue-button>
          <vue-button success disabled ghost>Success</vue-button>
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <h2>Form example</h2>
          <form-example />
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <h2>Inputs</h2>

          <vue-input
            name="input1"
            id="input1"
            placeholder="Placeholder"
            message="test"
            v-model="inputValue" />
          <br />
          <vue-input
            name="input2"
            id="input2"
            placeholder="Placeholder"
            disabled
            v-model="inputValue" />
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <h2>Modal</h2>

          <vue-button primary @click="showModal = !showModal">Show Modal</vue-button>
          <vue-modal :show="showModal" @close="showModal = !showModal">
            <vue-button danger @click="showModal = !showModal">X</vue-button>
            <br />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
            sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.

            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
            delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.

            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
            commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
            praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

            Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer
            possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
            tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.

            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis.

            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
            est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores
            duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna
            no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet, consetetur
          </vue-modal>
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <h2>Checkboxes / RadioButtons</h2>

          <vue-checkbox
            name="check"
            id="check"
            label="checkbox"
            v-model="checked" />
          <br />
          <vue-checkbox
            name="check2"
            id="check2"
            label="checkbox"
            v-model="checked"
            :disabled="true" />
          <br />
          <br />
          <vue-checkbox
            name="radio"
            id="radio"
            label="radio"
            :checked="radio === 'radio1'"
            radio
            @click="radio = 'radio1'" />
          <br />
          <vue-checkbox
            name="radio2"
            id="radio2"
            label="radio"
            :checked="radio === 'radio2'"
            radio
            @click="radio = 'radio2'" />
          <br />
          <vue-checkbox
            name="radio3"
            id="radio3"
            label="radio"
            :checked="radio === 'radio3'"
            radio
            @click="radio = 'radio3'"
            :disabled="true" />
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <h2>Select</h2>

          <vue-select
            name="select1"
            id="select1"
            :options="options"
            :value="selectedOption"
            @input="selectChange" />

          <br />
          Multi
          <vue-select
            name="select2"
            id="select2"
            :options="options"
            :multiple="true"
            :value="selectedOption"
            @input="selectChange" />
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <h2>Tabs</h2>
          <vue-tab-group>
            <vue-tab-item title="Profile">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </vue-tab-item>
            <vue-tab-item title="Settings" :is-active="true">
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </vue-tab-item>
            <vue-tab-item title="Upload">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </vue-tab-item>
          </vue-tab-group>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
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
              <vue-button danger>Delete</vue-button>
              <vue-button primary ghost>Cancel</vue-button>
            </vue-panel-footer>
          </vue-panel>
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <h2>Collapse</h2>
          <vue-button secondary @click="collapseDemo = !collapseDemo" accent>Collapse toggle</vue-button>
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

        <vue-grid-item class="vueGridItem">
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
            <vue-button primary>TEST</vue-button>
          </vue-tooltip>
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
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

        <vue-grid-item class="vueGridItem">
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

          <br />
          Multi
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
        <vue-grid-item class="vueGridItem">
          <h2>Pagination</h2>

          <vue-pagination :pages="10" :current="page" @change="page = $event" />
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <h2>Loader</h2>

          <vue-loader primary />
          <vue-loader secondary />
          <vue-loader tertiary />
          <vue-loader danger />
          <vue-loader attention />
          <vue-loader success />
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <h2>Calendar</h2>

          <vue-calendar @change="calendarChange" :min-date="today" :max-date="nextWeek" />
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <h2>DatePicker</h2>

          <vue-date-picker
            @change="calendarChange"
            :first-day-of-week="1"
            placeholder="Select a date" />
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <h2>DateRange</h2>

          <vue-date-range-picker
            @change="calendarChange"
            :first-day-of-week="1"
            placeholder-start="Select a start date"
            placeholder-end="Select a end date" />
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <h2>Notification Stack</h2>
          <vue-button secondary @click="addNotificationClick">add notification</vue-button>
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <h2>Markdown renderer</h2>
          <vue-markdown>{{ $t('components.markdown' /*
                        ### Markdown support\n
                        - build on top of marked\n
                        - server side rendering!!!\n
                        - `github style` markdown
                        */) }}
          </vue-markdown>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <h2>Autocomplete</h2>
          <vue-autocomplete
            :options="autocompleteOptions"
            :max-options="3"
            :is-loading="autocompleteLoading"
            placeholder="Type something (e.g. foo)"
            @request="onRequest"
            @change="onAutocompleteChange" />
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <h2>Text truncate</h2>

          <vue-truncate :lines="2" :duration="500">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et<br />
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet<br />
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet,<br />
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,<br />
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,<br />
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </vue-truncate>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <h2>Carousel</h2>
          <vue-carousel :images="images" />
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <h2>DataTable</h2>
          <vue-data-table
            :header="dataTableHeader"
            :data="dataTableData"
            placeholder="Search"
            @click="dataTableClick">

            <template slot="date" slot-scope="{cell}">{{ new Date(cell.value).toDateString() }}</template>

            <template slot="age" slot-scope="{cell}">
              <div :class="$style.age">
                <div :style="{width: `${cell.value}%`}" />
                <span>{{ cell.value }}</span>
              </div>
            </template>

            <template slot="actions" slot-scope="{row}">
              <vue-button @click="onDeleteRow(row)">Delete</vue-button>
            </template>

          </vue-data-table>
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <h2>Toggle</h2>
          <vue-toggle
            name="toggle"
            id="toggle"
            v-model="toggle"
            label="toggle me!"
          />
          <br />
          <vue-toggle
            :disabled="true"
            name="toggle2"
            id="toggle2"
            v-model="toggle"
            label="toggle me!"
          />
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <h2>Breadcrumb</h2>
          <vue-breadcrumb
            :items="[{ label: 'Home', href: '/' }, { label: 'Components', href: '/components' }]" />
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
  import VueGrid                                          from '../../shared/components/VueGrid/VueGrid.vue';
  import VueGridItem                                      from '../../shared/components/VueGridItem/VueGridItem.vue';
  import VueButton                                        from '../../shared/components/VueButton/VueButton.vue';
  import VueLoader                                        from '../../shared/components/VueLoader/VueLoader.vue';
  import VuePanel                                         from '../../shared/components/VuePanel/VuePanel.vue';
  import VuePanelHeader
                                                          from '../../shared/components/VuePanel/VuePanelHeader/VuePanelHeader.vue';
  import VuePanelBody
                                                          from '../../shared/components/VuePanel/VuePanelBody/VuePanelBody.vue';
  import VuePanelFooter
                                                          from '../../shared/components/VuePanel/VuePanelFooter/VuePanelFooter.vue';
  import VueInput                                         from '../../shared/components/VueInput/VueInput.vue';
  import VueCollapse                                      from '../../shared/components/VueCollapse/VueCollapse.vue';
  import VueModal                                         from '../../shared/components/VueModal/VueModal.vue';
  import VueTabGroup                                      from '../../shared/components/VueTabGroup/VueTabGroup.vue';
  import VueTabItem
                                                          from '../../shared/components/VueTabGroup/VueTabItem/VueTabItem.vue';
  import VueCheckbox                                      from '../../shared/components/VueCheckbox/VueCheckbox.vue';
  import VueTooltip                                       from '../../shared/components/VueTooltip/VueTooltip.vue';
  import VueSlider                                        from '../../shared/components/VueSlider/VueSlider.vue';
  import VueAccordion                                     from '../../shared/components/VueAccordion/VueAccordion.vue';
  import VueAccordionItem
                                                          from '../../shared/components/VueAccordion/VueAccordionItem/VueAccordionItem.vue';
  import VuePagination
                                                          from '../../shared/components/VuePagination/VuePagination.vue';
  import VueSelect                                        from '../../shared/components/VueSelect/VueSelect.vue';
  import VueCalendar                                      from '../../shared/components/VueCalendar/VueCalendar.vue';
  import VueDatePicker
                                                          from '../../shared/components/VueDatePicker/VueDatePicker.vue';
  import VueDateRangePicker
                                                          from '../../shared/components/VueDateRangePicker/VueDateRangePicker.vue';
  import { addNotification, INotification }               from '../../shared/components/VueNotificationStack/utils';
  import VueMarkdown                                      from '../../shared/components/VueMarkdown/VueMarkdown.vue';
  import VueGridRow                                       from '../../shared/components/VueGridRow/VueGridRow.vue';
  import VueAutocomplete
                                                          from '../../shared/components/VueAutocomplete/VueAutocomplete.vue';
  import { AutocompleteOptionsFixture }                   from '../../shared/components/VueAutocomplete/fixtures/IAutocompleteFixture';
  import VueBadge                                         from '../../shared/components/VueBadge/VueBadge.vue';
  import FormExample                                      from '../FormExample/FormExample.vue';
  import { IAutocompleteOption }                          from '../../shared/components/VueAutocomplete/IAutocompleteOption';
  import VueTruncate                                      from '../../shared/components/VueTruncate/VueTruncate.vue';
  import VueCarousel                                      from '../../shared/components/VueCarousel/VueCarousel.vue';
  import VueDataTable                                     from '../../shared/components/VueDataTable/VueDataTable.vue';
  import { dataTableDataFixture, dataTableHeaderFixture } from '../../shared/components/VueDataTable/DataTableFixtures';
  import VueToggle                                        from '../../shared/components/VueToggle/VueToggle.vue';
  import VueBreadcrumb
                                                          from '../../shared/components/VueBreadcrumb/VueBreadcrumb.vue';

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
      VueBreadcrumb,
      VueToggle,
      VueDataTable,
      VueCarousel,
      VueTruncate,
      FormExample,
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
      VueCheckbox,
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
        selectedOption:      '',
        inputValue:          'test',
        autocompleteOptions: [],
        autocompleteLoading: false,
        images:              [
          {
            alt:       'Slide 1',
            copyright: 'unsplash.com/@hahnbo',
            url:       'https://images.unsplash.com/photo-1485932465394-d20cc595f08b?ixlib=rb-0.3.5&s=e8798191cfef2e78f4ac91e71c92ea57&auto=format&fit=crop&w=3750&q=80',
          },
          {
            alt:       'Slide 2',
            copyright: 'unsplash.com/@mitr',
            url:       'https://images.unsplash.com/photo-1486068338746-bc8c63a2d7ea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=348afc4c4ac324a022630fbce9204348&auto=format&fit=crop&w=3890&q=80',
          },
          {
            alt:       'Slide 3',
            copyright: 'unsplash.com/@peter_oslanec',
            url:       'https://images.unsplash.com/photo-1517365884913-3c33884b06fa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=05c7363bcb2c0a2c2241e6cdcf0dfb8b&auto=format&fit=crop&w=1234&q=80',
          },
          {
            alt:       'Slide 4',
            copyright: 'unsplash.com/@ihs_photo',
            url:       'https://images.unsplash.com/photo-1496348323715-c11f0fc6aeed?ixlib=rb-0.3.5&s=52406f147b73f1000c032dcc5e4e0aea&auto=format&fit=crop&w=1388&q=80',
          },
          {
            alt:       'Slide 5',
            copyright: 'unsplash.com/@parkamstutz',
            url:       'https://images.unsplash.com/photo-1528150395403-992a693e26c8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0651fee03ef0f9dad95014a45adf898a&auto=format&fit=crop&w=1234&q=80',
          },
          {
            alt:       'Slide 6',
            copyright: 'unsplash.com/@mrandybae',
            url:       'https://images.unsplash.com/photo-1492970471430-bc6bd7eb2b13?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9893bc89e46e2b77a5d8c091fbba04e9&auto=format&fit=crop&w=2710&q=80',
          },
        ],
        dataTableHeader:     dataTableHeaderFixture,
        dataTableData:       dataTableDataFixture,
        toggle:              false,
      };
    },
    methods:    {
      sliderChange(sliderOptions: any) {
        // tslint:disable-next-line
        console.log(sliderOptions);
      },
      formatSliderValue(value: number) {
        return `${Math.floor(value)} €`;
      },
      calendarChange(date: Date | Date[]) {
        // tslint:disable-next-line
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
      selectChange(option: string) {
        // tslint:disable-next-line
        console.log(option);
        this.selectedOption = option;
      },
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
        }, 1000);
      },
      onAutocompleteChange(option: IAutocompleteOption) {
        // tslint:disable-next-line
        console.log(option);
      },
      dataTableClick(row: any) {
        // tslint:disable-next-line
        console.log(row);
      },
      onDeleteRow(row: any) {
        // tslint:disable-next-line
        alert(JSON.stringify(row));
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
    background:  $brand-primary;
    color:       $text-color-inverse
  }

  .collapseDemo {
    padding:    $space-unit * 2;
    background: $panel-bg;
  }

  .age {
    > div {
      height:     $space-unit;
      background: $brand-secondary;
      margin-top: $space-unit * 1.5;
      display:    inline-block;
    }

    > span {
      font-size:   $font-size - 0.4;
      display:     inline-block;
      margin-left: $space-unit;
    }
  }
</style>
