<template>
  <div
    :class="[$style.vueToggle, focus && $style.focus, isChecked && $style.checked, disabled && $style.disabled]"
    :aria-label="label"
  >
    <ValidationProvider ref="validator" :vid="name" :name="name" :rules="validation">
      <input
        :id="id"
        ref="input"
        type="checkbox"
        :checked="isChecked"
        :required="required"
        :disabled="disabled"
        v-bind="$attrs"
        @change.prevent="onClick"
        @focus="focus = true"
        @blur="focus = false"
      />
      <div :class="$style.container" @click.prevent="onClick">
        <div :class="$style.handle" :aria-checked="isChecked ? 'true' : 'false'" role="checkbox" />
      </div>
    </ValidationProvider>
    <label :for="name" v-html="label" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api';
import { ValidationProvider } from 'vee-validate';
import { getDomRef } from '@/composables/get-dom-ref';

export default defineComponent({
  name: 'VueToggle',
  components: { ValidationProvider },
  inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'click',
  },
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    label: { type: String, required: true },
    required: { type: Boolean, default: false },
    validation: { type: [String, Object], default: null },
    disabled: { type: Boolean, default: false },
    checked: { type: Boolean, default: false },
  },
  setup(props, { emit }) {
    const input = getDomRef(null);
    const focus = ref(false);
    const isChecked = computed(() => props.checked);
    const onClick = () => {
      input.value.focus();

      if (!props.disabled) {
        emit('click', !props.checked);
      }
    };

    return {
      input,
      focus,
      isChecked,
      onClick,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueToggle {
  display: inline-flex;
  user-select: none;
  cursor: pointer;
  align-items: baseline;

  input {
    position: absolute;
    opacity: 0;
  }

  label {
    position: relative;
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
