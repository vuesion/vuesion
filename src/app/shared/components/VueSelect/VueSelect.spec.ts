import { mount, createLocalVue } from '@vue/test-utils';
import VueSelect                 from './VueSelect.vue';

const localVue = createLocalVue();

describe('VueSelect.vue', () => {
  const options = [
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
    const wrapper = mount(VueSelect, {
      localVue,
      propsData: {
        options,
      },
    }) as any;

    expect(wrapper.findAll('option')).toHaveLength(5);
    expect(wrapper.find('select').attributes().multiple).toBe(undefined);
  });

  test('renders multi component', () => {
    const wrapper = mount(VueSelect, {
      localVue,
      propsData: {
        options,
        multiple: true,
      },
    }) as any;

    expect(wrapper.findAll('option')).toHaveLength(5);
    expect(wrapper.find('select').attributes().multiple).toBe('multiple');
  });

  it('should return list of options', () => {
    const wrapper = mount(VueSelect, {
      localVue,
      propsData: {
        options,
        multiple: true,
      },
    }) as any;

    const event: any = {
      target: {
        options: [
          {
            selected: true,
            text:     'foo',
            value:    'foo2',
          },
          {
            selected: false,
            text:     'bar',
            value:    'bar2',
          },
        ],
      },
    };

    wrapper.vm.onChange(event);

    expect(wrapper.emitted().change[0][0]).toEqual(
      [
        {
          value: 'foo2',
          label: 'foo',
        },
      ],
    );
  });

});
