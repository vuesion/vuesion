<template>
  <div
    :class="$style.vueAutocomplete"
    :aria-expanded="isOpen ? 'true' : 'false'"
    aria-haspopup="true"
    aria-owns="autocomplete-results"
    role="combobox"
  >
    <vue-input
      :id="id"
      :disabled="disabled"
      :label="label"
      :name="name"
      :required="required"
      :validation="validation"
      :value="searchQuery"
      role="searchbox"
      :placeholder="placeholder"
      :autofocus="autofocus"
      :type="type"
      :readonly="readonly"
      :description="description"
      :error-message="errorMessage"
      :autocomplete="autocomplete"
      aria-autocomplete="list"
      :aria-controls="`autocomplete-results-${id}`"
      :aria-activedescendant="hasItems ? `result-item-${selectedOptionIndex}-${id}` : null"
      @input="onInput"
      @keydown.stop.prevent.down="onArrowDown"
      @keydown.stop.prevent.up="onArrowUp"
      @keydown.stop.enter.tab="onEnterKeyPress"
      @focus.stop.prevent="onFocus"
    />

    <vue-icon-search v-show="loading === false" />
    <vue-loader v-show="loading === true" :class="$style.loader" color="neutral" />

    <ul
      v-show="isOpen === true && loading === false"
      :id="`autocomplete-results-${id}`"
      ref="resultContainerRef"
      role="listbox"
      :style="{ height: resultContainerHeight + 'px' }"
    >
      <li
        v-if="hasItems === false"
        v-html="$t('components.autocomplete.emptyMessage' /* No items found for %s */).replace('%s', searchQuery)"
      />

      <li
        v-for="(item, index) in items"
        v-else
        :id="`result-item-${index}-${id}`"
        :key="index"
        role="option"
        :aria-selected="isSelected(index)"
        :class="isSelected(index) ? $style.isSelected : ''"
        @click="onItemClick(index)"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from '@vue/composition-api';
import debounce from 'lodash/debounce';
import { IItem } from '@/interfaces/IItem';
import { getDomRef } from '@/composables/get-dom-ref';
import { useOutsideClick } from '@/composables/use-outside-click';
import { useKeydown } from '@/composables/use-keydown';
import VueIconSearch from '../../atoms/icons/VueIconSearch/VueIconSearch.vue';
import VueLoader from '../../atoms/VueLoader/VueLoader.vue';
import VueInput from '../../atoms/VueInput/VueInput.vue';

export default defineComponent({
  name: 'VueAutocomplete',
  components: {
    VueIconSearch,
    VueLoader,
    VueInput,
  },
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    label: { type: String, required: true },
    required: { type: Boolean, default: false },
    validation: { type: [String, Object], default: null },
    value: { type: Object, default: null },
    disabled: { type: Boolean, default: false },
    placeholder: { type: String, default: null },
    autofocus: { type: Boolean, default: false },
    type: { type: String, default: 'text' },
    readonly: { type: Boolean, default: false },
    description: { type: String, default: '' },
    errorMessage: { type: String, default: '' },
    autocomplete: { type: String, default: 'off' },
    items: { type: Array, default: (): IItem[] => [] },
    loading: { type: Boolean, default: false },
    maxItems: { type: Number, default: 5 },
    minChars: { type: Number, default: 3 },
  },
  setup(props, { emit }) {
    const resultContainerRef = getDomRef(null);
    const isOpen = ref(false);
    const searchQuery = ref('');
    const previousQuery = ref('');
    const selectedOptionIndex = ref(0);
    const resultContainerHeight = ref(0);
    const items = computed<IItem[]>(() => props.items as IItem[]);
    const value = computed<IItem>(() => props.value as IItem);
    const hasItems = computed(() => items.value.length > 0);
    const isSameSearchQuery = computed(() => previousQuery.value === searchQuery.value);
    const isSelected = (index: number) => index === selectedOptionIndex.value;
    const setResultContainerHeight = () => {
      const resultContainerItem: HTMLElement = resultContainerRef.value.firstChild;
      const resultContainerItemHeight = resultContainerItem.offsetHeight;
      let newHeight: number = resultContainerItemHeight;

      if (hasItems.value) {
        newHeight = resultContainerItemHeight * items.value.length;

        if (items.value.length > props.maxItems) {
          newHeight = props.maxItems * resultContainerItemHeight + resultContainerItemHeight / 2;
        }
      }

      resultContainerHeight.value = newHeight;
    };
    const onFocus = () => {
      if (hasItems.value && searchQuery.value.length >= props.minChars) {
        isOpen.value = true;
      }
    };
    const onFocusItem = () => {
      const resultContainer: HTMLElement = resultContainerRef.value;
      const resultContainerClientHeight: number = resultContainer.clientHeight;
      const resultContainerScrollHeight: number = resultContainer.scrollHeight;

      if (resultContainerScrollHeight > resultContainerClientHeight) {
        const element: HTMLElement = document.querySelector(
          `#result-item-${selectedOptionIndex.value}-${props.id}`,
        ) as HTMLElement;

        if (element === null) {
          return;
        }

        const scrollBottom: number = resultContainerClientHeight + resultContainer.scrollTop;
        const elementBottom: number = element.offsetTop + element.offsetHeight;

        if (elementBottom > scrollBottom) {
          resultContainer.scrollTop = elementBottom - resultContainer.clientHeight;
        } else if (element.offsetTop < resultContainer.scrollTop) {
          resultContainer.scrollTop = element.offsetTop;
        }
      }
    };
    const onArrowUp = () => {
      if (!isOpen.value) {
        return;
      }

      if (selectedOptionIndex.value > 0) {
        selectedOptionIndex.value -= 1;
      } else {
        selectedOptionIndex.value = items.value.length - 1;
      }

      onFocusItem();
    };
    const onArrowDown = () => {
      if (!isOpen.value) {
        return;
      }

      if (selectedOptionIndex.value < items.value.length - 1) {
        selectedOptionIndex.value += 1;
      } else {
        selectedOptionIndex.value = 0;
      }

      onFocusItem();
    };
    const emitRequest = debounce(() => {
      emit('search', searchQuery.value);
      isOpen.value = true;
      selectedOptionIndex.value = -1;
    }, 300);
    const onInput = (query: string) => {
      searchQuery.value = query;

      if (searchQuery.value.length >= props.minChars) {
        emitRequest();
      } else {
        isOpen.value = false;
      }
    };
    const onEnterKeyPress = (e: any) => {
      if (isOpen.value) {
        e.preventDefault();
      }

      if (searchQuery.value.length < props.minChars || hasItems.value === false) {
        return;
      }

      if (selectedOptionIndex.value === -1) {
        selectedOptionIndex.value = 0;
      }

      onItemClick(selectedOptionIndex.value);
    };
    const triggerChange = (item: IItem) => {
      searchQuery.value = item.label;

      emit('input', item);

      if (isSameSearchQuery.value) {
        return;
      }
      previousQuery.value = searchQuery.value;
      isOpen.value = false;
    };
    const onItemClick = (index: number) => triggerChange(items.value[index]);
    const { onKeydown } = useKeydown();

    watch(items, () => {
      isOpen.value = true;
      setResultContainerHeight();
    });
    watch(value, () => (searchQuery.value = value.value?.label || ''), { immediate: true });

    useOutsideClick(resultContainerRef, () => (isOpen.value = false));
    onKeydown((event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen.value === true) {
        isOpen.value = false;
      }
    });

    return {
      resultContainerRef,
      isOpen,
      searchQuery,
      previousQuery,
      selectedOptionIndex,
      resultContainerHeight,
      hasItems,
      isSameSearchQuery,
      isSelected,
      setResultContainerHeight,
      onFocus,
      onFocusItem,
      onArrowUp,
      onArrowDown,
      emitRequest,
      onInput,
      onEnterKeyPress,
      onItemClick,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueAutocomplete {
  position: relative;

  > i {
    position: absolute;
    top: $space-8;
    right: 0;
  }

  .loader {
    position: absolute;
    top: $space-8;
    right: 0;
    width: $space-12;
    height: $space-12;

    :global {
      .vueLoaderPath {
        stroke-width: $space-8;
      }
    }
  }

  ul {
    background: $autocomplete-bg;
    padding: $autocomplete-padding;
    position: absolute;
    width: 100%;
    list-style: none;
    z-index: 2000;
    box-shadow: $autocomplete-shadow;
    overflow: scroll;
    border: $autocomplete-border;
    border-top: none;

    li {
      padding: $autocomplete-item-padding;
      border-top: $autocomplete-item-border;

      &[role='option'] {
        cursor: pointer;
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }

  .isSelected {
    background: $autocomplete-item-selected-bg;
    color: $autocomplete-item-selected-color;
  }
}
</style>
