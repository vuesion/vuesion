<template>
  <div ref="dropdownRef" :class="$style.vueDropdown" @keydown="onKeyDown">
    <vue-button look="outline" :aria-expanded="show.toString()" @click.stop.prevent="onClick">
      {{ buttonText }}
      <vue-icon-chevron-down :class="$style.icon" />
    </vue-button>

    <vue-collapse :show="show" :duration="duration">
      <vue-menu ref="menuRef" :items="items" :class="$style.menu" @click="onItemClick" />
    </vue-collapse>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { getDomRef } from '@/composables/get-dom-ref';
import { IItem } from '@/interfaces/IItem';
import { useOutsideClick } from '@/composables/use-outside-click';
import VueMenu from '@/components/data-display/VueMenu/VueMenu.vue';
import VueButton from '@/components/input-and-actions/VueButton/VueButton.vue';
import VueIconChevronDown from '@/components/icons/VueIconChevronDown/VueIconChevronDown.vue';
import VueCollapse from '@/components/molecules/VueCollapse/VueCollapse.vue';

export default defineComponent({
  name: 'VueDropdown',
  components: { VueCollapse, VueIconChevronDown, VueButton, VueMenu },
  props: {
    buttonText: { type: String, required: true },
    items: { type: Array as new () => IItem[], required: true },
    duration: { type: Number, default: 250 },
  },
  setup(_, { emit }) {
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
    const checkForPropagation = (e: KeyboardEvent) => {
      if (['Enter', 'Space', 'ArrowDown', 'ArrowUp', 'Escape'].includes(e.code)) {
        e.stopPropagation();
        e.preventDefault();
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      checkForPropagation(e);

      if (['Enter', 'Space', 'ArrowDown', 'ArrowUp'].includes(e.code)) {
        show.value = true;

        setTimeout(() => {
          menuRef.value.focus();
        }, 10);
      } else if (e.code === 'Escape') {
        close();
      }
    };

    useOutsideClick(dropdownRef, () => close());

    return {
      dropdownRef,
      menuRef,
      show,
      onClick,
      onItemClick,
      onKeyDown,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

.vueDropdown {
  display: inline-flex;
  position: relative;

  .icon {
    width: $dropdown-button-icon-size;
    height: $dropdown-button-icon-size;
  }

  .menu {
    top: $button-md-height + $dropdown-button-menu-gap;
  }
}
</style>
