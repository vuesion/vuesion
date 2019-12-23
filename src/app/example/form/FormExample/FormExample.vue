<template>
  <form :class="$style.formExample" @submit.prevent="onSubmit">
    <small>
      This example uses <a href="https://github.com/baianat/vee-validate">vee-validate</a> for field validation.
    </small>
    <br />
    <br />
    <br />
    <vue-grid-row>
      <vue-grid-item>
        <vue-input
          id="firstname"
          v-model="form.firstname"
          name="firstname"
          required
          placeholder="First Name"
          validation="required"
        />
      </vue-grid-item>
      <vue-grid-item>
        <vue-input
          id="lastname"
          v-model="form.lastname"
          name="lastname"
          required
          placeholder="Last Name"
          validation="required"
        />
      </vue-grid-item>
    </vue-grid-row>

    <vue-input
      id="email"
      v-model="form.email"
      name="email"
      required
      type="email"
      placeholder="E-mail"
      validation="required|email"
    />

    <vue-grid-row>
      <vue-grid-item>
        <vue-input
          id="street"
          v-model="form.street"
          name="street"
          required
          placeholder="Street"
          validation="required"
          :disabled="addressDisabled"
        />
      </vue-grid-item>
      <vue-grid-item>
        <vue-input
          id="zipCode"
          v-model="form.zipCode"
          name="zipCode"
          required
          placeholder="Zip code"
          validation="required|integer"
          :error-message="$t('components.formExample.zipCode.error' /* Please enter a Number */)"
          :disabled="addressDisabled"
        />
      </vue-grid-item>
    </vue-grid-row>

    <vue-grid-row>
      <vue-grid-item>
        <vue-input
          id="city"
          v-model="form.city"
          name="city"
          required
          placeholder="City"
          validation="required"
          :disabled="addressDisabled"
        />
      </vue-grid-item>
      <vue-grid-item>
        <vue-select
          id="country"
          v-model="form.country"
          placeholder="Choose Country"
          name="country"
          :options="countryOptions"
          validation="required"
          required
          :disabled="addressDisabled"
        />
      </vue-grid-item>
    </vue-grid-row>

    <vue-grid-row>
      <vue-grid-item>
        <vue-checkbox
          id="acceptTerms"
          v-model="form.acceptTerms"
          name="acceptTerms"
          label="I accept the terms"
          validation="required"
          required
        />
      </vue-grid-item>
      <vue-grid-item>
        <vue-checkbox
          id="newsletterYes"
          name="newsletterYes"
          label="I want to subscribe to the newsletter"
          :checked="form.newsletter === true"
          radio
          @click="form.newsletter = !form.newsletter"
        />
        <br />
        <vue-checkbox
          id="newsletterNo"
          name="newsletterNo"
          label="I don't want to subscribe to the newsletter"
          :checked="form.newsletter === false"
          radio
          @click="form.newsletter = !form.newsletter"
        />
      </vue-grid-item>
    </vue-grid-row>

    <br />
    <vue-button color="primary" :disabled="isSubmitDisabled" :loading="isLoading">
      Save
    </vue-button>
  </form>
</template>

<script lang="ts">
import VueInput from '@components/VueInput/VueInput.vue';
import VueSelect from '@components/VueSelect/VueSelect.vue';
import VueCheckbox from '@components/VueCheckbox/VueCheckbox.vue';
import VueGridRow from '@components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import VueButton from '@components/VueButton/VueButton.vue';
import { addNotification, INotification } from '@components/VueNotificationStack/utils';

export default {
  $_veeValidate: {
    validator: 'new' as 'new',
  },
  name: 'FormExample',
  components: { VueButton, VueGridItem, VueGridRow, VueCheckbox, VueSelect, VueInput },
  data(): any {
    return {
      form: {
        firstname: '',
        lastname: '',
        email: '',
        street: '',
        zipCode: '',
        city: '',
        country: '',
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
      return this.form.firstname === '' || this.form.lastname === '' || this.form.email === '';
    },
    hasErrors() {
      return this.errors && this.errors.items.length > 0;
    },
    hasEmptyFields() {
      let hasEmptyField = false;

      Object.keys(this.form).forEach((key: string) => {
        if (key !== 'newsletter' && (this.form[key] === '' || this.form[key] === false)) {
          hasEmptyField = true;
        }
      });

      return hasEmptyField;
    },
    isSubmitDisabled() {
      return this.hasErrors || this.hasEmptyFields;
    },
  },
  methods: {
    onSubmit() {
      this.isLoading = true;

      console.log(JSON.parse(JSON.stringify(this.form)));

      this.$emit('submit', this.form);

      this.$nextTick(
        /* istanbul ignore next */ () => {
          setTimeout(() => {
            this.isLoading = false;
            addNotification({
              title: 'Data has been saved!',
              text: 'Have a look at the console!',
            } as INotification);
          }, 1000);
        },
      );
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.formExample {
  display: block;
}
</style>
