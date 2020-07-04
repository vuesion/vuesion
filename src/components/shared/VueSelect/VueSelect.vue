<template>
  <ValidationProvider v-slot="{ errors, valid }" :vid="id" :name="name" :rules="validation">
    <div :class="[...cssClasses, !valid ? $style.error : '']">
      <select
        :id="id"
        :title="placeholder"
        :multiple="multiple"
        :required="required"
        :disabled="disabled"
        :autocomplete="autocomplete"
        v-bind="$attrs"
        v-on="{
          // ...this.$listeners,
          input: onInput,
        }"
      >
        <option v-for="(option, idx) in selectOptions" :key="idx" :value="option.value" :selected="isSelected(option)">
          {{ option.label }}
        </option>
      </select>

      <i v-if="!multiple" :class="$style.icon" />
      <span :class="$style.bar" />
      <label :for="id">{{ placeholder }}<sup v-if="required">*</sup></label>
    </div>
  </ValidationProvider>
</template>

<script lang="ts">
import { ValidationProvider } from 'vee-validate';
import { IAutocompleteOption } from '../VueAutocomplete/IAutocompleteOption';

export interface IVueSelectOption {
  label: string;
  value: string;
}

export default {
  name: 'VueSelect',
  components: {
    ValidationProvider,
  },
  inheritAttrs: false,
  props: {
    name: { type: String, required: true },
    id: { type: String, required: true },
    options: { type: Array, required: true },
    value: { type: [String, Number], default: '' },
    multiple: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    validation: { type: String, default: '' },
    autocomplete: { type: String, default: 'off' },
    placeholder: { type: String, default: '' },
  },
  data(): { selectOptions: IAutocompleteOption[] } {
    return {
      selectOptions: [],
    };
  },
  computed: {
    cssClasses() {
      const classes = [this.$style.vueSelect];

      if (this.multiple) {
        classes.push(this.$style.multiple);
      }

      if (this.disabled) {
        classes.push(this.$style.disabled);
      }

      if (this.value.length > 0) {
        classes.push(this.$style.hasValue);
      }

      return classes;
    },
    currentValueAsArray(): string[] {
      return this.value.split('|');
    },
  },
  watch: {
    options: {
      immediate: true,
      handler(options: IAutocompleteOption[]) {
        const selectOptions = [...options];

        if (this.multiple === false) {
          selectOptions.unshift({ label: '', value: '' });
        }

        this.selectOptions = selectOptions;
      },
    },
  },
  methods: {
    isSelected(option: IVueSelectOption): boolean {
      return this.currentValueAsArray.includes(option.value);
    },
    onInput(e: Event) {
      const selected: IVueSelectOption[] = [];
      const target: HTMLSelectElement = e.target as HTMLSelectElement;
      const length: number = target.options.length;

      for (let i = 0; i < length; i++) {
        const option: any = target.options[i];
        if (option.selected) {
          selected.push({ label: option.text, value: option.value });
        }
      }

      this.$emit('input', selected.map((option: IVueSelectOption) => option.value).join('|'));
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/assets/design-system';
</style>
