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
        :class="[$style.menu]"
        :style="floatingStyles"
        :data-placement="placement"
        @click="onItemClick"
      />
    </vue-collapse>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref, useCssModule } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { getDomRef } from '~/composables/get-dom-ref';
import type { IItem } from '~/interfaces/IItem';
import type { ShirtSize } from '~/components/prop-types';
import VueMenu from '~/components/data-display/VueMenu/VueMenu.vue';
import VueButton from '~/components/input-and-actions/VueButton/VueButton.vue';
import VueCollapse from '~/components/behavior/VueCollapse/VueCollapse.vue';
import { autoUpdate, flip, offset, useFloating } from '@floating-ui/vue';

// Interface
interface DropdownProps {
  items: Array<IItem>;
  buttonText?: string;
  duration?: number;
  size?: ShirtSize;
}
interface DropdownEmits {
  (event: 'click', e: MouseEvent): void;
  (event: 'item-click', item: IItem): void;
}
withDefaults(defineProps<DropdownProps>(), {
  buttonText: '',
  duration: 250,
  size: 'md',
});
const emit = defineEmits<DropdownEmits>();

// Deps
const $style = useCssModule();

// Data
const dropdownRef = getDomRef<HTMLDivElement>(null);
const menuRef = getDomRef<HTMLDivElement & { focus: () => void }>(null);
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

// Floating UI Setup
const { floatingStyles, placement } = useFloating(dropdownRef, menuRef, {
  placement: 'bottom-start',
  middleware: [offset(8), flip({ fallbackPlacements: ['bottom-end', 'top-start', 'top-end'] })],
  whileElementsMounted: autoUpdate,
});
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
    position: absolute;
    left: 0;
    width: 100%;

    &[data-placement^='top'] {
      // top: $space-24 !important;
    }

    &[data-placement^='bottom'] {
      // top: $space-20 * -1 !important;
    }
  }
}
</style>
