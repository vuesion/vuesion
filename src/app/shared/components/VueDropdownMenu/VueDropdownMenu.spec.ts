import { createLocalVue, mount } from '@vue/test-utils';
import VueDropdownMenu           from './VueDropdownMenu.vue';

const localVue = createLocalVue();

describe('VueDropdownMenuMenu.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueDropdownMenu,
                          {
                            localVue,
                            propsData: {
                              options: [],
                            },
                            slots:     {
                              default: 'foo',
                            },
                          },
    );

    expect(wrapper.text()).toBe('foo');
  });

  test('onClick', () => {
    const wrapper = mount(VueDropdownMenu,
                          {
                            localVue,
                            propsData: {
                              options: [{ label: 'foo', value: 'foo' }],
                            },
                            slots:     {
                              default: 'foo',
                            },
                          },
    );

    wrapper.find('span').trigger('click');
    expect((wrapper as any).vm.show).toBeTruthy();

    (wrapper as any).vm.onClick({ label: 'foo', value: 'foo' });
    expect(wrapper.emitted('click')).toBeTruthy();
    expect((wrapper as any).vm.show).toBeFalsy();
  });

  test('onKeyPress', () => {
    const wrapper = mount(VueDropdownMenu,
                          {
                            localVue,
                            propsData: {
                              options: [
                                { label: 'foo', value: 'foo' },
                                { label: 'foo', value: 'foo' },
                              ],
                            },
                            slots:     {
                              default: 'foo',
                            },
                          },
    );

    (wrapper as any).vm.onKeyPress({ code: 'Tab', stopPropagation: jest.fn(), preventDefault: jest.fn() });
    expect((wrapper as any).vm.show).toBeFalsy();

    (wrapper as any).vm.onKeyPress({ code: 'Space', stopPropagation: jest.fn(), preventDefault: jest.fn() });
    expect((wrapper as any).vm.show).toBeTruthy();

    expect((wrapper as any).vm.index).toBe(-1);
    (wrapper as any).vm.onKeyPress({ code: 'ArrowDown', stopPropagation: jest.fn(), preventDefault: jest.fn() });
    expect((wrapper as any).vm.index).toBe(0);

    (wrapper as any).vm.onKeyPress({ code: 'ArrowDown', stopPropagation: jest.fn(), preventDefault: jest.fn() });
    expect((wrapper as any).vm.index).toBe(1);

    (wrapper as any).vm.onKeyPress({ code: 'ArrowUp', stopPropagation: jest.fn(), preventDefault: jest.fn() });
    expect((wrapper as any).vm.index).toBe(0);

    (wrapper as any).vm.onKeyPress({ code: 'Space', stopPropagation: jest.fn(), preventDefault: jest.fn() });
    expect((wrapper as any).vm.show).toBeFalsy();

    (wrapper as any).vm.onKeyPress({ code: 'Space', stopPropagation: jest.fn(), preventDefault: jest.fn() });
    expect((wrapper as any).vm.show).toBeTruthy();

    (wrapper as any).vm.onKeyPress({ code: 'Escape', stopPropagation: jest.fn(), preventDefault: jest.fn() });
    expect((wrapper as any).vm.show).toBeFalsy();
  });

  test('registers and unregisters click event', () => {
    document.addEventListener = jest.fn();
    document.removeEventListener = jest.fn();

    const wrapper = mount(VueDropdownMenu, {
      localVue,
      propsData: {
        options: [{ label: 'foo', value: 'foo' }],
      },
      slots:     {
        default: 'foo',
      },
    });

    wrapper.destroy();

    expect(document.addEventListener).toHaveBeenCalledTimes(2);
    expect(document.removeEventListener).toHaveBeenCalledTimes(2);
  });

  test('should close on outside click', () => {
    const wrapper: any = mount(VueDropdownMenu, {
      localVue,
      propsData: {
        options: [{ label: 'foo', value: 'foo' }],
      },
      slots:     {
        default: '<p>foo</p>',
      },
    });

    wrapper.vm.$emit = jest.fn();

    wrapper.find('span').trigger('click');
    expect((wrapper as any).vm.show).toBeTruthy();
    wrapper.vm.handleDocumentClick({ target: wrapper.find(`p`).element });
    expect((wrapper as any).vm.show).toBeTruthy();

    wrapper.vm.handleDocumentClick({ target: null });
    expect((wrapper as any).vm.show).toBeFalsy();
  });

  test('handleSelection', () => {
    const wrapper: any = mount(VueDropdownMenu, {
      localVue,
      propsData: {
        options: [
          { label: 'foo', value: 'foo' },
          { label: 'foo', value: 'foo' },
          { label: 'foo', value: 'foo' },
        ],
      },
      slots:     {
        default: '<p>foo</p>',
      },
    });

    wrapper.vm.handleSelection(-2);
    expect(wrapper.vm.index).toBe(2);

    wrapper.vm.handleSelection(3);
    expect(wrapper.vm.index).toBe(0);

    wrapper.vm.handleSelection(1);
    expect(wrapper.vm.index).toBe(1);
  });

});
