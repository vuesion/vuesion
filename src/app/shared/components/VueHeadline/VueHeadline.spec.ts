import { createLocalVue, mount } from '@vue/test-utils';
import VueHeadline               from './VueHeadline.vue';

const localVue = createLocalVue();

describe('VueHeadline.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueHeadline,
                          {
                            localVue,
                            propsData: {
                              level: '1',
                            },
                            slots:     {
                              default: 'foo',
                            },
                          },
    );

    expect(wrapper.find('h1').text()).toBe('foo');
    expect(wrapper.find('.h1').text()).toBe('foo');
  });

  test('renders h1 with h6 style', () => {
    const wrapper = mount(VueHeadline,
                          {
                            localVue,
                            propsData: {
                              level:           '1',
                              appearanceLevel: '6',
                            },
                            slots:     {
                              default: 'foo',
                            },
                          },
    );

    expect(wrapper.find('h1').text()).toBe('foo');
    expect(wrapper.find('.h6').text()).toBe('foo');
  });

  test('renders h1 as DIV', () => {
    const wrapper = mount(VueHeadline,
                          {
                            localVue,
                            propsData: {
                              level:  '1',
                              native: false,
                            },
                            slots:     {
                              default: 'foo',
                            },
                          },
    );

    expect(wrapper.find('div').text()).toBe('foo');
    expect(wrapper.find('.h1').text()).toBe('foo');
  });

});
