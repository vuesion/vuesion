<template>
  <component :is="component" ref="image" />
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';
import { getDomRef } from '@/composables/get-dom-ref';
import { useIntersectionObserver } from '@/composables/use-intersection-observer';

export default defineComponent({
  name: 'VueImage',
  components: {},
  props: {
    native: { type: Boolean, default: true },
    src: { type: String, required: true },
  },
  setup(props) {
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

    return {
      image,
      component,
    };
  },
});
</script>
