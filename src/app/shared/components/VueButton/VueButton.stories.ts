import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import VueButton from './VueButton.vue';
import { brandVariations } from '@components/utils';

const story = storiesOf('Atoms|Button', module) as any;

story.add(
  'Button Variants',
  withInfo({})(() => ({
    components: { VueButton },
    data(): any {
      return {
        variations: brandVariations,
      };
    },
    template: `<div>
<template v-for="variation in variations">
<vue-button @click="action" :color="variation">{{ variation }}</vue-button>
<vue-button @click="action" :color="variation" disabled>{{ variation }} disabled</vue-button>
<vue-button @click="action" :color="variation" outlined>{{ variation }} outlined</vue-button>
<vue-button @click="action" :color="variation" ghost>{{ variation }} ghost</vue-button>
<vue-button @click="action" :color="variation" loading>{{ variation }} loading</vue-button>
<br />
<br />
</template>
</div>
`,
    methods: {
      action: action('@onClick'),
    },
  })),
);

story.add(
  'Button as Link',
  withInfo({})(() => ({
    components: { VueButton },
    template: `<div>
Router-Link<br/>
<vue-button @click="action" as="router-link" color="primary" target="/">Router Link</vue-button>
<vue-button @click="action" as="router-link" color="primary" target="/" disabled>Router Link</vue-button>
<vue-button @click="action" as="router-link" color="primary" target="/" outlined>Router Link</vue-button>
<vue-button @click="action" as="router-link" color="primary" target="/" ghost>Router Link</vue-button>
<vue-button @click="action" as="router-link" color="primary" target="/" loading>Router Link</vue-button>
<br/>
<br/>
A-Element: <br/>
<vue-button @click="action" as="a" color="primary" target="/">Anchor</vue-button>
<vue-button @click="action" as="a" color="primary" target="/" disabled>Anchor</vue-button>
<vue-button @click="action" as="a" color="primary" target="/" outlined>Anchor</vue-button>
<vue-button @click="action" as="a" color="primary" target="/" ghost>Anchor</vue-button>
<vue-button @click="action" as="a" color="primary" target="/" loading>Anchor</vue-button>
</div>
`,
    methods: {
      action: action('@onClick'),
    },
  })),
);
