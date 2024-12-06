<template>
  <vue-stack
    :ref="(el: any) => (menuRef = el?.$el)"
    as="ul"
    space="0"
    padding="4 0"
    data-testid="menu"
    :class="$style.vueMenu"
    @keydown="onKeyDown"
    @focus="focus"
  >
    <li
      v-for="(item, idx) in items"
      :key="`${item.value}-${idx}`"
      :data-testid="`${item.value}-${idx}`"
      :class="[
        selectedItemIndex === idx ? $style.active : '',
        item.value === 'separator' ? $style.separator : '',
        item.disabled && $style.disabled,
      ]"
      :tabindex="item.value === 'separator' ? -1 : 0"
      @mouseenter="selectedItemIndex = idx"
      @mouseleave="selectedItemIndex = -1"
      @focus="selectedItemIndex = idx"
      @blur="selectedItemIndex = -1"
      @click.stop.prevent="onItemClick(item)"
    >
      <slot v-if="item.value !== 'separator'" name="option" :option="item">
        <div v-if="item.leadingIcon" :class="$style.leading">
          <component :is="`vue-icon-${item.leadingIcon}`" />
        </div>

        <div :class="$style.value">
          <vue-text no-wrap>{{ item.label }}</vue-text>
          <vue-text v-if="item.description" look="support" color="text-medium">
            {{ item.description }}
          </vue-text>
        </div>

        <div v-if="item.trailingIcon" :class="$style.trailing">
          <component :is="`vue-icon-${item.trailingIcon}`" />
        </div>
      </slot>
    </li>
  </vue-stack>
</template>

<script setup lang="ts">
import { computed, ref, useCssModule } from 'vue';
import debounce from 'lodash-es/debounce.js';
import type { IItem } from '~/interfaces/IItem';
import { getDomRef } from '~/app/composables/get-dom-ref';
import VueText from '~/app/components/typography/VueText/VueText.vue';
import VueStack from '~/app/components/layout/VueStack/VueStack.vue';

// Interface
interface MenuProps {
  items: Array<IItem>;
  disableSearch?: boolean;
}
interface MenuEmits {
  (e: 'click', item: IItem): void;
  (e: 'close'): void;
}
const props = withDefaults(defineProps<MenuProps>(), {
  disableSearch: false,
});
const emit = defineEmits<MenuEmits>();

// Deps
const $style = useCssModule();

// Data
const menuRef = getDomRef<HTMLElement>(null);
const searchQuery = ref('');
const selectedItemIndex = ref<number>(-1);
const items = computed<Array<IItem>>(() => props.items as Array<IItem>);
const maxItems = computed(() => items.value.length);

// Event Handler & Methods
const onItemClick = (item: IItem) => {
  if (item.disabled === true) {
    return;
  }

  emit('click', item);
};
const handleSelection = (newIndex: number) => {
  if (newIndex === maxItems.value) {
    selectedItemIndex.value = 0;
  } else if (newIndex <= -1) {
    selectedItemIndex.value = maxItems.value - 1;
  } else {
    selectedItemIndex.value = newIndex;
  }

  focus();
};
const handleSearch = debounce(() => {
  selectedItemIndex.value = props.items.findIndex((item) => {
    const regex = new RegExp(searchQuery.value, 'i');
    return regex.test(item.label) && !!item.disabled === false;
  });
  searchQuery.value = '';

  if (selectedItemIndex.value > -1) {
    focus();
  }
}, 300);
const getNewIndex = (direction: string) => {
  let newIndex: number = direction === 'down' ? selectedItemIndex.value + 1 : selectedItemIndex.value - 1;

  if (items.value[newIndex] && items.value[newIndex].value === 'separator') {
    newIndex = direction === 'down' ? newIndex + 1 : newIndex - 1;
  }

  return newIndex;
};
const onKeyDown = (e: KeyboardEvent) => {
  e.stopPropagation();
  e.preventDefault();

  if (
    ['Enter', 'Space'].includes(e.code) &&
    selectedItemIndex.value > -1 &&
    !items.value[selectedItemIndex.value].disabled
  ) {
    onItemClick(items.value[selectedItemIndex.value]);
  } else if (e.code === 'Tab' || e.code === 'Escape') {
    emit('close');
  } else if (e.code === 'ArrowDown') {
    handleSelection(getNewIndex('down'));
  } else if (e.code === 'ArrowUp') {
    handleSelection(getNewIndex('up'));
  } else if (props.disableSearch === false) {
    searchQuery.value += e.key;
    handleSearch();
  }
};

/**
 * Only exposed for usage in parent components (e.g. dropdown)
 * doesn't need testing
 */
/* c8 ignore start */
const focus = (selectedItem: IItem | null = null) => {
  if (selectedItem) {
    selectedItemIndex.value = props.items.findIndex((i) => i.value === selectedItem.value);
  }

  const item = menuRef.value
    ?.querySelectorAll('li')
    ?.item(selectedItemIndex.value === -1 ? 0 : selectedItemIndex.value) as HTMLUListElement;
  item?.focus();
  menuRef.value?.scrollTo({ top: item?.offsetTop });
};

defineExpose({ focus });
/* c8 ignore end */
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueMenu {
  position: absolute;
  background: $menu-bg;
  width: min-content;
  min-width: $menu-min-width;
  max-height: $menu-max-height;
  box-shadow: $menu-shadow;
  border-radius: $menu-border-radius;
  border: $menu-border;
  z-index: $menu-z-index;
  overflow-y: scroll !important;
  -webkit-overflow-scrolling: touch;

  > li {
    position: relative;
    display: flex;
    align-items: flex-start;
    padding: $menu-item-padding;
    color: $menu-item-color;
    cursor: pointer;
    outline: none;
    gap: $menu-item-icon-size-gap;

    .leading,
    .trailing {
      padding-top: $space-2;
      height: $menu-item-icon-size;

      i {
        width: $menu-item-icon-size;
        height: $menu-item-icon-size;
      }
    }

    .value {
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    &.active {
      background: $menu-item-bg-active;
      color: $menu-item-color-active;
    }

    &.separator {
      padding: 0;
      height: 0;
      border-top: $menu-separator-border;
    }

    &.disabled {
      opacity: $menu-item-disabled-opacity;
      cursor: not-allowed;
    }
  }
}
</style>
