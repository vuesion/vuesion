<template>
  <div :class="$style.vueDropdownMenu" @keydown="onKeyPress" ref="dropdownMenu">
    <span @click.stop.prevent="show = !show" role="button" tabindex="0" :aria-expanded="show.toString()">
      <slot />
      <vue-icon-sort-down />
    </span>

    <vue-collapse :show="show">
      <div :class="$style.list">
        <ul>
          <li
            v-for="(option, idx) in options"
            v-if="option.value !== 'separator'"
            :key="`${id}-${idx}`"
            @mouseenter="index = idx"
            :class="index === idx ? $style.active : ''"
            @click.stop.prevent="onClick(option)"
          >
            <slot name="option" :option="option">{{ option.label }}</slot>
          </li>
          <li v-else :class="$style.separator"></li>
        </ul>
      </div>
    </vue-collapse>
  </div>
</template>

<script lang="ts">
import { getIntInRange } from '@vuesion/utils/dist/randomGenerator';
import VueIconSortDown from '../icons/VueIconSortDown/VueIconSortDown.vue';
import VueCollapse from '../VueCollapse/VueCollapse.vue';

export default {
  name: 'VueDropdownMenu',
  components: { VueCollapse, VueIconSortDown },
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  data(): any {
    return {
      show: false,
      id: getIntInRange(213123123, 98982984398),
      index: -1,
    };
  },
  methods: {
    onClick(option: any) {
      this.$emit('click', option);
      this.close();
    },
    close() {
      this.show = false;
      this.index = -1;
    },
    checkForPropagation(e: KeyboardEvent) {
      if (['Enter', 'Space', 'ArrowDown', 'ArrowUp', 'Escape'].indexOf(e.code) > -1) {
        e.stopPropagation();
        e.preventDefault();
      }
    },
    onKeyPress(e: KeyboardEvent) {
      this.checkForPropagation(e);

      if (['Enter', 'Space', 'ArrowDown', 'ArrowUp'].indexOf(e.code) > -1 && this.show === false) {
        this.show = true;
      } else if (['Enter', 'Space'].indexOf(e.code) > -1 && this.index > -1) {
        this.onClick(this.options[this.index]);
      } else if (e.code === 'ArrowDown') {
        this.handleSelection(this.getNewIndex('down'));
      } else if (e.code === 'ArrowUp') {
        this.handleSelection(this.getNewIndex('up'));
      } else if (e.code === 'Escape') {
        this.close();
      }
    },
    getNewIndex(direction: string) {
      let newIndex: number = direction === 'down' ? this.index + 1 : this.index - 1;
      if (this.options[newIndex] && this.options[newIndex].value === 'separator') {
        newIndex = direction === 'down' ? newIndex + 1 : newIndex - 1;
      }
      return newIndex;
    },
    handleSelection(newIndex: number) {
      if (newIndex === this.options.length) {
        this.index = 0;
      } else if (newIndex <= -1) {
        this.index = this.options.length - 1;
      } else {
        this.index = newIndex;
      }
    },
    handleDocumentClick(e: Event) {
      if (this.$refs.dropdownMenu && this.$refs.dropdownMenu.contains(e.target) === false) {
        this.close();
      }
    },
  },
  beforeMount() {
    document.addEventListener('mousedown', this.handleDocumentClick);
    document.addEventListener('touchstart', this.handleDocumentClick);
  },
  beforeDestroy() {
    document.removeEventListener('mousedown', this.handleDocumentClick);
    document.removeEventListener('touchstart', this.handleDocumentClick);
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.vueDropdownMenu {
  display: inline-block;
  position: relative;

  > span {
    position: relative;
    display: inline-block;
    padding: $dropdown-menu-button-padding;
    cursor: pointer;
    border-radius: $dropdown-menu-button-border-radius;
    font-family: $dropdown-menu-button-font-family;
    font-size: $dropdown-menu-button-font-size;
    font-weight: $dropdown-menu-button-font-weight;
    line-height: $dropdown-menu-button-line-height;
    letter-spacing: $dropdown-menu-button-letter-spacing;
    border: $dropdown-menu-button-border;
    background: $dropdown-menu-button-bg;

    &:hover {
      background: $dropdown-menu-button-hover-bg;
    }
  }

  i {
    width: $dropdown-menu-button-icon-size;
    height: $dropdown-menu-button-icon-size;
    position: relative;
    top: -1px;
  }
}

.list {
  position: absolute;
  top: 100%;
  margin: $dropdown-menu-list-margin;
  z-index: 1000;
  box-shadow: $dropdown-menu-list-shadow;
  border-radius: $dropdown-menu-list-border-radius;

  ul {
    margin: 0;
    padding: $dropdown-menu-list-padding;
    list-style: none;
    background: $dropdown-menu-list-bg;
    color: $dropdown-menu-list-color;
    border-radius: $dropdown-menu-list-border-radius;
    min-width: $dropdown-menu-list-min-width;
    font-size: $dropdown-menu-list-font-size;
    font-weight: $dropdown-menu-list-font-weight;
    line-height: $dropdown-menu-list-line-height;
    border: $dropdown-menu-list-border;
  }

  li {
    display: block;
    padding: $dropdown-menu-list-item-padding;
    cursor: pointer;

    &.active {
      background: $dropdown-menu-list-item-hover-bg;
    }

    &.separator {
      margin: 0;
      padding: 0;
      height: 0;
      border-top: 1px solid $brand-border-color;
    }
  }
}
</style>
