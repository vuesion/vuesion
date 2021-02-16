<template>
  <vue-grid :class="$style.vueCardHeader">
    <vue-grid-row align-items="center">
      <vue-grid-column :can-grow="false">
        <img :src="image" :alt="title" />
      </vue-grid-column>
      <vue-grid-column :can-grow="false">
        <div v-if="title" :class="$style.title">{{ title }}</div>
        <div v-if="subtitle" :class="$style.subtitle">{{ subtitle }}</div>
      </vue-grid-column>
    </vue-grid-row>
  </vue-grid>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import VueGrid from '@/components/organisms/VueGrid/VueGrid.vue';
import VueGridRow from '@/components/organisms/VueGrid/VueGridRow/VueGridRow.vue';
import VueGridColumn from '@/components/organisms/VueGrid/VueGridColumn/VueGridColumn.vue';

export default defineComponent({
  name: 'VueCardHeader',
  components: {
    VueGridColumn,
    VueGridRow,
    VueGrid,
  },
  props: {
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    image: { type: String, default: '' },
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueCardHeader {
  img {
    width: $card-header-image-size;
    height: $card-header-image-size;
    border-radius: $card-header-image-border-radius;
  }

  .title {
    font-size: $card-header-title-font-size;
    font-weight: $card-header-title-font-weight;
  }

  .subtitle {
    font-size: $card-header-subtitle-font-size;
    font-weight: $card-header-subtitle-font-weight;
    color: $card-header-subtitle-color;
  }
}
</style>
