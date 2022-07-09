<template>
  <component :is="component" ref="image" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getDomRef } from '~/composables/get-dom-ref';
import { useIntersectionObserver } from '~/composables/use-intersection-observer';

interface ImageProps {
  native?: boolean;
  src: string;
}

const props = withDefaults(defineProps<ImageProps>(), {
  native: true,
});
const image = getDomRef(null);
const component = computed(() => (props.native ? 'img' : 'div'));
const setImage = () => {
  if (props.native) {
    image.value.src = props.src;
  } else {
    image.value.style.backgroundImage = `url(${props.src})`;
  }
};

useIntersectionObserver(image, (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      setImage();
      observer.disconnect();
    }
  });

  if (!observer) {
    setImage();
  }
});
</script>
