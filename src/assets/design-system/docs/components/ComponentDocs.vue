<template>
  <vue-box padding="16">
    <vue-stack space="32">
      <vue-card v-if="showDisclaimer" :class="$style.disclaimer">
        <vue-stack>
          <vue-text look="medium-title" color="info" weight="semi-bold"> This is a Vuesion+ component </vue-text>

          <vue-text look="description" color="info">
            We hope, that we can offer you to buy a license for this component soon.
            <br />
            That will save the future of this project, bring a lot of new components and save you a lot of time down the
            road.
          </vue-text>

          <vue-text look="description" color="info">
            We are currently busy figuring out the legal part before we can start selling.
            <br />
            If you know which License to choose, how to avoid liability issues and you want to help us - please reach
            out to
            <a href="mailto:johannes.werner@hey.com">Johannes Werner</a>.
          </vue-text>

          <vue-text look="description" color="info" weight="semi-bold">
            If you want to get early access
            <a href="mailto:johannes.werner@hey.com">write us an email</a>!
          </vue-text>
        </vue-stack>
      </vue-card>

      <vue-stack v-if="componentName && usage" space="8">
        <vue-text color="text-high" look="large-title" weight="semi-bold">{{ componentName }} {{ suffix }}</vue-text>
        <vue-text color="text-high" look="description">{{ usage }}</vue-text>
      </vue-stack>

      <vue-stack v-if="story" space="8">
        <vue-text color="text-high" look="large-title" weight="semi-bold">Story</vue-text>
        <vue-text color="text-high" look="description">{{ story }}</vue-text>
      </vue-stack>

      <vue-card :style="{ position: 'relative' }">
        <slot />
      </vue-card>
    </vue-stack>
  </vue-box>
</template>

<script lang="ts">
import '@/components/global';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueCard from '@/components/data-display/VueCard/VueCard.vue';

export default {
  name: 'ComponentDocs',
  components: { VueCard, VueBox, VueStack, VueText },
  props: {
    componentName: { type: String, default: null },
    usage: { type: String, default: null },
    story: { type: String, default: null },
    suffix: { type: String, default: 'Usage' },
    showDisclaimer: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

.disclaimer {
  background: var(--brand-surface-info-low);
  border: 1px solid var(--brand-border-info-low);
}
</style>
