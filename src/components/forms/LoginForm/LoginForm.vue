<template>
  <form :class="$style.loginForm" @submit.stop.prevent="onSubmit">
    <vue-stack>
      <vue-text look="h3" as="h3"> Login Example </vue-text>
      <vue-input
        id="email"
        v-model="email"
        name="email"
        type="email"
        autofocus
        required
        label="Email (Demo: account@example.com)"
        placeholder="Enter an email address"
        validation="required"
        error-message="The email can not be empty)"
      />

      <vue-input
        id="password"
        v-model="password"
        name="password"
        type="password"
        required
        label="Password (Demo: password)"
        placeholder="Enter any password"
        validation="required|min:6"
        error-message="The password has to have at least 6 characters"
      />

      <vue-inline align-x="right">
        <vue-button
          data-testid="login-button"
          look="primary"
          tabindex="3"
          type="submit"
          :disabled="meta.valid === false"
          :loading="loading"
        >
          Login
        </vue-button>
      </vue-inline>
    </vue-stack>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueInput from '~/components/input-and-actions/VueInput/VueInput.vue';
import VueButton from '~/components/input-and-actions/VueButton/VueButton.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueInline from '~/components/layout/VueInline/VueInline.vue';

defineProps({
  loading: { type: Boolean, default: false },
});
const emit = defineEmits(['submit']);
const email = ref('');
const password = ref('');
const { meta } = useForm();
const onSubmit = () => {
  emit('submit', { email: email.value, password: password.value });
};
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.loginForm {
  @include mediaMin(tabletPortrait) {
    min-width: 480px;
  }
}
</style>
