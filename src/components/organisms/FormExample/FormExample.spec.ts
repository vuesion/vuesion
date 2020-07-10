import { createLocalVue, mount } from '@vue/test-utils';
import FormExample from './FormExample.vue';
import { i18n } from '@/test/test-utils';

const localVue = createLocalVue();

describe('FormExample.vue', () => {
  test('renders component', async () => {
    const wrapper = mount<any>(FormExample, {
      localVue,
      i18n,
      provide: () => ({
        gridSpace: {},
        gridTextAlign: {},
        gridWithVerticalSpace: {},
      }),
    });

    expect(wrapper).toBeTruthy();
    expect(wrapper.vm.isSubmitDisabled).toBeTruthy();

    wrapper.setData({
      form: {
        firstname: 'John',
        lastname: 'Doe',
        email: 'john.doe@emample.com',
        street: 'Elmstreet',
        zipCode: '1337',
        city: 'Moetown',
        country: 'Tomorrowland',
        acceptTerms: true,
        newsletter: false,
      },
    });
    expect(wrapper.vm.isSubmitDisabled).toBeFalsy();

    wrapper.find('form').trigger('submit');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted('submit')).toBeTruthy();
  });
});
