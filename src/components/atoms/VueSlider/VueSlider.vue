<template>
  <div
    ref="slider"
    role="slider"
    :aria-valuemax="max"
    :aria-valuemin="min"
    :aria-valuenow="currentMin"
    :class="$style.vueSlider"
    @mousedown="moveStart($event)"
    @touchstart="moveStart($event)"
  >
    <ul :class="[$style.values]">
      <li>{{ formatValue(currentMin) }}</li>
      <li v-if="isMultiRange">
        {{ formatValue(currentMax) }}
      </li>
    </ul>

    <div :class="[$style.track, disabled && $style.disabled]">
      <div :class="$style.progress" :style="{ width: progressWidth, marginLeft: progressLeft }" />

      <button
        :class="[$style.handle, $style.leftHandle, currentSlider === 0 && $style.active]"
        :style="{ left: handleLeftPosition }"
        :disabled="disabled"
        :aria-disabled="disabled"
        tabindex="0"
        type="button"
        aria-label="left handle"
        @click="currentSlider = 0"
        @focus="currentSlider = 0"
        @keydown="onKeyDown"
        @keyup="onKeyUp"
        @focusout="currentSlider = null"
      />

      <button
        v-if="isMultiRange"
        :class="[$style.handle, $style.rightHandle, currentSlider === 1 && $style.active]"
        :style="{ left: handleRightPosition }"
        :disabled="disabled"
        :aria-disabled="disabled"
        tabindex="0"
        type="button"
        aria-label="right handle"
        @click="currentSlider = 1"
        @focus="currentSlider = 1"
        @keydown="onKeyDown"
        @keyup="onKeyUp"
        @focusout="currentSlider = null"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from '@vue/composition-api';
import { getDomRef } from '@/composables/get-dom-ref';
import { useEvent } from '@/composables/use-event';
import { IAlgorithm, linear } from './algorithms';

const algorithm: IAlgorithm = linear;

export default defineComponent({
  name: 'VueSlider',
  props: {
    disabled: { type: Boolean, default: false },
    min: { type: Number, required: true },
    max: { type: Number, required: true },
    value: { type: Array, required: true },
    formatValue: {
      type: Function,
      default: (value: number) => {
        return value;
      },
    },
    keyboardStepInterval: { type: Number, default: 5 },
  },
  setup(props, { emit }) {
    // TODO: get dynamic handleSize
    const handleSize = computed(() => 24);
    const value = computed<number[]>(() => props.value as number[]);
    const slider = getDomRef(null);
    const sliderBox = ref<DOMRect>(null);
    const currentSlider = ref<number>(null);
    const currentMin = ref(0);
    const currentMax = ref(0);
    const isMultiRange = computed(() => props.value.length > 1);
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
        return `${parseFloat(handleLeftPosition.value)}%`;
      }
    });
    const getClosestHandle = (percentageDiff: number) => {
      const handlePos: number[] = [parseFloat(handleLeftPosition.value), parseFloat(handleRightPosition.value)];
      const startIndex: number = isMultiRange.value ? 1 : 0;

      return handlePos.reduce((closestIdx, _, idx) => {
        const challenger = Math.abs(handlePos[idx] - percentageDiff);
        const current = Math.abs(handlePos[closestIdx] - percentageDiff);
        return challenger < current ? idx : closestIdx;
      }, startIndex);
    };
    const percentageDiff = (e: any) => {
      const positionX: number =
        e.changedTouches && e.changedTouches.length > 0
          ? e.changedTouches[e.changedTouches.length - 1].clientX
          : e.clientX;
      const centerHandle = currentSlider.value === 0 ? handleSize.value : (handleSize.value / 2) * -1;

      return ((positionX - centerHandle - sliderBox.value.left) / sliderBox.value.width) * 100;
    };
    const moving = (e: any) => {
      const value: number = algorithm.getValue(percentageDiff(e), props.min, props.max);
      const padding: number = isMultiRange.value ? 1 : 0;
      let newValue = value;

      if (currentSlider.value === 0 && value >= currentMax.value - padding) {
        newValue = currentMax.value - padding;
      } else if (currentSlider.value === 1 && value <= currentMin.value + padding) {
        newValue = currentMin.value + padding;
      }

      if (currentSlider.value === 0) {
        currentMin.value = newValue;
      } else {
        currentMax.value = newValue;
      }
    };
    const bindEvents = () => {
      document.addEventListener('touchmove', moving, { passive: false });
      document.addEventListener('mousemove', moving);
      document.addEventListener('touchend', moveEnd, { passive: false });
      document.addEventListener('mouseup', moveEnd);
      document.addEventListener('mouseleave', moveEnd);
    };
    const unbindEvents = () => {
      document.removeEventListener('touchmove', moving);
      document.removeEventListener('mousemove', moving);
      document.removeEventListener('touchend', moveEnd);
      document.removeEventListener('mouseup', moveEnd);
      document.removeEventListener('mouseleave', moveEnd);
    };
    const moveStart = (e: any) => {
      if (props.disabled) {
        return;
      }

      if (e.changedTouches && e.changedTouches.length > 1) {
        return;
      }

      currentSlider.value = getClosestHandle(percentageDiff(e));
      moving(e);
      bindEvents();
    };
    const moveEnd = () => {
      if (currentSlider.value === null) {
        return;
      }

      emit('input', [currentMin.value, currentMax.value]);

      setTimeout(() => {
        currentSlider.value = null;
        unbindEvents();
      }, 10);
    };
    const refresh = () => (sliderBox.value = slider.value.getBoundingClientRect());
    const onKeyDown = (e: any) => {
      const padding: number = isMultiRange.value ? 1 : 0;
      let value: number = currentSlider.value === 0 ? currentMin.value : currentMax.value;

      if (e.code === 'ArrowLeft') {
        value = value - props.keyboardStepInterval;
      } else if (e.code === 'ArrowRight') {
        value = value + props.keyboardStepInterval;
      }

      if (value < props.min) {
        currentMin.value = props.min;
        return;
      } else if (value > props.max) {
        currentMax.value = props.max;
        return;
      }

      if (currentSlider.value === 0 && value >= currentMax.value - padding) {
        value = currentMax.value - padding;
      } else if (currentSlider.value === 1 && value <= currentMin.value + padding) {
        value = currentMin.value + padding;
      }
      if (currentSlider.value === 0) {
        currentMin.value = value;
      } else {
        currentMax.value = value;
      }
    };
    const onKeyUp = () => {
      emit('input', [currentMin.value, currentMax.value]);
    };

    watch(
      value,
      () => {
        currentMin.value = value.value[0];
        currentMax.value = isMultiRange.value ? value.value[1] : props.max;
      },
      { immediate: true },
    );

    onMounted(() => {
      useEvent('resize', refresh, ref(window));
      refresh();
    });

    return {
      slider,
      sliderBox,
      currentSlider,
      currentMin,
      currentMax,
      isMultiRange,
      handleLeftPosition,
      handleRightPosition,
      progressLeft,
      progressWidth,
      getClosestHandle,
      percentageDiff,
      moving,
      moveStart,
      moveEnd,
      refresh,
      onKeyDown,
      onKeyUp,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueSlider {
  user-select: none;
  display: flex;
  flex-direction: column;
  padding: $slider-padding;

  .values {
    list-style: none;
    padding: 0 0 $space-16 0;
    display: flex;
    justify-content: space-between;

    li {
      display: inline-flex;
    }
  }

  .track {
    position: relative;
    width: 100%;
    height: $slider-track-height;
    background-color: $slider-track-bg;
    box-shadow: $slider-track-shadow;

    &.disabled {
      opacity: 0.6;
    }

    .progress {
      height: $slider-track-height;
      background: $slider-progress-bg;
    }

    .handle {
      position: absolute;
      top: ($slider-handle-size * 0.5) * -1;
      display: flex;
      padding: 0;
      width: $slider-handle-size;
      height: $slider-handle-size;
      cursor: pointer;
      user-select: none;
      border-radius: 50%;
      box-shadow: $slider-handle-shadow;
      background-color: $slider-handle-bg;
      border: $slider-handle-border;
      transition: $slider-handle-transition;
      transform: translateX(-50%);

      &.active {
        box-shadow: $slider-handle-active-shadow;
      }
    }
  }
}
</style>
