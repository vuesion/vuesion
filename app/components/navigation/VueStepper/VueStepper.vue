<template>
  <vue-columns space="12" :class="$style.VueStepper">
    <vue-column v-for="(step, idx) in steps" :key="idx" align-y="center" :no-grow="idx >= steps.length - 1">
      <vue-columns
        space="12"
        align-y="center"
        :class="[$style.stepAndLine, isActive(idx) && $style.active, isCompleted(idx) && $style.completed]"
      >
        <vue-column no-grow no-shrink>
          <vue-inline
            align-y="center"
            space="8"
            no-wrap
            :tabindex="isInActive(idx) ? -1 : 0"
            :class="$style.step"
            @click="isInActive(idx) ? () => null : $emit('step-click', step.value)"
            @keydown.space.enter.prevent.stop="isInActive(idx) ? () => null : $emit('step-click', step.value)"
          >
            <div :class="$style.indicator">
              <vue-icon-checkmark v-if="isCompleted(idx)" />
              <component :is="`vue-icon-${step.leadingIcon}`" v-else />
            </div>
            <vue-stack space="0" :class="$style.labelAndDescription">
              <vue-text
                look="label"
                weight="semi-bold"
                :color="isInActive(idx) ? 'text-low' : 'text-high'"
                :class="$style.label"
              >
                {{ step.label }}
              </vue-text>
              <vue-text look="support" color="text-low" :class="$style.description">
                {{ step.description }}
              </vue-text>
            </vue-stack>
          </vue-inline>
        </vue-column>
        <vue-column v-if="idx < steps.length - 1">
          <hr :class="$style.line" />
        </vue-column>
      </vue-columns>
    </vue-column>
  </vue-columns>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';
import VueColumns from '~/app/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '~/app/components/layout/VueColumns/VueColumn/VueColumn.vue';
import type { IItem } from '~/interfaces/IItem';
import VueText from '~/app/components/typography/VueText/VueText.vue';
import VueInline from '~/app/components/layout/VueInline/VueInline.vue';
import VueIconCheckmark from '~/app/components/icons/VueIconCheckmark.vue';
import VueStack from '~/app/components/layout/VueStack/VueStack.vue';

// Interface
export interface StepperProps {
  steps: Array<IItem>;
  activeStep: number;
}

const props = defineProps<StepperProps>();
defineEmits(['step-click']);

// Deps
const $style = useCssModule();

// Methods
const isActive = (idx: number) => {
  return idx === props.activeStep;
};
const isCompleted = (idx: number) => {
  return idx < props.activeStep;
};
const isInActive = (idx: number) => {
  return idx > props.activeStep;
};
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.VueStepper {
  .stepAndLine {
    width: 100%;

    .step {
      outline: none !important;
      cursor: pointer;

      &:focus {
        .indicator {
          box-shadow: var(--focused);
        }
      }

      i {
        width: $space-20;
        height: $space-20;
      }

      .indicator {
        height: $space-32;
        width: $space-32;
        min-width: $space-32;
        border-radius: $space-16;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-default-low);
      }
    }

    .line {
      width: 100%;
      border-color: var(--border-default-medium);
    }

    &.active {
      .indicator {
        color: var(--text-default-high);
        background: var(--surface-default-medium);
      }

      @include mediaMax(tabletPortrait) {
        .label,
        .labelAndDescription {
          display: flex;
        }
      }
    }

    &.completed {
      .indicator {
        color: var(--text-default-high);
        background: var(--surface-success-medium);
      }

      .line {
        border-color: var(--text-default-high);
      }
    }

    @include mediaMax(tabletPortrait) {
      .labelAndDescription,
      .description {
        display: none;
      }
    }
  }
}
</style>
