<template>
  <vue-content-block :class="$style.counter">
    <vue-box :padding="['24 16', '24 16', '24', '32']">
      <vue-stack :space="['16', '16', '24', '32']">
        <vue-breadcrumb :items="[{ label: 'Counter Pinia-example', value: '/example/counter' }]" />

        <vue-text look="h1" as="h1"> Counter Pinia-example </vue-text>

        <vue-columns>
          <vue-column :width="['content', 'content', '6/12']" :can-grow="false">
            <vue-stack>
              <vue-text look="description">
                This Example demonstrates the basic usage of Pinia including Getters and Actions in combination with
                server-side rendering (reload the page to see the counter increase by one).
              </vue-text>

              <vue-text look="description" weight="semi-bold"> Current count: {{ count }}</vue-text>

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

<script setup lang="ts">
import { computed, useHead } from '#imports';
import { usePrefillStoreAction } from '~/composables/use-prefill-store-action';
import { useCounterStore } from '~/store/counter';
import VueBreadcrumb from '~/components/navigation/VueBreadcrumb/VueBreadcrumb.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueButton from '~/components/input-and-actions/VueButton/VueButton.vue';
import VueContentBlock from '~/components/layout/VueContentBlock/VueContentBlock.vue';
import VueBox from '~/components/layout/VueBox/VueBox.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueInline from '~/components/layout/VueInline/VueInline.vue';
import VueColumns from '~/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '~/components/layout/VueColumns/VueColumn/VueColumn.vue';

// Deps
const store = useCounterStore();

// Config
useHead({ title: 'Vuesion - Counter Example' });

// Data
const count = computed(() => store.getCount);
const incrementPending = computed(() => store.getIncrementPending);
const decrementPending = computed(() => store.getDecrementPending);

// Event Handler
const increment = async () => {
  await store.increment();
};
const decrement = async () => {
  await store.decrement();
};

// Data fetching
usePrefillStoreAction(store.increment, store.getCount);
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.counter {
  padding-top: $navbar-height;
}
</style>
