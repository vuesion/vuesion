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
          <vue-stack>
            <vue-columns>
              <vue-column>
                <vue-stack space="24">
                  <vue-input
                    id="firstname"
                    v-model="model.firstname"
                    name="firstname"
                    required
                    label="First name"
                    hide-description
                    placeholder="First name"
                    validation="required"
                  />
                  <vue-input
                    id="lastname"
                    v-model="model.lastname"
                    name="lastname"
                    required
                    label="Last name"
                    hide-description
                    placeholder="Last name"
                    validation="required"
                  />
                  <vue-input
                    id="email"
                    v-model="model.email"
                    name="email"
                    required
                    type="email"
                    hide-description
                    label="E-mail"
                    placeholder="E-mail"
                    validation="required|email"
                  />
                  <vue-stack>
                    <vue-checkbox
                      id="acceptTerms"
                      v-model="model.acceptTerms"
                      name="acceptTerms"
                      label="I accept the terms"
                      :validation="{ required: { allowFalse: false } }"
                    />
                    <vue-toggle
                      id="newsletterYes"
                      v-model="model.newsletter"
                      name="newsletterYes"
                      label="I want to subscribe to the newsletter"
                      :validation="{ required: { allowFalse: false } }"
                    />
                  </vue-stack>
                </vue-stack>
              </vue-column>

              <vue-column>
                <vue-stack space="24">
                  <vue-input
                    id="street"
                    v-model="model.street"
                    name="street"
                    required
                    label="Street"
                    hide-description
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
                    hide-description
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
                    hide-description
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
                </vue-stack>
              </vue-column>
            </vue-columns>

            <vue-textarea
              id="notes"
              v-model="model.notes"
              name="notes"
              label="Notes"
              placeholder="Please leave some notes..."
              required
              description="Please add some notes."
              error-message="This field is required."
            />

            <vue-inline align="right">
              <vue-button look="secondary" type="reset"> Cancel </vue-button>
              <vue-button look="primary" :disabled="invalid" :loading="isLoading" type="submit"> Save </vue-button>
            </vue-inline>
          </vue-stack>
        </vue-card>
      </vue-stack>
    </form>
  </validation-observer>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api';
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
import VueColumns from '@/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueToggle from '@/components/input-and-actions/VueToggle/VueToggle.vue';
import VueTextarea from '@/components/input-and-actions/VueTextarea/VueTextarea.vue';

export default defineComponent({
  name: 'FormExample',
  components: {
    VueTextarea,
    VueToggle,
    VueColumn,
    VueColumns,
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
  setup(_, { emit }) {
    // refs
    const isLoading = ref(false);
    const model = ref({
      firstname: '',
      lastname: '',
      email: '',
      street: '',
      zipCode: '',
      city: '',
      country: 'gl',
      acceptTerms: false,
      newsletter: false,
      notes: '',
    });

    // computed
    const countryOptions = computed(() => [
      { label: 'None', value: null },
      { label: 'Brasil', value: 'br' },
      { label: 'Germany', value: 'de' },
      { label: 'Great Britain', value: 'uk' },
      { label: 'Greece', value: 'gr' },
      { label: 'Greenland', value: 'gl' },
      { label: 'Japan', value: 'jp' },
      { label: 'Spain', value: 'es' },
      { label: 'USA', value: 'us' },
      { label: 'Other', value: 'other' },
    ]);
    const addressDisabled = computed(
      () => model.value.firstname === '' || model.value.lastname === '' || model.value.email === '',
    );

    // event handler
    const onSubmit = () => {
      isLoading.value = true;

      // eslint-disable-next-line no-console
      console.log(JSON.parse(JSON.stringify(model.value)));

      emit('submit', model.value);

      /* istanbul ignore next */
      setTimeout(() => {
        isLoading.value = false;

        addToast({
          title: 'Data has been saved!',
          text: 'Have a look at the console!',
          type: 'success',
        });
      }, 1000);
    };

    return {
      isLoading,
      model,
      countryOptions,
      addressDisabled,
      onSubmit,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';
</style>
