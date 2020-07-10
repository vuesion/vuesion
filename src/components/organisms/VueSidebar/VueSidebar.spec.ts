import { createLocalVue, mount } from '@vue/test-utils';
import VueSidebar from './VueSidebar.vue';

const localVue = createLocalVue();

describe('VueSidebar.vue', () => {
  test('renders component', () => {
    const wrapper = mount<any>(VueSidebar, {
      localVue,
      slots: {
        default: 'foo',
      },
    });

    expect(wrapper.text()).toBe('foo');
  });

  test('should open', async () => {
    const wrapper = mount<any>(VueSidebar, {
      localVue,
      slots: {
        default: 'foo',
      },
    });

    wrapper.find('button').trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.findAll('.open')).toHaveLength(2);
  });

  test('adds and removes scroll/click/touchstart listeners', () => {
    document.addEventListener = jest.fn();
    document.removeEventListener = jest.fn();

    const wrapper = mount<any>(VueSidebar, {
      localVue,
      stubs: ['nuxt-link'],
    });

    wrapper.destroy();

    expect(document.addEventListener).toHaveBeenCalledTimes(2);
    expect(document.removeEventListener).toHaveBeenCalledTimes(2);
  });

  test('should open menu and close it on outside click', async () => {
    const wrapper = mount<any>(VueSidebar, {
      localVue,
      stubs: ['nuxt-link'],
    });

    expect(wrapper.vm.open).toBeFalsy();

    wrapper.find(`.hamburger`).trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.open).toBeTruthy();

    wrapper.vm.handleDocumentClick({ target: wrapper.find(`.hamburger`).element });
    expect(wrapper.vm.open).toBeTruthy();

    wrapper.vm.handleDocumentClick({ target: null });
    expect(wrapper.vm.open).toBeFalsy();
  });
});
