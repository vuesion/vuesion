import { mount, createLocalVue } from '@vue/test-utils';
import Vuex                      from 'vuex';
import { i18n }               from '../../shared/plugins/i18n/i18n';
import Components                from './Components.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Components.vue', () => {

  test('renders component', () => {
    const wrapper = mount(Components, {
      localVue,
      i18n,
    }) as any;

    wrapper.vm.sliderChange();
    wrapper.vm.calendarChange();
    wrapper.vm.addNotificationClick();
    wrapper.vm.selectChange();
    wrapper.vm.onRequest('foo');
    wrapper.vm.onRequest('foo', false);

    expect(wrapper.find('h1').text()).toBe('Components');
  });

});
