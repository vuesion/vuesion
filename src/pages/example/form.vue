<template>
  <vue-content-block :class="$style.form">
    <vue-box :padding="['24 16', '24 16', 24, 32]">
      <vue-stack :space="[16, 16, 24, 32]">
        <vue-breadcrumb :items="breadCrumbItems" />

        <form-example />
      </vue-stack>
    </vue-box>
  </vue-content-block>
</template>

<script lang="ts">
/* istanbul ignore file */
import { computed, useContext, useMeta } from '@nuxtjs/composition-api';
import VueContentBlock from '@/components/layout/VueContentBlock/VueContentBlock.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueBreadcrumb from '@/components/navigation/VueBreadcrumb/VueBreadcrumb.vue';
import FormExample from '@/components/forms/FormExample/FormExample.vue';

export default {
  name: 'FormExamplePage',
  auth: false,
  components: { FormExample, VueBreadcrumb, VueStack, VueBox, VueContentBlock },
  setup() {
    useMeta({ title: 'Vuesion - Form Example' });
    const { app } = useContext();
    const breadCrumbItems = computed(() => [
      { label: app.i18n.t('common.Form-example' /* Form example */), value: '/example/apollo' },
    ]);

    return {
      breadCrumbItems,
    };
  },
  head: {},
};
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.form {
  padding-top: $navbar-height;
}
</style>
