<template>
  <div :class="$style.dashboard">
    <vue-grid with-vertical-space>
      <vue-grid-row>
        <vue-grid-column>
          <vue-breadcrumb :items="[{ label: 'Home', href: '/' }, { label: 'VueX Example' }]" />
        </vue-grid-column>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-column>
          <vue-headline level="1">
            Dashboard
          </vue-headline>
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
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridRow from '@components/VueGrid/VueGridRow/VueGridRow.vue';
import VueGridColumn from '@components/VueGrid/VueGridColumn/VueGridColumn.vue';
import VueBreadcrumb from '@components/VueBreadcrumb/VueBreadcrumb.vue';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';
import VueButton from '@components/VueButton/VueButton.vue';
import { HttpService } from '@shared/services/HttpService/HttpService';

export default {
  metaInfo: {
    title: 'Dashboard',
  },
  components: {
    VueBreadcrumb,
    VueGrid,
    VueGridColumn,
    VueButton,
    VueGridRow,
    VueHeadline,
  },
  data(): any {
    return { pending: false };
  },
  computed: {},
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
          console.log(e);
          this.pending = false;
        });
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.dashboard {
  padding-top: $nav-bar-height;
}
</style>
