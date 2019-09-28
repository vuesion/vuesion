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
    <ul :class="isMultiRange ? [$style.values, $style.multi] : $style.values">
      <li>{{ formatValue(currentMin) }}</li>
      <li v-if="isMultiRange">{{ formatValue(currentMax) }}</li>
    </ul>

    <div :class="cssClasses">
      <div :class="$style.progress" :style="{ width: progressWidth, marginLeft: progressLeft }"></div>

      <button
        :class="handleCssClasses(0)"
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
      ></button>

      <button
        v-if="isMultiRange"
        :class="handleCssClasses(1)"
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
      ></button>
    </div>
  </div>
</template>

<script lang="ts">
import { IAlgorithm, linear } from './algorithms';

const algorithm: IAlgorithm = linear;

export default {
  name: 'VueSlider',
  props: {
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    values: {
      type: Array,
      required: true,
    },
    formatValue: {
      type: Function,
      default: (value: number) => {
        return value;
      },
    },
    disabled: {
      type: Boolean,
    },
  },
  data(): any {
    return {
      sliderBox: null,
      currentSlider: null,
      currentMin: 0,
      currentMax: 0,
    };
  },
  computed: {
    handleLeftPosition(): string {
      return `${algorithm.getPosition(this.currentMin, this.min, this.max)}%`;
    },
    handleRightPosition(): string {
      return `${algorithm.getPosition(this.currentMax, this.min, this.max)}%`;
    },
    progressLeft(): string {
      if (this.isMultiRange) {
        return `${algorithm.getPosition(this.currentMin, this.min, this.max)}%`;
      } else {
        return '0';
      }
    },
    progressWidth(): string {
      if (this.isMultiRange) {
        return `${parseInt(this.handleRightPosition, 10) - parseInt(this.handleLeftPosition, 10)}%`;
      } else {
        return `${parseInt(this.handleLeftPosition, 10)}%`;
      }
    },
    cssClasses(): string[] {
      const classes: string[] = [this.$style.track];

      if (this.disabled) {
        classes.push(this.$style.disabled);
      }

      return classes;
    },
    isMultiRange(): boolean {
      return this.values.length > 1;
    },
  },
  methods: {
    getClosestHandle(percentageDiff: number) {
      const handlePos: number[] = [parseInt(this.handleLeftPosition, 10), parseInt(this.handleRightPosition, 10)];
      const startIndex: number = this.isMultiRange ? 1 : 0;

      return handlePos.reduce((closestIdx, node, idx) => {
        const challenger = Math.abs(handlePos[idx] - percentageDiff);
        const current = Math.abs(handlePos[closestIdx] - percentageDiff);
        return challenger < current ? idx : closestIdx;
      }, startIndex);
    },
    percentageDiff(e: any) {
      const positionX: number =
        e.changedTouches && e.changedTouches.length > 0
          ? e.changedTouches[e.changedTouches.length - 1].clientX
          : e.clientX;

      return ((positionX - this.sliderBox.left) / this.sliderBox.width) * 100;
    },
    bindEvents() {
      document.addEventListener('touchmove', this.moving, { passive: false });
      document.addEventListener('mousemove', this.moving);
      document.addEventListener('touchend', this.moveEnd, { passive: false });
      document.addEventListener('mouseup', this.moveEnd);
      document.addEventListener('mouseleave', this.moveEnd);
    },
    unbindEvents() {
      document.removeEventListener('touchmove', this.moving);
      document.removeEventListener('mousemove', this.moving);
      document.removeEventListener('touchend', this.moveEnd);
      document.removeEventListener('mouseup', this.moveEnd);
      document.removeEventListener('mouseleave', this.moveEnd);
    },
    moveStart(e: any) {
      if (this.disabled) {
        return;
      }

      if (e.changedTouches && e.changedTouches.length > 1) {
        return;
      }

      this.currentSlider = this.getClosestHandle(this.percentageDiff(e));
      this.moving(e);
      this.bindEvents();
    },
    moveEnd() {
      if (this.currentSlider === null) {
        return;
      }

      this.$emit('change', { values: [this.currentMin, this.currentMax] });

      setTimeout(() => {
        this.currentSlider = null;
        this.unbindEvents();
      }, 10);
    },
    moving(e: any) {
      const value: number = algorithm.getValue(this.percentageDiff(e), this.min, this.max);
      const valueId: string = this.currentSlider === 0 ? 'currentMin' : 'currentMax';
      const padding: number = this.isMultiRange ? 1 : 0;

      if (valueId === 'currentMin' && value >= this.currentMax - padding) {
        this[valueId] = this.currentMax - padding;
      } else if (valueId === 'currentMax' && value <= this.currentMin + padding) {
        this[valueId] = this.currentMin + padding;
      } else {
        this[valueId] = value;
      }
    },
    refresh() {
      this.sliderBox = this.$refs.slider.getBoundingClientRect();
    },
    handleCssClasses(index: number = 0) {
      const classes: string[] = [this.$style.handle];

      if (index === this.currentSlider) {
        classes.push(this.$style.active);
      }

      return classes;
    },
    onKeyDown(e: any) {
      const valueId: string = this.currentSlider === 0 ? 'currentMin' : 'currentMax';
      const padding: number = this.isMultiRange ? 1 : 0;
      let value: number = this[valueId];

      if (e.code === 'ArrowLeft') {
        value = value - 5;
      } else if (e.code === 'ArrowRight') {
        value = value + 5;
      }

      if (value < this.min) {
        this.currentMin = this.min;
        return;
      } else if (value > this.max) {
        this.currentMax = this.max;
        return;
      }

      if (valueId === 'currentMin' && value >= this.currentMax - padding) {
        this[valueId] = this.currentMax - padding;
      } else if (valueId === 'currentMax' && value <= this.currentMin + padding) {
        this[valueId] = this.currentMin + padding;
      } else {
        this[valueId] = value;
      }
    },
    onKeyUp() {
      this.$emit('change', { values: [this.currentMin, this.currentMax] });
    },
  },
  mounted() {
    this.sliderBox = this.$refs.slider.getBoundingClientRect();
    window.addEventListener('resize', this.refresh);
  },
  destroyed() {
    window.removeEventListener('resize', this.refresh);
  },
  watch: {
    values: {
      immediate: true,
      handler(values: number[]) {
        this.currentMin = values[0];
        this.currentMax = this.isMultiRange ? values[1] : this.max;
      },
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.vueSlider {
  user-select: none;
  display: block;
  margin: $slider-margin;
  padding: $slider-padding;
}

.track {
  position: relative;
  width: 100%;
  height: 4px;
  background-color: $slider-track-bg;
  box-shadow: $slider-track-shadow;

  &.disabled {
    opacity: 0.6;
  }
}

.progress {
  height: 4px;
  background: $slider-progress-bg;
}

.handle {
  position: absolute;
  top: ($slider-handle-size * 0.5) * -1;
  display: block;
  padding: 0;
  margin: 0 ($slider-handle-size * 0.5) * -1;
  width: $slider-handle-size;
  height: $slider-handle-size;
  border-radius: 50%;
  box-shadow: $slider-handle-shadow;
  background-color: $slider-handle-bg;
  cursor: pointer;
  border: $slider-handle-border;
  user-select: none;
  transition: $slider-handle-transition;

  &.active {
    box-shadow: $slider-handle-active-shadow;
  }
}

.values {
  list-style: none;
  padding: 0;
  margin: $slider-values-margin;
  display: flex;

  li {
    display: inline-flex;
  }

  &.multi {
    li {
      &:first-child {
        &:after {
          content: '-';
          display: inline-block;
          margin: 0 $space-8;
        }
      }
    }
  }
}
</style>
