<template>
  <vue-box :padding="padding" :class="$style.vueCard">
    <slot />
  </vue-box>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { responsivePropValidator, spacingValidator } from '@/components/prop-validators';
import VueBox from '@/components/layout/VueBox/VueBox.vue';

export default defineComponent({
  name: 'VueCard',
  components: {
    VueBox,
  },
  props: {
    padding: {
      type: [Number, String, Array as () => Array<string | number>],
      validator: responsivePropValidator(spacingValidator),
      default: 16,
    },
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

.vueCard {
  background-color: $card-bg;
  box-shadow: $card-shadow;
  border: $card-border;
  border-radius: $card-border-radius;
}
</style>
