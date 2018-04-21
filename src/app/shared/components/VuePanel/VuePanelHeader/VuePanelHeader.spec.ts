import { mount, createLocalVue } from '@vue/test-utils';
import VuePanelHeader            from './VuePanelHeader.vue';

const localVue = createLocalVue();

describe('VuePanelHeader.vue', () => {

  test('renders component', () => {
    const wrapper = mount(
      VuePanelHeader,
      {
        localVue,
      });

    expect(wrapper.findAll(`.vuePanelHeader`)).toHaveLength(1);
  });

  test('renders component with title', () => {
    const wrapper = mount(
      VuePanelHeader,
      {
        localVue,
        propsData: {
          title: 'foo',
        },
      });

    expect(wrapper.findAll(`.title`)).toHaveLength(1);
    expect(wrapper.find(`.title`).text()).toBe('foo');
  });

  test('renders component with subtitle', () => {
    const wrapper = mount(
      VuePanelHeader,
      {
        localVue,
        propsData: {
          subtitle: 'foo',
        },
      });

    expect(wrapper.findAll(`.subtitle`)).toHaveLength(1);
    expect(wrapper.find(`.subtitle`).text()).toBe('foo');
  });

  test('renders component with image', () => {
    const wrapper = mount(
      VuePanelHeader,
      {
        localVue,
        propsData: {
          image: 'foo',
        },
      });

    expect(wrapper.findAll(`img`)).toHaveLength(1);
  });

});
