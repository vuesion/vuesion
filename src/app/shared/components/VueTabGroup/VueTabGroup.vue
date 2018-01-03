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
        <i :class="[$style.icon, header.icon]"></i>
        <span :class="$style.title">{{header.title}}</span>
      </li>
    </ul>

    <slot />
  </div>
</template>

<script lang="ts">
  export default {
    components: {},
    props: {},
    data(): any {
      return {
        tabs: [],
        currentTab: 0,
        tabHeader: [],
      };
    },
    computed: {
      headerItems() {
        return this.tabHeader;
      }
    },
    methods: {
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
          idx: tab.$data.idx,
          title: tab.$props.title,
          icon: tab.$props.icon,
        });

        this.handleTabs();
      },
    },
    beforeDestroy() {
      this.tabs = [];
      this.tabHeader = [];
      this.currentTab = 0;
    }
  };
</script>

<style lang="scss" module>
  @import "../../variables";

  .vueTabGroup {
    background: $panel-bg;
    box-shadow: $nav-bar-shadow;
    padding:    0 $grid-unit * 2 $grid-unit * 2;
    margin-top: $grid-unit * 4;
  }

  .headerList {
    list-style: none;
    margin:     0;
    padding:    0;
    display:    flex;
    width:      100%;
    background: $panel-bg;
    box-shadow: $nav-bar-shadow;
    position:   relative;
    top:        -($grid-unit * 2);

    li {
      padding:      $grid-unit * 1.5 $grid-unit $grid-unit;
      flex:         1;
      text-align:   center;
      position:     relative;
      border-left:  1px solid lighten($panel-bg, 2%);
      border-right: 1px solid darken($panel-bg, 2%);
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
        transition-duration:        500ms;
        transition-timing-function: linear;
        background:                 $brand-primary;
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
