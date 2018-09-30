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
    box-shadow:  $panel-shadow;
    border:      1px solid $border-color;
    background:  $bg-color;
    font-weight: 700;
    background:  $panel-bg;
    min-width:   600px;

    tr {
      width:     100%;
      min-width: 800px;
    }
  }

  .column {
    border-right: 1px solid $border-color;
    padding:      $space-unit $space-unit * 2;
    cursor:       pointer;
    user-select:  none;
    min-width:    150px;

    &:hover {
      i {
        fill:    $brand-primary;
        opacity: 1;
      }
    }

    &:last-child {
      border-right: none;
    }

    i {
      opacity: .3;
    }

    :global {
      .fa-sort-up, .fa-sort-down {
        color:   $brand-primary;
        opacity: 1;
      }
    }
  }

  .icons {
    display: inline-block;
    width:   $space-unit * 3;
    float:   right;
  }
</style>
