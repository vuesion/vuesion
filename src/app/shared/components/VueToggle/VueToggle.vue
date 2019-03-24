<template>
  <div :class="cssClasses">
    <input
      ref="input"
      type="checkbox"
      :name="name"
      :id="id"
      :checked="isChecked"
      :required="required"
      :disabled="disabled"
      v-validate="validation"
      @change.prevent="onClick"
      @focus="focus = true"
      @blur="focus = false"
      v-bind="$attrs"
    />
    <div :class="$style.container" @click="onClick">
      <div :class="$style.handle" :aria-checked="isChecked ? 'true' : 'false'" role="checkbox" />
    </div>
    <label :for="name" v-html="label" />
  </div>
</template>

<script lang="ts">
import { Validator } from 'vee-validate';

export default {
  name: 'VueToggle',
  inheritAttrs: false,
  inject: {
    $validator: {
      default: new Validator({}, {}),
    },
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
    },
    value: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    required: {
      type: Boolean,
    },
    validation: {
      type: String,
    },
    label: {
      type: String,
      required: true,
    },
  },
  data(): any {
    return {
      focus: false,
    };
  },
  computed: {
    isChecked() {
      return this.checked || this.value;
    },
    cssClasses() {
      const classes: string[] = [this.$style.vueToggle];

      if (this.focus) {
        classes.push(this.$style.focus);
      }

      if (this.isChecked) {
        classes.push(this.$style.checked);
      }

      if (this.disabled) {
        classes.push(this.$style.disabled);
      }

      return classes;
    },
  },
  methods: {
    onClick(e: Event) {
      e.preventDefault();
      this.$refs.input.focus();

      if (!this.disabled) {
        this.$emit('click', e);
        this.$emit('input', !Boolean(this.value));
      }
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.vueToggle {
  display: inline-flex;
  user-select: none;
  cursor: pointer;
  align-items: baseline;
  margin: $toggle-margin;

  input {
    position: absolute;
    opacity: 0;
  }

  label {
    position: relative;
    margin-left: $space-12;
    cursor: pointer;
  }
}

.container {
  border-radius: $toggle-border-radius;
  width: $toggle-width;
  height: $toggle-height;
  background: $toggle-bg;
  position: relative;
  transition: $toggle-transition;
  box-shadow: $toggle-shadow;
}

.handle {
  border-radius: $toggle-handle-border-radius;
  width: $toggle-handle-size;
  height: $toggle-handle-size;
  background: $toggle-handle-bg;
  box-shadow: $toggle-handle-shadow;
  position: absolute;
  top: -($toggle-handle-size * 0.25);
  transition: $toggle-transition;
  transform: translateX(0);
}

.checked {
  .handle {
    transform: translateX($toggle-width - $toggle-handle-size);
    background: $toggle-handle-checked-bg;
  }
}

.focus {
  .handle {
    box-shadow: $toggle-handle-focused-shadow;
  }
}

.disabled {
  &.focus {
    .handle {
      box-shadow: none;
    }
  }

  .container {
    background: $toggle-disabled-bg;
  }

  .handle {
    background: $toggle-handle-disabled-bg;
  }
}
</style>
