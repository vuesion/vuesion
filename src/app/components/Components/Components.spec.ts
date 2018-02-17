import { mount, createLocalVue } from '@vue/test-utils';
import Vuex                      from 'vuex';
import { getI18n }               from '../../shared/plugins/i18n/i18n';
import Components                from './Components.vue';
import $style                    from 'identity-obj-proxy';
import { IFormElement }          from '../../shared/components/VueForm/IFormSchema';

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
    (wrapper as any).vm.addNotificationClick();
    (wrapper as any).vm.selectChange();
    (wrapper as any).vm.formSubmit({ name: 'foo', email: 'bar' }, () => {
      return true;
    });
    (wrapper as any).vm.formReset();

    wrapper.vm.$data.registerSchema.elements.forEach((element: IFormElement) => {
      if (element.isValid) {
        element.isValid('');
      }
    });

    wrapper.vm.$data.loginSchema.elements.forEach((element: IFormElement) => {
      if (element.isValid) {
        element.isValid('');
      }
    });

    expect(wrapper.find('h1').text()).toBe('Components');
  });

});
