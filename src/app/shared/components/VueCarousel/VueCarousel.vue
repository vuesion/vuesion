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
      <li v-for="(image, idx) in preloadedImages" :key="idx" :class="isActiveSlide(idx) && $style.active">&nbsp;</li>
    </ul>
  </div>
</template>

<script lang="ts">
import FadeAnimation from '../../animations/FadeAnimation/FadeAnimation.vue';

export interface ICarouselImage {
  copyright?: string;
  alt?: string;
  url: string;
}

export default {
  name: 'VueCarousel',
  components: { FadeAnimation },
  props: {
    images: {
      type: Array,
      default: (): any[] => [],
    },
    interval: {
      type: Number,
      default: 5000,
    },
    activeSlide: {
      type: Number,
      default: 1,
    },
    minHeight: {
      type: Number,
      default: 500,
    },
    showIndicator: {
      type: Boolean,
      default: true,
    },
  },
  data(): any {
    return {
      currentSlide: this.activeSlide - 1,
      maxSlides: this.images.length - 1,
      intervalInstance: null,
      pause: false,
      preloadedImages: [],
    };
  },
  methods: {
    isActiveSlide(idx: number) {
      return this.currentSlide === idx;
    },
    preloadImages() {
      this.images.forEach((image: ICarouselImage) => {
        const imageInstance: HTMLImageElement = new Image();

        imageInstance.src = image.url;
        imageInstance.alt = image.alt;
        imageInstance.title = image.copyright;

        this.preloadedImages.push(imageInstance);
      });
      this.setInterval();
    },
    changeSlide() {
      if (this.pause) {
        return;
      }
      if (this.currentSlide === this.maxSlides) {
        this.currentSlide = 0;
      } else {
        this.currentSlide += 1;
      }
    },
    setInterval() {
      if (this.images.length <= 1) {
        return;
      }
      this.intervalInstance = setInterval(this.changeSlide, this.interval);
    },
  },
  mounted() {
    this.preloadImages();
  },
  beforeDestroy() {
    clearInterval(this.intervalInstance);
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

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
  margin: 0;
  padding: 0;
  bottom: $carousel-indicator-bottom;
  flex: 1 1 auto;

  li {
    display: inline-block;
    width: $carousel-indicator-size;
    height: $carousel-indicator-size;
    margin-right: $carousel-indicator-space;
    border-radius: 50%;
    box-shadow: $carousel-indicator-shadow;
    background-color: $carousel-indicator-bg;

    &.active {
      background-color: $carousel-indicator-active-bg;
    }
  }
}
</style>
