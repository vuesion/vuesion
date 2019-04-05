import { createLocalVue, mount } from '@vue/test-utils';
import Stage from './Stage.vue';
import { i18n } from '../../../shared/plugins/i18n/i18n';

const localVue = createLocalVue();

describe('Stage.vue', () => {
  test('renders component', () => {
    (window as any).HTMLCanvasElement.prototype.getContext = jest.fn();

    const wrapper = mount(Stage, {
      localVue,
      i18n,
      propsData: {
        disableParticles: true,
      },
    });

    expect(wrapper.find('h1').text()).toBe('vuesion');

    (wrapper as any).vm.$refs.stage.getClientRects = () => {
      return {
        length: 1,
        item() {
          return {
            width: 100,
            height: 100,
          };
        },
      };
    };

    (wrapper as any).vm.handleResize();
  });

  test('adds and removes resize listeners', () => {
    window.addEventListener = jest.fn();
    window.removeEventListener = jest.fn();

    const wrapper = mount(Stage, {
      localVue,
      i18n,
      propsData: {
        disableParticles: false,
      },
    });

    wrapper.destroy();

    expect(window.addEventListener).toBeCalled();
    expect(window.removeEventListener).toBeCalled();
  });
});
