<template>
  <thead :class="$style.vueDataTableHeader">
  <tr>
    <th v-for="(column, idx) in columns" v-if="column.visible"
        :key="idx"
        :class="$style.column"
        :style="{width: `${columnWidth}`}"
        @click="onClick(column)">

      {{ column.title }}

      <div :class="$style.icons" v-if="column.sortable">
        <vue-icon-sort v-if="!sortKey && !isActive(column.sortKey)" />
        <vue-icon-sort-up v-if="isActive(column.sortKey) && sortDirection === 'asc'" />
        <vue-icon-sort-down v-if="isActive(column.sortKey) && sortDirection === 'desc'" />
      </div>
    </th>
  </tr>
  </thead>
</template>

<script lang="ts">
  import { IDataTableHeaderItem } from '../IDataTable';
  import VueIconSort              from '../../icons/VueIconSort/VueIconSort.vue';
  import VueIconSortUp            from '../../icons/VueIconSortUp/VueIconSortUp.vue';
  import VueIconSortDown          from '../../icons/VueIconSortDown/VueIconSortDown.vue';

  export default {
    name:       'VueDataTableHeader',
    components: { VueIconSortDown, VueIconSortUp, VueIconSort },
    props:      {
      columns:       {
        type:     Array,
        required: true,
      },
      columnWidth:   {
        type:     String,
        required: true,
      },
      sortKey:       {
        type: String,
      },
      sortDirection: {
        type:     String,
        required: true,
      },
    },
    methods:    {
      onClick(column: IDataTableHeaderItem) {
        if (column.sortable) {
          this.$emit('click', column);
        }
      },
      isActive(sortKey: string) {
        return sortKey === this.sortKey;
      },
    },
  };
</script>

<style lang="scss" module>
  @import "../../../styles";

  .vueDataTableHeader {
    border:      $data-table-header-border;
    background:  $data-table-header-bg;
    font-weight: $data-table-header-font-weight;
    min-width:   $data-table-min-width;

    tr {
      width:     $data-table-width;
      min-width: $data-table-min-width;
    }
  }

  .column {
    border-right: $data-table-header-border;
    padding:      $data-table-header-column-padding;
    cursor:       pointer;
    user-select:  none;

    &:hover {
      i {
        color:   $data-table-header-icon-hover-color;
        opacity: 1;
      }
    }

    &:last-child {
      border-right: none;
    }

    i {
      margin:  $data-table-header-icon-margin;
      opacity: $data-table-header-icon-opacity;
      color:   $data-table-header-icon-color;
    }
  }

  .icons {
    display: inline-block;
    width:   $space-unit * 3;
    float:   right;
  }
</style>
