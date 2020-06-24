<template>
  <div :class="$style.vueAccordion">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'VueAccordion',
  props: {
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  provide() {
    return {
      register: this.register,
      openItem: this.openItem,
    };
  },
  data(): any {
    return {
      items: [],
      openItems: [],
    };
  },
  beforeDestroy() {
    this.items = [];
    this.openItems = [];
  },
  methods: {
    openItem(idx: number) {
      if (this.multiple && this.openItems.includes(idx)) {
        this.openItems = this.openItems.filter((item: number) => item !== idx);
      } else if (this.multiple) {
        this.openItems.push(idx);
      } else if (this.openItems.includes(idx)) {
        this.openItems = [];
      } else {
        this.openItems = [idx];
      }

      this.handleItems();
    },
    handleItems() {
      this.items.forEach((item: any) => {
        item.$data.open = this.openItems.includes(item.$data.idx);
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
};
</script>

<style lang="scss" module>
.vueAccordion {
}
</style>
