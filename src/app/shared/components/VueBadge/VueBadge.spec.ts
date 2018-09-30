import { createLocalVue, mount } from '@vue/test-utils';
import VueBadge                  from './VueBadge.vue';

const localVue = createLocalVue();

describe('VueBadge.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueBadge,
                          {
                            localVue,
                            slots: {
                              default: 'VueBadge',
                            },
                          },
    );

    expect(wrapper.find('span').text()).toBe('VueBadge');
  });

  test('renders primary', () => {
    const wrapper = mount(VueBadge,
                          {
                            localVue,
                            propsData: {
                              primary: true,
                            },
                          },
    );

    expect(wrapper.findAll('.primary')).toHaveLength(1);
  });

  test('renders secondary', () => {
    const wrapper = mount(VueBadge,
                          {
                            localVue,
                            propsData: {
                              secondary: true,
                            },
                          },
    );

    expect(wrapper.findAll('.secondary')).toHaveLength(1);
  });

  test('renders tertiary', () => {
    const wrapper = mount(VueBadge,
                          {
                            localVue,
                            propsData: {
                              tertiary: true,
                            },
                          },
    );

    expect(wrapper.findAll('.tertiary')).toHaveLength(1);
  });

  test('renders danger', () => {
    const wrapper = mount(VueBadge,
                          {
                            localVue,
                            propsData: {
                              danger: true,
                            },
                          },
    );

    expect(wrapper.findAll('.danger')).toHaveLength(1);
  });

  test('renders attention', () => {
    const wrapper = mount(VueBadge,
                          {
                            localVue,
                            propsData: {
                              attention: true,
                            },
                          },
    );

    expect(wrapper.findAll('.attention')).toHaveLength(1);
  });

  test('renders success', () => {
    const wrapper = mount(VueBadge,
                          {
                            localVue,
                            propsData: {
                              success: true,
                            },
                          },
    );

    expect(wrapper.findAll('.success')).toHaveLength(1);
  });

});
