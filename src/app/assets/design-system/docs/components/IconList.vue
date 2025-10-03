<template>
  <vue-box>
    <vue-tiles :class="$style.icons" :columns="[2, 6, 8]">
      <div v-for="icon in icons" :key="icon" :class="$style.icon">
        <component :is="`vue-icon-${icon}`" />
        {{ icon }}
      </div>
    </vue-tiles>
  </vue-box>
</template>

<script setup lang="ts">
/* istanbul ignore file */
import { ref, useCssModule, watch } from 'vue';
import VueBox from '@/components/design-system/layout/VueBox/VueBox.vue';
import VueTiles from '@/components/design-system/layout/VueTiles/VueTiles.vue';
import { type Icon, iconOptions } from '@/components/utils/icon-options';

const props = defineProps({
  showIcons: { type: Boolean, default: true },
});

const $style = useCssModule();
const icons = ref<Array<Icon>>([]);
const loadIcons = () => {
  icons.value = [...iconOptions];
};
loadIcons();

watch(
  () => props.showIcons,
  () => loadIcons(),
);
</script>

<style lang="scss" module>
@use 'assets/design-system/index' as ds;

.icons {
  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    i {
      width: ds.$space-32;
      height: ds.$space-32;
    }
  }
}
</style>
