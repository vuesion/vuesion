import { createLocalVue, mount, shallowMount } from '@vue/test-utils';
import FormExample               from './FormExample.vue';
import { i18n }                  from '../../shared/plugins/i18n/i18n';

const localVue = createLocalVue();

describe('FormExample.vue', () => {

  test('renders component', () => {
    const wrapper = mount(FormExample,
                          {
                            i18n,
                            localVue,
                          },
    );

    expect(wrapper.vm).toBeDefined();
  });

  test('addressDisabled', () => {
    const wrapper = mount(FormExample,
                          {
                            i18n,
                            localVue,
                          },
    ) as any;

    expect(wrapper.vm.addressDisabled).toBeTruthy();

    wrapper.setData({
                      form: {
                        firstname:   'foo',
                        lastname:    '',
                        email:       '',
                        street:      '',
                        zipCode:     '',
                        city:        '',
                        country:     '',
                        acceptTerms: false,
                        newsletter:  false,
                      },
                    });
    expect(wrapper.vm.addressDisabled).toBeTruthy();

    wrapper.setData({
                      form: {
                        firstname:   'foo',
                        lastname:    'bar',
                        email:       '',
                        street:      '',
                        zipCode:     '',
                        city:        '',
                        country:     '',
                        acceptTerms: false,
                        newsletter:  false,
                      },
                    });
    expect(wrapper.vm.addressDisabled).toBeTruthy();

    wrapper.setData({
                      form: {
                        firstname:   'foo',
                        lastname:    'bar',
                        email:       'baz',
                        street:      '',
                        zipCode:     '',
                        city:        '',
                        country:     '',
                        acceptTerms: false,
                        newsletter:  false,
                      },
                    });
    expect(wrapper.vm.addressDisabled).toBeFalsy();
  });

  test('renders onSubmit', (done) => {
    const wrapper = shallowMount(FormExample,
                          {
                            i18n,
                            localVue,
                          },
    ) as any;

    wrapper.vm.onSubmit();
    expect(wrapper.vm.isLoading).toBeTruthy();

    setTimeout(() => {
      expect(wrapper.vm.isLoading).toBeFalsy();
      done();
    }, 550);
  });
});
