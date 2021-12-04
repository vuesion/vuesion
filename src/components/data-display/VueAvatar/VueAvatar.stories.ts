import { storiesOf } from '@storybook/vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import { IItem } from '@/interfaces/IItem';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueTiles from '@/components/layout/VueTiles/VueTiles.vue';
import VueInput from '@/components/input-and-actions/VueInput/VueInput.vue';
import VueSelect from '@/components/input-and-actions/VueSelect/VueSelect.vue';
import VueAvatar from './VueAvatar.vue';

const story = storiesOf('Data Display|Avatar', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueAvatar, ComponentDocs, VueStack, VueTiles, VueInput, VueSelect },
    data(): { name: string; icon: string; src: IItem; size: IItem } {
      return {
        name: 'Isabella-Maria Del Campo',
        icon: '',
        src: { label: 'No src', value: null },
        size: { label: 'Small', value: 'sm' },
      };
    },
    template: `<component-docs
      component-name="Avatar"
      usage="Used to show a thumbnail of a user or other items (such as a product)."
      story="Show avatar and all its properties."
    >
      <vue-stack>
        <vue-tiles :columns="[1, 2]">
          <vue-input label="Name" name="name" id="name" hide-description v-model="name" />
          <vue-input label="Icon" name="icon" id="icon" hide-description v-model="icon" />

          <vue-select
            :items="[
                { label: 'No src', value: null },
                { label: 'Stock photo', value: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3150&q=80' },
                ]"
            label="Src"
            name="src"
            id="src"
            hide-description
            v-model="src"
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
        </vue-tiles>
        <vue-avatar :name="name" :src="src.value" :icon="icon" :size="size.value" />
      </vue-stack>
    </component-docs>`,
  }),
  {
    info: {
      components: { VueAvatar },
    },
  },
);
