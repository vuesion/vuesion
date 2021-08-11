<template>
  <vue-content-block :class="$style.apollo">
    <vue-box :padding="['24 16', '24 16', 24, 32]">
      <vue-stack :space="[16, 16, 24, 32]">
        <vue-breadcrumb :items="breadCrumbItems" />

        <vue-text look="h1" as="h1">Apollo Example</vue-text>

        <vue-columns>
          <vue-column :width="['content', 'content', '50%']">
            <vue-text look="description">
              This Example demonstrates the basic usage of vue-apollo in combination with
              <code>@vue/apollo-composable</code>, composition-api and server-side rendering.
            </vue-text>
          </vue-column>
        </vue-columns>

        <vue-tiles v-if="loading === false" :columns="[1, 2, 3, 4]">
          <vue-card v-for="character in characters" :key="character.id" padding="null" :class="$style.card">
            <vue-stack space="4">
              <img :src="character.image" :alt="character.name" />

              <vue-box :padding="[8, 8, 8, 16]">
                <vue-stack space="4">
                  <vue-text look="large-title" color="text-high" serifs>{{ character.name }}</vue-text>
                  <vue-text look="support">
                    {{ character.species }} | {{ character.gender }} |
                    {{ character.status }}
                  </vue-text>
                </vue-stack>
              </vue-box>
            </vue-stack>
          </vue-card>
        </vue-tiles>
      </vue-stack>
    </vue-box>
  </vue-content-block>
</template>

<script lang="ts">
import { computed, defineComponent, useContext, useMeta } from '@nuxtjs/composition-api';
import { useQuery, useResult } from '@vue/apollo-composable/dist';
import VueBreadcrumb from '@/components/navigation/VueBreadcrumb/VueBreadcrumb.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueContentBlock from '@/components/layout/VueContentBlock/VueContentBlock.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import { GetExamplePageData } from '@/graphql/ExamplePage';
import VueTiles from '@/components/layout/VueTiles/VueTiles.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueCard from '@/components/data-display/VueCard/VueCard.vue';
import VueColumns from '@/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/layout/VueColumns/VueColumn/VueColumn.vue';

export default defineComponent({
  name: 'ApolloPage',
  auth: false,
  components: {
    VueColumn,
    VueColumns,
    VueCard,
    VueBox,
    VueTiles,
    VueStack,
    VueContentBlock,
    VueBreadcrumb,
    VueText,
  },
  setup() {
    useMeta({ title: 'Vuesion - Apollo Example' });
    const { app } = useContext();
    const breadCrumbItems = computed(() => [
      { label: app.i18n.t('common.Apollo' /* Apollo Example */), value: '/example/apollo' },
    ]);
    const { result, loading } = useQuery(GetExamplePageData);
    const characters = useResult(result, null, (data) => data.characters.results);

    return {
      characters,
      loading,
      breadCrumbItems,
    };
  },
  head: {},
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.apollo {
  padding-top: $navbar-height;

  .card {
    img {
      border-radius: $card-border-radius $card-border-radius 0 0;
      width: 100%;
    }
  }
}
</style>
