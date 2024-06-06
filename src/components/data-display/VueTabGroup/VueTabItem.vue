<template>
  <section v-if="active" :class="[$style.vueTab, active && $style.active]" role="tabpanel">
    <slot />
  </section>
</template>

<script lang="ts" setup>
// Interface
import type { Ref } from 'vue';
import { ref, useCssModule, watch, inject } from 'vue';

interface TabItemProps {
  name: string;
  icon?: string | null;
  badgeContent?: string | number | null;
  isActive?: boolean;
}
const props = withDefaults(defineProps<TabItemProps>(), {
  icon: null,
  isActive: false,
  badgeContent: null,
});

// Deps
const $style = useCssModule();

// Data
const idx = ref<number>(-1);
const active = ref<boolean>(props.isActive);

// DI
const register =
  inject<
    (idx: Ref<number>, active: Ref<boolean>, name: string, icon: string | null, badgeContent: string | null) => void
  >('register');
if (register) {
  register(idx, active, props.name, props.icon, props.badgeContent ? props.badgeContent.toString() : null);
}

// Watcher
watch(
  () => props.isActive,
  () => (active.value = props.isActive),
  { immediate: true },
);
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueTab {
}
</style>
