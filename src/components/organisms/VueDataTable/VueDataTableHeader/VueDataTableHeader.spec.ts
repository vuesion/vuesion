import { createLocalVue, mount } from '@vue/test-utils';
import { IDataTableHeaderItem } from '../IDataTable';
import VueIconSort from '../../../atoms/icons/VueIconSort/VueIconSort.vue';
import VueIconSortDown from '../../../atoms/icons/VueIconSortDown/VueIconSortDown.vue';
import VueIconSortUp from '../../../atoms/icons/VueIconSortUp/VueIconSortUp.vue';
import VueDataTableHeader from './VueDataTableHeader.vue';

const localVue = createLocalVue();

describe('VueDataTableHeader.vue', () => {
  const columns: IDataTableHeaderItem[] = [
    { title: 'foo', visible: true, sortKey: 'foo', sortable: true },
    { title: 'bar', visible: true, sortKey: 'bar', sortable: true },
    { title: 'baz', visible: true, sortKey: 'baz', sortable: true },
    { title: 'baz', visible: true, sortKey: 'baz', sortable: false },
  ];

  test('renders component', () => {
    const wrapper = mount<any>(VueDataTableHeader, {
      localVue,
      propsData: {
        columns,
        columnWidth: '33.3333%',
        sortDirection: 'asc',
      },
    });

    expect(wrapper.findAll('.column')).toHaveLength(4);
    expect(wrapper.findAllComponents(VueIconSort)).toHaveLength(3);
  });

  test('renders component with active sorting asc', () => {
    const wrapper = mount<any>(VueDataTableHeader, {
      localVue,
      propsData: {
        columns,
        columnWidth: '33.3333%',
        sortDirection: 'asc',
        sortKey: 'foo',
      },
    });

    expect(wrapper.findAllComponents(VueIconSort)).toHaveLength(0);
    expect(wrapper.findAllComponents(VueIconSortUp)).toHaveLength(1);
  });

  test('renders component with active sorting desc', () => {
    const wrapper = mount<any>(VueDataTableHeader, {
      localVue,
      propsData: {
        columns,
        columnWidth: '33.3333%',
        sortDirection: 'desc',
        sortKey: 'foo',
      },
    });

    expect(wrapper.findAllComponents(VueIconSort)).toHaveLength(0);
    expect(wrapper.findAllComponents(VueIconSortDown)).toHaveLength(1);
  });

  test('should populate sortKey on click', () => {
    const wrapper = mount<any>(VueDataTableHeader, {
      localVue,
      propsData: {
        columns,
        columnWidth: '33.3333%',
        sortDirection: 'desc',
        sortKey: 'foo',
      },
    });

    wrapper.vm.onClick(columns[3]);
    expect(wrapper.emitted('click')).toBeFalsy();

    wrapper.vm.onClick(columns[0]);
    expect(wrapper.emitted('click')).toBeTruthy();
  });
});
