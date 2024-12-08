<template>
  <vue-content-block as="section" :padding="['32 16', '32 16', '64 32']" :class="$style.ExpertiseSection">
    <vue-columns stack-phone stack-tablet-portrait :reverse="[true, true, false]" space="64">
      <vue-column :width="['full', 'full', '5/10']" no-grow>
        <nuxt-img
          src="/demo/tech-list.png"
          :alt="$t('ExpertiseSection.title')"
          preload
          format="webp"
          quality="80"
          loading="lazy"
        />
      </vue-column>
      <vue-column :width="['full', 'full', '5/10']" no-grow>
        <vue-stack align-y="between">
          <vue-text look="h3" weight="black" color="text-inverse-high" :class="$style.title">
            {{ $t('ExpertiseSection.title' /* Technology Agnostic Expertise */) }}
          </vue-text>
          <vue-text look="description" color="text-inverse-medium">
            {{
              $t(
                'ExpertiseSection.description' /* While Vuesion is our preferred tech stack, we are fluent in a wide range of technologies including Angular, React, Next.js, Nest.js, Express.js, Postgres, MongoDB, Spring Boot, Swift, AWS, and many more. This allows us to provide the best solutions tailored to your specific needs, regardless of the technology. */,
              )
            }}
          </vue-text>
        </vue-stack>
      </vue-column>
    </vue-columns>
  </vue-content-block>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';
import VueContentBlock from '~/app/components/layout/VueContentBlock/VueContentBlock.vue';
import VueColumns from '~/app/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '~/app/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueStack from '~/app/components/layout/VueStack/VueStack.vue';
import VueText from '~/app/components/typography/VueText/VueText.vue';

// Deps
const $style = useCssModule();
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.ExpertiseSection {
  background-color: var(--surface-inverse-high);

  .title {
    word-break: break-word;
    white-space: break-spaces;
  }
}
</style>
