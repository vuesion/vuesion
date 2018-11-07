import { mount, createLocalVue } from '@vue/test-utils';
import VueCardBody from './VueCardBody.vue';

const localVue = createLocalVue();

describe('VueCardBody.vue', () => {
  test('renders component', () => {
    const wrapper = mount(VueCardBody, { localVue });

    expect(wrapper.findAll(`.vueCardBody`)).toHaveLength(1);
  });
});
