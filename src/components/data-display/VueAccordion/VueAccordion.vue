<template>
  <vue-stack space="0" :class="$style.vueAccordion">
    <slot />
  </vue-stack>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import { onBeforeUnmount, provide, shallowRef, ref } from 'vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';

// Interface
interface AccordionItem {
  idx: Ref<number>;
  open: Ref<boolean>;
}
const props = defineProps({
  multiple: { type: Boolean, default: false },
});

// Data
const items = shallowRef<Array<AccordionItem>>([]);
const openItems = ref<Array<number>>([]);

// Methods
const handleItems = () => {
  items.value.forEach((item) => {
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

// DI
provide('register', register);
provide('openItem', openItem);

// Lifecycle
onBeforeUnmount(() => {
  items.value = [];
  openItems.value = [];
});
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueAccordion {
}
</style>
