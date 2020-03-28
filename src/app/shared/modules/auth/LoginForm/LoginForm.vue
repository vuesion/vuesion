<template>
  <form :class="$style.loginForm" @submit.stop.prevent="onSubmit">
    <vue-grid with-vertical-space space="sm">
      <vue-grid-row>
        <vue-grid-column>
          <vue-headline level="3">
            {{ $t('auth.LoginForm.title' /* Login Example */) }}
          </vue-headline>
        </vue-grid-column>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-column>
          <vue-input
            id="username"
            v-model="username"
            name="username"
            type="text"
            autofocus
            :label="$t('common.username' /* Username */)"
            :placeholder="$t('common.username.placeholder' /* Enter any username */)"
            validation="required"
            :error-message="$t('auth.LoginForm.username.error' /* The username can not be empty */)"
          />
        </vue-grid-column>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-column>
          <vue-input
            id="password"
            v-model="password"
            name="password"
            type="password"
            :label="$t('common.password' /* Password */)"
            :placeholder="$t('common.password.placeholder' /* Enter any password */)"
            validation="required|min:6"
            :error-message="$t('auth.LoginForm.password.error' /* The password has to have at least 6 characters */)"
          />
        </vue-grid-column>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-column>
          <vue-button color="primary" tabindex="3" type="submit" :disabled="isSubmitDisabled" :loading="loading">
            {{ $t('auth.LoginForm.cta' /* Login */) }}
          </vue-button>
        </vue-grid-column>
      </vue-grid-row>
    </vue-grid>
  </form>
</template>

<script lang="ts">
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';
import VueInput from '@components/VueInput/VueInput.vue';
import VueButton from '@components/VueButton/VueButton.vue';
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridRow from '@components/VueGrid/VueGridRow/VueGridRow.vue';
import VueGridColumn from '@components/VueGrid/VueGridColumn/VueGridColumn.vue';

export default {
  $_veeValidate: {
    validator: 'new' as 'new',
  },
  name: 'LoginForm',
  components: { VueGridColumn, VueGridRow, VueGrid, VueButton, VueInput, VueHeadline },
  props: {
    loading: { type: Boolean, default: false },
  },
  data(): any {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    hasErrors() {
      return this.errors && this.errors.items.length > 0;
    },
    hasEmptyFields() {
      return this.username.trim() === '' || this.password.trim() === '';
    },
    isSubmitDisabled() {
      return this.hasErrors || this.hasEmptyFields;
    },
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.$data);
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.loginForm {
  @include mediaMin(tabletPortrait) {
    min-width: 512px;
  }
}
</style>
