import { createLocalVue, mount } from '@vue/test-utils';
import { i18n } from '@/test/i18n';
import FormExample from './FormExample.vue';

const localVue = createLocalVue();

describe('FormExample.vue', () => {
  test('renders component', async () => {
    const wrapper = mount<any>(FormExample, {
      localVue,
      i18n,
    });

    wrapper.setData({
      model: {
        firstname: 'John',
        lastname: 'Doe',
        email: 'john.doe@emample.com',
        street: 'Elmstreet',
        zipCode: 1337,
        city: 'Moetown',
        country: 'de',
        acceptTerms: true,
        newsletter: false,
      },
    });

    wrapper.find('form').trigger('submit');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted('submit')).toBeTruthy();
  });
});
