<template>
  <div :class="$style.vueTabGroup">

    <ul :class="$style.headerList" role="tablist">
      <li
        v-for="header in headerItems"
        :key="header.idx"
        @click="changeTab(header.idx)"
        :class="currentTab === header.idx ? $style.active : ''"
        role="tab">
        <div :class="$style.bg"></div>
        <span :class="$style.title">{{header.title}}</span>
      </li>
    </ul>

    <div :class="$style.body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name:     'VueTabGroup',
    data(): any {
      return {
        tabs:       [],
        currentTab: 0,
        tabHeader:  [],
      };
    },
    computed: {
      headerItems() {
        return this.tabHeader;
      },
    },
    methods:  {
      changeTab(idx: number) {
        this.currentTab = idx;
        this.handleTabs();
      },
      handleTabs() {
        this.tabs.forEach((tab: any) => {
          tab.$data.active = tab.$data.idx === this.currentTab;
        });
      },
      register(tab: any) {
        tab.$data.idx = this.tabs.length;

        if (tab.$data.active) {
          this.currentTab = tab.$data.idx;
        }

        this.tabs.push(tab);
        this.tabHeader.push({
                              idx:   tab.$data.idx,
                              title: tab.$props.title,
                              icon:  tab.$props.icon,
                            });

        this.handleTabs();
      },
    },
    beforeDestroy() {
      this.tabs = [];
      this.tabHeader = [];
      this.currentTab = 0;
    },
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .vueTabGroup {
    background: $tab-group-bg;
    box-shadow: $tab-group-shadow;
    margin:     $tab-group-margin;
  }

  .headerList {
    list-style: none;
    margin:     0;
    padding:    0;
    display:    flex;
    width:      100%;
    background: $tab-group-header-bg;
    position:   relative;

    li {
      padding:          $tab-group-header-item-padding;
      flex:             1;
      text-align:       center;
      cursor:           pointer;
      background-color: transparent;
      position:         relative;
      border:           1px solid transparent;
      border-bottom:    $tab-group-border;

      .bg {
        position:                   absolute;
        top:                        0;
        left:                       0;
        right:                      0;
        bottom:                     0;
        opacity:                    0;
        transition-property:        opacity, transform;
        transition-duration:        300ms;
        transition-timing-function: linear;
        background:                 $tab-group-header-item-hover-bg;
      }

      &.active {
        border:        $tab-group-border;
        border-bottom: none;
        top:           1px;

        .title {
          color: $tab-group-header-item-hover-color;
        }

        .bg {
          opacity: 1;
        }
      }

      .title {
        position:    relative;
        display:     block;
        font-weight: 400;
      }
    }
  }

  .body {
    padding:    $tab-group-padding;
    border:     $tab-group-border;
    border-top: 0;
  }
</style>
