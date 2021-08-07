<template>
  <vue-content-block :class="$style.dashboard">
    <vue-box :padding="['24 16', '24 16', 24, 32]">
      <vue-stack :space="[16, 16, 24, 32]">
        <vue-breadcrumb :items="[{ label: 'Dashboard', value: '/example/dashboard' }]" />

        <vue-text look="h1" as="h1"> Dashboard </vue-text>

        <vue-columns>
          <vue-column :width="['content', 'content', '50%']">
            <vue-card>
              <vue-stack>
                <vue-text look="description">
                  This example demonstrates the authentication and re-authentication flow (make sure to open the console
                  to see the whole flow).
                </vue-text>

                <vue-text look="description"> Click this button </vue-text>

                <vue-button @click="onClick">button</vue-button>

                <vue-text look="description"> and the following will happen: </vue-text>

                <vue-box padding="0 16">
                  <vue-text look="description" as="ol">
                    <li>
                      It will try to fetch data from the example endpoint <code>/protected</code> 10 x in parallel
                    </li>
                    <li>
                      The endpoint will return error-code 401 for not authenticated (which is the same as sending an
                      expired accessToken)
                    </li>
                    <li>
                      The HttpService will handle the error and try to refresh the accessToken.
                      <ol>
                        <li>if a random error occurs during the refresh it will log you out</li>
                        <li>
                          if the refresh works your accessToken will change the value to <code>accessToken2</code> and
                          the initial request will be repeated
                        </li>
                      </ol>
                    </li>
                  </vue-text>
                </vue-box>
              </vue-stack>
            </vue-card>
          </vue-column>
        </vue-columns>
      </vue-stack>
    </vue-box>
  </vue-content-block>
</template>

<script lang="ts">
/* istanbul ignore file */

import { defineComponent, ref, useContext, useMeta } from '@nuxtjs/composition-api';
import VueBreadcrumb from '@/components/navigation/VueBreadcrumb/VueBreadcrumb.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueButton from '@/components/input-and-actions/VueButton/VueButton.vue';
import VueContentBlock from '@/components/layout/VueContentBlock/VueContentBlock.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueCard from '@/components/data-display/VueCard/VueCard.vue';
import VueColumns from '@/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/layout/VueColumns/VueColumn/VueColumn.vue';

export default defineComponent({
  name: 'DashboardPage',
  components: {
    VueColumn,
    VueColumns,
    VueCard,
    VueStack,
    VueBox,
    VueContentBlock,
    VueBreadcrumb,
    VueButton,
    VueText,
  },
  setup() {
    useMeta({ title: 'Vuesion - Authentication Example' });
    const { $axios } = useContext();
    const pending = ref(false);
    const onClick = async () => {
      const requests: any[] = [];

      for (let i = 0; i < 10; i++) {
        requests.push($axios.$get('/protected'));
      }

      try {
        pending.value = true;

        const data = await Promise.all(requests);

        console.info(data); // eslint-disable-line
      } catch (e) {
        console.error(e); // eslint-disable-line
      } finally {
        pending.value = false;
      }
    };

    return { pending, onClick };
  },
  head: {
    title: 'vuesion - Dashboard',
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.dashboard {
  padding-top: $navbar-height;
}
</style>
