<template>
  <vue-box>
    <vue-tiles :class="$style.icons" :columns="[2, 6, 8]">
      <div v-for="icon in icons" :key="icon" :class="$style.icon">
        <component :is="`vue-icon-${icon}`" />
        {{ icon }}
      </div>
    </vue-tiles>
  </vue-box>
</template>

<script lang="ts">
/* istanbul ignore file */
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueTiles from '@/components/layout/VueTiles/VueTiles.vue';

export default {
  name: 'IconList',
  components: {
    VueTiles,
    VueBox,
  },
  computed: {
    icons() {
      return [
        'activity',
        'add-user',
        'adjustments',
        'archive',
        'arrow-down',
        'arrow-left',
        'arrow-right',
        'arrow-up',
        'backspace',
        'ban',
        'bell',
        'book',
        'bookmark',
        'book-open',
        'briefcase',
        'calendar',
        'camera',
        'cart',
        'chart-bar',
        'chart-pie',
        'chat',
        'checkmark',
        'chevron-double-down',
        'chevron-double-left',
        'chevron-double-right',
        'chevron-double-up',
        'chevron-down',
        'chevron-left',
        'chevron-right',
        'chevron-up',
        'chip',
        'clipboard',
        'clock',
        'cloud',
        'cloud-download',
        'cloud-upload',
        'code',
        'cog',
        'credit-card',
        'cursor-click',
        'database',
        'desktop-computer',
        'device-mobile',
        'device-tablet',
        'document',
        'document-add',
        'document-remove',
        'document-text',
        'dots-horizontal',
        'dots-vertical',
        'download',
        'dribbble',
        'duplicate',
        'emoji-happy',
        'emoji-meh',
        'emoji-sad',
        'exclamation',
        'exclamation-circle',
        'external-link',
        'eye',
        'eye-off',
        'facebook',
        'fast-forward',
        'film',
        'filter',
        'finger-print',
        'flag',
        'folder',
        'folder-add',
        'folder-remove',
        'gift',
        'github',
        'globe',
        'hashtag',
        'heart',
        'home',
        'inbox',
        'info-circle',
        'instagram',
        'lightning-bolt',
        'link',
        'location-marker',
        'lock-closed',
        'lock-open',
        'login',
        'logout',
        'mail',
        'map',
        'menu',
        'microphone',
        'minus',
        'minus-circle',
        'moon',
        'music-note',
        'navigation',
        'package',
        'paper-airplane',
        'paper-clip',
        'pause',
        'pencil',
        'phone',
        'phone-incoming',
        'phone-missed-call',
        'phone-outgoing',
        'photograph',
        'play',
        'plus',
        'plus-circle',
        'printer',
        'question-mark-circle',
        'refresh',
        'reply',
        'rewind',
        'rss',
        'save',
        'scissors',
        'search',
        'selector',
        'server',
        'share',
        'share-alt',
        'shield',
        'shopping-bag',
        'star',
        'stop',
        'sun',
        'support',
        'tag',
        'terminal',
        'thumb-down',
        'thumb-up',
        'times',
        'times-circle',
        'tool',
        'trash',
        'trending-down',
        'trending-up',
        'truck',
        'twitter',
        'upload',
        'user',
        'user-remove',
        'users',
        'variable',
        'video-camera',
        'view-grid',
        'view-list',
        'volume-off',
        'volume-up',
        'vuesion',
        'wifi',
        'zoom-in',
        'zoom-out',
      ].sort();
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

.icons {
  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    i {
      width: $space-32;
      height: $space-32;
    }
  }
}
</style>
