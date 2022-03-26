<template>
  <div :class="$style.vueAccordionItem">
    <div
      :class="$style.header"
      tabindex="0"
      role="button"
      :aria-label="title"
      @click.prevent.stop="click"
      @keypress.enter.space.prevent.stop="click"
    >
      <div :class="$style.iconContainer">
        <vue-icon-chevron-up v-if="open" />
        <vue-icon-chevron-right v-else />
      </div>
      <vue-text color="text-high" as="div">{{ title }}</vue-text>
    </div>

    <vue-box v-if="open" padding="16 0 16 16 0" :class="$style.body" :aria-expanded="open" as="section">
      <vue-text color="text-high" as="div">
        <slot />
      </vue-text>
    </vue-box>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref, onMounted, Ref } from '@vue/composition-api';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueIconChevronRight from '@/components/icons/VueIconChevronRight.vue';
import VueIconChevronUp from '@/components/icons/VueIconChevronUp.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';

export default defineComponent({
  name: 'VueAccordionItem',
  components: {
    VueIconChevronUp,
    VueIconChevronRight,
    VueText,
    VueBox,
  },
  props: {
    title: { type: String, required: true },
    initOpen: { type: Boolean, default: false },
  },
  setup(props) {
    const register = inject<(idx: Ref<number>, open: Ref<boolean>, initOpen: boolean) => void>('register');
    const openItem = inject<(idx: Ref<number>) => void>('openItem');
    const idx = ref<number>(null);
    const open = ref(false);
    const click = () => openItem(idx);

    onMounted(() => register(idx, open, props.initOpen));

    return {
      register,
      openItem,
      idx,
      open,
      click,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

.vueAccordionItem {
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
    cursor: pointer;
    background: $accordion-item-header-bg;
    height: $accordion-item-header-height;
    border-top: $accordion-item-header-border;
    user-select: none;

    &:hover {
      background: $accordion-item-header-bg-hover;
    }

    .iconContainer {
      flex: 0 0 $accordion-item-header-icon-container-size;
      display: flex;
      align-items: center;
      justify-content: center;

      i {
        width: $accordion-item-header-icon-size;
        height: $accordion-item-header-icon-size;
      }
    }
  }

  .body {
    background: $accordion-item-header-bg;
    border-top: $accordion-item-header-border;
    padding-left: $accordion-item-header-icon-container-size;
  }
}
</style>
