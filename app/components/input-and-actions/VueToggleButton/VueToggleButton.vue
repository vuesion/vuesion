<template>
  <vue-inline space="0" :class="[$style.vueToggleButton, $style[size]]">
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
  </vue-inline>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';
import type { IItem } from '~~/interfaces/IItem';
import VueButton from '~/app/components/input-and-actions/VueButton/VueButton.vue';
import type { ShirtSize } from '~/app/components/prop-types';
import VueInline from '~/app/components/layout/VueInline/VueInline.vue';

// Interface
interface ToggleButtonProps {
  items: Array<IItem>;
  modelValue?: string | boolean | number | IItem | object | any;
  size?: ShirtSize;
}
interface ToggleButtonEmits {
  (e: 'update:modelValue', value: IItem): void;
}
const props = withDefaults(defineProps<ToggleButtonProps>(), {
  modelValue: undefined,
  size: 'md',
});
defineEmits<ToggleButtonEmits>();

// Deps
const $style = useCssModule();

// Methods
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
