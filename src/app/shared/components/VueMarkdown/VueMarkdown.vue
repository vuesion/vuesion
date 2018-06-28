<template>
  <div :class="$style.vueMarkdown" v-html="html" />
</template>

<script lang="ts">
  import marked    from 'marked';
  import { VNode } from 'vue';

  marked.setOptions(
    {
      renderer:    new marked.Renderer(),
      gfm:         true,
      tables:      true,
      breaks:      true,
      pedantic:    false,
      sanitize:    false,
      smartLists:  true,
      smartypants: false,
      xhtml:       false,
    },
  );

  export default {
    name:    'VueMarkdown',
    data(): any {
      return {
        html: '',
      };
    },
    methods: {
      createHTML() {
        let text: string = '';

        this.$slots.default.forEach((slot: VNode) => {
          slot.text = slot.text.trim().replace(/\n /g, '\n');
          text += `${slot.text}\n`;
        });

        this.html = (marked as any)(text);
      },
    },
    created() {
      this.createHTML();
    },
    beforeMount() {
      this.createHTML();
    },
  };
</script>

<style lang="scss" module>
  .vueMarkdown {
    display: block;
  }
</style>
