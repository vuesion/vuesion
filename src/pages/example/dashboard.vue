<template>
  <vue-content-block :class="$style.dashboard">
    <vue-box :padding="['24 16', '24 16', 24, 32]">
      <vue-stack :space="[16, 16, 24, 32]">
        <vue-breadcrumb :items="[{ label: 'Dashboard', value: '/example/dashboard' }]" />

        <vue-text look="h1" as="h1"> Dashboard </vue-text>
        <vue-text> You're logged in as {{ user?.email }} </vue-text>
        <vue-inline>
          <vue-button look="primary" @click="() => signOut()">Log out</vue-button>
        </vue-inline>
      </vue-stack>
    </vue-box>
  </vue-content-block>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { definePageMeta, useHead, useAuth } from '#imports';
import VueBreadcrumb from '~/components/navigation/VueBreadcrumb/VueBreadcrumb.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueContentBlock from '~/components/layout/VueContentBlock/VueContentBlock.vue';
import VueBox from '~/components/layout/VueBox/VueBox.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueButton from '~/components/input-and-actions/VueButton/VueButton.vue';
import VueInline from '~/components/layout/VueInline/VueInline.vue';

// Config
definePageMeta({ middleware: 'auth' });
useHead({ title: 'Vuesion - Authentication Example' });

// Deps
const { data, signOut } = useAuth();

// Data
const user = computed(() => data.value?.user || null);
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.dashboard {
  padding-top: $navbar-height;
}
</style>
