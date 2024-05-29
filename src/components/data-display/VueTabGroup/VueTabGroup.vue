<template>
  <div :class="$style.vueTabGroup">
    <ul :class="$style.tabs" role="tablist">
      <li
        v-for="tab in tabHeader"
        :key="tab.idx"
        tabindex="0"
        :class="currentTab === tab.idx ? $style.active : ''"
        role="tab"
        @click="onTabChange(tab.idx)"
        @keypress.space.enter.stop.prevent="onTabChange(tab.idx)"
      >
        <component :is="`vue-icon-${tab.icon}`" v-if="tab.icon" />
        <vue-text weight="semi-bold">
          {{ tab.name }}
        </vue-text>
      </li>
    </ul>

    <vue-box padding="16 0">
      <slot />
    </vue-box>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import { ref, provide, onBeforeUnmount, shallowRef, useCssModule } from 'vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueBox from '~/components/layout/VueBox/VueBox.vue';

// Interface
interface TabItem {
  idx: Ref<number>;
  active: Ref<boolean>;
  name: string;
  icon: string | null;
}

// Deps
const $style = useCssModule();

// Data
const tabs = shallowRef<Array<TabItem>>([]);
const currentTab = ref(0);
const tabHeader = ref<Array<{ idx: number; name: string; icon: string | null }>>([]);

// Event Handlers
const onTabChange = (idx: number) => {
  currentTab.value = idx;
  handleTabs();
};

// Methods
const handleTabs = () => {
  tabs.value.forEach((tab) => {
    tab.active.value = tab.idx.value === currentTab.value;
  });
};
const register = (idx: Ref<number>, active: Ref<boolean>, name: string, icon: string | null) => {
  idx.value = tabs.value.length;

  if (active.value) {
    currentTab.value = idx.value;
  }

  tabs.value.push({ idx, active, name, icon });

  tabHeader.value.push({
    idx: idx.value,
    name,
    icon,
  });

  handleTabs();
};

// DI
provide('register', register);

// Lifecycle
onBeforeUnmount(() => {
  tabs.value = [];
  tabHeader.value = [];
  currentTab.value = 0;
});
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueTabGroup {
  .tabs {
    padding: 0;
    margin: 0;
    list-style: none;
    display: inline-flex;
    flex-direction: row;

    i {
      width: $tab-icon-size;
      height: $tab-icon-size;
      margin-right: $tab-icon-gap;
    }

    li {
      flex: 1 1 $tab-width;
      display: inline-flex;
      height: $tab-height;
      justify-content: center;
      align-items: flex-start;
      padding: $tab-padding;
      border-bottom: $tab-border;
      color: $tab-color;
      cursor: pointer;

      &:hover {
        border-bottom: $tab-border-hover;
        color: $tab-color-hover;
      }

      &.active {
        border-bottom: $tab-border-active;
        color: $tab-color-active;

        &:hover {
          border-bottom: $tab-border-active-hover;
          color: $tab-color-active-hover;
        }
      }
    }
  }
}
</style>
