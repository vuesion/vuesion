<template>
  <vue-grid :class="$style.formExample">
    <validation-observer v-slot="{ invalid }">
      <form @submit.prevent="onSubmit">
        <vue-grid-row>
          <vue-grid-column>
            <vue-text appearance="h2" as="h2">Form example</vue-text>
          </vue-grid-column>
        </vue-grid-row>

        <vue-grid-row vertical-space="0">
          <vue-grid-column>
            <small>
              This example uses <a href="https://github.com/baianat/vee-validate">vee-validate</a> for field validation.
            </small>
          </vue-grid-column>
        </vue-grid-row>

        <vue-grid-row vertical-space="16">
          <vue-grid-column />
        </vue-grid-row>

        <vue-grid-row vertical-space="8">
          <vue-grid-column>
            <vue-input
              id="firstname"
              v-model="model.firstname"
              name="firstname"
              required
              label="First name"
              placeholder="First name"
              validation="required"
            />
          </vue-grid-column>
          <vue-grid-column vertical-space="8">
            <vue-input
              id="lastname"
              v-model="model.lastname"
              name="lastname"
              required
              label="Last name"
              placeholder="Last name"
              validation="required"
            />
          </vue-grid-column>
        </vue-grid-row>

        <vue-grid-row vertical-space="8">
          <vue-grid-column>
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
          </vue-grid-column>
        </vue-grid-row>

        <vue-grid-row vertical-space="8">
          <vue-grid-column>
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
          </vue-grid-column>
          <vue-grid-column>
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
          </vue-grid-column>
        </vue-grid-row>

        <vue-grid-row vertical-space="8">
          <vue-grid-column>
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
          </vue-grid-column>
          <vue-grid-column>
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
          </vue-grid-column>
        </vue-grid-row>

        <vue-grid-row vertical-space="16">
          <vue-grid-column>
            <vue-checkbox
              id="acceptTerms"
              v-model="model.acceptTerms"
              name="acceptTerms"
              label="I accept the terms"
              :validation="{ required: { allowFalse: false } }"
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
                  :checked="model.newsletter === true"
                  radio
                  @click="model.newsletter = !model.newsletter"
                />
              </vue-grid-column>
            </vue-grid-row>
            <vue-grid-row>
              <vue-grid-column>
                <vue-checkbox
                  id="newsletterNo"
                  name="newsletterNo"
                  label="I don't want to subscribe to the newsletter"
                  :checked="model.newsletter === false"
                  radio
                  @click="model.newsletter = !model.newsletter"
                />
              </vue-grid-column>
            </vue-grid-row>
          </vue-grid-column>
        </vue-grid-row>

        <vue-grid-row vertical-space="32" justify-content="flex-end">
          <vue-grid-column>
            <vue-button color="primary" :disabled="invalid" :loading="isLoading" type="submit"> Save </vue-button>
          </vue-grid-column>
        </vue-grid-row>
      </form>
    </validation-observer>
  </vue-grid>
</template>

<script lang="ts">
import { ValidationObserver } from 'vee-validate';
import VueInput from '@/components/atoms/VueInput/VueInput.vue';
import VueSelect from '@/components/atoms/VueSelect/VueSelect.vue';
import VueCheckbox from '@/components/atoms/VueCheckbox/VueCheckbox.vue';
import VueGridRow from '@/components/organisms/VueGrid/VueGridRow/VueGridRow.vue';
import VueGridColumn from '@/components/organisms/VueGrid/VueGridColumn/VueGridColumn.vue';
import VueButton from '@/components/atoms/VueButton/VueButton.vue';
import { addNotification } from '@/components/molecules/VueNotificationStack/utils';
import VueText from '@/components/atoms/VueText/VueText.vue';
import VueGrid from '@/components/organisms/VueGrid/VueGrid.vue';

export default {
  name: 'FormExample',
  components: {
    ValidationObserver,
    VueText,
    VueButton,
    VueGridColumn,
    VueGridRow,
    VueGrid,
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
            addNotification({
              title: 'Data has been saved!',
              text: 'Have a look at the console!',
            });
          }, 1000);
        },
      );
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.formExample {
  border-radius: var(--brand-border-radius-md);
  box-shadow: var(--brand-elevation-2);
}
</style>
