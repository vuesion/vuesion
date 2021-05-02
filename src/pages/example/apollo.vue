<template>
  <vue-content-block :class="$style.apollo">
    <vue-box :padding="['24 16', '24 16', 24, 32]">
      <vue-stack :space="[16, 16, 24, 32]">
        <vue-breadcrumb :items="breadCrumbItems" />

        <vue-text appearance="h1" as="h1">Apollo Example</vue-text>

        <vue-tiles v-if="loading === false" :columns="[1, 2, 3, 4]">
          <vue-box v-for="character in characters" :key="character.id" padding="null" :class="$style.card">
            <vue-stack space="4">
              <img :src="character.image" :alt="character.name" />

              <vue-box :padding="[8, 8, 8, 16]">
                <vue-stack space="4">
                  <vue-text appearance="large-title" color="text-high" serifs>{{ character.name }}</vue-text>
                  <vue-text appearance="support">
                    {{ character.species }} | {{ character.gender }} |
                    {{ character.status }}
                  </vue-text>
                </vue-stack>
              </vue-box>
            </vue-stack>
          </vue-box>
        </vue-tiles>
      </vue-stack>
    </vue-box>
  </vue-content-block>
</template>

<script lang="ts">
import { computed, defineComponent, useContext, useMeta } from '@nuxtjs/composition-api';
import { useQuery, useResult } from '@vue/apollo-composable/dist';
import VueBreadcrumb from '@/components/molecules/VueBreadcrumb/VueBreadcrumb.vue';
import VueText from '@/components/atoms/VueText/VueText.vue';
import VueContentBlock from '@/components/layout/VueContentBlock/VueContentBlock.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import { GetExamplePageData } from '@/graphql/ExamplePage';
import VueTiles from '@/components/layout/VueTiles/VueTiles.vue';

export default defineComponent({
  name: 'ApolloPage',
  auth: false,
  components: {
    VueTiles,
    VueStack,
    VueContentBlock,
    VueBreadcrumb,
    VueText,
  },
  setup() {
    useMeta({ title: 'vuesion - Apollo Example' });
    const { app } = useContext();
    const breadCrumbItems = computed(() => [
      { label: app.i18n.t('common.home' /* Home */), href: '/' },
      { label: app.i18n.t('common.Apollo' /* Apollo Example */), href: '/example/apollo' },
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
  margin-top: $nav-bar-height;

  .card {
    border: 1px solid var(--brand-tertiary-bg-color);
    border-radius: var(--brand-border-radius-md);
    background: var(--brand-secondary-bg-color);
    overflow: hidden;
    max-width: 324px;
  }
}
</style>
