<template>
  <vue-content-block :class="$style.form">
    <vue-box :padding="['24 16', '24 16', '24', '32']">
      <vue-stack :space="['16', '16', '24', '32']">
        <vue-breadcrumb :items="breadCrumbItems" />

        <form-example />
      </vue-stack>
    </vue-box>
  </vue-content-block>
</template>

<script setup lang="ts">
/* istanbul ignore file */
import VueContentBlock from '@/components/layout/VueContentBlock/VueContentBlock.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueBreadcrumb from '@/components/navigation/VueBreadcrumb/VueBreadcrumb.vue';
import FormExample from '@/components/forms/FormExample/FormExample.vue';
import { IItem } from '~/interfaces/IItem';

// Deps
const { t } = useI18n();

// Config
useHead({ title: 'Vuesion - Form Example' });

// Data
const breadCrumbItems: Array<IItem> = [{ label: t('common.Form-example' /* Form example */), value: '/example/form' }];
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.form {
  padding-top: $navbar-height;
}
</style>
