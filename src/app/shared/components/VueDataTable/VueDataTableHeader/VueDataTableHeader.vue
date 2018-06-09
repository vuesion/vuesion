<template>
  <div :class="$style.vueDataTableHeader">
    <div v-for="(column, idx) in columns" v-if="column.visible"
         :key="idx"
         :class="$style.column"
         :style="{flexBasis: `${columnWidth}`}"
         @click="onClick(column)">

      {{ column.title }}

      <i v-if="!sortKey && !isActive(column.sortKey)"
         class="fas fa-sort" />
      <i v-if="isActive(column.sortKey)"
         :class="sortDirection === 'asc' ? 'fas fa-sort-up' : 'fas fa-sort-down'" />
    </div>
  </div>
</template>

<script lang="ts">
  import { IDataTableHeaderItem } from '../IDataTable';

  export default {
    name:    'VueDataTableHeader',
    props:   {
      columns:       {
        type:     Array,
        required: true,
      },
      columnWidth:   {
        type:     String,
        required: true,
      },
      sortKey:       {
        type:    String,
      },
      sortDirection: {
        type:     String,
        required: true,
      },
    },
    methods: {
      onClick(column: IDataTableHeaderItem) {
        this.$emit('click', column);
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
    display:        flex;
    flex-direction: row;
    box-shadow:     $panel-shadow;
    border:         1px solid $divider-color;
    background:     $bg-color;
    font-weight:    700;
    background:     $panel-bg;
    min-width:      600px;
  }

  .column {
    flex:         1 1 auto;
    border-right: 1px solid $divider-color;
    padding:      $space-unit $space-unit * 2;
    cursor:       pointer;

    &:hover {
      i {
        color:   $brand-accent;
        opacity: 1;
      }
    }

    &:last-child {
      border-right: none;
    }

    i {
      float:      right;
      margin-top: $space-unit * 0.5;
      opacity:    .3;
    }

    :global {
      .fa-sort-up, .fa-sort-down {
        color:   $brand-accent;
        opacity: 1;
      }
    }
  }
</style>
