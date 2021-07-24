import { storiesOf } from '@storybook/vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueColumns from '@/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueSlider from '@/components/input-and-actions/VueSlider/VueSlider.vue';
import VueToggle from '@/components/input-and-actions/VueToggle/VueToggle.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';
import { i18n } from '@/test/i18n';
import VueCarousel from './VueCarousel.vue';

const story = storiesOf('Data Display|Carousel', module) as any;
const images: any[] = [
  {
    alt: 'Slide 1',
    copyright: 'unsplash.com/@hahnbo',
    url:
      'https://images.unsplash.com/photo-1485932465394-d20cc595f08b?ixlib=rb-0.3.5&s=e8798191cfef2e78f4ac91e71c92ea57&auto=format&fit=crop&w=3750&q=80',
  },
  {
    alt: 'Slide 2',
    copyright: 'unsplash.com/@mitr',
    url:
      'https://images.unsplash.com/photo-1486068338746-bc8c63a2d7ea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=348afc4c4ac324a022630fbce9204348&auto=format&fit=crop&w=3890&q=80',
  },
  {
    alt: 'Slide 3',
    copyright: 'unsplash.com/@peter_oslanec',
    url:
      'https://images.unsplash.com/photo-1517365884913-3c33884b06fa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=05c7363bcb2c0a2c2241e6cdcf0dfb8b&auto=format&fit=crop&w=1234&q=80',
  },
  {
    alt: 'Slide 4',
    copyright: 'unsplash.com/@ihs_photo',
    url:
      'https://images.unsplash.com/photo-1496348323715-c11f0fc6aeed?ixlib=rb-0.3.5&s=52406f147b73f1000c032dcc5e4e0aea&auto=format&fit=crop&w=1388&q=80',
  },
  {
    alt: 'Slide 5',
    copyright: 'unsplash.com/@parkamstutz',
    url:
      'https://images.unsplash.com/photo-1528150395403-992a693e26c8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0651fee03ef0f9dad95014a45adf898a&auto=format&fit=crop&w=1234&q=80',
  },
  {
    alt: 'Slide 6',
    copyright: 'unsplash.com/@mrandybae',
    url:
      'https://images.unsplash.com/photo-1492970471430-bc6bd7eb2b13?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9893bc89e46e2b77a5d8c091fbba04e9&auto=format&fit=crop&w=2710&q=80',
  },
];

story.add(
  'Default',
  () => ({
    i18n,
    data() {
      return {
        images,
        intervalInSeconds: 5,
        selectedSlide: 1,
        minHeight: 500,
        showIndicator: true,
        showPagination: true,
      };
    },
    components: { ComponentDocs, VueCarousel, VueStack, VueColumns, VueColumn, VueSlider, VueToggle, VueInline },
    template: `<component-docs
      component-name="Carousel"
      usage="The carousel is used to display single item from a large collection of content in an allocated space. Often used with images."
      story="Show Carousel with 6 Images and its properties."
    >
      <vue-stack>
        <vue-columns stack-phone>
          <vue-column :width="['content', '50%']">
            <vue-slider
              id="interval"
              label="Interval in seconds"
              :min="1"
              :max="20"
              :range="[intervalInSeconds]"
              @change="intervalInSeconds = $event[0]" />
          </vue-column>
          <vue-column :width="['content', '50%']">
            <vue-slider
              id="selectedSlide"
              label="Selected Slide"
              :min="1"
              :max="6"
              :range="[selectedSlide]"
              @change="selectedSlide = $event[0]" />
          </vue-column>
        </vue-columns>

        <vue-columns :align-y="['initial', 'center']" stack-phone>
          <vue-column :width="['content', '50%']">
            <vue-slider
              id="minHeight"
              label="Minimum height"
              :min="150"
              :max="999"
              :range="[minHeight]"
              @change="minHeight = $event[0]" />
          </vue-column>
          <vue-column :width="['content', '50%']">
            <vue-inline>
              <vue-toggle label="Show Indicator" name="showIndicator" id="showIndicator" v-model="showIndicator" />
              <vue-toggle label="Show Pagination" name="showPagination" id="showPagination" v-model="showPagination" />
            </vue-inline>
          </vue-column>
        </vue-columns>

        <vue-carousel
          :images="images"
          :interval-in-seconds="intervalInSeconds"
          :selected-slide="selectedSlide"
          :min-height="minHeight"
          :show-indicator="showIndicator"
          :show-pagination="showPagination"
          v-model="selectedSlide" />
      </vue-stack>
    </component-docs>`,
  }),
  {
    info: {
      components: { VueCarousel },
    },
  },
);
