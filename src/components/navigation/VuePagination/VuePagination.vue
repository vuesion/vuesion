<template>
  <div :class="[$style.vuePagination, slim && $style.slim]">
    <button
      :class="[infinite === false && selectedPage <= 1 && $style.disabled]"
      :aria-label="$t('components.pagination.previous' /* Previous */)"
      :disabled="infinite === false && selectedPage <= 1"
      type="button"
      data-testid="pagination-prev"
      @click.prevent.stop="$emit('prev', 1)"
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
        @click.prevent.stop="item.event && $emit(item.event, item.amount)"
        @keypress.prevent.stop="item.event && $emit(item.event, item.amount)"
      >
        <vue-text class="sr-only">{{ $t('components.pagination.a11y' /* You're on page */) }}</vue-text>
        <vue-text>{{ item.label }}</vue-text>
      </li>
    </ul>

    <button
      :class="[infinite === false && selectedPage >= pages && $style.disabled]"
      :aria-label="$t('components.pagination.next' /* Next */)"
      :disabled="infinite === false && selectedPage >= pages"
      type="button"
      data-testid="pagination-next"
      @click="$emit('next', 1)"
    >
      <vue-icon-chevron-right />
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';
import VueIconChevronLeft from '@/components/icons/VueIconChevronLeft.vue';
import VueIconChevronRight from '@/components/icons/VueIconChevronRight.vue';
import VueText from '@/components/typography/VueText/VueText.vue';

interface IPaginationItem {
  label: string;
  active: boolean;
  event?: string;
  amount?: number;
}

// TODO: find better UX for more than 20 pages
export default defineComponent({
  name: 'VuePagination',
  components: { VueText, VueIconChevronRight, VueIconChevronLeft },
  props: {
    pages: { type: [String, Number], required: true },
    selectedPage: { type: [String, Number], required: true },
    displayPages: { type: [String, Number], default: 5 },
    slim: { type: Boolean, default: false },
    infinite: { type: Boolean, default: false },
  },
  setup(props) {
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
    return {
      pageItems,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

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
