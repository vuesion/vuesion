<template>
  <div :class="$style.vueDataTable">
    <vue-data-table-search v-model="searchTerm"
                           v-if="showSearch"
                           :placeholder="placeholder" />

    <vue-data-table-header
      :columns="columns"
      :column-width="columnWidth"
      :sort-key="sortKey"
      :sort-direction="sortDirection"
      @click="columnClick" />

    <vue-data-table-row v-for="(row, idx) in rows"
                        :key="idx"
                        :row="row"
                        :column-width="columnWidth"
                        @click="rowClick" />

    <div :class="$style.noResults" v-show="count === 0">
      {{ $t('components.dataTable.noResults' /* No results found! */) }}
    </div>

    <br />

    <vue-pagination v-show="count > 0"
                    :current="currentPage + 1"
                    :pages="maxPages"
                    @change="paginationClick" />
  </div>
</template>

<script lang="ts">
  import VueDataTableHeader                               from './VueDataTableHeader/VueDataTableHeader';
  import { IComputedDataRowColumn, IDataTableHeaderItem } from './IDataTable';
  import VueDataTableRow                                  from './VueDataTableRow/VueDataTableRow';
  import VuePagination                                    from '../VuePagination/VuePagination';
  import VueDataTableSearch                               from './VueDataTableSearch/VueDataTableSearch';

  export default {
    name:       'VueDataTable',
    components: { VueDataTableSearch, VuePagination, VueDataTableRow, VueDataTableHeader },
    props:      {
      header:      {
        type:     Object,
        required: true,
      },
      data:        {
        type:     Array,
        required: true,
      },
      page:        {
        type:    Number,
        default: 0,
      },
      maxRows:     {
        type:    Number,
        default: 5,
      },
      showSearch:  {
        type:    Boolean,
        default: true,
      },
      placeholder: {
        type:    String,
        default: '',
      },
    },
    computed:   {
      filteredData() {
        if (this.searchTerm.length === 0) {
          return this.data;
        }

        const searchRegex: RegExp = new RegExp(`${this.searchTerm}`, 'gmi');
        const filter = (row: any) => {
          let match: boolean = false;

          Object.keys(row).forEach((key: string) => {
            const column: IDataTableHeaderItem = this.header[key];

            if (column.visible && match === false) {
              match = searchRegex.exec(row[key].toString().toLowerCase()) !== null;
            }
          });

          return match;
        };

        return this.data.slice(0).filter(filter);
      },
      sortedData() {
        if (!this.sortKey) {
          return this.filteredData;
        }

        const sort = (a: any, b: any) => {
          if (a[this.sortKey] < b[this.sortKey]) {
            return this.sortDirection === 'asc' ? -1 : 1;
          }
          if (a[this.sortKey] > b[this.sortKey]) {
            return this.sortDirection === 'asc' ? 1 : -1;
          }
          return 0;
        };

        return this.filteredData.slice(0).sort(sort);
      },
      displayData() {
        return this.sortedData.slice(this.currentPage * this.maxRows, (this.currentPage + 1) * this.maxRows);
      },
      columns() {
        return Object.keys(this.header).map((key: string) => {
          const header: IDataTableHeaderItem = this.header[key];

          if (!header.title) {
            header.title = key;
          }

          if (typeof header.visible === 'undefined') {
            header.visible = true;
          }

          header.sortKey = key;

          return header;
        });
      },
      columnWidth() {
        return `${100 / this.columns.length}%`;
      },
      rows() {
        return this.displayData.map((row: any) => {
          const computedRow: IComputedDataRowColumn[] = [];

          Object.keys(this.header).forEach((key: string) => {
            const column: IDataTableHeaderItem = this.header[key];
            const computedColumn: IComputedDataRowColumn = {
              key,
              value:   row[key],
              visible: column.visible,
            };
            computedRow.push(computedColumn);
          });

          return computedRow;
        });
      },
      count() {
        return this.filteredData.length;
      },
      maxPages() {
        return Math.ceil(this.count / this.maxRows);
      },
    },
    data(): any {
      return {
        sortKey:       null,
        sortDirection: 'asc',
        currentPage:   0,
        searchTerm:    '',
      };
    },
    methods:    {
      columnClick(column: IDataTableHeaderItem) {
        if (this.sortKey === column.sortKey && this.sortDirection === 'desc') {
          this.sortKey = null;
          this.sortDirection = 'asc';
        } else if (this.sortKey === column.sortKey && this.sortDirection === 'asc') {
          this.sortDirection = 'desc';
        } else {
          this.sortKey = column.sortKey;
          this.sortDirection = 'asc';
        }
      },
      rowClick(row: any) {
        this.$emit('click', row);
      },
      paginationClick(page: number) {
        this.currentPage = page - 1;
      },
    },
    mounted() {
      this.currentPage = this.page;
    },
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .vueDataTable {
    overflow-x: scroll;
  }

  .noResults {
    border:     1px solid $divider-color;
    border-top: none;
    text-align: center;
    opacity:    .5;
    padding:    $space-unit * 8 0;
  }
</style>
