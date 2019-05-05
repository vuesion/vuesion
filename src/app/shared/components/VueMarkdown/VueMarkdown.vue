<template>
  <div :class="$style.vueMarkdown" v-html="html" ref="content" />
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
  methods: {
    createHTML() {
      let text: string = '';

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
  created() {
    this.createHTML();
  },
  beforeMount() {
    this.createHTML();
  },
  mounted() {
    this.$refs.content.addEventListener('click', this.handleClick);
  },
  updated() {
    this.createHTML();
  },
  beforeDestroy() {
    this.$refs.content.removeEventListener('click', this.handleClick);
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.vueMarkdown {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: $font-family-headings;
    margin: 0;
  }

  h1 {
    font-size: $font-size-h1;
    font-weight: $font-weight-h1;
    letter-spacing: $letter-spacing-h1;
    line-height: $line-height-h1;
  }

  h2 {
    font-size: $font-size-h2;
    font-weight: $font-weight-h2;
    letter-spacing: $letter-spacing-h2;
    line-height: $line-height-h2;
  }

  h3 {
    font-size: $font-size-h3;
    font-weight: $font-weight-h3;
    letter-spacing: $letter-spacing-h3;
    line-height: $line-height-h3;
  }

  h4 {
    font-size: $font-size-h4;
    font-weight: $font-weight-h4;
    letter-spacing: $letter-spacing-h4;
    line-height: $line-height-h4;
  }

  h5 {
    font-size: $font-size-h5;
    font-weight: $font-weight-h5;
    letter-spacing: $letter-spacing-h5;
    line-height: $line-height-h5;
  }

  h6 {
    font-size: $font-size-h6;
    font-weight: $font-weight-h6;
    letter-spacing: $letter-spacing-h6;
    line-height: $line-height-h6;
  }

  table {
    margin-bottom: $space-12;
    width: 100%;
    table-layout: fixed;
  }

  table tr {
    border: 1px solid var(--brand-border-color);
  }

  table td,
  table th {
    padding: $data-table-row-column-padding;
  }

  p {
    margin: $space-12 0;
  }
}
</style>
