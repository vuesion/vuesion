<template>
  <ul ref="menuRef" data-testid="menu" :class="$style.vueMenu" @keydown="onKeyDown">
    <li
      v-for="(item, idx) in items"
      :key="`${item.value}-${idx}`"
      :data-testid="`${item.value}-${idx}`"
      :class="[selectedItemIndex === idx ? $style.active : '', item.value === 'separator' ? $style.separator : '']"
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
          <vue-text :color="selectedItemIndex === idx ? 'text-inverse-high' : 'text-high'">{{ item.label }}</vue-text>
          <vue-text v-if="item.description" look="support" color="text-inverse-medium">
            {{ item.description }}
          </vue-text>
        </div>

        <div v-if="item.trailingIcon" :class="$style.trailing">
          <component :is="`vue-icon-${item.trailingIcon}`" />
        </div>
      </slot>
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api';
import { IItem } from '@/interfaces/IItem';
import { getDomRef } from '@/composables/get-dom-ref';
import VueText from '@/components/typography/VueText/VueText.vue';

export default defineComponent({
  name: 'VueMenu',
  components: { VueText },
  props: {
    items: { type: [Array, Array as () => Array<IItem>], required: true },
  },
  setup(props, { emit }) {
    const menuRef = getDomRef(null);
    const selectedItemIndex = ref<number>(-1);
    const items = computed<Array<IItem>>(() => props.items as Array<IItem>);
    const maxItems = computed(() => items.value.length);

    const onItemClick = (item: IItem) => emit('click', item);
    const checkForPropagation = (e: KeyboardEvent) => {
      if (['Enter', 'Space', 'ArrowDown', 'ArrowUp'].includes(e.code)) {
        e.stopPropagation();
        e.preventDefault();
      }
    };
    const handleSelection = (newIndex: number) => {
      if (newIndex === maxItems.value) {
        selectedItemIndex.value = 0;
      } else if (newIndex <= -1) {
        selectedItemIndex.value = maxItems.value - 1;
      } else {
        selectedItemIndex.value = newIndex;
      }
    };
    const getNewIndex = (direction: string) => {
      let newIndex: number = direction === 'down' ? selectedItemIndex.value + 1 : selectedItemIndex.value - 1;

      if (items.value[newIndex] && items.value[newIndex].value === 'separator') {
        newIndex = direction === 'down' ? newIndex + 1 : newIndex - 1;
      }

      return newIndex;
    };
    const onKeyDown = (e: KeyboardEvent) => {
      checkForPropagation(e);

      if (['Enter', 'Space'].includes(e.code) && selectedItemIndex.value > -1) {
        onItemClick(items.value[selectedItemIndex.value]);
      } else if (e.code === 'ArrowDown') {
        handleSelection(getNewIndex('down'));
      } else if (e.code === 'ArrowUp') {
        handleSelection(getNewIndex('up'));
      }
    };

    /**
     * Only exposed for usage in parent components (e.g. dropdown)
     * doesn't need any testing
     */
    /* istanbul ignore next */
    const focus = () => {
      menuRef.value.firstChild.focus();
    };

    return {
      menuRef,
      selectedItemIndex,
      onItemClick,
      onKeyDown,
      focus,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueMenu {
  position: absolute;
  display: inline-flex;
  flex-direction: column;
  background: $menu-bg;
  min-width: $menu-min-width;
  max-height: $menu-max-height;
  padding: $menu-padding;
  box-shadow: $menu-shadow;
  border-radius: $menu-border-radius;
  border: $menu-border;
  z-index: $menu-z-index;
  overflow-y: scroll !important;
  -webkit-overflow-scrolling: touch;

  > li {
    position: relative;
    display: flex;
    align-items: center;
    padding: $menu-item-padding;
    color: $menu-item-color;
    cursor: pointer;
    outline: none;

    .leading,
    .trailing {
      height: $menu-item-icon-size;

      i {
        width: $menu-item-icon-size;
        height: $menu-item-icon-size;
      }
    }

    .leading {
      padding-right: $menu-item-icon-size-gap;
    }

    .trailing {
      padding-left: $menu-item-icon-size-gap;
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
  }
}
</style>
