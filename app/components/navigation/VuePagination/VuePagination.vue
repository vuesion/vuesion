<template>
  <vue-columns padding="0" align-x="between" :class="[$style.vuePagination, slim && $style.slim]">
    <vue-column no-grow>
      <vue-inline :space="buttonsOnly ? 8 : 16" no-wrap align-y="center">
        <vue-button
          :look="buttonLook"
          leading-icon="chevron-left"
          size="sm"
          :aria-label="$t('common.PreviousPage' /* Previous Page */)"
          :disabled="!infinite && selectedPage <= 1"
          data-testid="pagination-prev"
          @click="onSelectedPageChange(selectedPage - 1)"
        ></vue-button>
        <vue-inline v-if="!buttonsOnly" space="8" no-wrap align-y="center">
          <vue-select
            v-if="pages <= 500"
            id="page"
            :label="$t('common.SelectPage' /* Select Page */)"
            name="page"
            :items="Array.from({ length: pages }, (_, index): IItem => ({ label: `${index + 1}`, value: index + 1 }))"
            size="sm"
            hide-label
            hide-description
            :model-value="selectedPage"
            :duration="duration"
            align-y-menu="top"
            align-x-menu="left"
            :class="$style.select"
            @update:model-value="$emit('update:selectedPage', ($event as IItem).value)"
          />
          <vue-input
            v-else
            id="selectedPage"
            v-model="localSelectedPage"
            :label="$t('common.SelectPage' /* Select Page */)"
            name="selectedPage"
            size="sm"
            type="number"
            hide-label
            hide-description
            min="1"
            :max="pages"
            :size-attribute="
              localSelectedPage.toString().length && localSelectedPage.toString().length > 2
                ? localSelectedPage.toString().length
                : 2
            "
            :debounce="debounce"
            @blur="onDebouncedInput"
          />
          <vue-text look="support" color="text-low">
            {{ $t('common.of' /* of */) }}&nbsp;{{ $n(pages, 'integer') }}
          </vue-text>
        </vue-inline>
        <vue-button
          :look="buttonLook"
          leading-icon="chevron-right"
          size="sm"
          :aria-label="$t('common.NextPage' /* Next Page */)"
          :disabled="!infinite && selectedPage >= pages"
          data-testid="pagination-next"
          @click="onSelectedPageChange(selectedPage + 1)"
        ></vue-button>
      </vue-inline>
    </vue-column>
    <vue-column v-if="!slim && !buttonsOnly" no-grow>
      <vue-inline space="12" no-wrap align-y="center">
        <vue-text look="support" color="text-low">
          {{ $n(numberOfRecords, 'integer') }}&nbsp;{{ $t('common.Results' /* Results */) }}
        </vue-text>
        <vue-select
          id="itemsPerPage"
          label=""
          name="itemsPerPage"
          :items="[
            { label: '5', value: 5 },
            { label: '10', value: 10 },
            { label: '25', value: 25 },
            { label: '50', value: 50 },
            { label: '100', value: 100 },
          ]"
          hide-label
          hide-description
          :model-value="itemsPerPage"
          :duration="duration"
          size="sm"
          align-y-menu="top"
          align-x-menu="right"
          :class="$style.select"
          @update:model-value="
            $emit('update:selectedPage', 1);
            $emit('update:itemsPerPage', ($event as IItem).value);
          "
        />
      </vue-inline>
    </vue-column>
  </vue-columns>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { IItem } from '~~/interfaces/IItem';
import VueColumns from '~/app/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '~/app/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueInline from '~/app/components/layout/VueInline/VueInline.vue';
import VueButton from '~/app/components/input-and-actions/VueButton/VueButton.vue';
import VueSelect from '~/app/components/input-and-actions/VueSelect/VueSelect.vue';
import VueText from '~/app/components/typography/VueText/VueText.vue';
import type { ButtonStyle } from '~/app/components/prop-types';
import VueInput from '~/app/components/input-and-actions/VueInput/VueInput.vue';

// Interface
interface PaginationProps {
  numberOfRecords?: number;
  itemsPerPage?: number;
  selectedPage?: number;
  slim?: boolean;
  buttonsOnly?: boolean;
  infinite?: boolean;
  buttonLook?: ButtonStyle;
  debounce?: number;
  duration?: number;
}

const props = withDefaults(defineProps<PaginationProps>(), {
  numberOfRecords: 0,
  itemsPerPage: 5,
  selectedPage: 1,
  buttonLook: 'outline',
  debounce: 300,
  duration: 250,
});
const emits = defineEmits(['update:itemsPerPage', 'update:selectedPage']);

// Data
const pages = computed(() => Math.max(Math.ceil(props.numberOfRecords / props.itemsPerPage), 1));
const localSelectedPage = ref(props.selectedPage.toString(10));

// Event Handlers
const onSelectedPageChange = (newSelectedPage: number) => {
  if (newSelectedPage < 1) {
    newSelectedPage = pages.value;
  } else if (newSelectedPage > pages.value) {
    newSelectedPage = 1;
  }

  emits('update:selectedPage', newSelectedPage);
};
const onDebouncedInput = () => {
  emits('update:selectedPage', parseInt(localSelectedPage.value, 10));
};

// Watcher
watch(
  () => props.selectedPage,
  () => {
    localSelectedPage.value = props.selectedPage.toString(10);
  },
);
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vuePagination {
  &.slim {
    display: inline-flex;
    width: min-content;
  }

  .select {
    min-width: unset;
    width: $space-64;
  }

  button {
    width: $pagination-button-size;
    height: $pagination-button-size;
    border-radius: $pagination-button-border-radius;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
}
</style>
