<template>
  <figure :class="$style.vueDonutChart">
    <vue-headline level="2" :native="false" :class="$style.title">
      {{ title }}
    </vue-headline>

    <svg viewBox="0 0 42 42" :aria-label="title" role="img">
      <circle
        v-for="(circle, idx) in circles"
        :key="idx + '' + circle.roundedPercent"
        :style="{ stroke: circle.color }"
        :stroke-width="width"
        cx="21"
        cy="21"
        r="15.91549430918952"
        fill="transparent"
        :stroke-dasharray="`${circle.percent} ${100 - circle.percent}`"
        :stroke-dashoffset="getOffset(idx)"
        :aria-label="circle.label"
      />

      <g v-if="type === 'donut'" :class="$style.text">
        <text x="50%" y="50%" :class="$style.sum">{{ sum }}</text>
        <text x="50%" y="50%" :class="$style.label">{{ unit }}</text>
      </g>
    </svg>

    <figcaption>
      <ul aria-hidden="true" role="presentation">
        <li v-for="(circle, idx) in circles.reverse()" :key="idx">
          <span :style="{ background: circle.color }" /> {{ circle.roundedPercent }}% - {{ circle.label }} ({{
            circle.value
          }}
          {{ unit }})
        </li>
      </ul>
    </figcaption>
  </figure>
</template>

<script lang="ts">
import { getIntInRange } from '@vuesion/utils/dist/randomGenerator';
import { IChartDataItem } from './IChartDataItem';
import VueHeadline from '../VueHeadline/VueHeadline.vue';

let usedColors: string[] = [];

export default {
  name: 'VueDonutChart',
  components: { VueHeadline },
  props: {
    title: { type: String, default: '' },
    data: { type: Array, required: true },
    unit: { type: String, default: '' },
    strokeWidth: { type: Number, default: 1 },
    type: { type: String, default: 'donut' },
  },
  computed: {
    sum() {
      return this.data.map((item: IChartDataItem) => item.value).reduce((f: number, s: number) => f + s, 0);
    },
    circles() {
      return this.data.map((item: IChartDataItem) => {
        const percent: number = (100 * item.value) / this.sum;

        return {
          ...item,
          percent,
          roundedPercent: Math.ceil(percent),
          color: this.getRandomColor(),
        };
      });
    },
    colorCount() {
      return Object.keys(this.$style).filter((key: string) => key.indexOf('color') > -1).length;
    },
    width() {
      return this.type === 'donut' ? this.strokeWidth : 32;
    },
  },
  watch: {
    data() {
      usedColors = [];
    },
  },
  methods: {
    getRandomColor /* istanbul ignore next */() {
      const color = this.$style[`color${getIntInRange(1, this.colorCount)}`];

      if (usedColors.indexOf(color) === -1) {
        usedColors.push(color);
        return color;
      } else if (usedColors.length === this.colorCount) {
        return this.$style[`color${getIntInRange(1, this.colorCount)}`];
      } else {
        return this.getRandomColor();
      }
    },
    getOffset(index: number) {
      let sum = 25;

      for (let i = 0; i <= index; i++) {
        sum += this.circles[i].percent;
      }

      return sum;
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.vueDonutChart {
  position: relative;
  display: block;

  svg {
    width: 50%;
    display: inline-block;
    border-radius: 50%;
  }

  figcaption {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -40%);

    ul {
      list-style: none;
      text-align: left;
      top: 25%;

      li {
        padding: $space-4 0;
        position: relative;

        span {
          position: absolute;
          display: inline-block;
          height: $space-12;
          width: $space-12;
          border-radius: 50%;
          top: $space-12;
          left: -$space-32;
        }
      }
    }
  }
}

.title {
  text-align: center;
}

.text {
  fill: var(--brand-text-color);
  transform: translateY(0.25em);
}

.sum {
  font-size: 0.6em;
  line-height: 1;
  text-anchor: middle;
  transform: translateY(-0.25em);
}

.label {
  font-size: 0.2em;
  text-transform: uppercase;
  text-anchor: middle;
  transform: translateY(0.7em);
}

:export {
  color1: palette-color-level('coral', 50);
  color2: palette-color-level('blue', 50);
  color3: palette-color-level('red', 50);
  color4: palette-color-level('green', 50);
  color5: palette-color-level('yellow', 50);
  color6: palette-color-level('coral', 20);
}
</style>
