<template>
  <div :class="$style.vueNotificationStack">
    <transition-group name="list" tag="div">
      <div v-for="n in orderedNotifications" :key="n.id" :class="[$style.notification, $style[n.type]]">
        <div :class="$style.title">
          {{ n.title }}
        </div>
        <div :class="$style.text">
          {{ n.text }}
        </div>
        <div :class="$style.close" @click="removeNotification(n)" />
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from '@vue/composition-api';
import { getGUID } from '@vuesion/utils/dist/randomGenerator';
import { INotification } from './INotification';
import { EventBus } from '@/services/EventBus';

export default defineComponent({
  name: 'VueNotificationStack',
  props: {
    duration: { type: Number, default: 10000 },
  },
  setup(props) {
    const notifications = ref<INotification[]>([]);
    const orderedNotifications = computed<INotification[]>(() => notifications.value.slice(0).reverse());
    const removeNotification = (n: INotification) => {
      notifications.value = notifications.value.filter((notification: INotification) => notification.id !== n.id);
    };
    const addNotification = (n: INotification) => {
      n.id = getGUID();
      n.type = n.type || 'default';

      notifications.value.push(n);

      setTimeout(() => removeNotification(n), props.duration);
    };

    onMounted(() => {
      EventBus.$on('notification.add', addNotification);
    });

    return {
      orderedNotifications,
      removeNotification,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueNotificationStack {
  position: fixed;
  top: $nav-bar-height;
  left: 0;
  right: 0;
  z-index: $notifications-index;
  padding: $notifications-padding;

  :global {
    .list-move {
      transition: all 500ms ease-in-out;
    }

    .list-enter {
      opacity: 0;
      transform: translateY(-100%);
    }
    .list-enter-active {
      transition: all 500ms ease-in-out;
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
      transition: all 500ms ease-in-out;
    }
    .list-leave-to {
      opacity: 0;
      transform: translateY(100%);
    }
  }

  @include mediaMin(tabletLandscape) {
    left: initial;
    max-width: $notifications-max-width;
  }
}

.notification {
  padding: $notification-padding;
  position: relative;
  box-shadow: $notification-shadow;
}

.default {
  background-color: $notification-default-bg;
  border: $notification-default-border;
}

.title {
  font-weight: 500;
  padding-right: $space-12;
}

.text {
  max-height: $notification-max-height;
  padding-right: $space-12;
  overflow-y: scroll;
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: $notification-close-width;
  background-color: $notification-close-bg;
  cursor: pointer;

  &:before,
  &:after {
    content: '';
    transition: all 0.25s ease-in-out;
    position: absolute;
    background-color: $notification-close-cross-color;
    width: 2px;
    height: $space-20;
    right: $space-20;
    top: 50%;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
}
</style>
