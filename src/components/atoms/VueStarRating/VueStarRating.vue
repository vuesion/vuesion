<template>
  <div :class="$style.vueStarRating">
    <div
      v-for="(star, idx) in stars"
      :key="idx"
      :class="[$style.star, star.active && $style.active]"
      @click="onStarClick(idx)"
      @mouseenter="onStarMouseEnter(idx)"
      @mouseleave="onStarMouseLeave(idx)"
    >
      <vue-icon-star />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import VueIconStar from '../icons/VueIconStar/VueIconStar.vue';

export default defineComponent({
  name: 'VueStarRating',
  components: {
    VueIconStar,
  },
  props: {
    maxNumStars: { type: Number, default: 5 },
    selectedNumStars: { type: Number, default: 0 },
  },
  setup(props) {
    const stars = ref<Array<{ active: boolean }>>([]);
    const numStarDisplay = ref(0);
    const numSelectedStars = ref(0);

    for (let idx = 0; idx < props.maxNumStars; idx++) {
      stars.value.push({ active: idx < props.selectedNumStars });
    }

    if (props.selectedNumStars > props.maxNumStars) {
      numStarDisplay.value = props.maxNumStars;
      numSelectedStars.value = props.maxNumStars;
    } else if (props.selectedNumStars < 0) {
      numStarDisplay.value = 0;
      numSelectedStars.value = 0;
    } else {
      numStarDisplay.value = props.selectedNumStars;
      numSelectedStars.value = props.selectedNumStars;
    }

    const onStarMouseEnter = (idx: number) => {
      numStarDisplay.value = idx + 1;

      for (let i = props.maxNumStars - 1; i >= 0; i--) {
        stars.value[i].active = i <= idx;
      }
    };
    const onStarMouseLeave = () => {
      numStarDisplay.value = numSelectedStars.value;

      for (let i = props.maxNumStars - 1; i >= numSelectedStars.value; i--) {
        stars.value[i].active = false;
      }
    };
    const onStarClick = (idx: number) => {
      numSelectedStars.value = idx + 1;
    };

    return {
      stars,
      numStarDisplay,
      numSelectedStars,
      onStarMouseEnter,
      onStarMouseLeave,
      onStarClick,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

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
}
</style>
