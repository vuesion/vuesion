<template>
  <div ref="dropdownMenu" :class="$style.vueDropdownMenu" @keydown="onKeyPress">
    <span role="button" tabindex="0" :aria-expanded="show.toString()" @click.stop.prevent="onClick">
      <slot />
      <vue-icon-sort-down />
    </span>

    <vue-collapse :show="show" :duration="duration">
      <div :class="$style.list">
        <ul>
          <li
            v-for="(item, idx) in items"
            :key="`${id}-${idx}`"
            :class="[index === idx ? $style.active : '', item.value === 'separator' ? $style.separator : '']"
            @mouseenter="index = idx"
            @click.stop.prevent="onItemClick(item)"
          >
            <slot v-if="item.value !== 'separator'" name="option" :option="item">
              {{ item.label }}
            </slot>
          </li>
        </ul>
      </div>
    </vue-collapse>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { getIntInRange } from '@vuesion/utils/dist/randomGenerator';
import VueIconSortDown from '../../atoms/icons/VueIconSortDown/VueIconSortDown.vue';
import VueCollapse from '../VueCollapse/VueCollapse.vue';
import { getDomRef } from '@/composables/get-dom-ref';
import { IItem } from '@/components/IItem';
import { useOutsideClick } from '@/composables/use-outside-click';

export default defineComponent({
  name: 'VueDropdownMenu',
  components: { VueCollapse, VueIconSortDown },
  props: {
    items: { type: Array as new () => IItem[], required: true },
    duration: { type: Number, default: 250 },
  },
  setup(props, { emit }) {
    const dropdownMenu = getDomRef(null);
    const show = ref(false);
    const id = ref(getIntInRange(213123123, 98982984398));
    const index = ref(-1);
    const close = () => {
      show.value = false;
      index.value = -1;
    };
    const onClick = () => {
      show.value = !show.value;
      emit('click');
    };
    const onItemClick = (item: IItem) => {
      emit('item-click', item);
      close();
    };
    const checkForPropagation = (e: KeyboardEvent) => {
      if (['Enter', 'Space', 'ArrowDown', 'ArrowUp', 'Escape'].includes(e.code)) {
        e.stopPropagation();
        e.preventDefault();
      }
    };
    const handleSelection = (newIndex: number) => {
      if (newIndex === props.items.length) {
        index.value = 0;
      } else if (newIndex <= -1) {
        index.value = props.items.length - 1;
      } else {
        index.value = newIndex;
      }
    };
    const getNewIndex = (direction: string) => {
      let newIndex: number = direction === 'down' ? index.value + 1 : index.value - 1;
      if (props.items[newIndex] && props.items[newIndex].value === 'separator') {
        newIndex = direction === 'down' ? newIndex + 1 : newIndex - 1;
      }
      return newIndex;
    };
    const onKeyPress = (e: KeyboardEvent) => {
      checkForPropagation(e);

      if (['Enter', 'Space', 'ArrowDown', 'ArrowUp'].includes(e.code) && show.value === false) {
        show.value = true;
      } else if (['Enter', 'Space'].includes(e.code) && index.value > -1) {
        onItemClick(props.items[index.value]);
      } else if (e.code === 'ArrowDown') {
        handleSelection(getNewIndex('down'));
      } else if (e.code === 'ArrowUp') {
        handleSelection(getNewIndex('up'));
      } else if (e.code === 'Escape') {
        close();
      }
    };

    useOutsideClick(dropdownMenu, () => close());

    return {
      dropdownMenu,
      show,
      id,
      index,
      onClick,
      onItemClick,
      handleSelection,
      onKeyPress,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueDropdownMenu {
  display: inline-block;
  position: relative;

  > span {
    position: relative;
    display: inline-flex;
    padding: $dropdown-menu-button-padding;
    cursor: pointer;
    border-radius: $dropdown-menu-button-border-radius;
    font-family: $dropdown-menu-button-font-family;
    font-size: $dropdown-menu-button-font-size;
    font-weight: $dropdown-menu-button-font-weight;
    line-height: $dropdown-menu-button-line-height;
    letter-spacing: $dropdown-menu-button-letter-spacing;
    border: $dropdown-menu-button-border;
    background: $dropdown-menu-button-bg;
    align-items: baseline;

    &:hover {
      background: $dropdown-menu-button-hover-bg;
    }
  }

  i {
    width: $dropdown-menu-button-icon-size;
    height: $dropdown-menu-button-icon-size;
    position: relative;
    top: -1px;
  }
}

.list {
  position: absolute;
  top: 100%;
  z-index: 1000;
  box-shadow: $dropdown-menu-list-shadow;
  border-radius: $dropdown-menu-list-border-radius;

  ul {
    padding: $dropdown-menu-list-padding;
    list-style: none;
    background: $dropdown-menu-list-bg;
    color: $dropdown-menu-list-color;
    border-radius: $dropdown-menu-list-border-radius;
    min-width: $dropdown-menu-list-min-width;
    font-size: $dropdown-menu-list-font-size;
    font-weight: $dropdown-menu-list-font-weight;
    line-height: $dropdown-menu-list-line-height;
    border: $dropdown-menu-list-border;
  }

  li {
    display: block;
    padding: $dropdown-menu-list-item-padding;
    cursor: pointer;

    &.active {
      background: $dropdown-menu-list-item-hover-bg;
    }

    &.separator {
      padding: 0;
      height: 0;
      border-top: 1px solid var(--brand-border-color);
    }
  }
}
</style>
