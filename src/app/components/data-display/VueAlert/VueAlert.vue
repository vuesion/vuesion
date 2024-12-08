<template>
  <vue-columns space="12" padding="16" :class="[$style.VueAlert, $style[type]]">
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
        <vue-text look="support" weight="semi-bold" :color="type">{{ title }}</vue-text>
        <vue-text look="support" :color="type">{{ text }}</vue-text>
      </vue-stack>
    </vue-column>
  </vue-columns>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';
import VueColumns from '~/app/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '~/app/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueStack from '~/app/components/layout/VueStack/VueStack.vue';
import VueText from '~/app/components/typography/VueText/VueText.vue';
import VueIconExclamation from '~/app/components/icons/VueIconExclamation.vue';
import VueIconInfo from '~/app/components/icons/VueIconInfoCircle.vue';
import VueIconCheckmark from '~/app/components/icons/VueIconCheckmark.vue';
import VueIconQuestionMarkCircle from '~/app/components/icons/VueIconQuestionMarkCircle.vue';

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
@import 'assets/_design-system.scss';

.VueAlert {
  border-radius: $alert-border-radius;

  i {
    width: $alert-icons-size;
    height: $alert-icons-size;
  }

  &.info {
    background: $alert-info-bg;
    border: $alert-info-border;
  }

  &.warning {
    background: $alert-warning-bg;
    border: $alert-warning-border;
  }

  &.danger {
    background: $alert-danger-bg;
    border: $alert-danger-border;
  }

  &.success {
    background: $alert-success-bg;
    border: $alert-success-border;
  }
}
</style>
