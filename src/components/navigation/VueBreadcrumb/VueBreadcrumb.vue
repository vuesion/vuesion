<template>
  <nav aria-label="Breadcrumb" :class="$style.vueBreadcrumb">
    <ol :class="$style.list">
      <li :class="$style.itemWrapper">
        <nuxt-link :to="localePath('/')" href="/" :class="[$style.item, $style.homeItem]" aria-label="Home">
          <vue-text look="support" color="text-medium" weight="semi-bold">
            <vue-icon-home :class="$style.home" />
          </vue-text>
        </nuxt-link>
      </li>
      <li v-if="items.length > 2" :class="[$style.itemWrapper, $style.ellipsis]">...</li>
      <li v-for="(item, idx) in items" :key="`${item.value}-${idx}`" :class="[$style.itemWrapper, $style.link]">
        <nuxt-link
          :to="localePath(item.value)"
          :href="item.value"
          :aria-current="idx === items.length - 1 && 'page'"
          :class="$style.item"
        >
          <vue-text look="support" color="text-medium" weight="semi-bold">
            {{ item.label }}
          </vue-text>
        </nuxt-link>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { IItem } from '@/interfaces/IItem';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueIconHome from '@/components/icons/VueIconHome.vue';

export default defineComponent({
  name: 'VueBreadcrumb',
  components: { VueIconHome, VueText },
  props: {
    items: { type: [Array, Array as () => Array<IItem>], required: true },
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

.vueBreadcrumb {
  .list {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;

    .itemWrapper {
      display: inline-block;
      $breadcrumb-item-height: $space-24;

      &:before {
        padding: $breadcrumb-separator-padding;
        content: $breadcrumb-separator;
      }

      &:first-child {
        &:before {
          padding: 0;
          content: '';
        }
      }

      .home {
        width: $breadcrumb-home-icon-size;
        height: $breadcrumb-home-icon-size;
      }

      .homeItem {
        padding: $breadcrumb-home-padding;
      }

      &.ellipsis {
        display: none;
      }

      .item {
        outline: none;
        display: inline-flex;
        align-items: center;
        padding: $breadcrumb-item-padding;
        height: $breadcrumb-item-height;
        text-decoration: $breadcrumb-item-text-decoration;
        border: $breadcrumb-item-border;
        border-radius: $breadcrumb-item-border-radius;

        &:focus {
          box-shadow: $breadcrumb-item-outline;
        }

        &:hover {
          background: $breadcrumb-item-bg-hover;
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
    }

    @include mediaMax(phone) {
      .itemWrapper {
        &.ellipsis {
          display: inline-block;
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
}
</style>
