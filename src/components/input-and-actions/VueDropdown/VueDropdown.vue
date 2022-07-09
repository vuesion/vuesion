<template>
  <div ref="dropdownRef" :class="$style.vueDropdown" @keydown.enter.space.up.down.esc.stop.prevent="onKeyDown">
    <div :class="$style.wrapper" data-testid="dropdown" @click.stop.prevent="onClick">
      <slot>
        <vue-button look="outline" :aria-expanded="show.toString()" :size="size" trailing-icon="chevron-down">
          {{ buttonText }}
        </vue-button>
      </slot>
    </div>

    <vue-collapse :show="show" :duration="duration">
      <vue-menu
        ref="menuRef"
        :items="items"
        :class="[$style.menu, $style[alignXMenu], $style[alignYMenu], $style[size]]"
        @click="onItemClick"
      />
    </vue-collapse>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { getDomRef } from '~/composables/get-dom-ref';
import { IItem } from '~/interfaces/IItem';
import { HorizontalDirection, ShirtSize, VerticalDirection } from '~/components/prop-types';
import VueMenu from '~/components/data-display/VueMenu/VueMenu.vue';
import VueButton from '~/components/input-and-actions/VueButton/VueButton.vue';
import VueCollapse from '~/components/behavior/VueCollapse/VueCollapse.vue';

interface DropdownProps {
  items: Array<IItem>;
  buttonText?: string;
  duration?: number;
  alignXMenu?: HorizontalDirection;
  alignYMenu?: VerticalDirection;
  size?: ShirtSize;
}
withDefaults(defineProps<DropdownProps>(), {
  buttonText: null,
  duration: 250,
  alignXMenu: 'left',
  alignYMenu: 'bottom',
  size: 'md',
});
const emit = defineEmits(['click', 'item-click']);
const dropdownRef = getDomRef(null);
const menuRef = getDomRef(null);
const show = ref(false);
const close = () => (show.value = false);
const onClick = () => {
  show.value = !show.value;
  emit('click');
};
const onItemClick = (item: IItem) => {
  emit('item-click', item);
  close();
};
const onKeyDown = async (e: KeyboardEvent) => {
  if (e.code === 'Escape') {
    close();
  } else {
    show.value = true;

    await nextTick();

    /* c8 ignore start */
    menuRef.value.focus && menuRef.value.focus();
    /* c8 ignore end */
  }
};

onClickOutside(dropdownRef, () => close());
</script>

<style lang="scss" module>
@import 'assets/_design-system';

.vueDropdown {
  display: inline-flex;
  position: relative;

  .wrapper {
    cursor: pointer;
  }

  .menu {
    &.sm {
      top: $input-control-sm-height + $dropdown-button-menu-gap;
    }

    &.md {
      top: $input-control-md-height + $dropdown-button-menu-gap;
    }

    &.lg {
      top: $input-control-lg-height + $dropdown-button-menu-gap;
    }

    &.left {
      left: 0;
    }

    &.center {
      left: 50%;
      transform: translateX(-50%);
    }

    &.right {
      right: 0;
    }

    &.top {
      top: -$dropdown-button-menu-gap;
      transform: translateY(-100%);

      &.center {
        transform: translate(-50%, -100%);
      }
    }
  }
}
</style>
