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
        @keydown.space.enter.stop.prevent="onTabChange(tab.idx)"
      >
        <component :is="`vue-icon-${tab.icon}`" v-if="tab.icon" />
        <vue-text weight="semi-bold">
          {{ tab.name }}
        </vue-text>
        <vue-badge v-if="tab.badgeContent">
          {{ tab.badgeContent }}
        </vue-badge>
      </li>
    </ul>

    <vue-box padding="8 0">
      <slot />
    </vue-box>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import { ref, provide, onBeforeUnmount, shallowRef, useCssModule } from 'vue';
import VueText from '@/components/design-system/typography/VueText/VueText.vue';
import VueBox from '@/components/design-system/layout/VueBox/VueBox.vue';
import VueBadge from '@/components/design-system/surfaces-and-feedback/VueBadge/VueBadge.vue';

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
const tabHeader = ref<Array<{ idx: number; name: string; icon: string | null; badgeContent: string | null }>>([]);

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
const register = (
  idx: Ref<number>,
  active: Ref<boolean>,
  name: string,
  icon: string | null,
  badgeContent: string | null,
) => {
  if (tabHeader.value.find((item) => item.name === name)) {
    return;
  }

  idx.value = tabs.value.length;

  if (active.value) {
    currentTab.value = idx.value;
  }

  tabs.value.push({ idx, active, name, icon });

  tabHeader.value.push({
    idx: idx.value,
    name,
    icon,
    badgeContent,
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
@use 'assets/design-system/index' as ds;

.vueTabGroup {
  .tabs {
    padding: 0;
    margin: 0;
    list-style: none;
    display: inline-flex;
    flex-direction: row;

    i {
      width: ds.$tab-icon-size;
      height: ds.$tab-icon-size;
    }

    li {
      flex: 1 1 ds.$tab-width;
      display: inline-flex;
      height: ds.$tab-height;
      justify-content: center;
      align-items: center;
      padding: ds.$tab-padding;
      border-bottom: ds.$tab-border;
      color: ds.$tab-color;
      cursor: pointer;
      outline: none !important;
      gap: ds.$tab-icon-gap;

      &:focus {
        box-shadow: var(--focused);
      }

      &:hover {
        border-bottom: ds.$tab-border-hover;
        color: ds.$tab-color-hover;
      }

      &.active {
        border-bottom: ds.$tab-border-active;
        color: ds.$tab-color-active;

        &:hover {
          border-bottom: ds.$tab-border-active-hover;
          color: ds.$tab-color-active-hover;
        }
      }
    }
  }
}
</style>
