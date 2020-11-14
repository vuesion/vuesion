<template>
  <ValidationProvider v-slot="{ invalid }" ref="validator" :vid="id" :name="name" :rules="validation">
    <div
      :class="[
        $style.vueSelect,
        multiSelect && $style.multiSelect,
        disabled && $style.disabled,
        invalid && $style.error,
      ]"
    >
      <select
        :id="id"
        :title="label"
        :multiple="multiSelect"
        :required="required"
        :disabled="disabled"
        v-bind="$attrs"
        v-on="{
          ...$listeners,
          input: onInput,
        }"
      >
        <option v-for="(option, idx) in items" :key="idx" :value="option.value" :selected="isSelected(option)">
          {{ option.label }}
        </option>
      </select>

      <i v-if="!multiSelect" :class="$style.icon" />
      <span :class="$style.bar" />
      <label :for="id">{{ label }}<sup v-if="required">*</sup></label>
    </div>
  </ValidationProvider>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';
import { ValidationProvider } from 'vee-validate';
import { IItem } from '@/components/IItem';

export default defineComponent({
  name: 'VueSelect',
  components: {
    ValidationProvider,
  },
  inheritAttrs: false,
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    label: { type: String, required: true },
    required: { type: Boolean, default: false },
    validation: { type: [String, Object], default: null },
    value: { type: [String, Number, Boolean, Object], default: null },
    disabled: { type: Boolean, default: false },
    items: { type: Array, required: true },
    multiSelect: { type: Boolean, default: false },
  },
  setup(props, { emit }) {
    const currentValueAsArray = computed<string[]>(() => props.value?.toString().split('|'));
    const isSelected = (option: IItem) => currentValueAsArray.value?.includes(option.value);
    const onInput = (e: Event) => {
      const selected: IItem[] = [];
      const target: HTMLSelectElement = e.target as HTMLSelectElement;
      const length: number = target.options.length;

      for (let i = 0; i < length; i++) {
        const option: any = target.options[i];
        if (option.selected) {
          selected.push({ label: option.text, value: option.value });
        }
      }

      emit('input', selected.map((option) => option.value).join('|'));
    };

    return {
      isSelected,
      onInput,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';
.vueSelect {
  &.error {
    color: red;
  }
}
</style>
