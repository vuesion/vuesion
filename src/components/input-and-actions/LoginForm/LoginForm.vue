<template>
  <validation-observer v-slot="{ invalid }">
    <form :class="$style.loginForm" @submit.stop.prevent="onSubmit">
      <vue-stack>
        <vue-text look="h3" as="h3">
          {{ $t('auth.LoginForm.title' /* Login Example */) }}
        </vue-text>

        <vue-input
          id="username"
          v-model="username"
          name="username"
          type="text"
          autofocus
          required
          :label="$t('common.username' /* Username */)"
          :placeholder="$t('common.username.placeholder' /* Enter any username */)"
          validation="required"
          :error-message="$t('auth.LoginForm.username.error' /* The username can not be empty */)"
        />

        <vue-input
          id="password"
          v-model="password"
          name="password"
          type="password"
          required
          :label="$t('common.password' /* Password */)"
          :placeholder="$t('common.password.placeholder' /* Enter any password */)"
          validation="required|min:6"
          :error-message="$t('auth.LoginForm.password.error' /* The password has to have at least 6 characters */)"
        />

        <vue-inline align="right">
          <vue-button look="primary" tabindex="3" type="submit" :disabled="invalid" :loading="loading">
            {{ $t('auth.LoginForm.cta' /* Login */) }}
          </vue-button>
        </vue-inline>
      </vue-stack>
    </form>
  </validation-observer>
</template>

<script lang="ts">
import { ValidationObserver } from 'vee-validate';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueInput from '@/components/input-and-actions/VueInput/VueInput.vue';
import VueButton from '@/components/input-and-actions/VueButton/VueButton.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';

export default {
  name: 'LoginForm',
  components: { VueInline, VueStack, ValidationObserver, VueButton, VueInput, VueText },
  props: {
    loading: { type: Boolean, default: false },
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
@import '~@/assets/_design-system';

.loginForm {
  @include mediaMin(tabletPortrait) {
    min-width: 480px;
  }
}
</style>
