import { storiesOf } from '@storybook/vue';
import VueText from '@/components/atoms/VueText/VueText.vue';
import HomeSection from './HomeSection.vue';

const story = storiesOf('Organisms|HomeSection', module) as any;

story.add(
  'Default',
  () => ({
    components: { HomeSection, VueText },
    template: `<home-section image="https://via.placeholder.com/512">
      <vue-text appearance="h2" as="h2">Quick start</vue-text>
      <br />
      <vue-text appearance="h3" as="h3">Via <code>npx</code></vue-text>
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
      <vue-text appearance="h3" as="h3">Via Git</vue-text>
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
  }),
  {
    info: {
      components: { HomeSection },
    },
  },
);

story.add(
  'Alternative',
  () => ({
    components: { HomeSection, VueText },
    template: `<home-section image="https://via.placeholder.com/512" alternative>
      <vue-text appearance="h2" as="h2">Quick start</vue-text>
      <br />
      <vue-text appearance="h3" as="h3">Via <code>npx</code></vue-text>
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
      <vue-text appearance="h3" as="h3">Via Git</vue-text>
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
  }),
  {
    info: {
      components: { HomeSection },
    },
  },
);

story.add(
  'Flip',
  () => ({
    components: { HomeSection, VueText },
    template: `<home-section image="https://via.placeholder.com/512" flip>
      <vue-text appearance="h2" as="h2">Quick start</vue-text>
      <br />
      <vue-text appearance="h3" as="h3">Via <code>npx</code></vue-text>
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
      <vue-text appearance="h3" as="h3">Via Git</vue-text>
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
  }),
  {
    info: {
      components: { HomeSection },
    },
  },
);
