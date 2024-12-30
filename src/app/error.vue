<template>
  <vue-content-block as="main" :class="$style.page">
    <vue-stack align-x="center" :space="48">
      <vue-stack align-x="center">
        <vue-stack :space="4" align-x="center">
          <vue-text look="h1" weight="semi-bold">{{ error.statusCode }}</vue-text>
          <vue-text weight="semi-bold" align-x="center">{{ error.message }}</vue-text>
          <DevOnly>
            <vue-text as="pre" align-x="center" :class="$style.stack">{{ error.stack }}</vue-text>
          </DevOnly>
        </vue-stack>
        <vue-button leading-icon="arrow-left" @click="$router.go(-1)">{{ $t('common.Back' /* Back */) }}</vue-button>
      </vue-stack>
    </vue-stack>
  </vue-content-block>
</template>

<script setup lang="ts">
import { useHead } from '#imports';
import VueContentBlock from '~/app/components/layout/VueContentBlock/VueContentBlock.vue';
import VueText from '~/app/components/typography/VueText/VueText.vue';
import VueStack from '~/app/components/layout/VueStack/VueStack.vue';
import VueButton from '~/app/components/input-and-actions/VueButton/VueButton.vue';

const props = defineProps({
  error: {
    type: Object,
    default: () => null,
  },
});

// Meta
useHead({ title: `${props.error.statusCode} ${props.error.message}` });
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $space-24;

  img {
    width: 100%;
    max-width: 250px;
    max-height: 300px;
  }

  .stack {
    max-height: 300px;
    overflow: scroll;
  }

  @include mediaMin(tabletLandscape) {
  }
  img {
    max-width: 600px;
    max-height: 600px;
  }
}
</style>
