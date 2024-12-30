import { describe, beforeEach, test, expect } from 'vitest';
import { ref, nextTick } from 'vue';
import { render } from '@testing-library/vue';
import { useBackdrop } from './use-backdrop';
import { TestComponent } from '~~/test/test-utils';

describe('use-backdrop.ts', () => {
  beforeEach(() => {
    document.body.style.overflow = '';
  });

  test('set body to overflow hidden', async () => {
    render(
      TestComponent(() => {
        const show = ref(false);
        const scrollable = ref(false);

        useBackdrop(show, { scrollable });

        show.value = true;
      }),
    );

    await nextTick();

    expect(document.body.style.overflow).toBe('hidden');
  });

  test('set body to overflow initial', async () => {
    render(
      TestComponent(() => {
        const show = ref(true);
        const scrollable = ref(false);

        useBackdrop(show, { scrollable });

        show.value = false;
      }),
    );

    await nextTick();

    expect(document.body.style.overflow).toBe('initial');
  });

  test('dont set body to overflow hidden', async () => {
    render(
      TestComponent(() => {
        const show = ref(false);
        const scrollable = ref(true);

        useBackdrop(show, { scrollable });

        show.value = true;
      }),
    );

    await nextTick();

    expect(document.body.style.overflow).toBe('');
  });

  test('dont set body to overflow initial', async () => {
    render(
      TestComponent(() => {
        const show = ref(true);
        const scrollable = ref(true);

        useBackdrop(show, { scrollable });

        show.value = false;
      }),
    );

    await nextTick();

    expect(document.body.style.overflow).toBe('');
  });
});
