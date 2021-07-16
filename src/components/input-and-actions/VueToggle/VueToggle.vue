<template>
  <ValidationProvider
    ref="validator"
    :class="[$style.vueToggle, disabled && $style.disabled]"
    :aria-label="label"
    :vid="id"
    :name="name"
    :rules="validation"
    tag="div"
    :tabindex="disabled ? null : 0"
    @click.native.stop.prevent="onClick"
    @keypress.space.native.stop.prevent="onClick"
  >
    <div :class="$style.wrapper" @click.stop.prevent="onClick">
      <input
        :id="id"
        type="checkbox"
        :checked="checked"
        :required="required"
        :disabled="disabled"
        v-bind="$attrs"
        :value="checked"
        tabindex="-1"
      />
      <div :class="$style.toggle" @click.stop.prevent="onClick">
        <div :class="$style.handle" :aria-checked="checked ? 'true' : 'false'" role="checkbox" />
      </div>
      <vue-text :for="id" as="label" weight="semi-bold" color="text-medium" tabindex="-1" v-html="label" />
    </div>
    <vue-text v-if="description" :class="$style.description" as="div">
      {{ description }}
    </vue-text>
  </ValidationProvider>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { ValidationProvider } from 'vee-validate';
import VueText from '@/components/typography/VueText/VueText.vue';

export default defineComponent({
  name: 'VueToggle',
  components: { VueText, ValidationProvider },
  inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'click',
  },
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    label: { type: String, required: true },
    description: { type: String, default: null },
    required: { type: Boolean, default: false },
    validation: { type: [String, Object], default: null }, // TODO: needs fine tuning
    disabled: { type: Boolean, default: false },
    checked: { type: Boolean, default: false },
  },
  setup(props, { emit }) {
    const onClick = (e: Event) => {
      e.preventDefault();

      if (!props.disabled) {
        emit('click', !props.checked);
      }
    };

    return {
      onClick,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';
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
}
</style>
