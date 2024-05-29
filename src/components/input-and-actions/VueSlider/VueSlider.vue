<template>
  <div
    role="slider"
    :aria-valuemax="max"
    :aria-valuemin="min"
    :aria-valuenow="currentMin"
    :aria-label="label"
    :class="[$style.vueSlider, disabled && $style.disabled]"
  >
    <vue-columns :space="0" :class="$style.slider">
      <vue-column align-y="center" :can-grow="false">
        <vue-text :class="[$style.label, $style.min]">{{ formatValue(currentMin) }}</vue-text>
      </vue-column>

      <vue-column align-y="center" width="10/12" :data-testid="id" @mousedown="moveStart" @touchstart="moveStart">
        <div ref="sliderRef" :class="$style.track">
          <div :class="$style.progress" :style="{ width: progressWidth, marginLeft: progressLeft }" />

          <button
            v-if="isMultiRange"
            ref="leftHandleRef"
            :data-testid="`handle-${id}-0`"
            :class="$style.handle"
            :style="{ left: handleLeftPosition }"
            :disabled="disabled"
            :aria-disabled="disabled"
            tabindex="0"
            type="button"
            aria-label="left handle"
            @focus.prevent.stop="currentSlider = 0"
            @keydown.left.right.prevent.stop="onKeyDown"
            @keyup.left.right.prevent.stop="onKeyUp"
            @focusout.prevent.stop="currentSlider = null"
          />

          <button
            ref="rightHandleRef"
            :data-testid="`handle-${id}-1`"
            :class="$style.handle"
            :style="{ left: handleRightPosition }"
            :disabled="disabled"
            :aria-disabled="disabled"
            tabindex="0"
            type="button"
            aria-label="right handle"
            @focus.prevent.stop="currentSlider = 1"
            @keydown.left.right.prevent.stop="onKeyDown"
            @keyup.left.right.prevent.stop="onKeyUp"
            @focusout.prevent.stop="currentSlider = null"
          />
        </div>
      </vue-column>

      <vue-column align-y="center" :can-grow="false">
        <vue-text :class="[$style.label, $style.max]">{{ formatValue(currentMax) }}</vue-text>
      </vue-column>
    </vue-columns>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, useCssModule, watch } from 'vue';
import { useEventListener } from '@vueuse/core';
import type { IAlgorithm } from './algorithms';
import { linear } from './algorithms';
import { getDomRef } from '~/composables/get-dom-ref';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueColumns from '~/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '~/components/layout/VueColumns/VueColumn/VueColumn.vue';

const algorithm: IAlgorithm = linear;

// Interface
interface SliderProps {
  id: string;
  label: string;
  min: number;
  max: number;
  modelValue: [number, number?];
  formatValue?: (value: number) => number;
  keyboardStepInterval?: number;
  disabled?: boolean;
}
interface SliderEmits {
  (e: 'update:modelValue', value: [number, number?]): void;
}
const props = withDefaults(defineProps<SliderProps>(), {
  formatValue: (value: number) => {
    return value;
  },
  keyboardStepInterval: 5,
});
const emit = defineEmits<SliderEmits>();

// Deps
const $style = useCssModule();

// DOM refs
const sliderRef = getDomRef<HTMLDivElement>(null);
const leftHandleRef = getDomRef<HTMLButtonElement>(null);
const rightHandleRef = getDomRef<HTMLButtonElement>(null);

// computed
const range = computed<number[]>(() => props.modelValue as number[]);
const isMultiRange = computed(() => props.modelValue.length > 1);
const handleLeftPosition = computed(() => `${algorithm.getPosition(currentMin.value, props.min, props.max)}%`);
const handleRightPosition = computed(() => `${algorithm.getPosition(currentMax.value, props.min, props.max)}%`);
const progressLeft = computed(() => {
  if (isMultiRange.value) {
    return `${algorithm.getPosition(currentMin.value, props.min, props.max)}%`;
  } else {
    return '0';
  }
});
const progressWidth = computed(() => {
  if (isMultiRange.value) {
    return `${parseFloat(handleRightPosition.value) - parseFloat(handleLeftPosition.value)}%`;
  } else {
    return `${parseFloat(handleRightPosition.value)}%`;
  }
});
// refs
const handleSize = ref(0);
const sliderBox = ref<Partial<DOMRect>>({
  bottom: 0,
  left: 0,
  top: 0,
  height: 0,
  right: 0,
  x: 0,
  y: 0,
  width: 0,
});
const currentSlider = ref<number | null>(-1);
const currentMin = ref(0);
const currentMax = ref(0);

// private functions
const getClosestHandle = (percentageDiff: number) => {
  if (isMultiRange.value === false) {
    return 1;
  }

  const handlePos: number[] = [parseFloat(handleLeftPosition.value), parseFloat(handleRightPosition.value)];
  const startIndex = 1;

  return handlePos.reduce((closestIdx, _, idx) => {
    const challenger = Math.abs(handlePos[idx] - percentageDiff);
    const current = Math.abs(handlePos[closestIdx] - percentageDiff);
    return challenger < current ? idx : closestIdx;
  }, startIndex);
};
const calculatePercentageDiff = (e: any) => {
  /* c8 ignore start */
  const positionX: number =
    e.changedTouches && e.changedTouches.length > 0 ? e.changedTouches[e.changedTouches.length - 1].clientX : e.clientX;

  if (sliderBox.value?.left !== undefined && sliderBox.value?.width !== undefined) {
    return ((positionX - sliderBox.value.left) / sliderBox.value.width) * 100;
  }
  /* c8 ignore end */
};
const bindEvents = () => {
  document.addEventListener('touchend', moveEnd, { passive: false });
  document.addEventListener('mouseup', moveEnd);
  document.addEventListener('mouseleave', moveEnd);
  document.addEventListener('touchmove', moving, { passive: false });
  document.addEventListener('mousemove', moving);
};
const unbindEvents = () => {
  document.removeEventListener('touchend', moveEnd);
  document.removeEventListener('mouseup', moveEnd);
  document.removeEventListener('mouseleave', moveEnd);
  document.removeEventListener('touchmove', moving);
  document.removeEventListener('mousemove', moving);
};
const emitChange = () => {
  if (isMultiRange.value) {
    emit('update:modelValue', [currentMin.value, currentMax.value]);
  } else {
    emit('update:modelValue', [currentMax.value]);
  }
};
const refresh = () => (sliderBox.value = sliderRef.value.getBoundingClientRect());
const updateRangeIfValid = (newValue: number) => {
  if (newValue < props.min) {
    currentMin.value = props.min;
    return;
  } else if (newValue > props.max) {
    currentMax.value = props.max;
    return;
  }

  if (currentSlider.value === 0 && newValue > currentMax.value) {
    newValue = currentMax.value;
  } else if (currentSlider.value === 1 && newValue <= currentMin.value) {
    newValue = currentMin.value;
  }

  if (currentSlider.value === 0) {
    currentMin.value = newValue;
  } else {
    currentMax.value = newValue;
  }
};

// event handler
const moveStart = (e: any) => {
  if (props.disabled) {
    return;
  }
  /* c8 ignore start */
  if (e.changedTouches && e.changedTouches.length > 1) {
    return;
  }

  // I don't know exactly why this is needed but without the timeout
  // currentSlider.value can become null after assigning the events
  // that means checking for null value in moving and moveEnd
  // this solution seems the easiest workaround without knowing the details fo this issue
  setTimeout(() => {
    currentSlider.value = getClosestHandle(calculatePercentageDiff(e));
    bindEvents();
    moving(e);
  }, 1);
  /* c8 ignore end */
};
const moving = (e: any) => {
  updateRangeIfValid(algorithm.getValue(calculatePercentageDiff(e), props.min, props.max));
};
const moveEnd = () => {
  unbindEvents();
  emitChange();
};
const onKeyDown = (e: any) => {
  let newValue: number = currentSlider.value === 0 ? currentMin.value : currentMax.value;

  if (e.code === 'ArrowLeft') {
    newValue = newValue - props.keyboardStepInterval;
  } else {
    newValue = newValue + props.keyboardStepInterval;
  }

  updateRangeIfValid(newValue);
};
const onKeyUp = () => {
  emitChange();
};

// watcher
watch(
  range,
  () => {
    currentMin.value = isMultiRange.value ? range.value[0] : props.min;
    currentMax.value = isMultiRange.value ? range.value[1] : range.value[0];
  },
  { immediate: true },
);

onMounted(() => {
  handleSize.value = rightHandleRef.value.clientWidth;
  useEventListener(window, 'resize', refresh);
  refresh();
});
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueSlider {
  user-select: none;
  height: $slider-height;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: $space-8;

  &.disabled {
    cursor: not-allowed;

    .slider {
      .track {
        opacity: $slider-disabled-opacity;

        .handle {
          cursor: not-allowed;
          &:hover {
            width: $slider-handle-size;
            height: $slider-handle-size;
          }
        }
      }
    }
  }

  .slider {
    position: relative;

    .label {
      width: $slider-label-width;

      &.min {
        text-align: left;
      }

      &.max {
        text-align: right;
      }
    }

    .track {
      position: relative;
      width: 100%;
      height: $slider-track-height;
      background-color: $slider-track-bg;
      border-radius: $slider-track-border-radius;

      .progress {
        height: $slider-track-height;
        background: $slider-progress-bg;
        border-radius: $slider-progress-border-radius;
      }

      .handle {
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: $slider-handle-size;
        height: $slider-handle-size;
        padding: 0;
        cursor: pointer;
        user-select: none;
        border-radius: $slider-handle-border-radius;
        background-color: $slider-handle-bg;
        border: none;
        outline: none;

        &:hover {
          width: $slider-handle-size-hover;
          height: $slider-handle-size-hover;
        }

        &:focus {
          box-shadow: $slider-handle-active-shadow;
        }
      }
    }
  }
}
</style>
