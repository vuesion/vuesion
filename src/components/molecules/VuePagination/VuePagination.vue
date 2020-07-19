<template>
  <div :class="$style.vuePagination">
    <div
      :class="[$style.prev, selectedPage <= 1 && $style.disabled]"
      role="button"
      tabindex="0"
      :aria-label="$t('components.pagination.previous' /* Previous */)"
      @click="prevClick"
      @keypress="prevClick"
    ></div>
    <div :class="$style.label">{{ selectedPage }} / {{ pages }}</div>
    <div
      :class="[$style.next, selectedPage >= pages && $style.disabled]"
      role="button"
      tabindex="0"
      :aria-label="$t('components.pagination.next' /* Next */)"
      @click="nextClick"
      @keypress="nextClick"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'VuePagination',
  props: {
    pages: { type: Number, required: true },
    selectedPage: { type: Number, required: true },
  },
  setup(props, { emit }) {
    const prevClick = () => {
      if (props.selectedPage > 1) {
        emit('click', props.selectedPage - 1);
      }
    };
    const nextClick = () => {
      if (props.selectedPage < props.pages) {
        emit('click', props.selectedPage + 1);
      }
    };
    return {
      prevClick,
      nextClick,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vuePagination {
  padding: $pagination-padding;
  display: inline-flex;
  user-select: none;
}

.label {
  padding: $pagination-label-padding;
  min-width: $pagination-label-min-width;
  text-align: center;
}

.prev,
.next {
  display: inline-flex;
  width: $pagination-button-size;
  height: $pagination-button-size;
  position: relative;
  box-shadow: $pagination-button-shadow;
  background: $pagination-button-bg;
  border: $pagination-button-border;
  cursor: pointer;

  &:before,
  &:after {
    content: '';
    transition: all 0.25s ease-in-out;
    position: absolute;
    background-color: $pagination-arrow-color;
    width: 2px;
    height: 16px;
    top: -1px;
  }

  &.disabled {
    &:before,
    &:after {
      background-color: $pagination-arrow-disabled-color;
    }
  }
}

.prev {
  &:before {
    transform: translate(1.8rem, 1.8rem) rotate(135deg);
  }

  &:after {
    transform: translate(1.8rem, 0.8rem) rotate(-135deg);
  }
}

.next {
  &:before {
    transform: translate(1.8rem, 0.8rem) rotate(135deg);
  }

  &:after {
    transform: translate(1.8rem, 1.8rem) rotate(-135deg);
  }
}
</style>
