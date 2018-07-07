import { createLocalVue, mount } from '@vue/test-utils';
import VueCookieConsent          from './VueCookieConsent.vue';

const localVue = createLocalVue();

describe('VueCookieConsent.vue', () => {

  test('renders visible component and simulates consent click', () => {
    const setCookieConsentVersion: any = jest.fn();

    const wrapper = mount(VueCookieConsent,
                          {
                            localVue,
                            slots:     {
                              default: 'foo',
                            },
                            propsData: {
                              currentVersion:       '1.1.0',
                              cookieConsentVersion: '1.0.0',
                              setCookieConsentVersion,
                            },
                          },
    );

    expect(wrapper.text()).toBe('foo');
    expect(wrapper.findAll('.button')).toHaveLength(1);
    expect(wrapper.findAll('.show')).toHaveLength(1);

    wrapper.find('.button').trigger('click');

    expect(setCookieConsentVersion).toHaveBeenCalledWith('1.1.0');
  });

  test('renders hidden component', () => {
    const wrapper = mount(VueCookieConsent,
                          {
                            localVue,
                            slots:     {
                              default: 'foo',
                            },
                            propsData: {
                              currentVersion:          '1.0.0',
                              cookieConsentVersion:    '1.0.0',
                              setCookieConsentVersion: jest.fn(),
                            },
                          },
    );

    expect(wrapper.text()).toBe('foo');
    expect(wrapper.findAll('.button')).toHaveLength(1);
    expect(wrapper.findAll('.show')).toHaveLength(0);
  });

  test('test watchers', () => {
    const wrapper = mount(VueCookieConsent,
                          {
                            localVue,
                            slots:     {
                              default: 'foo',
                            },
                            propsData: {
                              currentVersion:          '1.1.0',
                              cookieConsentVersion:    '1.0.0',
                              setCookieConsentVersion: jest.fn(),
                            },
                          },
    );

    expect(wrapper.text()).toBe('foo');
    expect(wrapper.findAll('.button')).toHaveLength(1);
    expect(wrapper.findAll('.show')).toHaveLength(1);

    wrapper.setProps({ cookieConsentVersion: '1.1.0' });

    expect(wrapper.findAll('.show')).toHaveLength(0);

    wrapper.setProps({ cookieConsentVersion: '1.0.0' });

    expect(wrapper.findAll('.show')).toHaveLength(1);
  });

});
