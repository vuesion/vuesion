<template>
  <section v-if="active" :class="[$style.vueTab, active && $style.active]" role="tabpanel">
    <slot />
  </section>
</template>

<script lang="ts" setup>
// Interface
import { onMounted, ref, useCssModule, watch, inject, Ref } from 'vue';

interface TabItemProps {
  name: string;
  icon?: string | null;
  isActive?: boolean;
}
const props = withDefaults(defineProps<TabItemProps>(), {
  icon: null,
  isActive: false,
});

// Deps
const $style = useCssModule();

// DI
const register =
  inject<(idx: Ref<number>, active: Ref<boolean>, name: string, icon: string | null) => void>('register');

// Data
const idx = ref<number>(-1);
const active = ref<boolean>(false);

// Watcher
watch(
  () => props.isActive,
  () => (active.value = props.isActive),
  { immediate: true },
);

// Lifecycle
onMounted(() => {
  if (register) {
    register(idx, active, props.name, props.icon);
  }
});
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueTab {
}
</style>
