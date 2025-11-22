<template>
  <vue-card surface-color="low" padding="24" space="32" :class="[$style.componentDocs]">
    <vue-stack space="48">
      <vue-stack space="16">
        <vue-stack v-if="componentName || usage">
          <vue-text v-if="componentName" look="title-lg" weight="semi-bold">
            {{ componentName }} {{ suffix }}
          </vue-text>

          <vue-text v-if="usage" color="low" look="description-md" style="white-space: pre-wrap">
            {{ usage }}
          </vue-text>
        </vue-stack>
      </vue-stack>

      <vue-card :surface-color="bodySurfaceColor" :space="bodySpace">
        <slot />
      </vue-card>
    </vue-stack>
  </vue-card>
</template>

<script setup lang="ts">
import VueText from '@/components/design-system/typography/VueText/VueText.vue';
import VueStack from '@/components/design-system/layout/VueStack/VueStack.vue';
import VueCard from '@/components/design-system/surfaces-and-feedback/VueCard/VueCard.vue';
import type { SurfaceColor } from '@/components/utils/prop-types/colors';
import type { Spacing } from '@/components/utils/prop-types/spacings';

interface ComponentDocsProps {
  componentName?: string;
  usage?: string;
  suffix?: string;
  bodySurfaceColor?: SurfaceColor;
  bodySpace?: Spacing | Array<Spacing>;
}

withDefaults(defineProps<ComponentDocsProps>(), {
  bodySurfaceColor: 'high',
  bodySpace: () => ['24'],
});
</script>

<style lang="scss" module>
@use 'assets/design-system/index' as ds;

.componentDocs {
  border-radius: ds.$space-24;
}
</style>
