<template>
  <form :class="$style.formExample" @submit.prevent="onSubmit">
    <vue-grid-row>
      <vue-grid-column>
        <vue-headline level="1">Form example</vue-headline>
      </vue-grid-column>
    </vue-grid-row>

    <vue-grid-row>
      <vue-grid-column>
        <small>
          This example uses <a href="https://github.com/baianat/vee-validate">vee-validate</a> for field validation.
        </small>
      </vue-grid-column>
    </vue-grid-row>

    <vue-grid-row>
      <vue-grid-column>
        <vue-input
          id="firstname"
          v-model="form.firstname"
          name="firstname"
          required
          label="First name"
          placeholder="First name"
          validation="required"
        />
      </vue-grid-column>
      <vue-grid-column>
        <vue-input
          id="lastname"
          v-model="form.lastname"
          name="lastname"
          required
          label="Last name"
          placeholder="Last name"
          validation="required"
        />
      </vue-grid-column>
    </vue-grid-row>

    <vue-input
      id="email"
      v-model="form.email"
      name="email"
      required
      type="email"
      label="E-mail"
      placeholder="E-mail"
      validation="required|email"
    />

    <vue-grid-row>
      <vue-grid-column>
        <vue-input
          id="street"
          v-model="form.street"
          name="street"
          required
          label="Street"
          placeholder="Street"
          validation="required"
          :disabled="addressDisabled"
        />
      </vue-grid-column>
      <vue-grid-column>
        <vue-input
          id="zipCode"
          v-model="form.zipCode"
          name="zipCode"
          required
          label="Zip code"
          placeholder="Zip code"
          validation="required|integer"
          :error-message="$t('components.formExample.zipCode.error' /* Please enter a Number */)"
          :disabled="addressDisabled"
        />
      </vue-grid-column>
    </vue-grid-row>

    <vue-grid-row>
      <vue-grid-column>
        <vue-input
          id="city"
          v-model="form.city"
          name="city"
          required
          label="City"
          placeholder="City"
          validation="required"
          :disabled="addressDisabled"
        />
      </vue-grid-column>
      <vue-grid-column>
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
      </vue-grid-column>
    </vue-grid-row>

    <vue-grid-row>
      <vue-grid-column>
        <vue-checkbox
          id="acceptTerms"
          v-model="form.acceptTerms"
          name="acceptTerms"
          label="I accept the terms"
          validation="required"
          required
        />
      </vue-grid-column>
      <vue-grid-column>
        <vue-grid-row>
          <vue-grid-column>
            <vue-checkbox
              id="newsletterYes"
              name="newsletterYes"
              label="I want to subscribe to the newsletter"
              :checked="form.newsletter === true"
              radio
              @click="form.newsletter = !form.newsletter"
            />
          </vue-grid-column>
        </vue-grid-row>
        <vue-grid-row>
          <vue-grid-column>
            <vue-checkbox
              id="newsletterNo"
              name="newsletterNo"
              label="I don't want to subscribe to the newsletter"
              :checked="form.newsletter === false"
              radio
              @click="form.newsletter = !form.newsletter"
            />
          </vue-grid-column>
        </vue-grid-row>
      </vue-grid-column>
    </vue-grid-row>

    <vue-grid-row>
      <vue-grid-column>
        <vue-button color="primary" :disabled="isSubmitDisabled" :loading="isLoading">
          Save
        </vue-button>
      </vue-grid-column>
    </vue-grid-row>
  </form>
</template>

<script lang="ts">
import VueInput from '@components/VueInput/VueInput.vue';
import VueSelect from '@components/VueSelect/VueSelect.vue';
import VueCheckbox from '@components/VueCheckbox/VueCheckbox.vue';
import VueGridRow from '@components/VueGrid/VueGridRow/VueGridRow.vue';
import VueGridColumn from '@components/VueGrid/VueGridColumn/VueGridColumn.vue';
import VueButton from '@components/VueButton/VueButton.vue';
import { addNotification, INotification } from '@components/VueNotificationStack/utils';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';

export default {
  $_veeValidate: {
    validator: 'new' as 'new',
  },
  name: 'FormExample',
  components: { VueHeadline, VueButton, VueGridColumn, VueGridRow, VueCheckbox, VueSelect, VueInput },
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
}
</style>
