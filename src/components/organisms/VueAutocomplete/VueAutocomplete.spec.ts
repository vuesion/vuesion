import { createLocalVue, mount, shallowMount } from '@vue/test-utils';
import { i18n } from '@/test/i18n';
import { triggerDocument } from '@/test/test-utils';
import VueLoader from '../../atoms/VueLoader/VueLoader.vue';
import VueAutocomplete from './VueAutocomplete.vue';
import { AutocompleteFixture } from './IAutocompleteFixture';

const localVue = createLocalVue();

describe('VueAutocomplete.vue', () => {
  test('renders and destroys component', () => {
    const wrapper = shallowMount<any>(VueAutocomplete, {
      localVue,
      i18n,
      propsData: {
        id: 'foo',
        name: 'foo',
        label: 'foo',
        placeholder: 'Type something',
        items: AutocompleteFixture,
      },
    });

    expect(wrapper.props().placeholder).toBe('Type something');

    wrapper.vm.$destroy();
  });

  test('renders component with loader', () => {
    const wrapper = shallowMount<any>(VueAutocomplete, {
      localVue,
      i18n,
      propsData: {
        id: 'foo',
        name: 'foo',
        label: 'foo',
        placeholder: 'Type something',
        items: AutocompleteFixture,
        isLoading: true,
      },
    });

    expect(wrapper.findAllComponents(VueLoader)).toHaveLength(1);
  });

  test('onFocus', () => {
    const wrapper = mount<any>(VueAutocomplete, {
      localVue,
      i18n,
      propsData: {
        id: 'foo',
        name: 'foo',
        label: 'foo',
        placeholder: 'Type something',
        items: AutocompleteFixture,
      },
    });
    wrapper.vm.searchQuery = 'Te';
    wrapper.vm.onFocus();
    expect(wrapper.vm.isOpen).toBe(false);

    wrapper.vm.searchQuery = 'Test123';
    wrapper.vm.onFocus();
    expect(wrapper.vm.isOpen).toBe(true);
  });

  test('onArrowDown', () => {
    const wrapper = mount<any>(VueAutocomplete, {
      localVue,
      i18n,
      propsData: {
        id: 'foo',
        name: 'foo',
        label: 'foo',
        placeholder: 'Type something',
        items: AutocompleteFixture,
      },
    });

    wrapper.vm.isOpen = false;
    wrapper.vm.onArrowDown();
    expect(wrapper.vm.selectedOptionIndex).toBe(0);

    wrapper.vm.isOpen = true;
    wrapper.vm.onArrowDown();
    expect(wrapper.vm.selectedOptionIndex).toBe(1);

    wrapper.vm.isOpen = true;
    wrapper.vm.selectedOptionIndex = AutocompleteFixture.length;
    wrapper.vm.onArrowDown();
    expect(wrapper.vm.selectedOptionIndex).toBe(0);
  });

  test('onArrowUp', () => {
    const wrapper = mount<any>(VueAutocomplete, {
      localVue,
      i18n,
      propsData: {
        id: 'foo',
        name: 'foo',
        label: 'foo',
        placeholder: 'Type something',
        items: AutocompleteFixture,
      },
    });

    wrapper.vm.isOpen = false;
    wrapper.vm.onArrowUp();
    expect(wrapper.vm.selectedOptionIndex).toBe(0);

    wrapper.vm.isOpen = true;
    wrapper.vm.onArrowUp();
    expect(wrapper.vm.selectedOptionIndex).toBe(8);

    wrapper.vm.isOpen = true;
    wrapper.vm.onArrowUp();
    expect(wrapper.vm.selectedOptionIndex).toBe(7);
  });

  test('should close on outside click', async () => {
    const wrapper = mount<any>(VueAutocomplete, {
      localVue,
      i18n,
      propsData: {
        id: 'foo',
        name: 'foo',
        label: 'foo',
      },
    });

    await wrapper.setProps({ items: AutocompleteFixture });

    const input = wrapper.find('li');

    triggerDocument.mousedown({ target: input.element });
    expect(wrapper.vm.isOpen).toBeTruthy();

    triggerDocument.mousedown({ target: null });
    expect(wrapper.vm.isOpen).toBeFalsy();
  });

  test('should close on ESC press', async () => {
    const wrapper = mount<any>(VueAutocomplete, {
      localVue,
      i18n,
      propsData: {
        id: 'foo',
        name: 'foo',
        label: 'foo',
      },
    });

    triggerDocument.keydown({ key: 'Enter' });
    expect(wrapper.vm.isOpen).toBeFalsy();

    triggerDocument.keydown({ key: 'Escape' });
    expect(wrapper.vm.isOpen).toBeFalsy();

    await wrapper.setProps({ items: AutocompleteFixture });
    triggerDocument.keydown({ key: 'Enter' });
    expect(wrapper.vm.isOpen).toBeTruthy();

    triggerDocument.keydown({ key: 'Escape' });
    expect(wrapper.vm.isOpen).toBeFalsy();
  });

  test('onEnterKeyPress', () => {
    const wrapper = mount<any>(VueAutocomplete, {
      localVue,
      i18n,
      propsData: {
        id: 'foo',
        name: 'foo',
        label: 'foo',
        placeholder: 'Type something',
        items: AutocompleteFixture,
      },
    });
    const e: any = {
      preventDefault: jest.fn(),
    };

    wrapper.vm.onEnterKeyPress(e);
    expect(e.preventDefault).not.toHaveBeenCalled();

    wrapper.vm.searchQuery = 'Test';
    wrapper.vm.selectedOptionIndex = -1;
    wrapper.setData({ isOpen: true });
    wrapper.vm.onEnterKeyPress(e);
    expect(wrapper.emitted().input[0][0]).toEqual(AutocompleteFixture[0]);
    expect(e.preventDefault).toHaveBeenCalled();

    wrapper.vm.searchQuery = 'Test2';
    wrapper.vm.selectedOptionIndex = 1;
    wrapper.vm.onEnterKeyPress(e);
    expect(wrapper.emitted().input[1][0]).toEqual(AutocompleteFixture[1]);
  });

  test('onItemClick', () => {
    const wrapper = mount<any>(VueAutocomplete, {
      localVue,
      i18n,
      propsData: {
        id: 'foo',
        name: 'foo',
        label: 'foo',
        placeholder: 'Type something',
        items: AutocompleteFixture,
      },
    });

    wrapper.vm.searchQuery = 'foo2';
    wrapper.vm.onItemClick(1);
    expect(wrapper.emitted().input).toHaveLength(1);

    wrapper.vm.onItemClick(1);
    expect(wrapper.emitted().input).toHaveLength(2);

    wrapper.vm.searchQuery = 'Test';
    wrapper.vm.onItemClick(1);
    expect(wrapper.emitted().input[0][0]).toEqual(AutocompleteFixture[1]);
  });

  test('onInput', (done) => {
    const wrapper = mount<any>(VueAutocomplete, {
      localVue,
      i18n,
      propsData: {
        id: 'foo',
        name: 'foo',
        label: 'foo',
        placeholder: 'Type something',
        items: AutocompleteFixture,
      },
    });

    wrapper.vm.onInput('');
    expect(wrapper.vm.isOpen).toBe(false);

    wrapper.vm.onInput('Test');

    setTimeout(() => {
      expect(wrapper.emitted('search')).toBeTruthy();
      done();
    }, 500);
  });

  test('emitRequest', (done) => {
    const wrapper = mount<any>(VueAutocomplete, {
      localVue,
      i18n,
      propsData: {
        id: 'foo',
        name: 'foo',
        label: 'foo',
        placeholder: 'Type something',
        items: AutocompleteFixture,
      },
    });
    wrapper.vm.searchQuery = 'Test';
    wrapper.vm.emitRequest();

    setTimeout(() => {
      expect(wrapper.emitted('search')).toBeTruthy();
      done();
    }, 500);
  });

  test('setResultContainerHeight', async () => {
    const wrapper = mount<any>(VueAutocomplete, {
      localVue,
      i18n,
      propsData: {
        id: 'foo',
        name: 'foo',
        label: 'foo',
        placeholder: 'Type something',
        maxItems: 10,
      },
    });

    wrapper.vm.isOpen = true;
    wrapper.vm.resultContainerRef = {
      firstChild: {
        offsetHeight: 10,
      },
    } as any;

    wrapper.vm.setResultContainerHeight();
    expect(wrapper.vm.resultContainerHeight).toBe(10);

    await wrapper.setProps({ items: AutocompleteFixture });

    wrapper.vm.resultContainerRef = {
      firstChild: {
        offsetHeight: 10,
      },
    } as any;

    wrapper.vm.setResultContainerHeight();
    expect(wrapper.vm.resultContainerHeight).toBe(90);

    await wrapper.setProps({ maxItems: 5 });

    wrapper.vm.resultContainerRef = {
      firstChild: {
        offsetHeight: 10,
      },
    } as any;

    wrapper.vm.setResultContainerHeight();
    expect(wrapper.vm.resultContainerHeight).toBe(55);
  });

  test('onFocusItem', () => {
    const wrapper = mount<any>(VueAutocomplete, {
      localVue,
      i18n,
      propsData: {
        id: 'foo',
        name: 'foo',
        label: 'foo',
        placeholder: 'Type something',
        maxItems: 10,
      },
    });

    wrapper.vm.isOpen = true;
    wrapper.vm.resultContainerRef = {
      clientHeight: 100,
      scrollHeight: 0,
      scrollTop: 0,
    } as any;

    wrapper.vm.onFocusItem();
    expect((wrapper as any).vm.resultContainerRef.scrollTop).toBe(0);

    wrapper.vm.resultContainerRef = {
      clientHeight: 100,
      scrollHeight: 101,
      scrollTop: 0,
    } as any;

    document.querySelector = () => {
      return {
        offsetTop: 100,
        offsetHeight: 10,
      };
    };

    wrapper.vm.onFocusItem();
    expect((wrapper as any).vm.resultContainerRef.scrollTop).toBe(10);

    wrapper.vm.resultContainerRef = {
      clientHeight: 100,
      scrollHeight: 101,
      scrollTop: 100,
    } as any;

    document.querySelector = () => {
      return {
        offsetTop: 10,
        offsetHeight: 10,
      };
    };

    wrapper.vm.onFocusItem();
    expect((wrapper as any).vm.resultContainerRef.scrollTop).toBe(10);

    wrapper.vm.resultContainerRef = {
      clientHeight: 100,
      scrollHeight: 101,
      scrollTop: 100,
    } as any;

    document.querySelector = () => {
      return {
        offsetTop: 100,
        offsetHeight: 10,
      };
    };

    wrapper.vm.onFocusItem();
    expect((wrapper as any).vm.resultContainerRef.scrollTop).toBe(100);

    document.querySelector = (): any => null;

    wrapper.vm.onFocusItem();
    expect((wrapper as any).vm.resultContainerRef.scrollTop).toBe(100);
  });
});
