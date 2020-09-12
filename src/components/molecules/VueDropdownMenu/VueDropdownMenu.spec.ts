import { createLocalVue, mount } from '@vue/test-utils';
import VueDropdownMenu from './VueDropdownMenu.vue';
import { triggerDocument } from '@/test/test-utils';

const localVue = createLocalVue();

describe('VueDropdownMenuMenu.vue', () => {
  test('renders component', () => {
    const wrapper = mount<any>(VueDropdownMenu, {
      localVue,
      propsData: {
        items: [],
      },
      slots: {
        default: 'foo',
      },
    });

    expect(wrapper.text()).toBe('foo');
  });

  test('onItemClick', async () => {
    const wrapper = mount<any>(VueDropdownMenu, {
      localVue,
      propsData: {
        items: [{ label: 'foo', value: 'foo' }],
      },
      slots: {
        default: 'foo',
      },
    });

    wrapper.find('span').trigger('click');
    await wrapper.vm.$nextTick();

    expect((wrapper as any).vm.show).toBeTruthy();

    (wrapper as any).vm.onItemClick({ label: 'foo', value: 'foo' });
    expect(wrapper.emitted('item-click')).toBeTruthy();
    expect((wrapper as any).vm.show).toBeFalsy();
  });

  test('onKeyPress', () => {
    const wrapper = mount<any>(VueDropdownMenu, {
      localVue,
      propsData: {
        items: [
          { label: 'foo', value: 'foo' },
          { label: '', value: 'separator' },
          { label: 'foo', value: 'foo' },
        ],
      },
      slots: {
        default: 'foo',
      },
    });

    (wrapper as any).vm.onKeyPress({ code: 'Tab', stopPropagation: jest.fn(), preventDefault: jest.fn() });
    expect((wrapper as any).vm.show).toBeFalsy();

    (wrapper as any).vm.onKeyPress({ code: 'Space', stopPropagation: jest.fn(), preventDefault: jest.fn() });
    expect((wrapper as any).vm.show).toBeTruthy();

    expect((wrapper as any).vm.index).toBe(-1);
    (wrapper as any).vm.onKeyPress({ code: 'ArrowDown', stopPropagation: jest.fn(), preventDefault: jest.fn() });
    expect((wrapper as any).vm.index).toBe(0);

    (wrapper as any).vm.onKeyPress({ code: 'ArrowDown', stopPropagation: jest.fn(), preventDefault: jest.fn() });
    expect((wrapper as any).vm.index).toBe(2);

    (wrapper as any).vm.onKeyPress({ code: 'ArrowUp', stopPropagation: jest.fn(), preventDefault: jest.fn() });
    expect((wrapper as any).vm.index).toBe(0);

    (wrapper as any).vm.onKeyPress({ code: 'Space', stopPropagation: jest.fn(), preventDefault: jest.fn() });
    expect((wrapper as any).vm.show).toBeFalsy();

    (wrapper as any).vm.onKeyPress({ code: 'Space', stopPropagation: jest.fn(), preventDefault: jest.fn() });
    expect((wrapper as any).vm.show).toBeTruthy();

    (wrapper as any).vm.onKeyPress({ code: 'Escape', stopPropagation: jest.fn(), preventDefault: jest.fn() });
    expect((wrapper as any).vm.show).toBeFalsy();
  });

  test('should close on outside click', async () => {
    const wrapper = mount<any>(VueDropdownMenu, {
      localVue,
      propsData: {
        items: [{ label: 'foo', value: 'foo' }],
      },
      slots: {
        default: '<p>foo</p>',
      },
    });

    wrapper.vm.$emit = jest.fn();

    wrapper.find('span').trigger('click');
    await wrapper.vm.$nextTick();

    expect((wrapper as any).vm.show).toBeTruthy();

    triggerDocument.mousedown({ target: wrapper.find(`p`).element });
    expect((wrapper as any).vm.show).toBeTruthy();

    triggerDocument.mousedown({ target: null });
    expect((wrapper as any).vm.show).toBeFalsy();
  });

  test('handleSelection', () => {
    const wrapper = mount<any>(VueDropdownMenu, {
      localVue,
      propsData: {
        items: [
          { label: 'foo', value: 'foo' },
          { label: 'foo', value: 'foo' },
          { label: 'foo', value: 'foo' },
        ],
      },
      slots: {
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
