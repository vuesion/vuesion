import { createLocalVue, mount } from '@vue/test-utils';
import VueSelect from './VueSelect.vue';

const localVue = createLocalVue();

describe('VueSelect.vue', () => {
  const items = [
    {
      label: 'Foo',
      value: 'foo',
    },
    {
      label: 'Bar',
      value: 'bar',
    },
    {
      label: 'Baz',
      value: 'baz',
    },
    {
      label: 'Bla Bla Bla Bla Bla',
      value: 'bla',
    },
    {
      label: 'Lorem Ipsum la la la',
      value: 'lorem',
    },
  ];

  test('renders component', () => {
    const wrapper = mount<any>(VueSelect, {
      localVue,
      propsData: {
        value: 'foo',
        items,
        name: 'foo',
        id: 'foo',
        label: 'foo',
      },
    });

    expect(wrapper.findAll('option')).toHaveLength(5);
    expect(wrapper.find('select').attributes().multiSelect).toBe(undefined);
  });

  test('renders multi component', () => {
    const wrapper = mount<any>(VueSelect, {
      localVue,
      propsData: {
        items,
        multiSelect: true,
        name: 'foo',
        id: 'foo',
        label: 'foo',
      },
    });

    expect(wrapper.findAll('option')).toHaveLength(5);
    expect(wrapper.find('select').attributes().multiple).toBe('multiple');
  });

  test('renders disabled component', () => {
    const wrapper = mount<any>(VueSelect, {
      localVue,
      propsData: {
        items,
        disabled: true,
        name: 'foo',
        id: 'foo',
        label: 'foo',
      },
    });

    expect(wrapper.findAll('option')).toHaveLength(5);
    expect(wrapper.findAll('.disabled')).toHaveLength(1);
  });

  it('should return list of items', () => {
    const wrapper = mount<any>(VueSelect, {
      localVue,
      propsData: {
        items,
        multiSelect: true,
        name: 'foo',
        id: 'foo',
        label: 'foo',
      },
    });

    const event: any = {
      target: {
        options: [
          {
            selected: true,
            text: 'foo',
            value: 'foo2',
          },
          {
            selected: false,
            text: 'bar',
            value: 'bar2',
          },
        ],
      },
    };

    wrapper.vm.onInput(event);

    expect(wrapper.emitted().input[0][0]).toBe('foo2');
  });

  // test('should display error state', () => {
  //   const wrapper = mount<any>(VueSelect, {
  //     localVue,
  //     propsData: {
  //       items,
  //       name: 'name',
  //       id: 'id',
  //       validation: 'integer',
  //       value: 'foo',
  //     },
  //   });
  //
  //   expect(wrapper.findAll(`.error`)).toHaveLength(1);
  // });
});
