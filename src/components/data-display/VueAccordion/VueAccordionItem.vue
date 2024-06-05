<template>
  <vue-stack space="0" :class="$style.vueAccordionItem">
    <vue-columns
      space="8"
      padding="12"
      :class="$style.header"
      tabindex="0"
      role="button"
      :aria-label="title"
      @click.prevent.stop="onClick"
      @keydown.enter.space.prevent.stop="onClick"
    >
      <vue-column no-grow>
        <vue-icon-chevron-up v-if="open" />
        <vue-icon-chevron-right v-else />
      </vue-column>
      <vue-column>
        <vue-text color="text-high" weight="semi-bold" as="div">{{ title }}</vue-text>
      </vue-column>
    </vue-columns>
    <vue-collapse :show="open" :duration="duration">
      <vue-box padding="8" :aria-expanded="open" as="section">
        <slot />
      </vue-box>
    </vue-collapse>
  </vue-stack>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import { inject, ref, onMounted, useCssModule } from 'vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueIconChevronRight from '~/components/icons/VueIconChevronRight.vue';
import VueIconChevronUp from '~/components/icons/VueIconChevronUp.vue';
import VueBox from '~/components/layout/VueBox/VueBox.vue';
import VueCollapse from '~/components/behavior/VueCollapse/VueCollapse.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueColumns from '~/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '~/components/layout/VueColumns/VueColumn/VueColumn.vue';

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
  background: $accordion-item-bg;

  .header {
    z-index: 1;
    cursor: pointer;
    user-select: none;
    outline: none !important;

    &:hover {
      background: $accordion-item-header-bg-hover;
    }

    &:focus {
      box-shadow: var(--focused);
    }

    i {
      width: $accordion-item-header-icon-size;
      height: $accordion-item-header-icon-size;
    }
  }
}
</style>
