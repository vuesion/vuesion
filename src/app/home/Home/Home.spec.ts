import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex                             from 'vuex';
import { i18n }                         from '../../shared/plugins/i18n/i18n';
import Home                             from './Home.vue';
import Stage                            from '../Stage/Stage.vue';
import DevEx                            from '../DevEx/DevEx.vue';
import EnterpriseReady                  from '../EnterpriseReady/EnterpriseReady.vue';
import UserExperience                   from '../UserExperience/UserExperience.vue';
import QuickStart                       from '../QuickStart/QuickStart.vue';

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
    expect(wrapper.findAll(DevEx)).toHaveLength(1);
    expect(wrapper.findAll(EnterpriseReady)).toHaveLength(1);
    expect(wrapper.findAll(UserExperience)).toHaveLength(1);
    expect(wrapper.findAll(QuickStart)).toHaveLength(1);
  });

});
