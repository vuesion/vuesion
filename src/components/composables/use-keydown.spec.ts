import { render } from '@testing-library/vue';
import { TestComponent, triggerDocument } from '@/components/testing/test-utils';
import { useKeydown } from '@/components/composables/use-keydown';

describe('use-keydown-behaviour.ts', () => {
  beforeEach(() => (document.body.style.overflow = ''));

  test('should trigger onKeyDown', async () => {
    let keydownEvent: KeyboardEvent = null;
    const { unmount } = render<any>(
      TestComponent(() => {
        const { onKeydown } = useKeydown();

        onKeydown((e) => (keydownEvent = e));
      }),
    );

    triggerDocument.keydown({ key: 'Escape' });

    await unmount();

    expect(keydownEvent).not.toBeNull();
  });
});
