<template>
  <div :class="cssClasses">
    <textarea
      :id="id"
      ref="input"
      v-validate="validation"
      :data-vv-as="placeholder"
      :name="name"
      :required="required"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :class="[value ? $style.hasValue : '']"
      :autofocus="autofocus"
      v-bind="$attrs"
      v-on="{
        ...this.$listeners,
        input: (e) => {
          $emit('input', e.target.value);
        },
      }"
    />
    <span :class="$style.bar" /> <label :for="name"> {{ placeholder }}<sup v-if="required">*</sup> </label>
    <div :class="$style.message">
      {{ messageOrError }}
    </div>
  </div>
</template>

<script lang="ts">
import { Validator } from 'vee-validate';

export default {
  name: 'VueTextarea',
  inheritAttrs: false,
  inject: {
    $validator: {
      default: new Validator({}, {}),
    },
  },
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
    isValid() {
      return this.errors ? this.errors.first(this.name) === undefined : true;
    },
    messageOrError() {
      return this.isValid ? this.message : this.errorMessage;
    },
    cssClasses() {
      const classes = [this.$style.vueTextarea];

      if (this.disabled) {
        classes.push(this.$style.disabled);
      }

      if (!this.isValid) {
        classes.push(this.$style.error);
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
@import '~@/app/shared/design-system';

.vueTextarea {
}
</style>
