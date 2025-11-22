<template>
  <vue-columns space="12" padding="16" :class="[$style.vueAlert, $style[type]]">
    <vue-column no-grow>
      <vue-text :color="type">
        <vue-icon-checkmark v-if="['success'].includes(type)" />
        <vue-icon-info v-if="['info'].includes(type)" />
        <vue-icon-question-mark-circle v-if="['warning'].includes(type)" />
        <vue-icon-exclamation v-if="['danger'].includes(type)" />
      </vue-text>
    </vue-column>
    <vue-column>
      <vue-stack space="4">
        <vue-text look="support-md" weight="semi-bold" :color="type">{{ title }}</vue-text>
        <vue-text look="support-md" :color="type">{{ text }}</vue-text>
      </vue-stack>
    </vue-column>
  </vue-columns>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';
import VueColumns from '@/components/design-system/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/design-system/layout/VueColumns/VueColumn/VueColumn.vue';
import VueStack from '@/components/design-system/layout/VueStack/VueStack.vue';
import VueText from '@/components/design-system/typography/VueText/VueText.vue';
import VueIconExclamation from '@/components/icons/VueIconExclamation.vue';
import VueIconInfo from '@/components/icons/VueIconInfoCircle.vue';
import VueIconCheckmark from '@/components/icons/VueIconCheckmark.vue';
import VueIconQuestionMarkCircle from '@/components/icons/VueIconQuestionMarkCircle.vue';

// Interface
interface AlertProps {
  title: string;
  text: string;
  type?: 'info' | 'warning' | 'danger' | 'success';
}

withDefaults(defineProps<AlertProps>(), {
  type: 'info',
});

// Deps
const $style = useCssModule();
</script>

<style lang="scss" module>
@use 'assets/design-system/index' as ds;

.vueAlert {
  border-radius: ds.$alert-border-radius;

  i {
    width: ds.$alert-icons-size;
    height: ds.$alert-icons-size;
  }

  &.info {
    background: ds.$alert-info-bg;
    border: ds.$alert-info-border;
  }

  &.warning {
    background: ds.$alert-warning-bg;
    border: ds.$alert-warning-border;
  }

  &.danger {
    background: ds.$alert-danger-bg;
    border: ds.$alert-danger-border;
  }

  &.success {
    background: ds.$alert-success-bg;
    border: ds.$alert-success-border;
  }
}
</style>
