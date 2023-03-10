<template>
  <vue-box as="section" align-y="end" padding="24 16" :class="$style.testimonials">
    <vue-stack space="64">
      <vue-stack space="48">
        <vue-text look="h5" color="text-high" weight="semi-bold" align-x="center">
          <span class="deco-underline">Enjoyed</span> by {{ $n(stargazersCount, 'integer') }} stargazers 🎉
        </vue-text>

        <vue-content-block>
          <vue-tiles :space="['24', '24', '32']" :columns="[2, 4, 4, 8]">
            <vue-box
              v-for="stargazer in randomStargazers"
              :key="stargazer.login"
              padding="16"
              :class="stargazer.new && $style.new"
              :title="stargazer.login"
            >
              <vue-stack align-x="center" space="4">
                <vue-avatar
                  :src="
                    stargazer.avatar_url.replace('avatars.githubusercontent.com', 'avatars-githubusercontent.webp.se') +
                    '&size=84'
                  "
                  :name="stargazer.login"
                  size="lg"
                />
                <vue-text look="small-title" weight="semi-bold" class="ellipsis" :style="{ maxWidth: '100px' }">
                  {{ stargazer.login }}
                </vue-text>
              </vue-stack>
            </vue-box>
          </vue-tiles>
        </vue-content-block>
      </vue-stack>

      <vue-content-block :class="$style.deco"></vue-content-block>
    </vue-stack>
  </vue-box>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import VueContentBlock from '~/components/layout/VueContentBlock/VueContentBlock.vue';
import VueBox from '~/components/layout/VueBox/VueBox.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueAvatar from '~/components/data-display/VueAvatar/VueAvatar.vue';
import VueTiles from '~/components/layout/VueTiles/VueTiles.vue';
import { getIntInRange } from '~/components/utils';

const props = defineProps({
  stargazersCount: { type: [Number, String], required: true },
  stargazers: { type: Array, required: true },
  interval: { type: Number, default: 2000 },
});
const lastIndex = ref(0);
const getRandomStargazers = (max = 16): Array<any> =>
  [...props.stargazers].sort(() => 0.5 - Math.random()).slice(0, Math.min(props.stargazers.length, max));
const randomStargazers = ref(props.stargazers?.slice(0, 16));

/* c8 ignore start */
onMounted(() => {
  setInterval(() => {
    const idx = getIntInRange(0, randomStargazers.value.length - 1);
    const newGazer = getRandomStargazers(1)[0];
    const canAddGazer = randomStargazers.value.findIndex((gazer: any) => gazer.login === newGazer.login) === -1;

    if (canAddGazer && lastIndex.value !== idx) {
      randomStargazers.value.splice(idx, 1, { ...newGazer, new: true });
      lastIndex.value = idx;
    }
  }, props.interval);
});
/* c8 ignore end */

watch(
  () => props.stargazers,
  () => (randomStargazers.value = getRandomStargazers()),
);
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.testimonials {
  i {
    width: $space-20;
    height: $space-20;
  }

  .deco {
    border-bottom: 1px solid var(--brand-border-default-medium);
  }

  .new {
    animation: rotate-in-ver 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @keyframes rotate-in-ver {
    0% {
      transform: rotateY(-360deg);
      opacity: 0;
    }
    25% {
      transform: rotateY(0deg);
      opacity: 1;
    }
    100% {
      transform: rotateY(-360deg);
      opacity: 1;
    }
  }

  @include mediaMin(smallDesktop) {
    height: 850px;
  }
}
</style>
