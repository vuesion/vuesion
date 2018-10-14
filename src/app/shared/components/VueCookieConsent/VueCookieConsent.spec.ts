import { createLocalVue, mount } from '@vue/test-utils';
import VueCookieConsent          from './VueCookieConsent.vue';
import { i18n }                  from '../../plugins/i18n/i18n';

const localVue = createLocalVue();

describe('VueCookieConsent.vue', () => {

  test('renders visible component and simulates consent click', () => {
    const setCookieConsentVersion: any = jest.fn();

    const wrapper = mount(VueCookieConsent,
                          {
                            localVue,
                            i18n,
                            slots:     {
                              default: 'foo',
                            },
                            propsData: {
                              currentVersion:       '1.1.0',
                              cookieConsentVersion: '1.0.0',
                              setCookieConsentVersion,
                            },
                          },
    ) as any;

    expect(wrapper.text()).toBe('foo');
    expect(wrapper.findAll('.button')).toHaveLength(1);
    expect(wrapper.vm.show).toBeTruthy();

    wrapper.find('.button').trigger('click');

    expect(setCookieConsentVersion).toHaveBeenCalledWith('1.1.0');
  });

  test('renders hidden component', () => {
    const wrapper = mount(VueCookieConsent,
                          {
                            localVue,
                            i18n,
                            slots:     {
                              default: 'foo',
                            },
                            propsData: {
                              currentVersion:          '1.0.0',
                              cookieConsentVersion:    '1.0.0',
                              setCookieConsentVersion: jest.fn(),
                            },
                          },
    ) as any;

    expect(wrapper.text()).toBe('');
    expect(wrapper.findAll('.button')).toHaveLength(0);
    expect(wrapper.vm.show).toBeFalsy();
  });

  test('test watchers', () => {
    const wrapper = mount(VueCookieConsent,
                          {
                            localVue,
                            i18n,
                            slots:     {
                              default: 'foo',
                            },
                            propsData: {
                              currentVersion:          '1.1.0',
                              cookieConsentVersion:    '1.0.0',
                              setCookieConsentVersion: jest.fn(),
                            },
                          },
    ) as any;

    expect(wrapper.text()).toBe('foo');
    expect(wrapper.findAll('.button')).toHaveLength(1);
    expect(wrapper.vm.show).toBeTruthy();

    wrapper.setProps({ cookieConsentVersion: '1.1.0' });
    expect(wrapper.vm.show).toBeFalsy();

    wrapper.setProps({ cookieConsentVersion: '1.0.0' });
    expect(wrapper.vm.show).toBeTruthy();
  });

});
