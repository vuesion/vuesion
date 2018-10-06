<template>
  <div :class="$style.vueNotificationStack">
    <transition-group name="list" tag="div">
      <div v-for="n in orderedNotifications"
           :class="[$style.notification, $style[n.type]]"
           :key="n.id">
        <div :class="$style.title">{{ n.title }}</div>
        <div :class="$style.text">{{ n.text }}</div>
        <div :class="$style.close" role="button" @click="removeNotification(n)"></div>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
  import { INotification } from './utils';
  import { EventBus }      from '../../services/EventBus';

  let id: number = 0;

  export default {
    name:     'VueNotificationStack',
    props:    {
      duration: {
        type:     Number,
        required: false,
        default:  10000,
      },
    },
    data(): any {
      return {
        notifications: [],
      };
    },
    computed: {
      orderedNotifications() {
        return this.notifications.slice(0).reverse();
      },
    },
    methods:  {
      addNotification(n: INotification): void {
        n.id = id++;
        n.type = n.type || 'default';

        this.notifications.push(n);

        setTimeout(() => this.removeNotification(n), this.duration);
      },
      removeNotification(n: INotification): void {
        this.notifications = this.notifications
                                 .filter((notification: INotification) => notification.id !== n.id);
      },
    },
    mounted() {
      EventBus.$on('notification.add', this.addNotification);
    },
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .vueNotificationStack {
    position: fixed;
    top:      0;
    left:     0;
    right:    0;
    z-index:  $notifications-index;
    padding:  $notifications-padding;

    :global {
      .list-move {
        transition: all 500ms ease-in-out;
      }

      .list-enter {
        opacity:   0;
        transform: translateY(-100%);
      }
      .list-enter-active {
        transition: all 500ms ease-in-out;
      }
      .list-enter-to {
        opacity:   1;
        transform: translateY(0);
      }

      .list-leave {
        opacity:   1;
        transform: translateY(0);
      }
      .list-leave-active {
        transition: all 500ms ease-in-out;
      }
      .list-leave-to {
        opacity:   0;
        transform: translateY(100%);
      }
    }

    @include mediaMin(tabletLandscape) {
      left:      initial;
      max-width: $notifications-max-width;
    }
  }

  .notification {
    padding:    $notification-padding;
    margin:     $notification-margin;
    position:   relative;
    box-shadow: $notification-shadow;
  }

  .default {
    background-color: $notification-default-bg;
    border:           $notification-default-border;
  }

  .title {
    font-weight:   500;
    margin-bottom: $space-unit;
    padding-right: $space-unit * 2;
  }

  .text {
    max-height:    $notification-max-height;
    padding-right: $space-unit * 2;
    overflow-y:    scroll;
  }

  .close {
    position:         absolute;
    top:              0;
    right:            0;
    bottom:           0;
    width:            $notification-close-width;
    background-color: $notification-close-bg;
    cursor:           pointer;

    &:before, &:after {
      content:          "";
      transition:       all 0.25s ease-in-out;
      position:         absolute;
      background-color: $notification-close-cross-color;
      width:            2px;
      height:           $space-unit * 3;
      right:            $space-unit * 2.5;
      top:              50%;
      margin-top:       -($space-unit * 1.5);
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg)
    }
  }
</style>
