<template>
  <div :class="[$style.homeSection, alternative ? $style.alternative : null]">
    <vue-grid space="none">
      <vue-grid-row :class="[flip ? $style.flip : null]">
        <vue-grid-column tablet-portrait="50%">
          <vue-image :src="image" :native="false" :class="$style.image" />
        </vue-grid-column>
        <vue-grid-column tablet-portrait="50%">
          <slot />
        </vue-grid-column>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import VueGrid from '@/components/organisms/VueGrid/VueGrid.vue';
import VueGridRow from '@/components/organisms/VueGrid/VueGridRow/VueGridRow.vue';
import VueGridColumn from '@/components/organisms/VueGrid/VueGridColumn/VueGridColumn.vue';
import VueImage from '@/components/atoms/VueImage/VueImage.vue';

export default {
  name: 'HomeSection',
  components: { VueImage, VueGridColumn, VueGridRow, VueGrid },
  props: {
    image: { type: String, required: true },
    alternative: { type: Boolean, default: false },
    flip: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.homeSection {
}

.alternative {
  background: var(--brand-secondary-bg-color);
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

  @include mediaMin(tabletPortrait) {
    min-height: 512px;
  }
}
</style>
