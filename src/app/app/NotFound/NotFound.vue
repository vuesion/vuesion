<template>
  <div :class="$style.notFound">
    <vue-headline level="1">404</vue-headline>
    <vue-headline level="3">Page not found!</vue-headline>
  </div>
</template>

<script lang="ts">
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';

export default {
  metaInfo: {
    title: 'vuesion - page not found',
    meta: [
      {
        name: 'robots',
        content: 'NOINDEX,NOFOLLOW',
      },
    ],
  },
  name: 'NotFound',
  components: { VueHeadline },
  props: {},
  data(): any {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.notFound {
  padding-top: $nav-bar-height;
  text-align: center;
  width: 300px;
  height: 300px;
  margin: auto;
  margin-top: 25%;
}
</style>
