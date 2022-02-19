<template>
  <div ref="wrapper" :class="$style.vueMasonry" :style="{ height: actualHeight + 'px' }">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, onUpdated, ref, Ref } from '@vue/composition-api';
import { getDomRef } from '@/composables/get-dom-ref';

export default defineComponent({
  name: 'VueMasonry',
  components: {},
  inheritAttrs: false,
  props: {
    height: { type: Number, default: 800 },
  },
  setup(props) {
    let observer: MutationObserver = null;
    const wrapper: Ref<HTMLElement> = getDomRef(null);
    const actualHeight = ref(props.height);
    const getColumnHeight = (col = 0) => {
      let height = 0;
      const children = wrapper.value.children;
      const max = children.length;

      for (let i = col; i < max; i += 3) {
        const child = children.item(i);
        height += child.scrollHeight + 24;
      }

      return height;
    };
    const calculateHeight = () => {
      const col1Height = getColumnHeight() - 23;
      const col2Height = getColumnHeight(1) - 23;
      const col3Height = getColumnHeight(2) - 23;

      actualHeight.value = Math.max(col1Height, col2Height, col3Height);
    };
    const checkForImages = () => {
      let loadedImages = 0;
      const images = wrapper.value.querySelectorAll('img');
      const imageCount = images.length;
      const imageLoaded = () => {
        loadedImages += 1;
        if (imageCount === loadedImages) {
          calculateHeight();
        }
      };

      images.forEach((image) => {
        image.style.display = 'none';

        const originalLoadEvent = image.onload;
        const originalErrorEvent = image.onerror;

        image.onload = function (ev: Event) {
          image.style.display = 'initial';
          imageLoaded();

          if (originalLoadEvent) {
            originalLoadEvent.apply(this, ev);
          }
        };
        image.onerror = function (ev: Event) {
          image.style.display = 'none';
          imageLoaded();

          if (originalLoadEvent) {
            originalErrorEvent.apply(this, ev);
          }
        };
      });
    };

    onMounted(() => {
      calculateHeight();

      window.addEventListener('resize', calculateHeight);

      observer = new MutationObserver(calculateHeight);
      observer.observe(wrapper.value, { attributes: true, childList: true, characterData: true, subtree: true });

      checkForImages();
    });
    onUpdated(() => calculateHeight);
    onBeforeUnmount(() => {
      window.removeEventListener('resize', calculateHeight);

      observer.disconnect();
    });

    return {
      wrapper,
      actualHeight,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueMasonry {
  display: flex;
  flex-direction: column;
  row-gap: $space-24;

  @include mediaMax(phone) {
    height: auto !important;
  }

  @include mediaMin(tabletPortrait) {
    flex-flow: column wrap;
    align-content: space-between;

    > * {
      width: 32%;
    }
    > *:nth-child(3n + 1) {
      order: 1;
    }
    > *:nth-child(3n + 2) {
      order: 2;
    }
    > *:nth-child(3n) {
      order: 3;
    }

    &::before,
    &::after {
      content: '';
      flex-basis: 100%;
      width: 0;
      order: 2;
    }
  }
}
</style>
