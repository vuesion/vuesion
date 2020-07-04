import Vue from 'vue';
import { render } from '@testing-library/vue';
import { ref } from '@vue/composition-api';
import { useBackdrop } from './use-backdrop';
import { TestComponent } from '@/components/testing/test-utils';

describe('use-backdrop.ts', () => {
  beforeEach(() => (document.body.style.overflow = ''));

  test('set body to overflow hidden', async () => {
    render<any>(
      TestComponent(() => {
        const show = ref(false);

        useBackdrop(show, { scrollable: false });

        show.value = true;
      }),
    );

    await Vue.nextTick();

    expect(document.body.style.overflow).toBe('hidden');
  });

  test('set body to overflow initial', async () => {
    render<any>(
      TestComponent(() => {
        const show = ref(true);

        useBackdrop(show, { scrollable: false });

        show.value = false;
      }),
    );

    await Vue.nextTick();

    expect(document.body.style.overflow).toBe('initial');
  });

  test('dont set body to overflow hidden', async () => {
    render<any>(
      TestComponent(() => {
        const show = ref(false);

        useBackdrop(show, { scrollable: true });

        show.value = true;
      }),
    );

    await Vue.nextTick();

    expect(document.body.style.overflow).toBe('');
  });

  test('dont set body to overflow initial', async () => {
    render<any>(
      TestComponent(() => {
        const show = ref(true);

        useBackdrop(show, { scrollable: true });

        show.value = false;
      }),
    );

    await Vue.nextTick();

    expect(document.body.style.overflow).toBe('');
  });
});
