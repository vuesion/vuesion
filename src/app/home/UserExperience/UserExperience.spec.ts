import { mount, createLocalVue } from '@vue/test-utils';
import UserExperience            from './UserExperience.vue';

const localVue = createLocalVue();

describe('UserExperience.vue', () => {

  test('renders component', () => {
    const wrapper = mount(UserExperience, { localVue });

    expect(wrapper.find('h2').text()).toBe('User experience');
  });

});
