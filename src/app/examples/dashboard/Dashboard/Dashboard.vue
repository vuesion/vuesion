<template>
  <div :class="$style.dashboard">
    <vue-grid>
      <vue-breadcrumb :items="[{ label: 'Home', href: '/' }, { label: 'VueX Example' }]" />
      <vue-grid-row>
        <vue-grid-item fill>
          <vue-headline level="1">Dashboard</vue-headline>
          This demo demonstrates the authentication and re-authentication flow.
          <br />
          <strong>Make sure to open the console to see the whole flow.</strong>
          <br />
          <br />
        </vue-grid-item>

        <vue-grid-item>
          Press this&nbsp;&nbsp;&nbsp;&nbsp;<vue-button outlined @click="onClick">button</vue-button>
          and the following will happen:

          <br />
          <br />

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
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import VueButton from '@components/VueButton/VueButton.vue';
import VueGridRow from '@components/VueGridRow/VueGridRow.vue';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';
import { HttpService } from '@shared/services/HttpService/HttpService';
import VueBreadcrumb from '@components/VueBreadcrumb/VueBreadcrumb.vue';

export default {
  metaInfo: {
    title: 'Dashboard',
  },
  components: {
    VueBreadcrumb,
    VueGrid,
    VueGridItem,
    VueButton,
    VueGridRow,
    VueHeadline,
  },
  data(): any {
    return { pending: false };
  },
  methods: {
    onClick() {
      const requests = [];

      this.pending = true;

      for (let i = 0; i < 1; i++) {
        requests.push(HttpService.get('/protected'));
      }

      Promise.all(requests)
        .then(() => {
          this.pending = false;
        })
        .catch((e) => {
          console.log(e); // tslint:disable-line
          this.pending = false;
        });
    },
  },
  computed: {},
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.dashboard {
  margin-top: $nav-bar-height;
  min-height: 500px;
}
</style>
