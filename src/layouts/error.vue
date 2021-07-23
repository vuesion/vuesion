<template>
  <vue-content-block :class="$style.error">
    <vue-box :class="$style.message">
      <vue-stack align="center">
        <template v-if="error.statusCode === 404">
          <vue-text look="h1" as="h1"> 404 </vue-text>
          <vue-text look="h3" as="h2"> Page not found! </vue-text>
        </template>
        <template v-else>
          <vue-text look="h1" as="h1"> Error </vue-text>
          <vue-text look="h3" as="h2"> Try again later! </vue-text>
        </template>
      </vue-stack>
    </vue-box>
  </vue-content-block>
</template>

<script lang="ts">
import { computed, defineComponent, useContext, useMeta } from '@nuxtjs/composition-api';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueContentBlock from '@/components/layout/VueContentBlock/VueContentBlock.vue';

export default defineComponent({
  name: 'Error',
  components: { VueContentBlock, VueBox, VueStack, VueText },
  props: {
    error: { type: Object, required: true },
  },
  setup(props) {
    const { app } = useContext();
    const { title, htmlAttrs, meta } = useMeta();
    const locale = computed(() => app.i18n.locale);

    title.value = props.error.statusCode === 404 ? 'vuesion - page not found' : 'vuesion - an error occurred';

    htmlAttrs.value = {
      lang: locale.value.substr(0, 2),
    };

    meta.value = [
      {
        name: 'robots',
        content: 'NOINDEX,NOFOLLOW',
      },
    ];
  },
  head: {},
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.error {
  .message {
    position: absolute;
    width: 300px;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
