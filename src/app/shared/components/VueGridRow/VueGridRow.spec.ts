import { createLocalVue, mount } from '@vue/test-utils';
import VueGridRow                from './VueGridRow.vue';
import $style                    from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('VueGridRow.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueGridRow,
                          {
                            localVue,
                            mocks: {
                              $style,
                            },
                          },
    );

    expect(wrapper.findAll(`.${$style.vueGridRow}`)).toHaveLength(1);
  });

});
