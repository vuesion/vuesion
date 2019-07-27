<template>
  <div v-if="maxNumStars > 0" :class="$style.vueStarRating">
    <div
      v-for="(star, idx) in stars"
      :key="idx"
      :class="starClasses(star)"
      @click="onStarClick(idx)"
      @mouseenter="onStarMouseEnter(idx)"
      @mouseleave="onStarMouseLeave(idx)"
    >
      <vue-icon-star />
    </div>
    <div :class="$style.numberDisplay">
      <span>{{ numStarDisplay }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import VueIconStar from '@components/icons/VueIconStar/VueIconStar.vue';

export default {
  name: 'VueStarRating',
  components: {
    VueIconStar,
  },
  props: {
    maxNumStars: {
      type: Number,
      default: 5,
    },
    selectedNumStars: {
      type: Number,
      default: 0,
    },
  },
  data(): any {
    return {
      stars: [],
      numStarDisplay: 0,
      numSelectedStars: 0,
    };
  },
  computed: {},
  methods: {
    onStarMouseEnter(idx: number) {
      // update star number display
      this.numStarDisplay = idx + 1;

      // update activeness of stars
      for (let i = this.maxNumStars - 1; i >= 0; i--) {
        this.stars[i].active = i <= idx;
      }
    },
    onStarMouseLeave() {
      // reset star number display to actual selected number
      this.numStarDisplay = this.numSelectedStars;

      // reset activeness of stars to actual selected number
      for (let i = this.maxNumStars - 1; i >= this.numSelectedStars; i--) {
        this.stars[i].active = false;
      }
    },
    onStarClick(idx: number) {
      this.numSelectedStars = idx + 1;
    },
    starClasses(star: any) {
      const styles = [this.$style.star];
      if (star.active) {
        styles.push(this.$style.active);
      }
      return styles;
    },
  },
  created(): void {
    // initialise stars & their activeness
    for (let idx = 0; idx < this.maxNumStars; idx++) {
      this.stars.push({ active: idx < this.selectedNumStars });
    }

    // initialise number display & selected number of stars
    // selected stars cannot be greater that the max num of stars or < 0
    if (this.selectedNumStars > this.maxNumStars) {
      this.numStarDisplay = this.maxNumStars;
      this.numSelectedStars = this.maxNumStars;
    } else if (this.selectedNumStars < 0) {
      this.numStarDisplay = 0;
      this.numSelectedStars = 0;
    } else {
      this.numStarDisplay = this.selectedNumStars;
      this.numSelectedStars = this.selectedNumStars;
    }
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.vueStarRating {
  display: flex;

  .star {
    display: inline-block;
    padding: 0 $space-2;

    i {
      height: $star-size;
      width: $star-size;
      color: $star-inactive-color;
    }

    &.active i {
      color: $star-active-color;
    }

    &:hover {
      cursor: pointer;
    }
  }

  .numberDisplay {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 $space-24;

    span {
      font-size: $font-size-h3;
      font-weight: $font-weight-h3;
    }
  }
}
</style>
