import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VuexExample from './VuexExample.vue';
import $style from 'identity-obj-proxy';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('VuexExample.vue', () => {

  test('renders component', () => {
    const store = new Vuex.Store({
      getters: {
        getTopics: () => [],
      },
    });
    const wrapper = mount(VuexExample, { store, localVue, mocks: { $style } });

    expect(wrapper.find('h1').text()).toBe('VuexExample');
  });

  test('fetches data on the server', () => {
    const store = {
      dispatch: jest.fn(),
    };

    VuexExample.prefetch({ store });

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(`getTopics`);
  });

});
