<template>
  <div :class="$style.vueTabGroup">
    <ul :class="$style.tabs" role="tablist">
      <li
        v-for="tab in tabHeader"
        :key="tab.idx"
        tabindex="0"
        :class="currentTab === tab.idx ? $style.active : ''"
        role="tab"
        @click="changeTab(tab.idx)"
        @keypress.space.enter.stop.prevent="changeTab(tab.idx)"
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

<script lang="ts">
import { Vue } from 'vue/types/vue';
import { defineComponent, ref, provide, onBeforeUnmount } from '@vue/composition-api';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';

export default defineComponent({
  name: 'VueTabGroup',
  components: { VueBox, VueText },
  setup() {
    const tabs = ref<Array<Vue>>([]);
    const currentTab = ref(0);
    const tabHeader = ref<Array<{ idx: number; name: string; icon: string }>>([]);
    const changeTab = (idx: number) => {
      currentTab.value = idx;
      handleTabs();
    };
    const handleTabs = () => {
      tabs.value.forEach((tab: any) => {
        tab.$data.active = tab.$data.idx === currentTab.value;
      });
    };
    const register = (tab: any) => {
      tab.$data.idx = tabs.value.length;

      if (tab.$data.active) {
        currentTab.value = tab.$data.idx;
      }

      tabs.value.push(tab);
      tabHeader.value.push({
        idx: tab.$data.idx,
        name: tab.$props.name,
        icon: tab.$props.icon,
      });

      handleTabs();
    };

    provide('register', register);

    onBeforeUnmount(() => {
      tabs.value = [];
      tabHeader.value = [];
      currentTab.value = 0;
    });

    return {
      currentTab,
      tabHeader,
      changeTab,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

.vueTabGroup {
  .tabs {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
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
      padding-top: $space-4;
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
