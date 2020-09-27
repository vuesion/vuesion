<template>
  <validation-observer v-slot="{ invalid }">
    <form :class="$style.loginForm" @submit.stop.prevent="onSubmit">
      <vue-headline level="3">{{ $t('auth.LoginForm.title' /* Login Example */) }}</vue-headline>

      <br />

      <vue-input
        id="username"
        name="username"
        type="text"
        autofocus
        :label="$t('common.username' /* Username */)"
        :placeholder="$t('common.username.placeholder' /* Enter any username */)"
        validation="required"
        :error-message="$t('auth.LoginForm.username.error' /* The username can not be empty */)"
        v-model="username"
      />

      <vue-input
        id="password"
        name="password"
        type="password"
        :label="$t('common.password' /* Password */)"
        :placeholder="$t('common.password.placeholder' /* Enter any password */)"
        validation="required|min:6"
        :error-message="$t('auth.LoginForm.password.error' /* The password has to have at least 6 characters */)"
        v-model="password"
      />

      <vue-button color="primary" tabindex="3" type="submit" :disabled="invalid" :loading="loading">
        {{ $t('auth.LoginForm.cta' /* Login */) }}
      </vue-button>
    </form>
  </validation-observer>
</template>

<script lang="ts">
import { ValidationObserver } from 'vee-validate';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';
import VueInput from '@components/VueInput/VueInput.vue';
import VueButton from '@components/VueButton/VueButton.vue';

export default {
  name: 'LoginForm',
  components: { ValidationObserver, VueButton, VueInput, VueHeadline },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data(): any {
    return {
      username: '',
      password: '',
    };
  },
  computed: {},
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
  display: block;

  @include mediaMin(tabletPortrait) {
    min-width: 512px;
  }
}
</style>
