import { mount, createLocalVue } from '@vue/test-utils';
import VueIcon from './VueIcon.vue';
import $style from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('VueIcon.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueIcon,
                      {
                        localVue,
                        mocks: {
                          $style,
                        },
                      },
                    );

    expect(wrapper.contains('i')).toBe(true);
  });

});
