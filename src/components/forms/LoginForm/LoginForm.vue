<template>
  <form data-testid="login-form" :class="$style.loginForm" @submit.stop.prevent="onSubmit">
    <!--TODO: add i18n-->
    <vue-stack>
      <vue-text look="h3" as="h3"> Login Example </vue-text>
      <vue-input
        id="username"
        v-model="username"
        name="username"
        type="text"
        autofocus
        required
        label="Username"
        placeholder="Enter any username"
        validation="required"
        error-message="The username can not be empty)"
      />

      <vue-input
        id="password"
        v-model="password"
        name="password"
        type="password"
        required
        label="Password"
        placeholder="Enter any password"
        validation="required|min:6"
        error-message="The password has to have at least 6 characters"
      />

      <vue-inline align-x="right">
        <vue-button look="primary" tabindex="3" type="submit" :disabled="meta.valid === false" :loading="loading">
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
const username = ref('');
const password = ref('');
const { meta } = useForm();
const onSubmit = () => {
  emit('submit', { username: username.value, password: password.value });
};
</script>

<style lang="scss" module>
@import 'assets/_design-system';

.loginForm {
  @include mediaMin(tabletPortrait) {
    min-width: 480px;
  }
}
</style>
