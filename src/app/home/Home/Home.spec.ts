import { mount, createLocalVue } from 'vue-test-utils';
import Vuex from 'vuex';
import Home from './Home.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Home.vue', () => {

  test('renders component', () => {
    const store = new Vuex.Store({
      getters: {
        getHome: () => [],
      },
    });
    const wrapper = mount(Home, { store, localVue });

    expect(wrapper.find('h1').text()).toBe('Home');
  });

  test('fetches data on the server', () => {
    const store = {
      dispatch: jest.fn(),
    };

    Home.prefetch({ store });

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(`getHome`);
  });

});
