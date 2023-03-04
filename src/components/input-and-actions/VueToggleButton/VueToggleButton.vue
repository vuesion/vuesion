<template>
  <div :class="[$style.vueToggleButton, $style[size]]">
    <vue-button
      v-for="(item, idx) in items"
      :key="`${item.value}-${idx}`"
      :data-testid="`toggle-button-${item.value}`"
      :aria-label="item.label"
      :title="item.label"
      :size="size"
      :class="$style.button"
      :look="isChecked(item) ? 'primary' : 'outline'"
      @click="$emit('update:modelValue', item)"
    >
      <component :is="`vue-icon-${item.leadingIcon}`" />
    </vue-button>
  </div>
</template>

<script setup lang="ts">
import { IItem } from '~/interfaces/IItem';
import VueButton from '~/components/input-and-actions/VueButton/VueButton.vue';
import { ShirtSize } from '~/components/prop-types';

interface ToggleButtonProps {
  items: Array<IItem>;
  modelValue?: string | boolean | number | IItem | object | any;
  size?: ShirtSize;
}

const props = withDefaults(defineProps<ToggleButtonProps>(), {
  modelValue: undefined,
  size: 'md',
});
defineEmits(['update:modelValue']);
const isChecked = (item: IItem) => {
  if (props.modelValue !== undefined && props.modelValue?.value !== undefined) {
    return props.modelValue.value === item.value;
  } else if (props.modelValue !== undefined) {
    return props.modelValue === item.value;
  } else {
    return false;
  }
};
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueToggleButton {
  display: inline-flex;

  .button {
    aspect-ratio: 1 / 1;
    border-radius: 0;
    border-right-width: 0;

    &:focus {
      z-index: 1;
    }

    &:first-child {
      border-radius: $button-border-radius 0 0 $button-border-radius;
    }

    &:last-child {
      border-radius: 0 $button-border-radius $button-border-radius 0;
      border-right-width: 1px;
    }
  }
}
</style>
