<template>
  <div :class="[$style.vueBackToTop, show && $style.show]" data-testid="back-to-top" @click="onClick">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 19V5M5 12l7-7 7 7"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import { useEvent } from '@/composables/use-event';

export default defineComponent({
  name: 'VueBackToTop',
  setup() {
    const show = ref(false);
    const viewportHeight = ref(0);
    const updateViewPortHeight = () => {
      viewportHeight.value = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    };
    const lastScrollPosition = ref(0);
    const onScroll = () => {
      const scrollPosition = window.pageYOffset;
      show.value = scrollPosition > viewportHeight.value * 2 && scrollPosition < lastScrollPosition.value;
      if (scrollPosition === 0) {
        show.value = false;
      }
      lastScrollPosition.value = scrollPosition;
    };

    onMounted(() => {
      const windowRef = ref(window);

      useEvent('resize', updateViewPortHeight, windowRef);
      useEvent('scroll', onScroll, windowRef);

      updateViewPortHeight();
    });

    return {
      show,
      onClick: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueBackToTop {
  position: fixed;
  height: $back-to-top-size;
  width: $back-to-top-size;
  align-items: center;
  justify-content: center;
  bottom: $back-to-top-bottom-space;
  right: $back-to-top-right-space;
  border: $back-to-top-border;
  border-radius: $back-to-top-border-radius;
  background-color: $back-to-top-bg;
  color: $back-to-top-color;
  box-shadow: $back-to-top-shadow;
  cursor: pointer;
  display: flex;
  opacity: 0;
  z-index: -1;
  transition: var(--brand-fade-animation-transition);

  > svg {
    width: $back-to-top-icon-size;
    height: $back-to-top-icon-size;
  }

  &.show {
    z-index: $back-to-top-index;
    opacity: 1;
  }
}
</style>
