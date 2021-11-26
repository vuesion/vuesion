<template>
  <validation-observer v-slot="{ invalid }" tag="div">
    <form @submit.prevent="onSubmit">
      <vue-stack>
        <vue-stack space="8">
          <vue-text look="h1" as="h1">Form example</vue-text>
          <vue-tiles :columns="[1, 2]">
            <vue-text look="description">
              This example shows the basic usage of
              <a href="https://github.com/baianat/vee-validate">vee-validate</a> in combination with the vuesion
              components.
            </vue-text>
          </vue-tiles>
        </vue-stack>

        <vue-card>
          <vue-tiles :columns="[1, 2]">
            <vue-input
              id="firstname"
              v-model="model.firstname"
              name="firstname"
              required
              label="First name"
              placeholder="First name"
              validation="required"
            />

            <vue-input
              id="lastname"
              v-model="model.lastname"
              name="lastname"
              required
              label="Last name"
              placeholder="Last name"
              validation="required"
            />
          </vue-tiles>

          <vue-input
            id="email"
            v-model="model.email"
            name="email"
            required
            type="email"
            label="E-mail"
            placeholder="E-mail"
            validation="required|email"
          />

          <vue-tiles :columns="[1, 2]">
            <vue-input
              id="street"
              v-model="model.street"
              name="street"
              required
              label="Street"
              placeholder="Street"
              validation="required"
              :disabled="addressDisabled"
            />

            <vue-input
              id="zipCode"
              v-model="model.zipCode"
              name="zipCode"
              required
              label="Zip code"
              placeholder="Zip code"
              validation="required|integer"
              :error-message="$t('components.formExample.zipCode.error' /* Please enter a Number */)"
              :disabled="addressDisabled"
            />

            <vue-input
              id="city"
              v-model="model.city"
              name="city"
              required
              label="City"
              placeholder="City"
              validation="required"
              :disabled="addressDisabled"
            />

            <vue-select
              id="country"
              v-model="model.country"
              label="Choose Country"
              name="country"
              :items="countryOptions"
              validation="required"
              required
              :disabled="addressDisabled"
            />

            <vue-checkbox
              id="acceptTerms"
              v-model="model.acceptTerms"
              name="acceptTerms"
              label="I accept the terms"
              :validation="{ required: { allowFalse: false } }"
              required
            />

            <vue-checkbox
              id="newsletterYes"
              name="newsletterYes"
              label="I want to subscribe to the newsletter"
              :checked="model.newsletter === true"
              radio
              @click="model.newsletter = !model.newsletter"
            />
          </vue-tiles>

          <vue-inline align="right">
            <vue-button look="primary" :disabled="invalid" :loading="isLoading" type="submit"> Save </vue-button>
          </vue-inline>
        </vue-card>
      </vue-stack>
    </form>
  </validation-observer>
</template>

<script lang="ts">
import { ValidationObserver } from 'vee-validate';
import VueInput from '@/components/input-and-actions/VueInput/VueInput.vue';
import VueSelect from '@/components/input-and-actions/VueSelect/VueSelect.vue';
import VueCheckbox from '@/components/input-and-actions/VueCheckbox/VueCheckbox.vue';
import VueButton from '@/components/input-and-actions/VueButton/VueButton.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueTiles from '@/components/layout/VueTiles/VueTiles.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';
import { addToast } from '@/components/utils';
import VueCard from '@/components/data-display/VueCard/VueCard.vue';

export default {
  name: 'FormExample',
  components: {
    VueCard,
    VueInline,
    VueTiles,
    VueStack,
    ValidationObserver,
    VueText,
    VueButton,
    VueCheckbox,
    VueSelect,
    VueInput,
  },
  data(): any {
    return {
      model: {
        firstname: '',
        lastname: '',
        email: '',
        street: '',
        zipCode: '',
        city: '',
        country: 'de',
        acceptTerms: false,
        newsletter: false,
      },
      countryOptions: [
        { label: 'Germany', value: 'de' },
        { label: 'USA', value: 'us' },
        { label: 'Other', value: 'other' },
      ],
      isLoading: false,
    };
  },
  computed: {
    addressDisabled() {
      return this.model.firstname === '' || this.model.lastname === '' || this.model.email === '';
    },
  },
  methods: {
    onSubmit() {
      this.isLoading = true;

      // eslint-disable-next-line no-console
      console.log(JSON.parse(JSON.stringify(this.model)));

      this.$emit('submit', this.model);

      this.$nextTick(
        /* istanbul ignore next */ () => {
          setTimeout(() => {
            this.isLoading = false;
            addToast({
              title: 'Data has been saved!',
              text: 'Have a look at the console!',
              type: 'success',
            });
          }, 1000);
        },
      );
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';
</style>
