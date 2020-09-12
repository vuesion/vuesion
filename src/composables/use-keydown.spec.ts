import { render } from '@testing-library/vue';
import { TestComponent, triggerDocument } from '@/test/test-utils';
import { useKeydown } from './use-keydown';

describe('use-keydown-behaviour.ts', () => {
  beforeEach(() => (document.body.style.overflow = ''));

  test('should trigger onKeyDown', async () => {
    let keydownEvent: KeyboardEvent = null;
    const { unmount } = render(
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
