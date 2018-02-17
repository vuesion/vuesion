<template>
  <div :class="$style.vueAccordion">
    <slot />
  </div>
</template>

<script lang="ts">
  export default {
    name:       'VueAccordion',
    components: {},
    props:      {
      multi: {
        type:     Boolean,
        required: false,
        default:  false,
      },
    },
    data(): any {
      return {
        items:     [],
        openItems: [],
      };
    },
    computed:   {},
    methods:    {
      openItem(idx: number) {
        if (this.multi && this.openItems.indexOf(idx) > -1) {
          this.openItems = this.openItems.filter((item: number) => item !== idx);
        } else if (this.multi) {
          this.openItems.push(idx);
        } else if (this.openItems.indexOf(idx) > -1) {
          this.openItems = [];
        } else {
          this.openItems = [idx];
        }

        this.handleItems();
      },
      handleItems() {
        this.items.forEach((item: any) => {
          item.$data.open = this.openItems.indexOf(item.$data.idx) > -1;
        });
      },
      register(item: any) {
        item.$data.idx = this.items.length;

        this.items.push(item);

        if (item.initOpen) {
          this.openItems.push(item.$data.idx);
        }

        this.handleItems();
      },
    },
    beforeDestroy() {
      this.items = [];
      this.openItems = [];
    },
  };
</script>

<style lang="scss" module>
  .vueAccordion {
    display: block;
  }
</style>
