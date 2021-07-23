<template>
  <div :class="[$style.homeSection, alternative && $style.alternative, flip && $style.flip]">
    <vue-content-block>
      <vue-box>
        <vue-columns :space="[16, 24, 32]" stack-phone stack-tablet-portrait :revert="flip">
          <vue-column :width="['content', 'content', '50%']">
            <vue-image :src="image" :native="false" :class="$style.image" />
          </vue-column>
          <vue-column :width="['content', 'content', '50%']">
            <slot />
          </vue-column>
        </vue-columns>
      </vue-box>
    </vue-content-block>
  </div>
</template>

<script lang="ts">
import VueImage from '@/components/data-display/VueImage/VueImage.vue';
import VueContentBlock from '@/components/layout/VueContentBlock/VueContentBlock.vue';
import VueColumns from '@/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';

export default {
  name: 'HomeSection',
  components: { VueBox, VueColumn, VueColumns, VueContentBlock, VueImage },
  props: {
    image: { type: String, required: true },
    alternative: { type: Boolean, default: false },
    flip: { type: Boolean, default: null },
  },
};
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

.homeSection {
  &.alternative {
    background: var(--brand-secondary-bg-color);
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
}
</style>
