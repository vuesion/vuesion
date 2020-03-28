<template>
  <div :class="[$style.homeSection, alternative ? $style.alternative : null]">
    <vue-grid space="none">
      <vue-grid-row :class="[flip ? $style.flip : null]">
        <vue-grid-column>
          <vue-image :src="image" :native="false" :class="$style.image" />
        </vue-grid-column>
        <vue-grid-column>
          <slot />
        </vue-grid-column>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridRow from '@components/VueGrid/VueGridRow/VueGridRow.vue';
import VueGridColumn from '@components/VueGrid/VueGridColumn/VueGridColumn.vue';
import VueImage from '@components/VueImage/VueImage.vue';

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
@import '~@/app/shared/design-system';

.homeSection {
}

.alternative {
  background: var(--brand-bg-color-variant);
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
