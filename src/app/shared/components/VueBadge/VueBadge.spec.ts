import { createLocalVue, mount } from '@vue/test-utils';
import VueBadge from './VueBadge.vue';

const localVue = createLocalVue();

describe('VueBadge.vue', () => {
  test('renders component', () => {
    const wrapper = mount(VueBadge, {
      localVue,
      slots: {
        default: 'VueBadge',
      },
    });

    expect(wrapper.find('span').text()).toBe('VueBadge');
  });

  test('renders primary', () => {
    const wrapper = mount(VueBadge, {
      localVue,
      propsData: {
        color: 'primary',
      },
    });

    expect(wrapper.findAll('.primary')).toHaveLength(1);
  });

  test('renders secondary', () => {
    const wrapper = mount(VueBadge, {
      localVue,
      propsData: {
        color: 'secondary',
      },
    });

    expect(wrapper.findAll('.secondary')).toHaveLength(1);
  });

  test('renders tertiary', () => {
    const wrapper = mount(VueBadge, {
      localVue,
      propsData: {
        color: 'tertiary',
      },
    });

    expect(wrapper.findAll('.tertiary')).toHaveLength(1);
  });

  test('renders danger', () => {
    const wrapper = mount(VueBadge, {
      localVue,
      propsData: {
        color: 'danger',
      },
    });

    expect(wrapper.findAll('.danger')).toHaveLength(1);
  });

  test('renders warning', () => {
    const wrapper = mount(VueBadge, {
      localVue,
      propsData: {
        color: 'warning',
      },
    });

    expect(wrapper.findAll('.warning')).toHaveLength(1);
  });

  test('renders success', () => {
    const wrapper = mount(VueBadge, {
      localVue,
      propsData: {
        color: 'success',
      },
    });

    expect(wrapper.findAll('.success')).toHaveLength(1);
  });

  test('renders outlined', () => {
    const wrapper = mount(VueBadge, {
      localVue,
      propsData: {
        outlined: true,
      },
    });

    expect(wrapper.findAll('.outlined')).toHaveLength(1);
  });
});
