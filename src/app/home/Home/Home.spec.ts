import { mount, createLocalVue } from 'vue-test-utils';
import Vuex from 'vuex';
import Home from './Home.vue';
import $style from 'identity-obj-proxy';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Home.vue', () => {

  test('fetches data on the server', () => {
    const store = {
      dispatch: jest.fn(),
    };

    Home.prefetch({ store, mocks: { $style } });

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(`getHome`);
  });

});
