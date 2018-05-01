<template>
  <div :class="[$style.vueSlider, cssClass]" ref="slider" @mousedown="moveStart($event)"
       @touchstart="moveStart($event)">
    <ul :class="isMultiRange ? [$style.values, $style.multi] : $style.values">
      <li>{{formatValue(currentMin)}}</li>
      <li v-if="isMultiRange">{{formatValue(currentMax)}}</li>
    </ul>
    <div :class="cssClasses">
      <div :class="$style.progress" :style="{width: progressWidth, marginLeft: progressLeft}"></div>
      <button
        :class="handleCssClasses(0)"
        :style="{left: handleLeftPosition}"
        :aria-valuemax="max"
        :aria-valuemin="min"
        :aria-valuenow="currentMin"
        aria-disabled="false"
        role="slider"
        tabindex="0"
        type="button"
      ></button>
      <button v-if="isMultiRange"
              :class="handleCssClasses(1)"
              :style="{left: handleRightPosition}"
              :aria-valuemax="max"
              :aria-valuemin="min"
              :aria-valuenow="currentMax"
              aria-disabled="false"
              role="slider"
              tabindex="0"
              type="button"
      ></button>
    </div>
  </div>
</template>

<script lang="ts">
  import { IAlgorithm, linear } from './algorithms';

  const algorithm: IAlgorithm = linear;

  export default {
    name:       'VueSlider',
    components: {},
    props:      {
      cssClass:    {
        type:    String,
        default: 'vueSlider',
      },
      min:         {
        type:     Number,
        required: true,
      },
      max:         {
        type:     Number,
        required: true,
      },
      values:      {
        type:     Array,
        required: true,
      },
      formatValue: {
        type:     Function,
        required: false,
        default:  (value: number) => {
          return value;
        },
      },
      disabled:    {
        type:     Boolean,
        required: false,
        default:  false,
      },
    },
    data(): any {
      return {
        sliderBox:     null,
        currentSlider: null,
        currentMin:    0,
        currentMax:    0,
      };
    },
    computed:   {
      handleLeftPosition() {
        return `${algorithm.getPosition(this.currentMin, this.min, this.max)}%`;
      },
      handleRightPosition() {
        return `${algorithm.getPosition(this.currentMax, this.min, this.max)}%`;
      },
      progressLeft() {
        if (this.isMultiRange) {
          return `${algorithm.getPosition(this.currentMin, this.min, this.max)}%`;
        } else {
          return '0';
        }
      },
      progressWidth() {
        if (this.isMultiRange) {
          return `${parseInt(this.handleRightPosition, 10) - parseInt(this.handleLeftPosition, 10)}%`;
        } else {
          return `${parseInt(this.handleLeftPosition, 10)}%`;
        }
      },
      cssClasses() {
        const classes: string [] = [this.$style.track];

        if (this.disabled) {
          classes.push(this.$style.disabled);
        }

        return classes;
      },
      isMultiRange() {
        return this.values.length > 1;
      },
    },
    methods:    {
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
        const positionX: number = e.changedTouches && e.changedTouches.length > 0
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
        this.currentSlider = null;
        this.unbindEvents();
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
    },
    mounted() {
      this.currentMin = this.values[0];
      this.currentMax = this.isMultiRange ? this.values[1] : this.max;
      this.sliderBox = this.$refs.slider.getBoundingClientRect();
      window.addEventListener('resize', this.refresh);
    },
    destroyed() {
      window.removeEventListener('resize', this.refresh);
    },
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .vueSlider {
    user-select: none;
    display:     block;
    margin:      $slider-margin;
    padding:     $slider-padding;
  }

  .track {
    position:         relative;
    width:            100%;
    height:           4px;
    background-color: $slider-track-bg;
    box-shadow:       $slider-track-shadow;

    &.disabled {
      opacity: .6;
    }
  }

  .progress {
    height:     4px;
    background: $slider-progress-bg;
  }

  .handle {
    position:         absolute;
    top:              ($slider-handle-size * 0.5) * -1;
    display:          block;
    padding:          0;
    margin:           0 ($slider-handle-size * 0.5) * -1;
    width:            $slider-handle-size;
    height:           $slider-handle-size;
    border-radius:    50%;
    box-shadow:       $slider-handle-shadow;
    background-color: $slider-handle-bg;
    cursor:           pointer;
    border:           $slider-handle-border;
    user-select:      none;
    transition:       $slider-handle-transition;

    &.active {
      box-shadow: $slider-handle-active-shadow;
    }
  }

  .values {
    list-style: none;
    padding:    0;
    margin:     $slider-values-margin;
    display:    flex;

    li {
      display: inline-flex;
    }

    &.multi {
      li {
        &:first-child {
          &:after {
            content: "-";
            display: inline-block;
            margin:  0 $space-unit;
          }
        }
      }
    }
  }
</style>
