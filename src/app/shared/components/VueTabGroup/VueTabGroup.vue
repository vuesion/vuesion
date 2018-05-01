<template>
  <div :class="[$style.vueTabGroup, cssClass]">

    <ul :class="$style.headerList" role="tablist">
      <li
        v-for="header in headerItems"
        :key="header.idx"
        @click="changeTab(header.idx)"
        :class="currentTab === header.idx ? $style.active : ''"
        role="tab">
        <div :class="$style.bg"></div>
        <i :class="[$style.icon, header.icon]"></i>
        <span :class="$style.title">{{header.title}}</span>
      </li>
    </ul>

    <slot />
  </div>
</template>

<script lang="ts">
  export default {
    name:       'VueTabGroup',
    components: {},
    props:      {
      cssClass: {
        type:    String,
        default: 'vueTabGroup',
      },
    },
    data(): any {
      return {
        tabs:       [],
        currentTab: 0,
        tabHeader:  [],
      };
    },
    computed:   {
      headerItems() {
        return this.tabHeader;
      },
    },
    methods:    {
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
    padding:    $tab-group-padding;
    margin: $tab-group-margin;
  }

  .headerList {
    list-style: none;
    margin:     0;
    padding:    0;
    display:    flex;
    width:      100%;
    background: $tab-group-header-bg;
    box-shadow: $tab-group-header-shadow;
    position:   relative;
    top:        -($space-unit * 2);

    li {
      padding:      $tab-group-header-item-padding;
      flex:         1;
      text-align:   center;
      position:     relative;
      border-left:  $tab-group-header-item-border-left;
      border-right: $tab-group-header-item-border-right;
      line-height:  1.7;
      cursor:       pointer;

      &:first-child {
        border-left: none;
      }

      &:last-child {
        border-right: none;
      }

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
        .bg {
          opacity: 1;
        }
      }

      .title {
        position: relative;
        display:  block;
      }

      .icon {
        position:  relative;
        font-size: $font-size-h3;
      }
    }
  }
</style>
