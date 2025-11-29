<template>
  <component :is="as" :class="cssClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { mapPropToBreakpoints } from '@/components/utils/map-prop-to-breakpoints';
import { parseSpacingShorthand } from '@/components/utils/parse-spacing-shorthand';
import { buildResponsiveClasses } from '@/components/utils/build-responsive-classes';
import { BREAKPOINT_ORDER } from '@/components/utils/breakpoints';
import type { SpacingWithDirections, FlexJustify, FlexAlign } from '@/components/utils/prop-types';
import type { ResponsiveValue } from '@/components/utils/types';
import type { BreakPoint } from '#shared/enums/BreakPoint';

interface BoxProps {
  as?: string;
  padding?: SpacingWithDirections | Array<SpacingWithDirections>;
  alignX?: FlexJustify | Array<FlexJustify> | null;
  alignY?: FlexAlign | Array<FlexAlign> | null;
}
const props = withDefaults(defineProps<BoxProps>(), {
  as: 'div',
  padding: () => ['0'] as Array<SpacingWithDirections>,
  alignX: null,
  alignY: null,
});

const attrs = useAttrs();
const responsivePaddings = computed<Record<BreakPoint, string | null>>(
  () => mapPropToBreakpoints<string | null>(props.padding) as Record<BreakPoint, string | null>,
);
const responsivePaddingsParsed = computed(() => {
  const source = responsivePaddings.value;

  const result: ResponsiveValue<ReturnType<typeof parseSpacingShorthand>> = {};

  let lastRaw: string | null = null;
  let lastParsed: ReturnType<typeof parseSpacingShorthand> = parseSpacingShorthand(null);

  for (const bp of BREAKPOINT_ORDER) {
    const raw = source[bp];

    if (raw === lastRaw) {
      result[bp] = lastParsed;
    } else {
      lastRaw = raw;
      lastParsed = parseSpacingShorthand(raw);
      result[bp] = lastParsed;
    }
  }

  return result;
});
const responsiveAlignX = computed(() => mapPropToBreakpoints(props.alignX));
const responsiveAlignY = computed(() => mapPropToBreakpoints(props.alignY));

const hasAlignment = computed(() => props.alignX !== null || props.alignY !== null);

const cssClasses = computed(() => {
  const classes: string[] = [];

  classes.push(
    ...buildResponsiveClasses({
      prefix: 'p',
      values: responsivePaddingsParsed.value,
      directions: {
        top: 't',
        right: 'r',
        bottom: 'b',
        left: 'l',
      },
    }),
  );

  if (hasAlignment.value) {
    const hasFlexAlready = attrs.class && (attrs.class as string).includes('flex');

    if (!hasFlexAlready) {
      classes.push('flex');
    }

    classes.push(
      ...buildResponsiveClasses({
        prefix: 'justify',
        values: responsiveAlignX.value,
      }),
    );

    classes.push(
      ...buildResponsiveClasses({
        prefix: 'items',
        values: responsiveAlignY.value,
      }),
    );
  } else {
    classes.push('block');
  }

  return classes;
});
</script>
