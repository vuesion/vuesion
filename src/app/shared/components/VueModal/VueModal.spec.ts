import { createLocalVue, mount } from '@vue/test-utils';
import VueModal from './VueModal.vue';

const localVue = createLocalVue();

describe('VueModal.vue', () => {
  test('renders slot', (done) => {
    const wrapper = mount<any>(VueModal, {
      localVue,
      slots: {
        default: '<p>TEST</p>',
      },
    }) as any;

    expect(wrapper.findAll('p')).toHaveLength(0);

    wrapper.setProps({ show: true });
    expect(wrapper.findAll('p')).toHaveLength(1);

    wrapper.setProps({ show: false });
    expect(wrapper.findAll('p')).toHaveLength(0);

    wrapper.setProps({ show: true });

    wrapper.vm.beforeEnter(wrapper.vm.$el);
    wrapper.vm.enter(wrapper.vm.$el, jest.fn());
    wrapper.vm.beforeLeave(wrapper.vm.$el);
    wrapper.vm.leave(wrapper.vm.$el, done);
  });

  test('registers and unregisters scroll/click/keydown event', () => {
    document.addEventListener = jest.fn();
    document.removeEventListener = jest.fn();

    const wrapper = mount<any>(VueModal, { localVue });

    wrapper.destroy();

    expect(document.addEventListener).toHaveBeenCalledTimes(3);
    expect(document.removeEventListener).toHaveBeenCalledTimes(3);
  });

  test('should close on outside click', () => {
    const wrapper = mount<any>(VueModal, {
      localVue,
      slots: {
        default: '<p>TEST</p>',
      },
    });

    wrapper.vm.$emit = jest.fn();

    expect(wrapper.vm.$emit).toHaveBeenCalledTimes(0);
    wrapper.vm.handleDocumentClick({ target: wrapper.find(`p`).element });
    expect(wrapper.vm.$emit).toHaveBeenCalledTimes(0);

    wrapper.vm.handleDocumentClick({ target: null });
    expect(wrapper.vm.$emit).toHaveBeenCalledTimes(0);

    wrapper.setProps({ show: true });
    wrapper.vm.handleDocumentClick({ target: null });
    expect(wrapper.vm.$emit).toHaveBeenCalledTimes(1);
  });

  test('should close on ESC press', () => {
    const wrapper = mount<any>(VueModal, {
      localVue,
    });

    wrapper.vm.$emit = jest.fn();

    wrapper.vm.handleDocumentKeyDown({ key: 'Enter' });
    expect(wrapper.vm.$emit).toHaveBeenCalledTimes(0);

    wrapper.vm.handleDocumentKeyDown({ key: 'Escape' });
    expect(wrapper.vm.$emit).toHaveBeenCalledTimes(1);
  });
});
