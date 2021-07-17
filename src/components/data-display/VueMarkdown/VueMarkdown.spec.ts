import { createLocalVue, mount } from '@vue/test-utils';
import VueMarkdown from './VueMarkdown.vue';

const localVue = createLocalVue();

describe('VueMarkdown.vue', () => {
  test('renders component', () => {
    const wrapper = mount(VueMarkdown, {
      localVue,
      slots: {
        default: ['<img src="/test.jpg"/># foo\n ## bar\n ### baz'],
      },
    });

    expect(wrapper.find('h1').text()).toBe('foo');
    expect(wrapper.find('h2').text()).toBe('bar');
    expect(wrapper.find('h3').text()).toBe('baz');

    wrapper.vm.$forceUpdate();

    wrapper.destroy();
  });

  test('renders component with trimmed text', () => {
    const wrapper = mount(VueMarkdown, {
      localVue,
      slots: {
        default: ['       foo bar'],
      },
    });
    expect(wrapper.find('code').exists()).toBe(false);
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

  test('click on a link should use the router', async () => {
    const $router = {
      push: jest.fn(),
    };
    const wrapper = mount(VueMarkdown, {
      localVue,
      mocks: {
        $router,
      },
      slots: {
        default: ['[test](/test)'],
      },
    });

    const actual = $router.push;
    const expected = '/test';

    wrapper.find('a').trigger('click');
    await wrapper.vm.$nextTick();

    expect(actual).toHaveBeenCalledWith(expected);
  });

  test('click on a link should not use the router', async () => {
    const $router = {
      push: jest.fn(),
    };
    const wrapper = mount(VueMarkdown, {
      localVue,
      propsData: {
        useRouter: false,
      },
      mocks: {
        $router,
      },
      slots: {
        default: ['[test](/test)'],
      },
    });

    const actual = $router.push;
    const expected = '/test';

    wrapper.find('a').trigger('click');
    await wrapper.vm.$nextTick();

    expect(actual).not.toHaveBeenCalledWith(expected);
  });
});
