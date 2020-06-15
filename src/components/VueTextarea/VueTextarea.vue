<template>
  <ValidationProvider v-slot="{ errors, valid }" :vid="id" :name="placeholder" :rules="validation">
    <div :class="[...cssClasses, !valid ? $style.error : '']">
      <textarea
        :id="id"
        ref="input"
        :required="required"
        :value="value"
        :disabled="disabled"
        :readonly="readonly"
        :class="[value ? $style.hasValue : '']"
        :autofocus="autofocus"
        v-bind="$attrs"
        v-on="{
          input: (e) => {
            $emit('input', e.target.value);
          },
        }"
      />
      <span :class="$style.bar" /> <label :for="name"> {{ placeholder }}<sup v-if="required">*</sup> </label>
      <div :class="$style.message">
        {{ valid ? message : errors[0] }}
      </div>
    </div>
  </ValidationProvider>
</template>

<script lang="ts">
import { ValidationProvider } from 'vee-validate';

export default {
  name: 'VueTextarea',
  components: { ValidationProvider },
  inheritAttrs: false,
  props: {
    name: { type: String, required: true },
    id: { type: String, required: true },
    placeholder: { type: String, default: '' },
    required: { type: Boolean, default: false },
    autofocus: { type: Boolean, default: false },
    value: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    message: { type: String, default: '' },
    errorMessage: { type: String, default: '' },
    validation: { type: String, default: '' },
  },
  data(): any {
    return {
      observer: null,
    };
  },
  computed: {
    cssClasses() {
      const classes = [this.$style.vueTextarea];

      if (this.disabled) {
        classes.push(this.$style.disabled);
      }

      return classes;
    },
  },
  mounted() {
    if ((window as any).IntersectionObserver) {
      this.handleObserver();
    }
  },
  beforeDestroy() {
    this.observer = null;
  },
  methods: {
    handleObserver() {
      this.observer = new IntersectionObserver(
        () => {
          if (this.autofocus && this.$refs.input) {
            this.$refs.input.focus();
          }
        },
        { root: this.$refs.input.parentElement, threshold: 1 },
      );
      this.observer.observe(this.$refs.input);
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/assets/design-system';
</style>
