<template>
  <div :class="$style.vueToast">
    <transition-group name="list" tag="div">
      <vue-box v-for="toast in orderedToasts" :key="toast.id" padding="16" :class="[$style.toast, $style[toast.type]]">
        <vue-columns space="12" align-y="top">
          <vue-column width="content">
            <vue-text :color="toast.type">
              <vue-icon-info v-if="['info', 'success'].includes(toast.type)" />
              <vue-icon-exclamation v-if="['warning', 'danger'].includes(toast.type)" />
            </vue-text>
          </vue-column>
          <vue-column>
            <vue-stack space="4">
              <vue-text :color="toast.type" weight="semi-bold">{{ toast.title }}</vue-text>
              <vue-text look="label" :color="toast.type">{{ toast.text }}</vue-text>
            </vue-stack>
          </vue-column>

          <vue-column width="content">
            <vue-text
              tabindex="0"
              aria-label="close"
              :color="toast.type"
              data-testid="toast-close-button"
              as="a"
              href="#"
              @click.native.stop.prevent="removeToast(toast)"
            >
              <vue-icon-times />
            </vue-text>
          </vue-column>
        </vue-columns>
      </vue-box>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from '@vue/composition-api';
import { getGUID } from '@vuesion/utils/dist/randomGenerator';
import { EventBus } from '@/services/EventBus';
import { IToast } from '@/interfaces/IToast';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueColumns from '@/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueIconInfo from '@/components/icons/VueIconInfoCircle.vue';
import VueIconTimes from '@/components/icons/VueIconTimes.vue';
import VueIconExclamation from '@/components/icons/VueIconExclamation.vue';

export default defineComponent({
  name: 'VueToast',
  components: {
    VueIconExclamation,
    VueIconTimes,
    VueIconInfo,
    VueText,
    VueStack,
    VueColumn,
    VueColumns,
    VueBox,
  },
  setup() {
    const toasts = ref<IToast[]>([]);
    const orderedToasts = computed<IToast[]>(() => toasts.value.slice(0).reverse());
    const removeToast = (n: IToast) => {
      toasts.value = toasts.value.filter((toast) => toast.id !== n.id);
    };
    const addToast = (n: IToast) => {
      n.id = getGUID();
      n.type = n.type || 'info';
      n.displayTimeInMs = n.displayTimeInMs || 10000;

      toasts.value.push(n);

      setTimeout(() => removeToast(n), n.displayTimeInMs);
    };

    onMounted(() => {
      EventBus.$on('toast.add', addToast);
    });

    return {
      orderedToasts,
      removeToast,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

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
