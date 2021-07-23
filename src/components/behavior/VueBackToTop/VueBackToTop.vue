<template>
  <button
    :class="[$style.vueBackToTop, show && $style.show]"
    data-testid="back-to-top"
    type="button"
    :aria-label="$t('common.Back-to-top' /* Back to top */)"
    @click="onClick"
  >
    <vue-icon-arrow-up />
  </button>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import { useEvent } from '@/composables/use-event';
import VueIconArrowUp from '@/components/icons/VueIconArrowUp.vue';

export default defineComponent({
  name: 'VueBackToTop',
  components: { VueIconArrowUp },
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
@import '~@/assets/_design-system';

.vueBackToTop {
  position: fixed;
  height: $back-to-top-size;
  width: $back-to-top-size;
  align-items: center;
  justify-content: center;
  bottom: $back-to-top-bottom-space;
  right: $back-to-top-right-space;
  border: none;
  border-radius: $back-to-top-border-radius;
  background-color: $back-to-top-bg;
  color: $back-to-top-color;
  box-shadow: $back-to-top-shadow;
  cursor: pointer;
  display: flex;
  opacity: 0;
  z-index: -1;
  transition: var(--brand-fade-animation-transition);
  outline: none;

  i {
    width: $back-to-top-icon-size;
    height: $back-to-top-icon-size;
  }

  &:hover {
    color: $back-to-top-color-hover;
    background: $back-to-top-bg-hover;
  }

  &:focus {
    color: $back-to-top-color-focus;
    background: $back-to-top-bg-focus;
    box-shadow: $back-to-top-outline;
  }

  &:active {
    color: $back-to-top-color-active;
    background: $back-to-top-bg-active;
  }

  &.show {
    z-index: $back-to-top-index;
    opacity: 1;
  }
}
</style>
