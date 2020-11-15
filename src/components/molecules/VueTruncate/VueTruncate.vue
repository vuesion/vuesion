<template>
  <div :class="$style.vueTruncate">
    <div ref="text" :class="$style.text">
      <slot />

      <div v-show="isTruncated" ref="fadeOut" :class="$style.fadeOut" :style="{ height: `${height}px` }" />
    </div>

    <a v-show="isTruncated && showMoreButton" href="#" @click.prevent="showMore">
      {{ $t('components.truncate.showMore' /* Show more */) }}
    </a>

    <a v-show="isTruncated && !showMoreButton" href="#" @click.prevent="showLess">
      {{ $t('components.truncate.showLess' /* Show less */) }}
    </a>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from '@vue/composition-api';
import anime from 'animejs';
import { getDomRef } from '@/composables/get-dom-ref';

export default defineComponent({
  name: 'VueTruncate',
  props: {
    duration: { type: Number, default: 250 },
    lines: { type: Number, default: 3 },
  },
  setup(props) {
    const text = getDomRef(null);
    const fadeOut = getDomRef(null);
    const offsetHeight = ref(0);
    const collapsedHeight = ref(0);
    const lineHeight = ref(0);
    const isTruncated = ref(false);
    const showMoreButton = ref(false);
    const height = computed(() => lineHeight.value * (props.lines > 1 ? 2 : 0.6));
    const showMore = () => {
      anime({
        targets: text.value,
        height: {
          value: `${offsetHeight.value}px`,
          duration: props.duration,
        },
        round: 1,
        easing: 'easeInOutCirc',
        complete: () => (showMoreButton.value = false),
      });
      anime({
        targets: fadeOut.value,
        opacity: {
          value: 0,
          duration: props.duration,
        },
        round: 1,
        easing: 'easeInOutCirc',
      });
    };
    const showLess = () => {
      anime({
        targets: text.value,
        height: {
          value: `${collapsedHeight.value}px`,
          duration: props.duration,
        },
        round: 1,
        easing: 'easeInOutCirc',
        complete: () => (showMoreButton.value = true),
      });
      anime({
        targets: fadeOut.value,
        opacity: {
          value: 1,
          duration: props.duration,
        },
        round: 1,
        easing: 'easeInOutCirc',
      });
    };

    onMounted(() => {
      offsetHeight.value = text.value.offsetHeight;
      lineHeight.value = parseFloat((window as any).getComputedStyle(text.value)['line-height']);
      collapsedHeight.value = props.lines * lineHeight.value;

      if (offsetHeight.value <= collapsedHeight.value) {
        return;
      }

      isTruncated.value = true;
      showMoreButton.value = true;
      text.value.style.height = collapsedHeight.value + 'px';
    });

    return {
      text,
      fadeOut,
      offsetHeight,
      collapsedHeight,
      lineHeight,
      isTruncated,
      showMoreButton,
      height,
      showMore,
      showLess,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueTruncate {
  display: block;
}

.text {
  position: relative;
  overflow: hidden;
}

.fadeOut {
  position: absolute;
  bottom: 0;
  width: 100%;
  @include background-gradient(transparent, var(--brand-primary-bg-color), 'vertical');
}
</style>
