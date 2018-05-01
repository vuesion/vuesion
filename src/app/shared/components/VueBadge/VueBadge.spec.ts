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

  test('renders accent', () => {
    const wrapper = mount(VueBadge,
                          {
                            localVue,
                            propsData: {
                              accent: true,
                            },
                          },
    );

    expect(wrapper.findAll('.accent')).toHaveLength(1);
  });

  test('renders warn', () => {
    const wrapper = mount(VueBadge,
                          {
                            localVue,
                            propsData: {
                              warn: true,
                            },
                          },
    );

    expect(wrapper.findAll('.warn')).toHaveLength(1);
  });

});
