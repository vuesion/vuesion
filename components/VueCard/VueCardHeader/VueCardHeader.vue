<template>
  <div :class="cssClasses">
    <img v-if="image" :src="image" :alt="title" />
    <div>
      <div v-if="title" :class="$style.title">
        {{ title }}
      </div>
      <div v-if="subtitle" :class="$style.subtitle">
        {{ subtitle }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'VueCardHeader',
  props: {
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    image: { type: String, default: '' },
  },
  computed: {
    cssClasses() {
      const classes = ['vue-card-header', this.$style.vueCardHeader];

      if (this.image) {
        classes.push(this.$style.withImage);
      }

      return classes;
    },
  },
  methods: {},
};
</script>

<style lang="scss" module>
@import '../../../design-system';

.vueCardHeader {
  display: block;
  padding: $card-header-padding;
  line-height: 1.7;

  &.withImage {
    display: flex;
    flex-direction: row;

    img {
      width: $card-header-image-size;
      height: $card-header-image-size;
      border-radius: $card-header-image-border-radius;
      flex-shrink: 0;
      display: block;
    }
  }

  .title {
    font-size: $card-header-title-font-size;
    font-weight: $card-header-title-font-weight;
    display: block;
  }

  .subtitle {
    font-size: $card-header-subtitle-font-size;
    font-weight: $card-header-subtitle-font-weight;
    color: $card-header-subtitle-color;
    display: block;
  }
}
</style>
