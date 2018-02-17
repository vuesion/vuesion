import { mount, createLocalVue } from '@vue/test-utils';
import Vuex                      from 'vuex';
import { getI18n }               from '../../shared/plugins/i18n/i18n';
import Components                from './Components.vue';
import $style                    from 'identity-obj-proxy';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Components.vue', () => {

  test('renders component', () => {
    const wrapper = mount(Components, {
      localVue,
      i18n:  getI18n(),
      mocks: {
        $style,
      },
    });

    (wrapper as any).vm.sliderChange();
    (wrapper as any).vm.calendarChange();
    (wrapper as any).vm.addNotification();

    expect(wrapper.find('h1').text()).toBe('Components');
  });

});
