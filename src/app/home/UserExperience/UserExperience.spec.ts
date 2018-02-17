import { mount, createLocalVue } from '@vue/test-utils';
import UserExperience            from './UserExperience.vue';
import $style                    from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('UserExperience.vue', () => {

  test('renders component', () => {
    const wrapper = mount(UserExperience, { localVue, mocks: { $style } });

    expect(wrapper.find('h2').text()).toBe('User experience');
  });

});
