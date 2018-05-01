<template>
  <div
    :class="$style.vueAutocomplete"
    :aria-expanded="isOpen"
    aria-haspopup="true"
    aria-owns="autocomplete-results"
    role="combobox">

    <vue-input
      :name="name || instanceId"
      :value="searchQuery"
      :placeholder="placeholder"
      @input="onChange"
      @keyup.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter="onEnterKeyPress"
      @focus="onFocus"
      role="searchbox"
      aria-autocomplete="list"
      aria-controls="autocomplete-results"
      :aria-activedescendant="`result-item-${selectedOptionIndex}-${instanceId}`"
    />

    <vue-icon name="fas fa-search" v-show="isLoading === false" />
    <vue-loader :css-class="$style.loader" accent v-show="isLoading === true" />

    <ul
      v-show="isOpen"
      :style="{ height: resultContainerHeight + 'px' }"
      ref="resultContainer"
      role="listbox">

      <li v-if="hasOptions === false"
          v-html="$t('components.autocomplete.emptyMessage' /* No options found for %s */).replace('%s', searchQuery)"></li>

      <li
        v-else
        v-for="(option, index) in options"
        :key="index"
        role="option"
        :id="`result-item-${index}-${instanceId}`"
        :aria-selected="isSelected(index)"
        :class="isSelected(index) ? $style.isSelected : ''"
        @click="onOptionClick(index)">
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import debounce                from 'lodash/debounce';
  import VueInput                from '../VueInput/VueInput';
  import { createGUID }          from '../../utils/misc';
  import VueIcon                 from '../VueIcon/VueIcon';
  import { IAutocompleteOption } from './IAutocompleteOption';
  import VueLoader               from '../VueLoader/VueLoader';

  export default {
    name:       'VueAutocomplete',
    components: {
      VueLoader,
      VueIcon,
      VueInput,
    },
    props:      {
      name:          {
        type:     String,
        default:  '',
        required: false,
      },
      options:       {
        type:     Array,
        required: false,
        default:  (): any[] => [],
      },
      placeholder:   {
        type:     String,
        required: false,
      },
      maxOptions:    {
        type:     Number,
        required: false,
        default:  5,
      },
      minInputChars: {
        type:     Number,
        required: false,
        default:  3,
      },
      isLoading:     {
        type:     Boolean,
        required: false,
        default:  false,
      },
    },
    data(): any {
      return {
        isOpen:                false,
        searchQuery:           '',
        previousQuery:         '',
        selectedOptionIndex:   0,
        resultContainerHeight: 0,
        instanceId:            createGUID(),
      };
    },
    computed:   {
      hasOptions() {
        return this.options.length > 0;
      },
    },
    methods:    {
      setResultContainerHeight() {
        const resultContainerItem: HTMLElement = this.$refs.resultContainer.firstChild;
        const resultContainerItemHeight = resultContainerItem.offsetHeight;
        let newHeight: number = resultContainerItemHeight;

        if (this.options.length > 0) {
          newHeight = resultContainerItemHeight * this.options.length;

          if (this.options.length > this.maxOptions) {
            newHeight = (this.maxOptions * resultContainerItemHeight) + (resultContainerItemHeight / 2);
          }
        }

        this.resultContainerHeight = newHeight;
      },
      isSameSearchQuery() {
        return this.previousQuery === this.searchQuery;
      },
      onFocus() {
        if (this.options.length > 0 && this.searchQuery.length >= this.minInputChars) {
          this.isOpen = true;
        }
      },
      onFocusItem() {
        const resultContainer: HTMLElement = this.$refs.resultContainer;
        const resultContainerClientHeight: number = resultContainer.clientHeight;
        const resultContainerScrollHeight: number = resultContainer.scrollHeight;

        if (resultContainerScrollHeight > resultContainerClientHeight) {
          const element: HTMLElement = document.querySelector(`#result-item-${this.selectedOptionIndex}-${this.instanceId}`) as HTMLElement;
          const scrollBottom: number = resultContainerClientHeight + resultContainer.scrollTop;
          const elementBottom: number = element.offsetTop + element.offsetHeight;

          if (elementBottom > scrollBottom) {
            resultContainer.scrollTop = elementBottom - resultContainer.clientHeight;
          } else if (element.offsetTop < resultContainer.scrollTop) {
            resultContainer.scrollTop = element.offsetTop;
          }
        }
      },
      handleOutsideClick(e: Event) {
        if (!this.$el.contains(e.target as Node)) {
          this.isOpen = false;
          this.selectedOptionIndex = -1;
        }
      },
      onArrowUp() {
        if (this.isOpen === false) {
          return;
        }
        if (this.selectedOptionIndex > 0) {
          this.selectedOptionIndex -= 1;
        } else {
          this.selectedOptionIndex = this.options.length - 1;
        }
        this.onFocusItem();
      },
      onArrowDown() {
        if (this.isOpen === false) {
          return;
        }
        if (this.selectedOptionIndex < this.options.length - 1) {
          this.selectedOptionIndex += 1;
        } else {
          this.selectedOptionIndex = 0;
        }
        this.onFocusItem();
      },
      isSelected(index: number) {
        return index === this.selectedOptionIndex;
      },
      emitRequest: debounce(function () {
        this.resultContainerHeight = 0;
        this.$emit('request', this.searchQuery);
        this.isOpen = true;
      }, 300),
      onChange(e: Event) {
        this.searchQuery = (e.target as HTMLInputElement).value;

        if (this.searchQuery.length >= this.minInputChars) {
          this.emitRequest();
        } else {
          this.isOpen = false;
        }
      },
      onEnterKeyPress() {
        if (this.searchQuery.length === 0 || this.options.length === 0) {
          return;
        }

        if (this.selectedOptionIndex === -1) {
          this.selectedOptionIndex = 0;
        }

        this.triggerChange(this.options[this.selectedOptionIndex]);
        this.selectedOptionIndex = -1;
        this.isOpen = false;
      },
      onOptionClick(index: number) {
        this.triggerChange(this.options[index]);
        this.selectedOptionIndex = -1;
        this.isOpen = false;
      },
      triggerChange(option: IAutocompleteOption) {
        this.searchQuery = option.label;

        if (this.isSameSearchQuery()) {
          return;
        }

        this.$emit('change', option);
        this.previousQuery = this.searchQuery;
      },
    },
    watch:      {
      options: function (options: IAutocompleteOption[]) {
        this.options = options;
        this.isOpen = true;
        this.$nextTick(() => {
          this.setResultContainerHeight();
        });
      },
    },
    mounted() {
      document.addEventListener('click', this.handleOutsideClick);
    },
    destroyed() {
      document.removeEventListener('click', this.handleOutsideClick);
    },
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .vueAutocomplete {
    position: relative;

    > i {
      position: absolute;
      top:      $space-unit;
      right:    0;
    }

    .loader {
      position: absolute;
      top:      $space-unit;
      right:    0;
      width:    $space-unit * 2;
      height:   $space-unit * 2;

      :global {
        .vueLoaderPath {
          stroke-width: $space-unit;
        }
      }
    }

    ul {
      background: $autocomplete-bg;
      padding:    $autocomplete-padding;
      margin:     $autocomplete-margin;
      position:   absolute;
      width:      100%;
      list-style: none;
      z-index:    2000;
      box-shadow: $autocomplete-shadow;
      overflow:   scroll;

      li {
        padding:       $autocomplete-item-padding;
        border-bottom: $autocomplete-item-border;

        &[role="option"] {
          cursor: pointer;
        }
        &:last-child {
          border-bottom: none;
        }
      }
    }

    .isSelected {
      background: $autocomplete-item-selected-bg;
      color:      $autocomplete-item-selected-color
    }
  }
</style>
