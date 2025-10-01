<template>
  <vue-columns space="12" :class="$style.vueStepper">
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
              <vue-text look="label" weight="semi-bold" :color="isInActive(idx) ? 'low' : 'high'" :class="$style.label">
                {{ step.label }}
              </vue-text>
              <vue-text look="support" color="low" :class="$style.description">
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
import VueColumns from '@/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/layout/VueColumns/VueColumn/VueColumn.vue';
import type { IItem } from '#shared/interfaces/ui/IItem';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';
import VueIconCheckmark from '@/components/icons/VueIconCheckmark.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';

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
@use 'assets/design-system/index' as ds;

/* stylelint-disable no-descending-specificity */
.vueStepper {
  .stepAndLine {
    width: 100%;

    .step {
      outline: none !important;
      cursor: pointer;

      .indicator {
        height: ds.$space-32;
        width: ds.$space-32;
        min-width: ds.$space-32;
        border-radius: ds.$space-16;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-default-low);
      }

      i {
        width: ds.$space-20;
        height: ds.$space-20;
      }

      &:focus {
        .indicator {
          box-shadow: var(--focused);
        }
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

      @include ds.media-max(tablet-portrait) {
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

    @include ds.media-max(tablet-portrait) {
      .labelAndDescription,
      .description {
        display: none;
      }
    }
  }
}
</style>
