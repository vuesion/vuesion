<template>
  <section v-if="active" :class="[$style.vueTab, active && $style.active]" role="tabpanel">
    <slot />
  </section>
</template>

<script lang="ts">
export default {
  name: 'VueTabItem',
  inject: ['register'],
  props: {
    name: { type: String, required: true },
    icon: { type: String, default: null },
    isActive: { type: Boolean, default: false },
  },
  data(): any {
    return {
      idx: null,
      active: false,
    };
  },
  created() {
    this.active = this.isActive;

    this.register(this);
  },
};
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

.vueTab {
}
</style>
