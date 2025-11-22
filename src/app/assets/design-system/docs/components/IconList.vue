<template>
  <vue-box>
    <vue-tiles :class="$style.icons" space="16" :columns="[2, 6, 10]">
      <vue-stack space="8" v-for="icon in icons" :key="icon" align-x="center" align-y="center" :class="$style.icon">
        <component :is="`vue-icon-${icon}`" />
        <vue-text look="support-md" color="low" align-x="center" :title="icon">{{ icon }}</vue-text>
      </vue-stack>
    </vue-tiles>
  </vue-box>
</template>

<script setup lang="ts">
/* istanbul ignore file */
import { ref, useCssModule } from 'vue';
import VueBox from '@/components/design-system/layout/VueBox/VueBox.vue';
import VueTiles from '@/components/design-system/layout/VueTiles/VueTiles.vue';
import { type Icon, iconOptions } from '@/components/utils/icon-options';
import VueStack from '@/components/design-system/layout/VueStack/VueStack.vue';
import VueText from '@/components/design-system/typography/VueText/VueText.vue';

const $style = useCssModule();
const icons = ref<Array<Icon>>([]);
const loadIcons = () => {
  icons.value = [...iconOptions];
};
loadIcons();
</script>

<style lang="scss" module>
@use 'assets/design-system/index' as ds;

.icons {
  .icon {
    aspect-ratio: 1;

    i {
      width: ds.$space-24;
      height: ds.$space-24;
    }
  }
}
</style>
