<template>
  <component
    :is="component"
    :class="[$style.vueHeadline, appearanceLevel ? $style[`h${appearanceLevel}`] : $style[`h${level}`], $style[color]]"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';
import { textVariationValidator } from '@/components/prop-validators';

export default defineComponent({
  name: 'VueHeadline',
  components: {},
  props: {
    level: { type: String, required: true },
    appearanceLevel: { type: String, default: null },
    native: { type: Boolean, default: true },
    color: { type: String, default: 'high-emphasis', validator: textVariationValidator },
  },
  setup(props) {
    const component = computed(() => {
      let component = `h${props.level}`;

      if (props.native === false) {
        component = 'div';
      }

      return component;
    });

    return {
      component,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueHeadline {
  font-family: $font-family-headings;

  &.primary {
    color: var(--brand-primary);
  }

  &.secondary {
    color: var(--brand-secondary);
  }

  &.success {
    color: var(--brand-success);
  }

  &.warning {
    color: var(--brand-warning);
  }

  &.danger {
    color: var(--brand-danger);
  }

  &.high-emphasis {
    color: var(--brand-high-emphasis-text-color);
  }

  &.medium-emphasis {
    color: var(--brand-medium-emphasis-text-color);
  }

  &.low-emphasis {
    color: var(--brand-low-emphasis-text-color);
  }
}

.h1 {
  font-size: $font-size-h1;
  font-weight: $font-weight-h1;
  letter-spacing: $letter-spacing-h1;
  line-height: $line-height-h1;
}

.h2 {
  font-size: $font-size-h2;
  font-weight: $font-weight-h2;
  letter-spacing: $letter-spacing-h2;
  line-height: $line-height-h2;
}

.h3 {
  font-size: $font-size-h3;
  font-weight: $font-weight-h3;
  letter-spacing: $letter-spacing-h3;
  line-height: $line-height-h3;
}

.h4 {
  font-size: $font-size-h4;
  font-weight: $font-weight-h4;
  letter-spacing: $letter-spacing-h4;
  line-height: $line-height-h4;
}

.h5 {
  font-size: $font-size-h5;
  font-weight: $font-weight-h5;
  letter-spacing: $letter-spacing-h5;
  line-height: $line-height-h5;
}

.h6 {
  font-size: $font-size-h6;
  font-weight: $font-weight-h6;
  letter-spacing: $letter-spacing-h6;
  line-height: $line-height-h6;
}
</style>
