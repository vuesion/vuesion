<template>
  <div ref="content" :class="$style.vueMarkdown" v-html="html"></div>
</template>

<script lang="ts">
import marked from 'marked';
import { VNode } from 'vue';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});

export default {
  name: 'VueMarkdown',
  props: {
    useRouter: {
      type: Boolean,
      default: true,
    },
  },
  data(): any {
    return {
      html: '',
    };
  },
  created() {
    this.createHTML();
  },
  beforeMount() {
    this.createHTML();
  },
  mounted() {
    this.$refs.content.addEventListener('click', this.handleClick);
  },
  /* istanbul ignore next */
  updated() {
    this.createHTML();
  },
  beforeDestroy() {
    this.$refs.content.removeEventListener('click', this.handleClick);
  },
  methods: {
    createHTML() {
      let text = '';

      this.$slots.default.forEach((slot: VNode) => {
        if (slot.text) {
          slot.text = slot.text.trim().replace(/\n /g, '\n');
          text += `${slot.text}\n`;
        }
      });

      this.html = (marked as any)(text);
    },
    handleClick(event: any) {
      if (this.useRouter === false) {
        return true;
      }

      const { target } = event;
      const url = new URL(target.href);
      const to = url.pathname;

      event.preventDefault();
      this.$router.push(to);
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

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
    font-size: $text-8;
    font-weight: $font-weight-semi-bold;
    letter-spacing: $letter-spacing-1;
    line-height: $line-height-8;
  }

  h2 {
    font-size: $text-6;
    font-weight: $font-weight-semi-bold;
    letter-spacing: $letter-spacing-1;
    line-height: $line-height-6;
  }

  h3 {
    font-size: $text-5;
    font-weight: $font-weight-semi-bold;
    letter-spacing: $letter-spacing-1;
    line-height: $line-height-5;
  }

  h4 {
    font-size: $text-4;
    font-weight: $font-weight-semi-bold;
    letter-spacing: $letter-spacing-1;
    line-height: $line-height-4;
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
