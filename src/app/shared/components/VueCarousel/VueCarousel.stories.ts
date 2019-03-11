import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueCarousel from './VueCarousel.vue';

const story = storiesOf('Molecules|Carousel', module) as any;
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
  withInfo({})(() => ({
    data() {
      return {
        images,
      };
    },
    components: { VueCarousel },
    template: `<vue-carousel :images="images"></vue-carousel>`,
  })),
);

story.add(
  'No Indicator',
  withInfo({})(() => ({
    data() {
      return {
        images,
      };
    },
    components: { VueCarousel },
    template: `<vue-carousel :show-indicator="false" :images="images"></vue-carousel>`,
  })),
);

story.add(
  'Fast Slider',
  withInfo({})(() => ({
    data() {
      return {
        images,
      };
    },
    components: { VueCarousel },
    template: `<vue-carousel :interval="1000" :images="images"></vue-carousel>`,
  })),
);
