<template>
  <div
    :tabindex="disabled ? null : 0"
    :class="[$style.vueToggle, disabled && $style.disabled, errors.length > 0 && $style.error, $attrs.class]"
    @click.stop.prevent="onClick"
    @keypress.space.stop.prevent="onClick"
  >
    <div :class="$style.wrapper" @click.stop.prevent="onClick">
      <input
        :id="id"
        :name="name"
        :value="value"
        :checked="value"
        type="checkbox"
        :required="required"
        :disabled="disabled"
        v-bind="$attrs"
        tabindex="-1"
        data-testid="toggle-input"
      />
      <div :class="$style.toggle" @click.stop.prevent="onClick">
        <div :class="$style.handle" :aria-checked="value ? 'true' : 'false'" role="checkbox" />
      </div>
      <vue-text :for="id" as="label" weight="semi-bold" color="text-medium" tabindex="-1">
        <slot name="label">
          {{ label }}
        </slot>
      </vue-text>
    </div>
    <vue-text v-if="description" :class="$style.description" as="div">
      <slot name="description">
        {{ description }}
      </slot>
    </vue-text>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useField } from 'vee-validate';
import VueText from '~/components/typography/VueText/VueText.vue';

const props = defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
  label: { type: String, required: true },
  description: { type: String, default: null },
  required: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  modelValue: { type: Boolean, default: false },
});
const emit = defineEmits(['click', 'update:modelValue']);
const rules = computed(() => (props.required ? 'required' : null));
const { errors, value, validate } = useField<boolean>(props.id, rules, {
  initialValue: props.modelValue,
  type: 'checkbox',
});
const onClick = async () => {
  if (!props.disabled) {
    value.value = !value.value;

    await validate({ mode: 'force' });

    emit('update:modelValue', value);
    emit('click', value);
  }
};
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<style lang="scss" module>
@import 'assets/_design-system';
.vueToggle {
  display: inline-block;
  position: relative;
  cursor: pointer;
  user-select: none;
  outline: none;

  .wrapper {
    display: inline-flex;
    align-items: center;
  }

  .description {
    padding-left: $toggle-width + $checkbox-label-gap;
    line-height: $space-20;
  }

  .toggle {
    width: $toggle-width;
    height: $toggle-height;
    border-radius: $toggle-border-radius;
    background: $toggle-bg;
    display: inline-flex;
    align-items: center;

    .handle {
      position: relative;
      width: $toggle-handle-width;
      height: $toggle-handle-height;
      border-radius: $toggle-handle-border-radius;
      background: $toggle-handle-bg;
      left: $space-2;
    }
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ .toggle {
      background-color: $toggle-bg-checked !important;

      .handle {
        background: $toggle-handle-bg-checked !important;
        left: $toggle-width - ($toggle-handle-width + $space-2);
      }
    }
  }

  label {
    cursor: pointer;
    padding-left: $toggle-label-gap;
  }

  &:hover {
    input ~ .toggle {
      background-color: $toggle-bg-hover;

      .handle {
        background: $toggle-handle-bg-hover;
      }
    }
  }

  &:focus {
    .toggle {
      box-shadow: $toggle-outline;
    }
  }

  &.disabled {
    opacity: $toggle-disabled-opacity;
  }

  &.error {
    .description,
    label {
      color: $toggle-error-color;
    }
    .toggle {
      background: $toggle-bg-error;
      .handle {
        background: $toggle-handle-bg-error;
      }
    }
    &:hover {
      input ~ .toggle {
        background: $toggle-bg-error;
        .handle {
          background: $toggle-handle-bg-error;
        }
      }
    }
  }
}
</style>
