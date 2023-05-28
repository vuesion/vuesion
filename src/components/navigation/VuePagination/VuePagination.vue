<template>
  <div :class="[$style.vuePagination, slim && $style.slim]">
    <button
      :class="[infinite === false && selectedPage <= 1 && $style.disabled]"
      :aria-label="previousButtonLabel"
      :disabled="infinite === false && selectedPage <= 1"
      type="button"
      data-testid="pagination-prev"
      @click.prevent.stop="emit('prev', 1)"
    >
      <vue-icon-chevron-left />
    </button>

    <ul v-if="slim === false" :class="$style.pages">
      <li
        v-for="(item, idx) in pageItems"
        :key="`${item.label}-${idx}`"
        :tabindex="item.active ? -1 : 0"
        :class="item.active && $style.active"
        :data-testid="item.active ? 'pagination-active-page' : 'pagination-page'"
        @click.prevent.stop="item.event && emit(item.event, item.amount)"
        @keypress.prevent.stop="item.event && emit(item.event, item.amount)"
      >
        <vue-text class="sr-only">{{ selectedPageLabel }}</vue-text>
        <vue-text>{{ item.label }}</vue-text>
      </li>
    </ul>

    <button
      :class="[infinite === false && selectedPage >= pages && $style.disabled]"
      :aria-label="nextButtonLabel"
      :disabled="infinite === false && selectedPage >= pages"
      type="button"
      data-testid="pagination-next"
      @click="emit('next', 1)"
    >
      <vue-icon-chevron-right />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import VueIconChevronLeft from '~/components/icons/VueIconChevronLeft.vue';
import VueIconChevronRight from '~/components/icons/VueIconChevronRight.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
// TODO: re-design
interface IPaginationItem {
  label: string;
  active: boolean;
  event?: string;
  amount?: number;
}

interface PaginationProps {
  pages: string | number;
  selectedPage: string | number;
  displayPages?: string | number;
  slim?: boolean;
  infinite?: boolean;
  previousButtonLabel?: string;
  nextButtonLabel?: string;
  selectedPageLabel?: string;
}

const props = withDefaults(defineProps<PaginationProps>(), {
  displayPages: 5,
  slim: false,
  infinite: false,
  previousButtonLabel: 'Previous',
  nextButtonLabel: 'Next',
  selectedPageLabel: "You're on page",
});
const emit = defineEmits(['prev', 'next']);
const displayPages = computed(() => {
  const dp = parseInt(props.displayPages.toString(), 10);

  if (isNaN(dp)) {
    return 5;
  }

  return dp;
});
const pages = computed(() => parseInt(props.pages.toString(), 10));
const selectedPage = computed(() => parseInt(props.selectedPage.toString(), 10));
const pageItems = computed<Array<IPaginationItem>>(() => {
  const half = (displayPages.value - 1) / 2;
  const smallerHalf = Math.floor(half);
  const largerHalf = Math.ceil(half);
  const pageCount = Math.min(displayPages.value, pages.value);

  let minPage = selectedPage.value - smallerHalf;

  if (selectedPage.value - smallerHalf <= 1) {
    minPage = 1;
  } else if (selectedPage.value + largerHalf >= pages.value) {
    minPage = Math.max(1, pages.value - displayPages.value + 1);
  }

  return Array.from(Array(pageCount).keys()).map((p) => {
    const newPage = p + minPage;

    return {
      label: newPage.toString(),
      active: newPage === selectedPage.value,
      event: selectedPage.value < newPage ? 'next' : 'prev',
      amount: selectedPage.value < newPage ? newPage - selectedPage.value : selectedPage.value - newPage,
    };
  });
});
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vuePagination {
  display: inline-flex;
  user-select: none;
  align-items: center;
  border-top: $pagination-border;
  padding-top: $pagination-padding-top;

  &.slim {
    border-top: none;
    padding-top: 0;

    button {
      &:first-child {
        margin-right: $pagination-button-slim-gap;
      }
    }
  }

  button {
    display: inline-flex;
    height: $pagination-button-size;
    width: $pagination-button-size;
    border: $pagination-button-border;
    border-radius: $pagination-button-border-radius;
    box-shadow: $pagination-button-shadow;
    background: $pagination-button-bg;
    color: $pagination-button-color;
    align-items: center;
    justify-content: center;
    outline: none;
    cursor: pointer;

    &:focus {
      box-shadow: $pagination-button-outline;
      background: $pagination-button-bg-focus;
      color: $pagination-button-color-focus;
    }

    &:hover {
      background: $pagination-button-bg-hover;
      color: $pagination-button-color-hover;
    }

    &:active {
      background: $pagination-button-bg-active;
      color: $pagination-button-color-active;
    }

    i {
      width: $pagination-button-icon-size;
      height: $pagination-button-icon-size;
    }

    &.disabled {
      opacity: $pagination-button-disabled-opacity;
      box-shadow: none;
    }
  }

  .pages {
    padding: 0 $pagination-button-pages-gap;
    margin-top: -($pagination-padding-top + 0.1rem);
    display: inline-flex;

    li {
      display: inline-flex;
      padding: $pagination-item-padding;
      border-top: $pagination-item-border;
      color: $pagination-item-color;
      background: $pagination-item-bg;
      cursor: pointer;
      outline: none;
      min-width: $pagination-item-min-width;
      justify-content: center;

      &:focus {
        box-shadow: $pagination-item-outline;
        border-top: $pagination-item-border-focus;
        color: $pagination-item-color-focus;
        background: $pagination-item-bg-focus;
      }

      &:hover {
        border-top: $pagination-item-border-hover;
        color: $pagination-item-color-hover;
        background: $pagination-item-bg-hover;
      }

      &.active {
        border-top: $pagination-item-border-active;
        color: $pagination-item-color-active;
        background: $pagination-item-bg-active;
        cursor: default;
        box-shadow: none;

        > span {
          margin-top: -1px;
        }
      }
    }
  }

  @include mediaMax(phone) {
    display: flex;
    justify-content: space-between;

    .pages {
      li {
        display: none;

        &.active {
          display: inline-flex;
        }
      }
    }
  }
}
</style>
