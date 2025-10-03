<template>
  <nav aria-label="Breadcrumb" :class="$style.vueBreadcrumb">
    <ol :class="$style.list">
      <li :class="$style.itemWrapper">
        <nuxt-link :to="'/'" :class="[$style.item, $style.homeItem]" aria-label="Home">
          <vue-text look="label" color="medium" weight="semi-bold">
            <vue-icon-home :class="$style.home" />
          </vue-text>
        </nuxt-link>
      </li>
      <li v-if="items.length > 2" :class="[$style.itemWrapper, $style.ellipsis]">...</li>
      <li v-for="(item, idx) in items" :key="`${item.value}-${idx}`" :class="[$style.itemWrapper, $style.link]">
        <nuxt-link :to="item.value" :aria-current="idx === items.length - 1 && 'page'" :class="$style.item">
          <vue-text look="label" color="medium" weight="semi-bold">
            {{ item.label }}
          </vue-text>
        </nuxt-link>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';
import type { IItem } from '#shared/interfaces/ui/IItem';
import VueText from '@/components/design-system/typography/VueText/VueText.vue';
import VueIconHome from '@/components/icons/VueIconHome.vue';

// Interface
defineProps<{ items: Array<IItem> }>();

// Deps
const $style = useCssModule();
</script>

<style lang="scss" module>
@use 'assets/design-system/index' as ds;

.vueBreadcrumb {
  .list {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;

    .itemWrapper {
      display: inline-block;

      $breadcrumb-item-height: ds.$space-24;

      &::before {
        padding: ds.$breadcrumb-separator-padding;
        content: ds.$breadcrumb-separator;
      }

      &:first-child {
        &::before {
          padding: 0;
          content: '';
        }
      }

      .home {
        width: ds.$breadcrumb-home-icon-size;
        height: ds.$breadcrumb-home-icon-size;
      }

      .homeItem {
        padding: ds.$breadcrumb-home-padding;
      }

      .item {
        outline: none;
        display: inline-flex;
        align-items: center;
        padding: ds.$breadcrumb-item-padding;
        height: ds.$breadcrumb-item-height;
        text-decoration: ds.$breadcrumb-item-text-decoration;
        border: ds.$breadcrumb-item-border;
        border-radius: ds.$breadcrumb-item-border-radius;
        cursor: pointer;

        &:focus {
          box-shadow: ds.$breadcrumb-item-outline;
        }

        &:hover {
          background: ds.$breadcrumb-item-bg-hover;
        }

        > span {
          line-height: 1;
        }
      }

      &:last-child {
        .item {
          cursor: default;

          &:focus {
            box-shadow: none;
          }

          &:hover {
            background: transparent;
          }
        }
      }

      &.link {
        display: none;

        &:nth-last-child(-n + 2) {
          display: inline-block;
        }
      }
    }
  }
}
</style>
