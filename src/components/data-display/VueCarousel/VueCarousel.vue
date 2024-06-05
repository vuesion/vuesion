<template>
  <div
    :class="$style.vueCarousel"
    :style="{ minHeight: `${minHeight}px` }"
    data-testid="carousel"
    @mouseenter="pause = true"
    @mouseleave="pause = false"
  >
    <fade-animation v-for="(image, idx) in preloadedImages" :key="'image-' + idx">
      <div
        v-if="isActiveSlide(idx)"
        :title="image.getAttribute('alt') || ''"
        :style="{ backgroundImage: `url(${image.getAttribute('src')})` }"
        :class="$style.image"
        data-testid="carousel-image"
      >
        <div v-if="image.getAttribute('title')" class="sr-only" data-testid="carousel-copyright">
          &copy; {{ image.getAttribute('title') }}
        </div>
      </div>
    </fade-animation>

    <ul v-if="showIndicator" :class="$style.indicator" data-testid="carousel-indicator">
      <li v-for="(_, idx) in preloadedImages" :key="'indicator-' + idx" :class="isActiveSlide(idx) && $style.active">
        &nbsp;
      </li>
    </ul>

    <vue-pagination
      v-if="showPagination"
      slim
      infinite
      :pages="preloadedImages.length"
      :selected-page="currentSlide + 1"
      :class="$style.pagination"
      @next="changeSlide(currentSlide + 1, true)"
      @prev="changeSlide(currentSlide - 1, true)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, useCssModule, watch } from 'vue';
import type { ICarouselImage } from '~/components/data-display/VueCarousel/ICarouselImage';
import FadeAnimation from '~/components/animations/FadeAnimation/FadeAnimation.vue';
import VuePagination from '~/components/navigation/VuePagination/VuePagination.vue';

// Interface
interface CarouselProps {
  images?: Array<ICarouselImage>;
  intervalInSeconds?: number;
  selectedSlide?: number;
  minHeight?: number;
  showIndicator?: boolean;
  showPagination?: boolean;
}
interface CarouselEmits {
  (e: 'update:selectedSlide', id: number): void;
}
const props = withDefaults(defineProps<CarouselProps>(), {
  images: () => [],
  intervalInSeconds: 5,
  selectedSlide: 1,
  minHeight: 500,
  showIndicator: true,
  showPagination: false,
});
const emit = defineEmits<CarouselEmits>();

// Deps
const $style = useCssModule();

// Data
const images = computed<Array<ICarouselImage>>(() => props.images as Array<ICarouselImage>);
const interval = computed<number>(() => props.intervalInSeconds * 1000);
const selectedSlide = computed<number>(() => props.selectedSlide);
const currentSlide = ref<number>(props.selectedSlide - 1);
const maxSlides = computed<number>(() => images.value.length);
const intervalInstance = ref<any>(null);
const pause = ref(false);
const preloadedImages = ref<Array<HTMLImageElement>>([]);

// Methods
const isActiveSlide = (idx: number) => currentSlide.value === idx;
const changeSlide = (newSlide: number, fromPagination = false) => {
  if (fromPagination === false && pause.value) {
    return;
  }

  if (newSlide === maxSlides.value) {
    currentSlide.value = 0;
  } else if (newSlide < 0) {
    currentSlide.value = maxSlides.value - 1;
  } else {
    currentSlide.value = newSlide;
  }

  emit('update:selectedSlide', currentSlide.value + 1);
};
const createIntervalInstance = () => {
  if (images.value.length <= 1) {
    return;
  }
  clearInterval(intervalInstance.value);
  intervalInstance.value = setInterval(() => changeSlide(currentSlide.value + 1), interval.value);
};
const preloadImages = () => {
  images.value.forEach((image: ICarouselImage) => {
    const imageInstance: HTMLImageElement = new Image();

    imageInstance.src = image.url;
    imageInstance.alt = image.alt || '';
    imageInstance.title = image.copyright || '';

    preloadedImages.value.push(imageInstance);
  });
  createIntervalInstance();
};

// Watchers
watch(images, () => preloadImages());
watch(interval, () => createIntervalInstance());
watch(selectedSlide, () => {
  clearInterval(intervalInstance.value);
  currentSlide.value = selectedSlide.value - 1;
  createIntervalInstance();
});

// Lifecycle
onMounted(() => preloadImages());
onBeforeUnmount(() => clearInterval(intervalInstance.value));
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueCarousel {
  position: relative;
  overflow: hidden;
  border-radius: $carousel-border-radius;

  .image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-position: 50% 50%;
  }

  .indicator {
    display: block;
    position: absolute;
    padding: 0;
    margin: 0;
    bottom: $carousel-indicator-bottom;
    left: $carousel-pagination-right;
    height: $carousel-indicator-height;

    li {
      display: inline-block;
      width: $carousel-indicator-width;
      height: $carousel-indicator-height;
      margin-right: $carousel-indicator-space;
      border-radius: $carousel-indicator-border-radius;
      background-color: $carousel-indicator-bg;
      opacity: $carousel-indicator-opacity;

      &.active {
        background-color: $carousel-indicator-bg-active;
        opacity: $carousel-indicator-opacity-active;
        width: $carousel-indicator-width-active;
      }
    }
  }

  .pagination {
    position: absolute;
    bottom: $carousel-pagination-bottom;
    right: $carousel-pagination-right;
  }

  @include mediaMin(tabletPortrait) {
    .indicator {
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
