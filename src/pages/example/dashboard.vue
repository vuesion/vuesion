<template>
  <vue-content-block :class="$style.dashboard">
    <vue-box :padding="['24 16', '24 16', 24, 32]">
      <vue-stack :space="[16, 16, 24, 32]">
        <vue-breadcrumb :items="[{ label: 'Dashboard', value: '/example/dashboard' }]" />

        <vue-text look="h1" as="h1"> Dashboard </vue-text>

        <vue-stack space="8">
          <p>This demo demonstrates the authentication and re-authentication flow.</p>
          <strong>Make sure to open the console to see the whole flow.</strong>
        </vue-stack>

        <vue-text>
          Press this <vue-button @click="onClick">button</vue-button> and the following will happen:
        </vue-text>

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
                if the refresh works your accessToken will change the value to <code>accessToken2</code> and the request
                will be repeated.
              </li>
            </ul>
          </li>
        </ul>
      </vue-stack>
    </vue-box>
  </vue-content-block>
</template>

<script lang="ts">
/* istanbul ignore file */

import { defineComponent, ref, useContext } from '@nuxtjs/composition-api';
import VueBreadcrumb from '@/components/navigation/VueBreadcrumb/VueBreadcrumb.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueButton from '@/components/input-and-actions/VueButton/VueButton.vue';
import VueContentBlock from '@/components/layout/VueContentBlock/VueContentBlock.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';

export default defineComponent({
  name: 'DashboardPage',
  components: {
    VueStack,
    VueBox,
    VueContentBlock,
    VueBreadcrumb,
    VueButton,
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
  padding-top: $navbar-height;
}
</style>
