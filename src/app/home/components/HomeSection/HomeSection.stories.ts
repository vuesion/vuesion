import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import HomeSection from './HomeSection.vue';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';

const story = storiesOf('Organisms|HomeSection', module) as any;

story.add(
  'Default',
  withInfo({})(() => ({
    components: { HomeSection, VueHeadline },
    template: `<home-section image="https://via.placeholder.com/512">
      <vue-headline level="2">Quick start</vue-headline>
      <br />
      <vue-headline level="3">Via <code>npx</code></vue-headline>
      <br />
      <ol>
        <li>
          Run <code>npx @vuesion/create [project-name]</code><br />
          for example <code>npx @vuesion/create my-app</code>
        </li>
        <li>Change directory <code>cd my-app</code></li>
        <li>Run <code>npm run dev</code></li>
      </ol>
      <br />
      <br />
      <vue-headline level="3">Via Git</vue-headline>
      <br />
      <ol>
        <li>
          Download or clone (<code>git clone https://github.com/<br />vuesion/vuesion</code>) the repository
        </li>
        <li>Change directory <code>cd vuesion</code></li>
        <li>Install dependencies: <code>npm install</code></li>
        <li>Run <code>npm run dev</code></li>
      </ol>
    </home-section>`,
  })),
);

story.add(
  'Alternative',
  withInfo({})(() => ({
    components: { HomeSection, VueHeadline },
    template: `<home-section image="https://via.placeholder.com/512" alternative>
      <vue-headline level="2">Quick start</vue-headline>
      <br />
      <vue-headline level="3">Via <code>npx</code></vue-headline>
      <br />
      <ol>
        <li>
          Run <code>npx @vuesion/create [project-name]</code><br />
          for example <code>npx @vuesion/create my-app</code>
        </li>
        <li>Change directory <code>cd my-app</code></li>
        <li>Run <code>npm run dev</code></li>
      </ol>
      <br />
      <br />
      <vue-headline level="3">Via Git</vue-headline>
      <br />
      <ol>
        <li>
          Download or clone (<code>git clone https://github.com/<br />vuesion/vuesion</code>) the repository
        </li>
        <li>Change directory <code>cd vuesion</code></li>
        <li>Install dependencies: <code>npm install</code></li>
        <li>Run <code>npm run dev</code></li>
      </ol>
    </home-section>`,
  })),
);

story.add(
  'Flip',
  withInfo({})(() => ({
    components: { HomeSection, VueHeadline },
    template: `<home-section image="https://via.placeholder.com/512" flip>
      <vue-headline level="2">Quick start</vue-headline>
      <br />
      <vue-headline level="3">Via <code>npx</code></vue-headline>
      <br />
      <ol>
        <li>
          Run <code>npx @vuesion/create [project-name]</code><br />
          for example <code>npx @vuesion/create my-app</code>
        </li>
        <li>Change directory <code>cd my-app</code></li>
        <li>Run <code>npm run dev</code></li>
      </ol>
      <br />
      <br />
      <vue-headline level="3">Via Git</vue-headline>
      <br />
      <ol>
        <li>
          Download or clone (<code>git clone https://github.com/<br />vuesion/vuesion</code>) the repository
        </li>
        <li>Change directory <code>cd vuesion</code></li>
        <li>Install dependencies: <code>npm install</code></li>
        <li>Run <code>npm run dev</code></li>
      </ol>
    </home-section>`,
  })),
);
