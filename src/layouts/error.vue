<template>
  <div :class="$style.error">
    <div v-if="error.statusCode === 404">
      <vue-headline level="1">
        404
      </vue-headline>
      <vue-headline level="3">
        Page not found!
      </vue-headline>
    </div>
    <div v-else>
      <vue-headline level="1">
        Error
      </vue-headline>
      <vue-headline level="3">
        Try again later!
      </vue-headline>
    </div>
  </div>
</template>

<script lang="ts">
import VueHeadline from '@/components/shared/VueHeadline/VueHeadline.vue';

export default {
  name: 'Error',
  components: { VueHeadline },
  props: {
    error: { type: Object, required: true },
  },
  head() {
    return {
      title: this.error.statusCode === 404 ? 'vuesion - page not found' : 'vuesion - an error occurred',
      meta: [
        {
          name: 'robots',
          content: 'NOINDEX,NOFOLLOW',
        },
      ],
    };
  },
};
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.error {
  padding-top: $nav-bar-height;
  text-align: center;
  width: 300px;
  height: 300px;
}
</style>
