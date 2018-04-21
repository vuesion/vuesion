import { mount, createLocalVue } from '@vue/test-utils';
import VueMarkdown               from './VueMarkdown.vue';

const localVue = createLocalVue();

describe('VueMarkdown.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueMarkdown, {
      localVue,
      slots: {
        default: ['# foo', '## bar\n ### baz'],
      },
    });

    expect(wrapper.find('h1').text()).toBe('foo');
    expect(wrapper.find('h2').text()).toBe('bar');
    expect(wrapper.find('h3').text()).toBe('baz');
  });

  test('renders component with trimmed text', () => {
    const wrapper = mount(VueMarkdown, {
      localVue,
      slots: {
        default: ['       foo bar'],
      },
    });
    expect(wrapper.contains('code')).toBe(false);
    expect(wrapper.find('div').text()).toBe('foo bar');
  });

  test('renders component with trimmed text and shows as code', () => {
    const wrapper = mount(VueMarkdown, {
      localVue,
      slots: {
        default: [`       \`foo bar\``],
      },
    });
    expect(wrapper.find('code').text()).toBe('foo bar');
  });

});
