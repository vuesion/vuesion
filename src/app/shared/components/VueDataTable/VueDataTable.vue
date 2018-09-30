<template>
  <div :class="$style.container">
    <vue-data-table-search v-model="searchTerm"
                           v-if="showSearch"
                           :placeholder="placeholder" />

    <table :class="$style.vueDataTable">
      <vue-data-table-header
        :columns="columns"
        :column-width="columnWidth"
        :sort-key="sortKey"
        :sort-direction="sortDirection"
        @click="columnClick" />

      <tbody>
      <tr v-for="(row) in rows" :class="$style.vueDataTableRow" @click="rowClick(row)">
        <td v-for="(cell, idx) in row"
            v-if="cell.visible"
            :key="idx"
            :class="$style.column"
            :style="{width: `${columnWidth}`}">

          <slot :name="cell.slot" :cell="cell" :row="getRowObject(row)">{{ cell.value }}</slot>

        </td>
      </tr>

      <tr v-show="count === 0">
        <td :class="$style.noResults" :colspan="columns.length - 1">
          {{ $t('components.dataTable.noResults' /* No results found! */) }}
        </td>
      </tr>
      </tbody>
    </table>

    <br />

    <vue-pagination v-show="count > maxRows"
                    :current="currentPage + 1"
                    :pages="maxPages"
                    @change="paginationClick" />
  </div>
</template>

<script lang="ts">
  import VueDataTableHeader                             from './VueDataTableHeader/VueDataTableHeader.vue';
  import VuePagination                                  from '../VuePagination/VuePagination.vue';
  import VueDataTableSearch                             from './VueDataTableSearch/VueDataTableSearch.vue';
  import { IComputedDataRowCell, IDataTableHeaderItem } from './IDataTable';

  export default {
    name:       'VueDataTable',
    components: { VueDataTableSearch, VuePagination, VueDataTableHeader },
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

          if (typeof header.sortable === 'undefined') {
            header.sortable = true;
          }

          if (typeof header.fitContent === 'undefined') {
            header.fitContent = false;
          }

          header.sortKey = key;

          return header;
        });
      },
      columnWidth() {
        return `${100 / this.columns.filter((column: IDataTableHeaderItem) => column.fitContent === false && column.visible === true).length}%`;
      },
      rows() {
        return this.displayData.map((row: any) => {
          const computedRow: IComputedDataRowCell[] = [];

          Object.keys(this.header).forEach((key: string) => {
            const column: IDataTableHeaderItem = this.header[key];
            const computedColumn: IComputedDataRowCell = {
              key,
              value:   row[key],
              visible: column.visible,
              slot:    column.slot,
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
      getRowObject(cells: IComputedDataRowCell[]) {
        const row: any = {};

        cells.forEach((column: IComputedDataRowCell) => {
          row[column.key] = column.value;
        });

        return row;
      },
      rowClick(cells: IComputedDataRowCell[]) {
        this.$emit('click', this.getRowObject(cells));
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

  .container {
    overflow-x: auto;
  }

  .vueDataTable {
    width: 100%;
  }

  .noResults {
    border:     1px solid $border-color;
    border-top: none;
    text-align: center;
    opacity:    .5;
    padding:    $space-unit * 8 0;
  }

  .vueDataTableRow {
    box-shadow: $panel-shadow;
    border:     1px solid $border-color;
    border-top: none;
    cursor:     pointer;
    min-width:  600px;

    &:hover {
      background: $panel-bg;
    }
  }

  .column {
    border-right: 1px solid $border-color;
    padding:      $space-unit $space-unit * 2;
    min-width:    150px;

    &:last-child {
      border-right: none;
    }
  }
</style>
