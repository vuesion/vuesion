import { storiesOf } from '@storybook/vue';
import { getIntInRange } from '@vuesion/utils/dist/randomGenerator';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueSlider from '@/components/input-and-actions/VueSlider/VueSlider.vue';
import VueMasonry from './VueMasonry.vue';

const story = storiesOf('Foundation|Layout/Masonry', module) as any;

story.add(
  'Default',
  () => ({
    components: { ComponentDocs, VueMasonry, VueStack, VueSlider },
    data(): any {
      return {
        numberOfImages: [12],
      };
    },
    template: `<component-docs
      component-name="Masonry"
      usage="Display items in 3 rows with their actual height stacked on top of each other."
      story="Show Masonry layout component."
    >
      <vue-stack>
        <vue-slider id="max" v-model="numberOfImages" :max="96" :min="3" label="Number of elements" style="width: 450px" />

        <vue-masonry>
          <div v-for="index in numberOfImages[0]" :key="index" style="display: flex;flex-direction: column;gap: 4px;">
            <img
              :src="getRandomImage()" :alt="'image-' + index"
              style="width:100%;"
            />

            This is Image number #{{ index }}
          </div>
        </vue-masonry>
      </vue-stack>
    </component-docs>`,
    methods: {
      getRandomImage() {
        return [
          'https://images.unsplash.com/photo-1567017469553-d1b219af5831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9udGFpbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
          'https://images.unsplash.com/photo-1548588681-adf41d474533?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3275&q=80',
          'https://images.unsplash.com/photo-1600283177630-bc1ba1c7a985?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vbnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
          'https://images.unsplash.com/photo-1507929632612-bff9cd17f808?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vbnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
          'https://images.unsplash.com/photo-1566635285855-7f9bba12309f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fG1vbnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
        ][getIntInRange(0, 4)];
      },
    },
  }),
  {
    info: {
      components: { VueMasonry },
    },
  },
);
