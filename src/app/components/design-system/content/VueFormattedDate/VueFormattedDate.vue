<template>
  <span>
    {{ $d(date ? new Date(date) : new Date(), format, locale || i18nLocale) }}
  </span>
</template>

<script setup lang="ts">
import type { Locale } from 'vue-i18n';
import { useI18n } from 'vue-i18n';

const { locale: i18nLocale } = useI18n();

interface VueFormattedDateProps {
  date: string | Date | undefined;
  format?: 'dayMonthYearNumeric' | 'dayMonthYearNumericWithTime' | 'timeOnlyNumeric';
  locale?: Locale;
}

withDefaults(defineProps<VueFormattedDateProps>(), {
  format: 'dayMonthYearNumericWithTime',
});
defineEmits<{
  (e: 'event'): void;
}>();
</script>
