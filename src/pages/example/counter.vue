<template>
  <vue-content-block :class="$style.counter">
    <vue-box :padding="['24 16', '24 16', 24, 32]">
      <vue-stack :space="[16, 16, 24, 32]">
        <vue-breadcrumb :items="[{ label: 'VueX Example', value: '/example/counter' }]" />

        <vue-text look="h1" as="h1"> Counter: {{ count }} </vue-text>

        <vue-inline>
          <vue-button :loading="incrementPending" @click="increment"> Increment +1 </vue-button>

          <vue-button look="primary" :loading="decrementPending" @click="decrement"> Decrement -1 </vue-button>
        </vue-inline>
      </vue-stack>
    </vue-box>
  </vue-content-block>
</template>

<script lang="ts">
import { defineComponent, useContext, useFetch, computed, useMeta } from '@nuxtjs/composition-api';
import VueBreadcrumb from '@/components/navigation/VueBreadcrumb/VueBreadcrumb.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueButton from '@/components/input-and-actions/VueButton/VueButton.vue';
import VueContentBlock from '@/components/layout/VueContentBlock/VueContentBlock.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';

export default defineComponent({
  name: 'CounterPage',
  auth: false,
  components: {
    VueInline,
    VueStack,
    VueBox,
    VueContentBlock,
    VueBreadcrumb,
    VueText,
    VueButton,
  },
  setup() {
    useMeta({ title: 'vuesion - Counter Example' });
    const { store } = useContext();
    const count = computed(() => store.getters['counter/count']);
    const incrementPending = computed(() => store.getters['counter/incrementPending']);
    const decrementPending = computed(() => store.getters['counter/decrementPending']);
    const increment = async () => {
      await store.dispatch('counter/increment');
    };
    const decrement = async () => {
      await store.dispatch('counter/decrement');
    };

    useFetch(() => store.dispatch('counter/increment'));

    return { count, incrementPending, decrementPending, increment, decrement };
  },
  head: {},
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.counter {
  padding-top: $navbar-height;
}
</style>
