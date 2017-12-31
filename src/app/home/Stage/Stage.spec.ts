import { mount, createLocalVue } from 'vue-test-utils';
import Stage from './Stage.vue';
import $style from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('Stage.vue', () => {

  test('renders component', () => {
    (window as any).HTMLCanvasElement.prototype.getContext = jest.fn();

    const wrapper = mount(Stage, { localVue, mocks: { $style } });

    expect(wrapper.find('h1').text()).toBe('Vue.js Starter');

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

    wrapper.vm.$mount();
  });

});
