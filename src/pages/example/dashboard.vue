<template>
  <div :class="$style.dashboard">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-column>
          <vue-breadcrumb :items="[{ label: 'Home', href: '/' }, { label: 'Dashboard' }]" />
        </vue-grid-column>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-column>
          <vue-text appearance="h1" as="h1"> Dashboard </vue-text>
        </vue-grid-column>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-column>
          <p>This demo demonstrates the authentication and re-authentication flow.</p>
          <strong>Make sure to open the console to see the whole flow.</strong>
        </vue-grid-column>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-column>
          Press this <vue-button @click="onClick">button</vue-button> and the following will happen:
        </vue-grid-column>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-column>
          <ul>
            <li>We will try to fetch data 10 times from our example endpoint <code>/protected</code></li>
            <li>
              The endpoint will return error-code 401 for not authenticated (which is the same as sending an expired
              accessToken)
            </li>
            <li>
              The HttpService will handle the error and try to refresh the accessToken.
              <ul>
                <li>if an error occurs (random) during the refresh you will be logged out</li>
                <li>
                  if the refresh works your accessToken will change the value to <code>accessToken2</code> and the
                  request will be repeated.
                </li>
              </ul>
            </li>
          </ul>
        </vue-grid-column>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
/* istanbul ignore file */

import { defineComponent, ref, useContext } from '@nuxtjs/composition-api';
import VueGrid from '@/components/organisms/VueGrid/VueGrid.vue';
import VueGridRow from '@/components/organisms/VueGrid/VueGridRow/VueGridRow.vue';
import VueGridColumn from '@/components/organisms/VueGrid/VueGridColumn/VueGridColumn.vue';
import VueBreadcrumb from '@/components/molecules/VueBreadcrumb/VueBreadcrumb.vue';
import VueText from '@/components/atoms/VueText/VueText.vue';
import VueButton from '@/components/atoms/VueButton/VueButton.vue';

export default defineComponent({
  name: 'DashboardPage',
  components: {
    VueBreadcrumb,
    VueGrid,
    VueGridColumn,
    VueButton,
    VueGridRow,
    VueText,
  },
  setup() {
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
  padding-top: $nav-bar-height;
}
</style>
