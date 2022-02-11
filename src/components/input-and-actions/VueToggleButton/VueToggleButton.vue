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
      @click="$emit('input', item)"
    >
      <component :is="`vue-icon-${item.leadingIcon}`" />
    </vue-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { IItem } from '@/interfaces/IItem';
import { shirtSizeValidator } from '@/components/prop-validators';
import VueButton from '@/components/input-and-actions/VueButton/VueButton.vue';

export default defineComponent({
  name: 'VueToggleButton',
  components: { VueButton },
  props: {
    value: { type: [String, Boolean, Number, Object, Object as () => IItem], default: undefined },
    items: { type: Array as () => Array<IItem>, required: true },
    size: { type: String, validator: shirtSizeValidator, default: 'md' },
  },
  setup(props) {
    const isChecked = (item: IItem) => {
      if (props.value !== undefined && props.value?.value !== undefined) {
        return props.value.value === item.value;
      } else if (props.value !== undefined) {
        return props.value === item.value;
      } else {
        return false;
      }
    };

    return {
      isChecked,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

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
