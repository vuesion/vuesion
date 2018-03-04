import { configure } from '@storybook/vue';

// automatically import all files ending in *.stories.ts
const req = require.context('../src/app/shared/components', true, /.stories.ts$/);

const loadStories = () => {
  req.keys().forEach((filename) => req(filename));
};

configure(loadStories, module);
