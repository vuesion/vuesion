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
    }) as any;

    wrapper.vm.sliderChange();
    wrapper.vm.calendarChange();
    wrapper.vm.addNotificationClick();
    wrapper.vm.selectChange();
    wrapper.vm.onRequest('foo');
    wrapper.vm.onRequest('foo', false);
    wrapper.vm.formSubmit({ name: 'foo', email: 'bar' }, () => {
      return true;
    });
    wrapper.vm.formReset();

    wrapper.vm.registerSchema.elements.forEach((element: IFormElement) => {
      if (element.isValid) {
        element.isValid('');
      }
    });

    wrapper.vm.loginSchema.elements.forEach((element: IFormElement) => {
      if (element.isValid) {
        element.isValid('');
      }
    });

    expect(wrapper.find('h1').text()).toBe('Components');
  });

});
