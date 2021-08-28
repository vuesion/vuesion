<template>
  <div ref="dropdownRef" :class="$style.vueDropdown" @keydown.enter.space.up.down.esc.stop.prevent="onKeyDown">
    <div :class="$style.wrapper" @click.stop.prevent="onClick">
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
        :class="[$style.menu, $style[alignMenu], $style[alignYMenu], $style[size]]"
        @click="onItemClick"
      />
    </vue-collapse>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref } from '@vue/composition-api';
import { getDomRef } from '@/composables/get-dom-ref';
import { IItem } from '@/interfaces/IItem';
import { useOutsideClick } from '@/composables/use-outside-click';
import VueMenu from '@/components/data-display/VueMenu/VueMenu.vue';
import VueButton from '@/components/input-and-actions/VueButton/VueButton.vue';
import VueCollapse from '@/components/behavior/VueCollapse/VueCollapse.vue';
import { horizontalAlignmentValidator, shirtSizeValidator } from '@/components/prop-validators';

export default defineComponent({
  name: 'VueDropdown',
  components: { VueCollapse, VueButton, VueMenu },
  props: {
    buttonText: { type: String, default: null },
    items: { type: Array as new () => IItem[], required: true },
    duration: { type: Number, default: 250 },
    alignMenu: { type: String, validator: horizontalAlignmentValidator, default: 'left' },
    alignYMenu: { type: String, validator: (value: string) => ['top', 'bottom'].includes(value), default: 'bottom' },
    size: { type: String, validator: shirtSizeValidator, default: 'md' },
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
    const onKeyDown = async (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        close();
      } else {
        show.value = true;

        await nextTick();

        menuRef.value.focus();
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
