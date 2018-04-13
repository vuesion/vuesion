import { mount, createLocalVue } from '@vue/test-utils';
import VueNavBar                 from './VueNavBar.vue';
import $style                    from 'identity-obj-proxy';
import { EventBus }              from '../../services/EventBus';

const localVue = createLocalVue();

describe('VueNavBar.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueNavBar, { localVue, mocks: { $style } });

    expect(wrapper.findAll(`.${$style.vueNavBar}`)).toHaveLength(1);
  });

  test('adds and removes scroll/click/touchstart listeners', () => {
    window.addEventListener = jest.fn();
    window.removeEventListener = jest.fn();
    document.addEventListener = jest.fn();
    document.removeEventListener = jest.fn();

    const wrapper = mount(VueNavBar, { localVue, mocks: { $style } });

    wrapper.destroy();

    expect(window.addEventListener).toBeCalled();
    expect(window.removeEventListener).toBeCalled();
    expect(document.addEventListener).toHaveBeenCalledTimes(2);
    expect(document.removeEventListener).toHaveBeenCalledTimes(2);
  });

  test('should add sticky class', () => {
    const wrapper: any = mount(VueNavBar, {
      localVue,
      mocks: { $style },
    });

    (window as any).pageYOffset = 100;
    wrapper.vm.handleScroll();
    wrapper.update();
    expect(wrapper.findAll(`.${$style.in}`)).toHaveLength(2);

    (window as any).pageYOffset = undefined;
    document.documentElement.scrollTop = 100;
    wrapper.vm.handleScroll();
    wrapper.update();
    expect(wrapper.findAll(`.${$style.in}`)).toHaveLength(2);

    (window as any).pageYOffset = undefined;
    document.documentElement.scrollTop = undefined;
    document.body.scrollTop = 100;
    wrapper.vm.handleScroll();
    wrapper.update();
    expect(wrapper.findAll(`.${$style.in}`)).toHaveLength(2);

    (window as any).pageYOffset = undefined;
    document.documentElement.scrollTop = undefined;
    document.body.scrollTop = undefined;
    wrapper.vm.handleScroll();
    wrapper.update();
    expect(wrapper.findAll(`.${$style.in}`)).toHaveLength(0);
  });

  test('should open menu and close it on outside click', () => {
    const wrapper: any = mount(VueNavBar, {
      localVue,
      mocks: { $style },
    });

    expect(wrapper.vm.isOpen).toBeFalsy();

    wrapper.find(`.${$style.hamburger}`).trigger('click');
    wrapper.update();
    expect(wrapper.vm.isOpen).toBeTruthy();

    wrapper.vm.handleDocumentClick({ target: wrapper.find(`.${$style.hamburger}`).element });
    wrapper.update();
    expect(wrapper.vm.isOpen).toBeTruthy();

    wrapper.vm.handleDocumentClick({ target: null });
    wrapper.update();
    expect(wrapper.vm.isOpen).toBeFalsy();
  });

  test('should close navbar when close event is received', () => {
    const wrapper: any = mount(VueNavBar, {
      localVue,
      mocks: { $style },
    });

    // Open the navbar to initialize:
    expect(wrapper.vm.isOpen).toBeFalsy();

    wrapper.find(`.${$style.hamburger}`).trigger('click');
    wrapper.update();
    expect(wrapper.vm.isOpen).toBeTruthy();

    wrapper.vm.handleDocumentClick({ target: wrapper.find(`.${$style.hamburger}`).element });
    wrapper.update();
    expect(wrapper.vm.isOpen).toBeTruthy();

    // Send the close event through the event bus:
    EventBus.$emit('navbar.close');

    // Navbar should now be closed:
    expect(wrapper.vm.isOpen).toBeFalsy();
  });
});
