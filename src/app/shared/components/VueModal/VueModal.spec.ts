import { mount, createLocalVue } from '@vue/test-utils';
import VueModal                  from './VueModal.vue';

const localVue = createLocalVue();

describe('VueModal.vue', () => {

  test('renders slot', (done) => {
    const wrapper = mount(VueModal, {
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

  test('registers and unregisters scroll/click event', () => {
    document.addEventListener = jest.fn();
    document.removeEventListener = jest.fn();

    const wrapper = mount(VueModal, { localVue });

    wrapper.destroy();

    expect(document.addEventListener).toHaveBeenCalledTimes(2);
    expect(document.removeEventListener).toHaveBeenCalledTimes(2);
  });

  test('should open menu and close it on outside click', () => {
    const wrapper: any = mount(VueModal, {
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
});
