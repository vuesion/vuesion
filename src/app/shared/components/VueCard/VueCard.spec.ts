import { mount, createLocalVue } from '@vue/test-utils';
import VueCard from './VueCard.vue';

const localVue = createLocalVue();

describe('VueCard.vue', () => {
  test('renders component', () => {
    const wrapper = mount(VueCard, { localVue });

    expect(wrapper.findAll(`.vueCard`)).toHaveLength(1);
  });
});
