import { createLocalVue, mount, RouterLinkStub } from '@vue/test-utils';
import VueNavBar                                 from './VueNavBar.vue';
import { EventBus }                              from '../../services/EventBus';

const localVue = createLocalVue();

describe('VueNavBar.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueNavBar, {
      localVue,
      stubs: ['router-link'],
    });

    expect(wrapper.findAll(`.vueNavBar`)).toHaveLength(1);
  });

  test('adds and removes scroll/click/touchstart listeners', () => {
    window.addEventListener = jest.fn();
    window.removeEventListener = jest.fn();
    document.addEventListener = jest.fn();
    document.removeEventListener = jest.fn();

    const wrapper = mount(VueNavBar, {
      localVue,
      stubs: ['router-link'],
    });

    wrapper.destroy();

    expect(window.addEventListener).toBeCalled();
    expect(window.removeEventListener).toBeCalled();
    expect(document.addEventListener).toHaveBeenCalledTimes(2);
    expect(document.removeEventListener).toHaveBeenCalledTimes(2);
  });

  test('should add sticky class', () => {
    const wrapper: any = mount(VueNavBar, {
      localVue,
      stubs: ['router-link'],
    });

    (window as any).pageYOffset = 100;
    wrapper.vm.handleScroll();
    expect(wrapper.findAll(`.in`)).toHaveLength(2);

    (window as any).pageYOffset = undefined;
    document.documentElement.scrollTop = 100;
    wrapper.vm.handleScroll();
    expect(wrapper.findAll(`.in`)).toHaveLength(2);

    (window as any).pageYOffset = undefined;
    document.documentElement.scrollTop = undefined;
    document.body.scrollTop = 100;
    wrapper.vm.handleScroll();
    expect(wrapper.findAll(`.in`)).toHaveLength(2);

    (window as any).pageYOffset = undefined;
    document.documentElement.scrollTop = undefined;
    document.body.scrollTop = undefined;
    wrapper.vm.handleScroll();
    expect(wrapper.findAll(`.in`)).toHaveLength(0);
  });

  test('should open menu and close it on outside click', () => {
    const wrapper: any = mount(VueNavBar, {
      localVue,
      stubs: ['router-link'],
    });

    expect(wrapper.vm.isOpen).toBeFalsy();

    wrapper.find(`.hamburger`).trigger('click');
    expect(wrapper.vm.isOpen).toBeTruthy();

    wrapper.vm.handleDocumentClick({ target: wrapper.find(`.hamburger`).element });
    expect(wrapper.vm.isOpen).toBeTruthy();

    wrapper.vm.handleDocumentClick({ target: null });
    expect(wrapper.vm.isOpen).toBeFalsy();
  });

  test('should close navbar when close event is received', () => {
    const wrapper: any = mount(VueNavBar, {
      localVue,
      stubs: ['router-link'],
    });

    // Open the navbar to initialize:
    expect(wrapper.vm.isOpen).toBeFalsy();

    wrapper.find(`.hamburger`).trigger('click');
    expect(wrapper.vm.isOpen).toBeTruthy();

    wrapper.vm.handleDocumentClick({ target: wrapper.find(`.hamburger`).element });
    expect(wrapper.vm.isOpen).toBeTruthy();

    // Send the close event through the event bus:
    EventBus.$emit('navbar.close');

    // Navbar should now be closed:
    expect(wrapper.vm.isOpen).toBeFalsy();
  });

  test('should close navbar when brand logo is clicked', () => {
    const wrapper = mount(VueNavBar, {
      localVue,
      stubs: {
        RouterLink: RouterLinkStub,
      },
    }) as any;

    wrapper.find(`.hamburger`).trigger('click');
    expect(wrapper.vm.isOpen).toBeTruthy();

    wrapper.find('a').trigger('click');
    expect(wrapper.vm.isOpen).toBeFalsy();
  });
});
