import { mount, createLocalVue } from '@vue/test-utils';
import VueModal                  from './VueModal.vue';
import $style                    from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('VueModal.vue', () => {

  test('renders slot', (done) => {
    const wrapper = mount(VueModal, {
      localVue,
      mocks: { $style },
      slots: {
        default: '<p>TEST</p>',
      },
    });

    expect(wrapper.findAll('p')).toHaveLength(0);

    wrapper.setProps({ show: true });
    wrapper.update();
    expect(wrapper.findAll('p')).toHaveLength(1);

    wrapper.setProps({ show: false });
    wrapper.update();
    expect(wrapper.findAll('p')).toHaveLength(0);

    wrapper.setProps({ show: true });
    wrapper.update();

    const testElement: HTMLElement = wrapper.find('p').element;

    (wrapper as any).vm.beforeLeave(testElement);
    (wrapper as any).vm.leave(testElement, done);
  });

  test('registers and unregisters scroll/click event', () => {
    document.addEventListener = jest.fn();
    document.removeEventListener = jest.fn();

    const wrapper = mount(VueModal, { localVue, mocks: { $style } });

    wrapper.destroy();

    expect(document.addEventListener).toHaveBeenCalledTimes(2);
    expect(document.removeEventListener).toHaveBeenCalledTimes(2);
  });

  test('should open menu and close it on outside click', () => {
    const wrapper: any = mount(VueModal, {
      localVue,
      mocks: { $style },
      slots: {
        default: '<p>TEST</p>',
      },
    });

    wrapper.vm.$emit = jest.fn();

    expect(wrapper.vm.$emit).toHaveBeenCalledTimes(0);
    wrapper.vm.handleDocumentClick({ target: wrapper.find(`p`).element });
    wrapper.update();
    expect(wrapper.vm.$emit).toHaveBeenCalledTimes(0);

    wrapper.vm.handleDocumentClick({ target: null });
    wrapper.update();
    expect(wrapper.vm.$emit).toHaveBeenCalledTimes(0);

    wrapper.setProps({ show: true });
    wrapper.update();
    wrapper.vm.handleDocumentClick({ target: null });
    wrapper.update();
    expect(wrapper.vm.$emit).toHaveBeenCalledTimes(1);
  });
});
