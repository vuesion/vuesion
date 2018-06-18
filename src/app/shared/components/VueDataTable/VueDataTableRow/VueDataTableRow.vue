<template>
  <div :class="$style.vueDataTableRow" @click="onClick">
    <div v-for="(column, idx) in row"
         v-if="column.visible"
         :key="idx"
         :class="$style.column"
         :style="{flexBasis: `${columnWidth}`}">
      {{ column.value }}
    </div>
  </div>
</template>

<script lang="ts">
  import { IComputedDataRowColumn } from '../IDataTable';

  export default {
    name:    'VueDataTableRow',
    props:   {
      row:         {
        type:     Array,
        required: true,
      },
      columnWidth: {
        type:     String,
        required: true,
      },
    },
    methods: {
      onClick() {
        const row: any = {};

        this.row.forEach((column: IComputedDataRowColumn) => {
          row[column.key] = column.value;
        });

        this.$emit('click', row);
      },
    },
  };
</script>

<style lang="scss" module>
  @import "../../../styles";

  .vueDataTableRow {
    display:        flex;
    flex-direction: row;
    box-shadow:     $panel-shadow;
    border:         1px solid $divider-color;
    border-top:     none;
    cursor:         pointer;
    min-width:      600px;

    &:hover {
      background: $panel-bg;
    }
  }

  .column {
    flex:         1 1 auto;
    border-right: 1px solid $divider-color;
    padding:      $space-unit $space-unit * 2;

    &:last-child {
      border-right: none;
    }
  }
</style>
