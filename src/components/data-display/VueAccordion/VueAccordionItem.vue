<template>
  <div :class="$style.vueAccordionItem">
    <div
      :class="$style.header"
      tabindex="0"
      role="button"
      :aria-label="title"
      @click.prevent.stop="onClick"
      @keypress.enter.space.prevent.stop="onClick"
    >
      <div :class="$style.iconContainer">
        <vue-icon-chevron-up v-if="open" />
        <vue-icon-chevron-right v-else />
      </div>
      <vue-text color="text-high" as="div">{{ title }}</vue-text>
    </div>

    <vue-collapse :show="open" :duration="duration">
      <vue-box padding="16 0 16 16 0" :class="$style.body" :aria-expanded="open" as="section">
        <vue-text color="text-high" as="div">
          <slot />
        </vue-text>
      </vue-box>
    </vue-collapse>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, onMounted, Ref, useCssModule } from 'vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueIconChevronRight from '~/components/icons/VueIconChevronRight.vue';
import VueIconChevronUp from '~/components/icons/VueIconChevronUp.vue';
import VueBox from '~/components/layout/VueBox/VueBox.vue';
import VueCollapse from '~/components/behavior/VueCollapse/VueCollapse.vue';

// Interface
const props = defineProps({
  title: { type: String, required: true },
  initOpen: { type: Boolean, default: false },
  duration: { type: Number, default: 250 },
});

// DI
const register = inject<(idx: Ref<number>, open: Ref<boolean>, initOpen: boolean) => void>('register');
const openItem = inject<(idx: Ref<number>) => void>('openItem');

// Deps
const $style = useCssModule();

// Data
const idx = ref<number>(-1);
const open = ref(false);

// Event Handlers
const onClick = () => {
  if (openItem) {
    openItem(idx);
  }
};

// Lifecycle
onMounted(() => {
  if (register) {
    register(idx, open, props.initOpen || false);
  }
});
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

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
