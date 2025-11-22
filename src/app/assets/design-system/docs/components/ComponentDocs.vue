<template>
  <vue-card surface-color="low" padding="24" space="32" :class="[$style.ComponentDocs]">
    <vue-stack space="48">
      <vue-stack space="16">
        <vue-stack v-if="componentName && usage">
          <vue-text look="large-title" weight="semi-bold"> {{ componentName }} {{ suffix }} </vue-text>

          <vue-columns>
            <vue-column no-grow>
              <vue-text color="low" look="description-md" style="white-space: pre-wrap">
                {{ usage }}
              </vue-text>
            </vue-column>
          </vue-columns>
        </vue-stack>
      </vue-stack>

      <div class="w-full">
        <slot />
      </div>
    </vue-stack>
  </vue-card>
</template>

<script setup lang="ts">
import VueText from '@/components/design-system/typography/VueText/VueText.vue';
import VueStack from '@/components/design-system/layout/VueStack/VueStack.vue';
import VueColumns from '@/components/design-system/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/design-system/layout/VueColumns/VueColumn/VueColumn.vue';
import VueCard from '@/components/design-system/surfaces-and-feedback/VueCard/VueCard.vue';

interface ComponentDocsProps {
  componentName?: string | null;
  usage?: string | null;
  suffix?: string | null;
}

withDefaults(defineProps<ComponentDocsProps>(), {
  componentName: null,
  usage: null,
  suffix: 'Usage',
});
</script>

<style lang="scss" module>
@use 'assets/design-system/index' as ds;

.ComponentDocs {
  border-radius: ds.$space-24;
}
</style>
