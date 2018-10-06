import { createLocalVue, mount }                        from '@vue/test-utils';
import { i18n }                                         from '../../plugins/i18n/i18n';
import VueDataTable                                     from './VueDataTable.vue';
import { IComputedDataRowCell, IDataTableHeader }       from './IDataTable';
import VueDataTableSearch                               from './VueDataTableSearch/VueDataTableSearch.vue';
import VueDataTableHeader                               from './VueDataTableHeader/VueDataTableHeader.vue';
import VuePagination                                    from '../VuePagination/VuePagination.vue';
import { dataTableDataFixture, dataTableHeaderFixture } from './DataTableFixtures';

const localVue = createLocalVue();

describe('VueDataTable.vue', () => {
  const header: IDataTableHeader = dataTableHeaderFixture;
  const data: any[] = dataTableDataFixture;

  test('renders component', () => {
    const wrapper: any = mount(VueDataTable,
                               {
                                 i18n,
                                 localVue,
                                 propsData: {
                                   header,
                                   data,
                                 },
                               },
    );

    expect(wrapper.findAll(VueDataTableSearch)).toHaveLength(1);
    expect(wrapper.findAll(VueDataTableHeader)).toHaveLength(1);
    expect(wrapper.findAll('.vueDataTableRow')).toHaveLength(5);
    expect(wrapper.findAll(VuePagination)).toHaveLength(1);
  });

  test('renders component without search', () => {
    const wrapper: any = mount(VueDataTable,
                               {
                                 i18n,
                                 localVue,
                                 propsData: {
                                   header,
                                   data,
                                   showSearch: false,
                                 },
                               },
    );

    expect(wrapper.findAll(VueDataTableSearch)).toHaveLength(0);
    expect(wrapper.findAll(VueDataTableHeader)).toHaveLength(1);
    expect(wrapper.findAll('.vueDataTableRow')).toHaveLength(5);
    expect(wrapper.findAll(VuePagination)).toHaveLength(1);
  });

  test('should filter data', () => {
    const wrapper: any = mount(VueDataTable,
                               {
                                 i18n,
                                 localVue,
                                 propsData: {
                                   header,
                                   data,
                                 },
                               },
    );

    wrapper.vm.searchTerm = 'julia';
    expect(wrapper.findAll(VueDataTableSearch)).toHaveLength(1);
    expect(wrapper.findAll(VueDataTableHeader)).toHaveLength(1);
    expect(wrapper.findAll('.vueDataTableRow')).toHaveLength(4);

    wrapper.vm.searchTerm = 'z';
    expect(wrapper.findAll(VueDataTableSearch)).toHaveLength(1);
    expect(wrapper.findAll(VueDataTableHeader)).toHaveLength(1);
    expect(wrapper.findAll('.noResults')).toHaveLength(1);
    expect(wrapper.findAll('.vueDataTableRow')).toHaveLength(0);
  });

  test('should sort data', () => {
    const wrapper: any = mount(VueDataTable,
                               {
                                 i18n,
                                 localVue,
                                 propsData: {
                                   header,
                                   data,
                                 },
                               },
    );

    wrapper.vm.sortKey = 'firstname';

    expect(wrapper.vm.sortedData[0].firstname).toBe('Julia');
    expect(wrapper.vm.sortedData[1].firstname).toBe('Julia');
    expect(wrapper.vm.sortedData[2].firstname).toBe('Julia');
    expect(wrapper.vm.sortedData[3].firstname).toBe('Julia');

    wrapper.vm.sortDirection = 'desc';

    expect(wrapper.vm.sortedData[0].firstname).toBe('Toni');
    expect(wrapper.vm.sortedData[1].firstname).toBe('Toni');
    expect(wrapper.vm.sortedData[2].firstname).toBe('Toni');
    expect(wrapper.vm.sortedData[3].firstname).toBe('Toni');
  });

  test('should change page', () => {
    const wrapper: any = mount(VueDataTable,
                               {
                                 i18n,
                                 localVue,
                                 propsData: {
                                   header,
                                   data,
                                 },
                               },
    );

    wrapper.vm.paginationClick(2);

    expect(wrapper.vm.currentPage).toBe(1);
  });

  test('should emit click', () => {
    const wrapper: any = mount(VueDataTable,
                               {
                                 i18n,
                                 localVue,
                                 propsData: {
                                   header,
                                   data,
                                 },
                               },
    );
    const cells: IComputedDataRowCell[] = [
      { key: 'id', value: 2, visible: false, slot: undefined },
      { key: 'name', value: 'foo', visible: false, slot: undefined },
    ];

    wrapper.vm.rowClick(cells);

    expect(wrapper.emitted('click')).toBeTruthy();
    expect(wrapper.emitted('click')[0][0]).toEqual({ id: 2, name: 'foo' });
  });

  test('should emit click', () => {
    const wrapper: any = mount(VueDataTable,
                               {
                                 i18n,
                                 localVue,
                                 propsData: {
                                   header,
                                   data,
                                 },
                               },
    );

    expect(wrapper.vm.sortKey).toBe(null);
    expect(wrapper.vm.sortDirection).toBe('asc');

    wrapper.vm.columnClick({ sortKey: 'foo' });
    expect(wrapper.vm.sortKey).toBe('foo');
    expect(wrapper.vm.sortDirection).toBe('asc');

    wrapper.vm.columnClick({ sortKey: 'foo' });
    expect(wrapper.vm.sortKey).toBe('foo');
    expect(wrapper.vm.sortDirection).toBe('desc');

    wrapper.vm.columnClick({ sortKey: 'foo' });
    expect(wrapper.vm.sortKey).toBe(null);
    expect(wrapper.vm.sortDirection).toBe('asc');
  });

  test('should display all the data if maxRows is set to 0', () => {
    const wrapper: any = mount(VueDataTable,
                               {
                                 i18n,
                                 localVue,
                                 propsData: {
                                   header,
                                   data,
                                   maxRows: 0,
                                 },
                               },
    );

    expect(wrapper.vm.displayData).toHaveLength(20);
    expect(wrapper.vm.maxPages).toBe(0);
  });
});
