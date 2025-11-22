<template>
  <vue-stack space="16">
    <vue-tiles space="8" :columns="[1, 2]">
      <vue-stack v-for="(column, idx) in columns" :key="idx" space="8">
        <token-item
          v-for="(token, tokenidx) in column.tokens"
          :key="`${token.cssVar}-${tokenidx}`"
          :figma="token.figmaVar"
          :css="token.cssVar"
          :circle-color="token.circleColor"
          :small-circle-color="token.smallCircleColor"
          :palette="token.paletteColor"
          :inverse="column.dark"
          :elevation="token.elevation"
          :focused="token.focused"
        />
      </vue-stack>
    </vue-tiles>
  </vue-stack>
</template>

<script setup lang="ts">
import VueStack from '@/components/design-system/layout/VueStack/VueStack.vue';
import VueTiles from '@/components/design-system/layout/VueTiles/VueTiles.vue';
import TokenItem from '@/assets/design-system/docs/components/TokenItem.vue';

interface Props {
  columns?: Array<any>;
}

defineProps<Props>();
</script>
