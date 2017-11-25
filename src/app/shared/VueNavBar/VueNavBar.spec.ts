import { mount, createLocalVue } from 'vue-test-utils';
import VueNavBar from './VueNavBar.vue';
import $style from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('VueNavBar.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueNavBar, { localVue, mocks: { $style } });

    expect(wrapper.findAll(`.${$style.vueNavBar}`)).toHaveLength(1);
  });

  test('registers and unregisters scroll event', () => {
    window.addEventListener = jest.fn();
    window.removeEventListener = jest.fn();

    const wrapper = mount(VueNavBar, { localVue, mocks: { $style } });

    wrapper.destroy();

    expect(window.addEventListener).toBeCalled();
    expect(window.removeEventListener).toBeCalled();
  });

  test('should add sticky class', () => {
    const wrapper: any = mount(VueNavBar, {
      localVue,
      mocks: { $style },
    });

    (window as any).pageYOffset = 100;
    wrapper.vm.handleScroll();
    wrapper.update();
    expect(wrapper.findAll(`.${$style.in}`)).toHaveLength(1);

    (window as any).pageYOffset = undefined;
    document.documentElement.scrollTop = 100;
    wrapper.vm.handleScroll();
    wrapper.update();
    expect(wrapper.findAll(`.${$style.in}`)).toHaveLength(1);

    (window as any).pageYOffset = undefined;
    document.documentElement.scrollTop = undefined;
    document.body.scrollTop = 100;
    wrapper.vm.handleScroll();
    wrapper.update();
    expect(wrapper.findAll(`.${$style.in}`)).toHaveLength(1);

    (window as any).pageYOffset = undefined;
    document.documentElement.scrollTop = undefined;
    document.body.scrollTop = undefined;
    wrapper.vm.handleScroll();
    wrapper.update();
    expect(wrapper.findAll(`.${$style.in}`)).toHaveLength(0);
  });

});
