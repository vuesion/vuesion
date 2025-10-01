<template>
  <div :class="$style.vueToast">
    <transition-group name="list" tag="div">
      <vue-columns
        v-for="toast in orderedToasts"
        :key="toast.id"
        padding="16"
        :class="[$style.toast, $style[toast.type]]"
        space="12"
        align-y="start"
      >
        <vue-column no-grow>
          <vue-text :color="toast.type">
            <vue-icon-checkmark v-if="['success'].includes(toast.type)" />
            <vue-icon-info v-if="['info'].includes(toast.type)" />
            <vue-icon-question-mark-circle v-if="['warning'].includes(toast.type)" />
            <vue-icon-exclamation v-if="['danger'].includes(toast.type)" />
          </vue-text>
        </vue-column>
        <vue-column>
          <vue-stack space="4">
            <vue-text :color="toast.type" weight="semi-bold">{{ toast.title }}</vue-text>
            <vue-text look="label" :color="toast.type">{{ toast.text }}</vue-text>
          </vue-stack>
        </vue-column>

        <vue-column no-grow>
          <vue-text
            tabindex="0"
            aria-label="close"
            :color="toast.type"
            data-testid="toast-close-button"
            as="a"
            href="#"
            @click.stop.prevent="onRemoveToast(toast)"
          >
            <vue-icon-times />
          </vue-text>
        </vue-column>
      </vue-columns>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, useCssModule } from 'vue';
import { EventBus } from '@/services/EventBus';
import { createId } from '@/components/utils/create-id';
import type { IToastNotification } from '#shared/interfaces/ui/IToastNotification';
import type { WithRequiredProperty } from '@/custom-typings';
import VueColumns from '@/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueIconInfo from '@/components/icons/VueIconInfoCircle.vue';
import VueIconTimes from '@/components/icons/VueIconTimes.vue';
import VueIconExclamation from '@/components/icons/VueIconExclamation.vue';
import VueIconCheckmark from '@/components/icons/VueIconCheckmark.vue';
import VueIconQuestionMarkCircle from '@/components/icons/VueIconQuestionMarkCircle.vue';

// Deps
const $style = useCssModule();

// Data
const toasts = ref<Array<WithRequiredProperty<IToastNotification, 'type'>>>([]);
const orderedToasts = computed<Array<WithRequiredProperty<IToastNotification, 'type'>>>(() =>
  toasts.value.slice(0).reverse(),
);

// Event Handlers
const onRemoveToast = (n: IToastNotification) => {
  toasts.value = toasts.value.filter((toast) => toast.id !== n.id);
};

// Methods
const addToast = (n: IToastNotification) => {
  n.id = createId();
  n.type = n.type || 'info';
  n.displayTimeInMs = n.displayTimeInMs || 10000;

  toasts.value.push(n as WithRequiredProperty<IToastNotification, 'type'>);

  setTimeout(() => onRemoveToast(n), n.displayTimeInMs);
};

// Lifecycle
onMounted(() => {
  EventBus.on('toast.add', addToast);
});
</script>

<style lang="scss" module>
@use 'assets/design-system/index' as ds;

.vueToast {
  position: fixed;
  top: ds.$toast-position-top;
  right: ds.$space-16;
  z-index: ds.$toast-index;
  width: calc(100% - #{ds.$space-32});
  max-width: ds.$toast-max-width;

  .toast {
    border-radius: ds.$toast-border-radius;
    box-shadow: ds.$toast-elevation;
    margin-bottom: ds.$toast-gap;

    i {
      width: ds.$toast-icons-size;
      height: ds.$toast-icons-size;
    }

    &.info {
      background: ds.$toast-info-bg;
      border: ds.$toast-info-border;
    }

    &.warning {
      background: ds.$toast-warning-bg;
      border: ds.$toast-warning-border;
    }

    &.danger {
      background: ds.$toast-danger-bg;
      border: ds.$toast-danger-border;
    }

    &.success {
      background: ds.$toast-success-bg;
      border: ds.$toast-success-border;
    }
  }

  /* stylelint-disable selector-class-pattern */
  :global {
    .list-move {
      transition: ds.$toast-transition;
    }

    .list-enter {
      opacity: 0;
      transform: translateY(-100%);
    }

    .list-enter-active {
      transition: ds.$toast-transition;
    }

    .list-enter-to {
      opacity: 1;
      transform: translateY(0);
    }

    .list-leave {
      opacity: 1;
      transform: translateY(0);
    }

    .list-leave-active {
      transition: ds.$toast-transition;
    }

    .list-leave-to {
      opacity: 0;
      transform: translateY(100%);
    }
  }
}
</style>
