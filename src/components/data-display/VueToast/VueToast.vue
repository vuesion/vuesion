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
import { EventBus } from '~/services/EventBus';
import type { IToast } from '~/interfaces/IToast';
import { getGUID } from '~/components/utils';
import VueColumns from '~/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '~/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueIconInfo from '~/components/icons/VueIconInfoCircle.vue';
import VueIconTimes from '~/components/icons/VueIconTimes.vue';
import VueIconExclamation from '~/components/icons/VueIconExclamation.vue';
import VueIconCheckmark from '~/components/icons/VueIconCheckmark.vue';
import VueIconQuestionMarkCircle from '~/components/icons/VueIconQuestionMarkCircle.vue';

// Deps
const $style = useCssModule();

// Data
const toasts = ref<Array<WithRequiredProperty<IToast, 'type'>>>([]);
const orderedToasts = computed<Array<WithRequiredProperty<IToast, 'type'>>>(() => toasts.value.slice(0).reverse());

// Event Handlers
const onRemoveToast = (n: IToast) => {
  toasts.value = toasts.value.filter((toast) => toast.id !== n.id);
};

// Methods
const addToast = (n: IToast) => {
  n.id = getGUID();
  n.type = n.type || 'info';
  n.displayTimeInMs = n.displayTimeInMs || 10000;

  toasts.value.push(n as WithRequiredProperty<IToast, 'type'>);

  setTimeout(() => onRemoveToast(n), n.displayTimeInMs);
};

// Lifecycle
onMounted(() => {
  EventBus.on('toast.add', addToast);
});
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueToast {
  position: fixed;
  top: $toast-position-top;
  right: $space-16;
  z-index: $toast-index;
  width: calc(100% - #{$space-32});
  max-width: $toast-max-width;

  :global {
    .list-move {
      transition: $toast-transition;
    }

    .list-enter {
      opacity: 0;
      transform: translateY(-100%);
    }
    .list-enter-active {
      transition: $toast-transition;
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
      transition: $toast-transition;
    }
    .list-leave-to {
      opacity: 0;
      transform: translateY(100%);
    }
  }

  .toast {
    border-radius: $toast-border-radius;
    box-shadow: $toast-elevation;
    margin-bottom: $toast-gap;

    i {
      width: $toast-icons-size;
      height: $toast-icons-size;
    }

    &.info {
      background: $toast-info-bg;
      border: $toast-info-border;
    }

    &.warning {
      background: $toast-warning-bg;
      border: $toast-warning-border;
    }

    &.danger {
      background: $toast-danger-bg;
      border: $toast-danger-border;
    }

    &.success {
      background: $toast-success-bg;
      border: $toast-success-border;
    }
  }
}
</style>
