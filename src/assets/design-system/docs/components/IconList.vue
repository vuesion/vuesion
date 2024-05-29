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
import VueBox from '~/components/layout/VueBox/VueBox.vue';
import VueTiles from '~/components/layout/VueTiles/VueTiles.vue';
import { iconOptions } from '~/components/icon-options';

const props = defineProps({
  showIcons: { type: Boolean, default: true },
});

const $style = useCssModule();
const icons = ref<Array<string>>([]);
const loadIcons = () => {
  icons.value = iconOptions;
};
loadIcons();

watch(
  () => props.showIcons,
  () => loadIcons(),
);
</script>

<style lang="scss" module>
@import 'assets/design-system';

.icons {
  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    i {
      width: $space-32;
      height: $space-32;
    }
  }
}
</style>
