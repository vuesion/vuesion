<template>
  <div :class="$style.error">
    <vue-icon-vuesion :class="$style.logo" />
    <vue-headline level="1">Error</vue-headline>
    <vue-headline level="3">Try again later!</vue-headline>
  </div>
</template>

<script lang="ts">
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';
import VueIconVuesion from '@components/icons/VueIconVuesion/VueIconVuesion.vue';

export default {
  metaInfo: {
    title: 'vuesion - an error occurred',
    meta: [
      {
        name: 'robots',
        content: 'NOINDEX,NOFOLLOW',
      },
    ],
  },
  name: 'Error',
  components: { VueIconVuesion, VueHeadline },
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

.error {
  padding-top: $nav-bar-height;
  text-align: center;
  width: 300px;
  height: 300px;
  margin: auto;
  margin-top: 25%;
}

.logo {
  width: $space-84;
  height: $space-84;
}
</style>
