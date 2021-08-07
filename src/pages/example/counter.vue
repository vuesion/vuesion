<template>
  <vue-content-block :class="$style.counter">
    <vue-box :padding="['24 16', '24 16', 24, 32]">
      <vue-stack :space="[16, 16, 24, 32]">
        <vue-breadcrumb :items="[{ label: 'Counter vuex-example', value: '/example/counter' }]" />

        <vue-text look="h1" as="h1"> Counter vuex-example </vue-text>

        <vue-columns>
          <vue-column :width="['content', 'content', '50%']">
            <vue-stack>
              <vue-text look="description">
                This Example demonstrates the basic usage of vuex including Getters and Actions in combination with the
                composition-api and server-side rendering (reload the page to see the counter increase by one).
              </vue-text>

              <vue-text look="description" weight="semi-bold"> Current count: {{ count }} </vue-text>

              <vue-inline>
                <vue-button look="primary" :loading="incrementPending" trailing-icon="plus-circle" @click="increment">
                  Increment
                </vue-button>

                <vue-button look="outline" :loading="decrementPending" trailing-icon="minus-circle" @click="decrement">
                  Decrement
                </vue-button>
              </vue-inline>
            </vue-stack>
          </vue-column>
        </vue-columns>
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
import VueColumns from '@/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/layout/VueColumns/VueColumn/VueColumn.vue';

export default defineComponent({
  name: 'CounterPage',
  auth: false,
  components: {
    VueColumn,
    VueColumns,
    VueInline,
    VueStack,
    VueBox,
    VueContentBlock,
    VueBreadcrumb,
    VueText,
    VueButton,
  },
  setup() {
    useMeta({ title: 'Vuesion - Counter Example' });
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
