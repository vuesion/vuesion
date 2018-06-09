import { createLocalVue, mount } from '@vue/test-utils';
import VueDataTableHeader        from './VueDataTableHeader.vue';
import { IDataTableHeaderItem }  from '../IDataTable';

const localVue = createLocalVue();

describe('VueDataTableHeader.vue', () => {
  const columns: IDataTableHeaderItem[] = [
    { title: 'foo', visible: true, sortKey: 'foo' },
    { title: 'bar', visible: true, sortKey: 'bar' },
    { title: 'baz', visible: true, sortKey: 'baz' },
  ];

  test('renders component', () => {
    const wrapper = mount(VueDataTableHeader,
                          {
                            localVue,
                            propsData: {
                              columns,
                              columnWidth:   '33.3333%',
                              sortDirection: 'asc',
                            },
                          },
    );

    expect(wrapper.findAll('.column')).toHaveLength(3);
    expect(wrapper.findAll('.fa-sort')).toHaveLength(3);
  });

  test('renders component with active sorting asc', () => {
    const wrapper = mount(VueDataTableHeader,
                          {
                            localVue,
                            propsData: {
                              columns,
                              columnWidth:   '33.3333%',
                              sortDirection: 'asc',
                              sortKey:       'foo',
                            },
                          },
    );

    expect(wrapper.findAll('.fa-sort')).toHaveLength(0);
    expect(wrapper.findAll('.fa-sort-up')).toHaveLength(1);
  });

  test('renders component with active sorting desc', () => {
    const wrapper = mount(VueDataTableHeader,
                          {
                            localVue,
                            propsData: {
                              columns,
                              columnWidth:   '33.3333%',
                              sortDirection: 'desc',
                              sortKey:       'foo',
                            },
                          },
    );

    expect(wrapper.findAll('.fa-sort')).toHaveLength(0);
    expect(wrapper.findAll('.fa-sort-down')).toHaveLength(1);
  });

  test('should populate sortKey on click', () => {
    const wrapper = mount(VueDataTableHeader,
                          {
                            localVue,
                            propsData: {
                              columns,
                              columnWidth:   '33.3333%',
                              sortDirection: 'desc',
                              sortKey:       'foo',
                            },
                          },
    ) as any;

    wrapper.vm.onClick(columns[0]);

    expect(wrapper.emitted('click')).toBeTruthy();
  });

});
