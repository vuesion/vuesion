<template>
  <vue-columns padding="0" align-x="between" :class="[$style.vuePagination, slim && $style.slim]">
    <vue-column no-grow>
      <vue-inline :space="buttonsOnly ? 8 : 16" no-wrap align-y="center">
        <vue-icon-button
          :look="buttonLook"
          icon="chevron-left"
          size="sm"
          :label="$t('common.PreviousPage' /* Previous Page */)"
          :disabled="!infinite && selectedPage <= 1"
          data-testid="pagination-prev"
          @click="onSelectedPageChange(selectedPage - 1)"
        ></vue-icon-button>
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
          <vue-text look="support" color="low">
            {{ $t('common.of' /* of */) }}&nbsp;{{ $n(pages, 'integerSingle') }}
          </vue-text>
        </vue-inline>
        <vue-icon-button
          :look="buttonLook"
          :label="$t('common.NextPage' /* Next Page */)"
          icon="chevron-right"
          size="sm"
          :disabled="!infinite && selectedPage >= pages"
          data-testid="pagination-next"
          @click="onSelectedPageChange(selectedPage + 1)"
        />
      </vue-inline>
    </vue-column>
    <vue-column v-if="!slim && !buttonsOnly" no-grow>
      <vue-inline space="12" no-wrap align-y="center">
        <vue-text look="support" color="low">
          {{ $n(numberOfRecords, 'integerSingle') }}&nbsp;{{ $t('common.Results' /* Results */) }}
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
          :class="$style.select"
          @update:model-value="$emit('update:itemsPerPage', ($event as IItem).value)"
        />
      </vue-inline>
    </vue-column>
  </vue-columns>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { IItem } from '#shared/interfaces/ui/IItem';
import VueColumns from '@/components/design-system/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/design-system/layout/VueColumns/VueColumn/VueColumn.vue';
import VueInline from '@/components/design-system/layout/VueInline/VueInline.vue';
import VueSelect from '@/components/design-system/forms-and-actions/VueSelect/VueSelect.vue';
import VueText from '@/components/design-system/typography/VueText/VueText.vue';
import type { ButtonStyle } from '@/components/utils/prop-types';
import VueInput from '@/components/design-system/forms-and-actions/VueInput/VueInput.vue';
import VueIconButton from '@/components/design-system/forms-and-actions/VueIconButton/VueIconButton.vue';

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
@use 'assets/design-system/index' as ds;

.vuePagination {
  &.slim {
    display: inline-flex;
    width: min-content;
  }

  .select {
    min-width: unset;
    width: ds.$space-64;
  }
}
</style>
