<template>
  <div
    :title="name"
    :class="[$style.vueAvatar, $style[size], src && $style.hasSource]"
    :style="{ backgroundImage: src && `url(${src})` }"
  >
    <vue-text
      v-if="src === null"
      color="text-inverse-high"
      :look="size === 'sm' ? 'support' : size === 'md' ? 'h6' : 'h4'"
    >
      {{ initials }}
    </vue-text>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';
import { shirtSizeValidator } from '@/components/prop-validators';
import VueText from '@/components/typography/VueText/VueText.vue';

export default defineComponent({
  name: 'VueAvatar',
  components: { VueText },
  props: {
    name: { type: String, required: true },
    src: { type: String, default: null },
    size: { type: String, value: shirtSizeValidator, default: 'sm' },
  },
  setup(props) {
    return {
      initials: computed(() => {
        return props.name
          .split(/[, -]/)
          .map((w) => w.substr(0, 1))
          .join('')
          .substr(0, 3);
      }),
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueAvatar {
  display: flex;
  justify-content: center;
  align-items: center;
  background: $avatar-background;
  border-radius: $avatar-border-radius;
  text-transform: uppercase;

  &.sm {
    height: $avatar-sm-size;
    width: $avatar-sm-size;
  }

  &.md {
    height: $avatar-md-size;
    width: $avatar-md-size;
  }

  &.lg {
    height: $avatar-lg-size;
    width: $avatar-lg-size;
  }

  &.hasSource {
    border: $avatar-border;
    background: transparent;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }
}
</style>
