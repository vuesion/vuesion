<template>
  <div :class="[$style.homeSection, alternative ? $style.alternative : null]">
    <vue-grid>
      <vue-grid-row :class="[flip ? $style.flip : null]">
        <vue-grid-item :class="$style.image">
          <div ref="image" :class="$style.image"></div>
        </vue-grid-item>
        <vue-grid-item :class="$style.text"><slot /></vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import VueGrid from '@/app/shared/components/VueGrid/VueGrid.vue';
import VueGridRow from '@/app/shared/components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@/app/shared/components/VueGridItem/VueGridItem.vue';

export default {
  name: 'HomeSection',
  components: { VueGridItem, VueGridRow, VueGrid },
  props: {
    image: {
      type: String,
      required: true,
    },
    alternative: {
      type: Boolean,
    },
    flip: {
      type: Boolean,
    },
  },
  data /* istanbul ignore next */(): any {
    return {
      observer: null,
    };
  },
  methods: {
    setBgImage /* istanbul ignore next */(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.intersectionRatio > 0) {
          this.$refs.image.style.backgroundImage = `url(${this.image})`;
        }
      });
    },
    handleObserver /* istanbul ignore next */() {
      this.observer = new IntersectionObserver(this.setBgImage, { rootMargin: '0px', threshold: 0.1 });
      this.observer.observe(this.$refs.image);
    },
  },
  mounted /* istanbul ignore next */() {
    if ((window as any).IntersectionObserver) {
      this.handleObserver();
    } else {
      this.$refs.image.style.backgroundImage = `url(${this.image})`;
    }
  },
  beforeDestroy /* istanbul ignore next */() {
    this.observer = null;
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.homeSection {
  padding: $space-48 0;

  @include mediaMin(tabletPortrait) {
    padding: $space-84 0;
  }
}

.alternative {
  background: $brand-bg-color-variant;
}

.flip {
  @include mediaMin(tabletPortrait) {
    flex-direction: row-reverse;
  }
}

.image {
  min-height: 256px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  margin-bottom: $space-32;

  @include mediaMin(tabletPortrait) {
    min-height: 512px;
    margin-bottom: 0;
  }
}
</style>
