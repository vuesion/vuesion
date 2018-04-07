import { mount, createLocalVue } from '@vue/test-utils';
import Stage                     from './Stage.vue';
import { i18n }               from '../../shared/plugins/i18n/i18n';

const localVue = createLocalVue();

describe('Stage.vue', () => {

  test('renders component', () => {
    (window as any).HTMLCanvasElement.prototype.getContext = jest.fn();

    const wrapper = mount(Stage, {
      localVue,
      i18n,
    });

    expect(wrapper.find('h1').text()).toBe('Vue.js Starter');

    (wrapper as any).vm.$refs.stage.getClientRects = () => {
      return {
        length: 1,
        item() {
          return {
            width:  100,
            height: 100,
          };
        },
      };
    };

    wrapper.vm.$mount();
  });

  test('adds and removes resize listeners', () => {
    window.addEventListener = jest.fn();
    window.removeEventListener = jest.fn();

    const wrapper = mount(Stage, {
      localVue,
      i18n,
    });

    wrapper.destroy();

    expect(window.addEventListener).toBeCalled();
    expect(window.removeEventListener).toBeCalled();
  });

});
