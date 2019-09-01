import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import { i18n } from '@shared/plugins/i18n/i18n';
import Home from './Home.vue';
import Stage from '../components/Stage/Stage.vue';
import HomeSection from '../components/HomeSection/HomeSection.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Home.vue', () => {
  test('renders component', () => {
    const store = new Vuex.Store({
      state: {
        app: {
          config: {
            features: {
              disableParticles: false,
            },
          },
        },
      },
    });
    const wrapper = shallowMount(Home, {
      store,
      localVue,
      i18n,
    });

    expect(wrapper.findAll(Stage)).toHaveLength(1);
    expect(wrapper.findAll(HomeSection)).toHaveLength(4);
  });
});
