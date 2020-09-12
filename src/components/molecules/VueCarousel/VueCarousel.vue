<template>
  <div
    :class="$style.vueCarousel"
    :style="{ minHeight: `${minHeight}px` }"
    @mouseenter="pause = true"
    @mouseleave="pause = false"
  >
    <fade-animation
      v-for="(image, idx) in preloadedImages"
      :key="idx"
      :enter-class="$style.enter"
      :enter-active-class="$style.enterActive"
      :enter-to-class="$style.enterTo"
      :leave-class="$style.leave"
      :leave-active-class="$style.leaveActive"
      :leave-to-class="$style.leaveTo"
    >
      <div
        v-if="isActiveSlide(idx)"
        :title="image.getAttribute('alt')"
        :style="{ backgroundImage: `url(${image.getAttribute('src')})` }"
        :class="$style.image"
      >
        <div v-show="image.getAttribute('title').length > 0" :class="$style.copyright">
          &copy; {{ image.getAttribute('title') }}
        </div>
      </div>
    </fade-animation>

    <ul v-if="showIndicator" :class="$style.indicator">
      <li v-for="(_, idx) in preloadedImages" :key="idx" :class="isActiveSlide(idx) && $style.active">&nbsp;</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref } from '@vue/composition-api';
import FadeAnimation from '@/components/animations/FadeAnimation/FadeAnimation.vue';
import { ICarouselImage } from '@/components/molecules/VueCarousel/ICarouselImage';

export default defineComponent({
  name: 'VueCarousel',
  components: { FadeAnimation },
  props: {
    images: { type: Array, default: (): any[] => [] },
    interval: { type: Number, default: 5000 },
    selectedSlide: { type: Number, default: 1 },
    minHeight: { type: Number, default: 500 },
    showIndicator: { type: Boolean, default: true },
  },
  setup(props) {
    const currentSlide = ref<number>(props.selectedSlide - 1);
    const maxSlides = ref<number>(props.images.length - 1);
    const intervalInstance = ref<any>(null);
    const pause = ref(false);
    const preloadedImages = ref([]);
    const isActiveSlide = (idx: number) => currentSlide.value === idx;
    const changeSlide = () => {
      if (pause.value) {
        return;
      }
      if (currentSlide.value === maxSlides.value) {
        currentSlide.value = 0;
      } else {
        currentSlide.value += 1;
      }
    };
    const createIntervalInstance = () => {
      if (props.images.length <= 1) {
        return;
      }
      intervalInstance.value = setInterval(changeSlide, props.interval);
    };
    const preloadImages = () => {
      props.images.forEach((image: ICarouselImage) => {
        const imageInstance: HTMLImageElement = new Image();

        imageInstance.src = image.url;
        imageInstance.alt = image.alt;
        imageInstance.title = image.copyright;

        preloadedImages.value.push(imageInstance);
      });
      createIntervalInstance();
    };

    onMounted(() => preloadImages());
    onBeforeUnmount(() => clearInterval(intervalInstance.value));

    return {
      currentSlide,
      pause,
      preloadedImages,
      isActiveSlide,
      changeSlide,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueCarousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  min-height: $carousel-min-height;
  display: flex;
  justify-content: center;
}

.image {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-position: 50% 50%;
}

.copyright {
  position: absolute;
  color: $carousel-copyright-color;
  bottom: $carousel-copyright-bottom;
  left: $carousel-copyright-left;
  text-shadow: $carousel-copyright-shadow;
  font-size: $carousel-copyright-font-size;
}

.indicator {
  display: inline-block;
  position: absolute;
  padding: 0;
  bottom: $carousel-indicator-bottom;
  flex: 1 1 auto;

  li {
    display: inline-block;
    width: $carousel-indicator-size;
    height: $carousel-indicator-size;
    padding-right: $carousel-indicator-space;
    border-radius: 50%;
    box-shadow: $carousel-indicator-shadow;
    background-color: $carousel-indicator-bg;

    &.active {
      background-color: $carousel-indicator-active-bg;
    }
  }
}
</style>
