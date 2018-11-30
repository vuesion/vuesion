import { mount, createLocalVue } from '@vue/test-utils';
import VueCardHeader from './VueCardHeader.vue';

const localVue = createLocalVue();

describe('VueCardHeader.vue', () => {
  test('renders component', () => {
    const wrapper = mount(VueCardHeader, {
      localVue,
    });

    expect(wrapper.findAll(`.vueCardHeader`)).toHaveLength(1);
  });

  test('renders component with title', () => {
    const wrapper = mount(VueCardHeader, {
      localVue,
      propsData: {
        title: 'foo',
      },
    });

    expect(wrapper.findAll(`.title`)).toHaveLength(1);
    expect(wrapper.find(`.title`).text()).toBe('foo');
  });

  test('renders component with subtitle', () => {
    const wrapper = mount(VueCardHeader, {
      localVue,
      propsData: {
        subtitle: 'foo',
      },
    });

    expect(wrapper.findAll(`.subtitle`)).toHaveLength(1);
    expect(wrapper.find(`.subtitle`).text()).toBe('foo');
  });

  test('renders component with image', () => {
    const wrapper = mount(VueCardHeader, {
      localVue,
      propsData: {
        image: 'foo',
      },
    });

    expect(wrapper.findAll(`img`)).toHaveLength(1);
  });
});
