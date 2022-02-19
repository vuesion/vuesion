<template>
  <div
    role="slider"
    :aria-valuemax="max"
    :aria-valuemin="min"
    :aria-valuenow="currentMin"
    :class="[$style.vueSlider, disabled && $style.disabled]"
  >
    <vue-text weight="semi-bold" color="text-medium" as="label">{{ label }}</vue-text>

    <vue-columns space="16" :class="$style.slider">
      <vue-column align-y="center" width="content">
        <vue-input
          :id="`handle-input-${id}-0`"
          :data-testid="`handle-input-${id}-0`"
          :name="`handle-input-${id}-0`"
          label="minimum value"
          :value="formatValue(currentMinModel)"
          :readonly="isMultiRange === false"
          :disabled="disabled"
          hide-label
          hide-description
          :class="$style.valueInput"
          @input="changeCurrentMin"
          @blur="currentMinModel = currentMin"
        />
      </vue-column>

      <vue-column align-y="center" :data-testid="id" @mousedown.native="moveStart" @touchstart.native="moveStart">
        <div ref="slider" :class="$style.track">
          <div :class="$style.progress" :style="{ width: progressWidth, marginLeft: progressLeft }" />

          <button
            v-if="isMultiRange"
            ref="leftHandle"
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
            ref="rightHandle"
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

      <vue-column align-y="center" width="content">
        <vue-input
          :id="`handle-input-${id}-1`"
          :name="`handle-input-${id}-1`"
          :data-testid="`handle-input-${id}-1`"
          label="maximum value"
          :value="formatValue(currentMaxModel)"
          :disabled="disabled"
          hide-label
          hide-description
          :class="$style.valueInput"
          @input="changeCurrentMax"
          @blur="currentMaxModel = currentMax"
        />
      </vue-column>
    </vue-columns>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from '@vue/composition-api';
import { getDomRef } from '@/composables/get-dom-ref';
import { useEvent } from '@/composables/use-event';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueColumns from '@/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueInput from '@/components/input-and-actions/VueInput/VueInput.vue';
import { IAlgorithm, linear } from './algorithms';

const algorithm: IAlgorithm = linear;

export default defineComponent({
  name: 'VueSlider',
  components: { VueInput, VueColumn, VueColumns, VueText },
  model: {
    prop: 'range',
    event: 'change',
  },
  props: {
    id: { type: String, required: true },
    label: { type: String, required: true },
    min: { type: Number, required: true },
    max: { type: Number, required: true },
    range: { type: Array, required: true },
    formatValue: {
      type: Function,
      default: (value: number) => {
        return value;
      },
    },
    keyboardStepInterval: { type: Number, default: 5 },
    disabled: { type: Boolean, default: false },
  },
  setup(props, { emit }) {
    // DOM refs
    const slider = getDomRef(null);
    const leftHandle = getDomRef(null);
    const rightHandle = getDomRef(null);

    // computed
    const range = computed<number[]>(() => props.range as number[]);
    const isMultiRange = computed(() => props.range.length > 1);
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
    const sliderBox = ref<DOMRect>(null);
    const currentSlider = ref<number>(null);
    const currentMin = ref(0);
    const currentMax = ref(0);
    const currentMinModel = ref('0');
    const currentMaxModel = ref('0');

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
      const positionX: number =
        e.changedTouches && e.changedTouches.length > 0
          ? e.changedTouches[e.changedTouches.length - 1].clientX
          : e.clientX;

      return ((positionX - sliderBox.value.left) / sliderBox.value.width) * 100;
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
        emit('change', [currentMin.value, currentMax.value]);
      } else {
        emit('change', [currentMax.value]);
      }
    };
    const isNewInputValueValid = (value: string, sliderIndex: number) => {
      const newValue = parseInt(value);

      if (isNaN(newValue) || newValue < props.min || newValue > props.max) {
        return false;
      }

      if (sliderIndex === 0 && newValue > currentMax.value) {
        return false;
      } else if (sliderIndex === 1 && newValue < currentMin.value) {
        return false;
      }

      return true;
    };
    const refresh = () => (sliderBox.value = slider.value.getBoundingClientRect());
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
    const changeCurrentMin = (value: string) => {
      currentMinModel.value = value;

      if (value.length === 0) {
        return;
      }

      if (isNewInputValueValid(value, 0)) {
        currentMin.value = parseInt(value);
        emitChange();
      }
    };
    const changeCurrentMax = (value: string) => {
      currentMaxModel.value = value;

      if (value.length === 0) {
        return;
      }

      if (isNewInputValueValid(value, 1)) {
        currentMax.value = parseInt(value);
        emitChange();
      }
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
    watch(currentMin, () => (currentMinModel.value = currentMin.value.toString()), { immediate: true });
    watch(currentMax, () => (currentMaxModel.value = currentMax.value.toString()), { immediate: true });

    onMounted(() => {
      handleSize.value = rightHandle.value.clientWidth;
      useEvent('resize', refresh, ref(window));
      refresh();
    });

    return {
      slider,
      leftHandle,
      rightHandle,
      currentSlider,
      currentMin,
      currentMax,
      currentMinModel,
      currentMaxModel,
      isMultiRange,
      handleLeftPosition,
      handleRightPosition,
      progressLeft,
      progressWidth,
      moveStart,
      onKeyDown,
      onKeyUp,
      changeCurrentMin,
      changeCurrentMax,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

.vueSlider {
  user-select: none;
  height: $slider-height;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: $space-8;

  &.disabled {
    cursor: not-allowed;

    label {
      opacity: $slider-disabled-opacity;
    }

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
    top: -$space-8;

    .valueInput input {
      text-align: center;
      width: $slider-input-width;
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
