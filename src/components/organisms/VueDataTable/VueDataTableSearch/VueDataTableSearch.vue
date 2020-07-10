<template>
  <div :class="$style.vueDataTableSearch">
    <vue-input
      id="dataTableSearch"
      name="dataTableSearch"
      label="Search"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event)"
    />
  </div>
</template>

<script lang="ts">
import VueInput from '@/components/atoms/VueInput/VueInput.vue';

export default {
  name: 'VueDataTableSearch',
  components: { VueInput },
  props: {
    value: { type: String, default: '' },
    placeholder: { type: String, default: '' },
  },
  data(): any {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueDataTableSearch {
  padding-top: $space-12;
}
</style>
