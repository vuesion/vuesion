<template>
  <div :class="$style.vueAccordion">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, provide, Ref, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'VueAccordion',
  props: {
    multiple: { type: Boolean, default: false },
  },
  setup(props) {
    const items = ref<any[]>([]);
    const openItems = ref<number[]>([]);
    const handleItems = () => {
      items.value.forEach((item: { idx: Ref<number>; open: Ref<boolean> }) => {
        item.open.value = openItems.value.includes(item.idx.value);
      });
    };
    const openItem = (idx: Ref<number>) => {
      if (props.multiple && openItems.value.includes(idx.value)) {
        openItems.value = openItems.value.filter((item: number) => item !== idx.value);
      } else if (props.multiple) {
        openItems.value.push(idx.value);
      } else if (openItems.value.includes(idx.value)) {
        openItems.value = [];
      } else {
        openItems.value = [idx.value];
      }

      handleItems();
    };
    const register = (idx: Ref<number>, open: Ref<boolean>, initOpen: boolean) => {
      idx.value = items.value.length;

      items.value.push({ idx, open });

      if (initOpen) {
        openItems.value.push(idx.value);
      }

      handleItems();
    };

    provide('register', register);
    provide('openItem', openItem);

    onBeforeUnmount(() => {
      items.value = [];
      openItems.value = [];
    });

    return {
      items,
      openItems,
      handleItems,
      openItem,
      register,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

.vueAccordion {
  border-bottom: $accordion-item-header-border;
}
</style>
