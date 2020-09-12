<template>
  <div :class="$style.vueAccordionItem">
    <div
      :class="$style.header"
      tabindex="0"
      role="button"
      :aria-label="title"
      @click="click"
      @keypress.enter.space.prevent.stop="click"
    >
      {{ title }} <i :class="[$style.icon, open && $style.open]" />
    </div>
    <vue-collapse :show="open">
      <section :class="$style.body" :aria-expanded="open">
        <slot />
      </section>
    </vue-collapse>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref, onBeforeMount, Ref } from '@vue/composition-api';
import VueCollapse from '../../../molecules/VueCollapse/VueCollapse.vue';

export default defineComponent({
  name: 'VueAccordionItem',
  components: {
    VueCollapse,
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

    onBeforeMount(() => register(idx, open, props.initOpen));

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
@import '~@/assets/design-system';

.vueAccordionItem {
  display: block;
}

.header {
  background: $accordion-item-header-bg;
  box-shadow: $accordion-item-header-shadow;
  padding: $accordion-item-header-padding;
  border: $accordion-item-header-border;
  position: relative;
  z-index: 1;
  cursor: pointer;
}

.icon {
  position: absolute;
  right: $space-8;

  &:before,
  &:after {
    content: '';
    transition: all 0.25s ease-in-out;
    position: absolute;
    background-color: $accordion-item-header-arrow-color;
    width: 2px;
    height: 13px;
  }

  &:before {
    transform: translate(4px, 0) rotate(45deg);
  }

  &:after {
    transform: translate(-4px, 0) rotate(-45deg);
  }

  &.open {
    &:before {
      transform: translate(-4px, 0) rotate(45deg);
    }

    &:after {
      transform: translate(4px, 0) rotate(-45deg);
    }
  }
}

.body {
  padding: $accordion-item-body-padding;
  position: relative;
  z-index: 0;
}
</style>
