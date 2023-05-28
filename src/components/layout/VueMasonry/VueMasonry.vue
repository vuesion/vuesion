<template>
  <div ref="wrapper" :class="$style.vueMasonry" :style="{ height: actualHeight + 'px' }">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, onUpdated, ref } from 'vue';
import { getDomRef } from '~/composables/get-dom-ref';

// Interface
const props = defineProps({
  height: { type: Number, default: 800 },
});

// Data
let observer: MutationObserver | null = null;
const wrapper = getDomRef<HTMLElement>(null);
const actualHeight = ref(props.height);

// Methods
const getColumnHeight = (col = 0) => {
  let height = 0;
  const children = wrapper.value.children;
  const max = children.length;

  for (let i = col; i < max; i += 3) {
    const child = children.item(i);

    if (child) {
      height += child.scrollHeight + 24;
    } /* c8 ignore start */ else {
      height += 24;
    }
    /* c8 ignore end */
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

    image.onload = function (ev) {
      image.style.display = 'initial';
      imageLoaded();

      /* c8 ignore start */
      if (originalLoadEvent) {
        originalLoadEvent.apply(this, ev as any);
      }
      /* c8 ignore end */
    };
    image.onerror = function (ev) {
      image.style.display = 'none';
      imageLoaded();

      /* c8 ignore start */
      if (originalErrorEvent) {
        originalErrorEvent.apply(this, ev as any);
      }
      /* c8 ignore end */
    };
  });
};

// Lifecycle
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

  observer?.disconnect();
});
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

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
