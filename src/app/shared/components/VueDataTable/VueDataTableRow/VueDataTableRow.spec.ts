import { createLocalVue, mount }  from '@vue/test-utils';
import VueDataTableRow            from './VueDataTableRow.vue';
import { IComputedDataRowColumn } from '../IDataTable';

const localVue = createLocalVue();

describe('VueDataTableRow.vue', () => {
  const row: IComputedDataRowColumn[] = [
    {
      key:     'id',
      value:   'foo',
      visible: false,
    },
    {
      key:     'name',
      value:   'bar',
      visible: true,
    },
    {
      key:     'street',
      value:   'baz',
      visible: true,
    },
  ];

  test('renders component', () => {
    const wrapper = mount(VueDataTableRow,
                          {
                            localVue,
                            propsData: {
                              row,
                              columnWidth: '33.3333%',
                            },
                          },
    );

    expect(wrapper.findAll('.column')).toHaveLength(2);
  });

  test('should populate clicked row', () => {
    const wrapper = mount(VueDataTableRow,
                          {
                            localVue,
                            propsData: {
                              row,
                              columnWidth: '33.3333%',
                            },
                          },
    ) as any;

    wrapper.vm.onClick(row);

    expect(wrapper.emitted('click')[0][0]).toEqual({ id: 'foo', name: 'bar', street: 'baz' });
  });

});
