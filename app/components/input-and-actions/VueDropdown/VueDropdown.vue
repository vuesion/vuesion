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
import { nextTick, ref, useCssModule } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { getDomRef } from '~/app/composables/get-dom-ref';
import type { IItem } from '~~/interfaces/IItem';
import type { HorizontalDirection, ShirtSize, VerticalDirection } from '~/app/components/prop-types';
import VueMenu from '~/app/components/data-display/VueMenu/VueMenu.vue';
import VueButton from '~/app/components/input-and-actions/VueButton/VueButton.vue';
import VueCollapse from '~/app/components/behavior/VueCollapse/VueCollapse.vue';

// Interface
interface DropdownProps {
  items: Array<IItem>;
  buttonText?: string;
  duration?: number;
  alignXMenu?: HorizontalDirection;
  alignYMenu?: VerticalDirection;
  size?: ShirtSize;
}
interface DropdownEmits {
  (event: 'click', e: MouseEvent): void;
  (event: 'item-click', item: IItem): void;
}
withDefaults(defineProps<DropdownProps>(), {
  buttonText: '',
  duration: 250,
  alignXMenu: 'left',
  alignYMenu: 'bottom',
  size: 'md',
});
const emit = defineEmits<DropdownEmits>();

// Deps
const $style = useCssModule();

// Data
const dropdownRef = getDomRef<HTMLDivElement>(null);
const menuRef = getDomRef<{ focus: () => void }>(null);
const show = ref(false);

// Methods
const close = () => (show.value = false);

// Event Handlers
const onClick = (e: MouseEvent) => {
  show.value = !show.value;
  emit('click', e);
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
    if (menuRef.value && menuRef.value.focus) {
      menuRef.value.focus();
    }
    /* c8 ignore end */
  }
};

onClickOutside(dropdownRef, () => close());
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

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
