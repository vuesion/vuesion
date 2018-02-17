import { mount, createLocalVue } from '@vue/test-utils';
import VuePanelHeader            from './VuePanelHeader.vue';
import $style                    from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('VuePanelHeader.vue', () => {

  test('renders component', () => {
    const wrapper = mount(
      VuePanelHeader,
      {
        localVue,
        mocks: { $style },
      });

    expect(wrapper.findAll(`.${$style.vuePanelHeader}`)).toHaveLength(1);
  });

  test('renders component with title', () => {
    const wrapper = mount(
      VuePanelHeader,
      {
        localVue,
        mocks:     { $style },
        propsData: {
          title: 'foo',
        },
      });

    expect(wrapper.findAll(`.${$style.title}`)).toHaveLength(1);
    expect(wrapper.find(`.${$style.title}`).text()).toBe('foo');
  });

  test('renders component with subtitle', () => {
    const wrapper = mount(
      VuePanelHeader,
      {
        localVue,
        mocks:     { $style },
        propsData: {
          subtitle: 'foo',
        },
      });

    expect(wrapper.findAll(`.${$style.subtitle}`)).toHaveLength(1);
    expect(wrapper.find(`.${$style.subtitle}`).text()).toBe('foo');
  });

  test('renders component with image', () => {
    const wrapper = mount(
      VuePanelHeader,
      {
        localVue,
        mocks:     { $style },
        propsData: {
          image: 'foo',
        },
      });

    expect(wrapper.findAll(`img`)).toHaveLength(1);
  });

});
