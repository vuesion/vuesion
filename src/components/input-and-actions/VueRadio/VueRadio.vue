<template>
  <div
    :tabindex="disabled ? null : 0"
    :class="[$style.VueRadio, disabled && $style.disabled]"
    @click.stop.prevent="onClick"
    @keypress.space.stop.prevent="onClick"
  >
    <div :class="$style.wrapper">
      <input
        :id="id"
        :name="name"
        type="radio"
        :checked="value === id ? 'checked' : null"
        :required="required"
        :disabled="disabled"
        v-bind="$attrs"
        :value="id"
        tabindex="-1"
      />
      <div :class="$style.checkmark">
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6">
          <circle cx="3" cy="3" r="3" fill="currentColor" />
        </svg>
      </div>
      <vue-text :for="id" as="label" weight="semi-bold" color="text-medium" tabindex="-1" v-html="label" />
    </div>
    <vue-text v-if="description" :class="$style.description" as="div">
      {{ description }}
    </vue-text>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import VueText from '@/components/typography/VueText/VueText.vue';

export default defineComponent({
  name: 'VueRadio',
  components: { VueText },
  inheritAttrs: false,
  model: {
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
    value: { type: String, default: null },
  },
  setup(props, { emit }) {
    const onClick = (e: Event) => {
      e.preventDefault();

      if (!props.disabled) {
        emit('click', props.id);
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
.VueRadio {
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
    padding-left: $radio-checkmark-size + $radio-label-gap;
    line-height: $space-20;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ .checkmark {
      background-color: $radio-checkmark-bg-checked !important;
      border: $radio-checkmark-border-checked !important;
      color: $radio-checkmark-color !important;
    }

    &:checked ~ .checkmark > svg {
      display: block;
    }
  }

  .checkmark {
    height: $radio-checkmark-size;
    width: $radio-checkmark-size;
    background-color: $radio-checkmark-bg;
    color: $radio-checkmark-bg;
    border-radius: $radio-checkmark-border-radius;
    border: $radio-checkmark-border;
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      width: $radio-checkmark-size - ($space-8 + $space-2);
      height: $radio-checkmark-size - ($space-4 + $space-2);
    }
  }

  label {
    cursor: pointer;
    padding-left: $space-8;
  }

  &:hover {
    input ~ .checkmark {
      background-color: $radio-checkmark-bg-hover;
      border: $radio-checkmark-border-hover;
    }
  }

  &:focus {
    .checkmark {
      box-shadow: $radio-checkmark-outline;
    }
  }

  &.disabled {
    opacity: $radio-disabled-disabled-opacity;
  }
}
</style>
