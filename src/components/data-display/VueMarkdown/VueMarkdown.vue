<template>
  <div ref="content" :class="$style.vueMarkdown" v-html="html"></div>
</template>

<script setup lang="ts">
import { marked } from 'marked';
import { computed, onBeforeUnmount, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getDomRef } from '~/composables/get-dom-ref';

marked.setOptions({
  renderer: new marked.Renderer(),
  mangle: false,
  headerIds: false,
});

// Interface
const props = withDefaults(defineProps<{ useRouter?: boolean; markdown: string }>(), {
  useRouter: true,
});

// Deps
const router = useRouter();

// Data
const content = getDomRef<HTMLElement>(null);
const html = computed(() => (marked as any)(props.markdown));

// Event Handlers
const handleClick = (event: MouseEvent) => {
  if (props.useRouter === false) {
    return true;
  }

  event.preventDefault();

  const target = event.target as HTMLAnchorElement;

  router.push(target.href);
};

// Lifecycle
onMounted(() => {
  content.value.querySelectorAll('a').forEach((anchor) => {
    anchor.addEventListener('click', handleClick);
  });
});
onBeforeUnmount(() => {
  content.value.querySelectorAll('a').forEach((anchor) => {
    anchor.addEventListener('click', handleClick);
  });
});
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueMarkdown {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: $font-family;
  }

  h1 {
    font-size: $text-9;
    font-weight: $font-weight-semi-bold;
    letter-spacing: $letter-spacing-1;
    line-height: $line-height-9;
  }

  h2 {
    font-size: $text-7;
    font-weight: $font-weight-semi-bold;
    letter-spacing: $letter-spacing-1;
    line-height: $line-height-7;
  }

  h3 {
    font-size: $text-6;
    font-weight: $font-weight-semi-bold;
    letter-spacing: $letter-spacing-1;
    line-height: $line-height-6;
  }

  h4 {
    font-size: $text-5;
    font-weight: $font-weight-semi-bold;
    letter-spacing: $letter-spacing-1;
    line-height: $line-height-5;
  }

  h5 {
    font-size: $text-3;
    font-weight: $font-weight-semi-bold;
    letter-spacing: $letter-spacing-1;
    line-height: $line-height-3;
  }

  h6 {
    font-size: $text-2;
    font-weight: $font-weight-semi-bold;
    letter-spacing: $letter-spacing-1;
    line-height: $line-height-2;
  }

  table {
    padding-bottom: $space-12;
    width: 100%;
    table-layout: fixed;
  }

  table tr {
    border: 1px solid var(--brand-border-default-medium);
  }

  table td,
  table th {
    padding: $space-8 $space-12;
  }

  p {
    padding: $space-12 0;
  }
}
</style>
