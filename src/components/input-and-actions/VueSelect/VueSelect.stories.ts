import { storiesOf } from '@storybook/vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueToggle from '@/components/input-and-actions/VueToggle/VueToggle.vue';
import VueInput from '@/components/input-and-actions/VueInput/VueInput.vue';
import VueCollapse from '@/components/behavior/VueCollapse/VueCollapse.vue';
import VueTiles from '@/components/layout/VueTiles/VueTiles.vue';
import { badgeStatuses } from '@/components/prop-validators';
import VueSelect from './VueSelect.vue';

const story = storiesOf('Input & Actions|Select', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueSelect, ComponentDocs, VueInline, VueText, VueStack, VueToggle, VueInput, VueCollapse, VueTiles },
    data(): any {
      return {
        showProps: false,
        label: 'Label',
        hideLabel: false,
        hideDescription: false,
        required: false,
        validation: '',
        disabled: false,
        items: [
          { label: 'foo', value: 'foo' },
          { label: 'bar', value: 'bar' },
          { label: 'baz', value: 'baz' },
        ],
        placeholder: 'Placeholder',
        description: 'Description',
        errorMessage: 'Error message',
        duration: 250,
        alignMenu: { label: 'Left', value: 'left' },
        alignYMenu: { label: 'Bottom', value: 'bottom' },
        size: { label: 'Medium', value: 'md' },
        multiSelect: false,
        badgeStatus: { label: 'Info', value: 'info' },
        availableBadgeStatus: badgeStatuses.map((status) => ({ label: status, value: status })),
        model: null,
      };
    },
    template: `
      <component-docs
        component-name="Select"
        usage="Select lets users choose one option from an options menu.
    Consider select when you have 4 or more options, to avoid cluttering the interface.
    Different from dropdown menu because it is used for data entry in forms."
        story="Display select component with all properties. Please interact with the select to see different states."
      >
      <vue-stack>
        <vue-toggle label="Show all props" name="showProps" id="showProps" v-model="showProps"/>

        <vue-inline>
          <vue-toggle id="multiSelect" v-model="multiSelect" label="Multi select" name="multiSelect"/>
          <vue-toggle id="hideLabel" v-model="hideLabel" label="Hide label" name="hideLabel"/>
          <vue-toggle id="hideDescription" v-model="hideDescription" label="Hide description" name="hideDescription"/>
          <vue-toggle id="required" v-model="required" label="Required" name="required"/>
          <vue-toggle id="disabled" v-model="disabled" label="Disabled" name="disabled"/>
        </vue-inline>

        <vue-collapse :show="showProps">
          <vue-tiles :columns="[1, 2]">
            <vue-input id="label" v-model="label" label="Label" name="label"/>
            <vue-input id="validation" v-model="validation" label="Validation" name="validation"/>
            <vue-input id="placeholder" v-model="placeholder" label="Placeholder" name="placeholder"/>
            <vue-input id="description" v-model="description" label="Description" name="description"/>
            <vue-input id="errorMessage" v-model="errorMessage" label="Error message" name="errorMessage"/>
            <vue-input id="duration" v-model.number="duration" label="Duration" name="duration"/>
            <vue-select
              :items="[
              { label: 'Left', value: 'left' },
              { label: 'Center', value: 'center' },
              { label: 'Right', value: 'right' },
              ]"
              label="Align menu horizontally"
              name="alignMenu"
              id="alignMenu"
              hide-description
              v-model="alignMenu"
            />
            <vue-select
              :items="[
              { label: 'Top', value: 'top' },
              { label: 'Bottom', value: 'bottom' },
              ]"
              label="Align menu vertically"
              name="alignYMenu"
              id="alignYMenu"
              hide-description
              v-model="alignYMenu"
            />
            <vue-select
              :items="[
              { label: 'Small', value: 'sm' },
              { label: 'Medium', value: 'md' },
              { label: 'Large', value: 'lg' },
              ]"
              label="Size"
              name="size"
              id="size"
              hide-description
              v-model="size"
            />
            <vue-select
              :items="availableBadgeStatus"
              label="Badge status"
              name="availableBadgeStatus"
              id="availableBadgeStatus"
              hide-description
              v-model="badgeStatus"
            />
          </vue-tiles>
        </vue-collapse>

        <vue-text look="small-title" weight="semi-bold">Model: {{ model }}</vue-text>
        <vue-inline>
          <vue-select
            id="select"
            v-model="model"
            style="width: 200px"
            name="select"
            :label="label"
            :hide-label="hideLabel"
            :hide-description="hideDescription"
            :required="required"
            :validation="validation"
            :disabled="disabled"
            :items="items"
            :placeholder="placeholder"
            :description="description"
            :errorMessage="errorMessage"
            :duration="duration"
            :align-menu="alignMenu.value"
            :align-y-menu="alignYMenu.value"
            :size="size.value"
            :multi-select="multiSelect"
            :badge-status="badgeStatus.value"
          />
        </vue-inline>
      </vue-stack>
      </component-docs>`,
  }),
  {
    info: {
      components: { VueSelect },
    },
  },
);
