import { render } from '@testing-library/vue';
import { TestComponent, triggerDocument } from '@shared/testing/test-utils';
import { useKeyDownBehavior } from '@shared/composables/use-keydown-behaviour';

describe('use-keydown-behaviour.ts', () => {
  beforeEach(() => (document.body.style.overflow = ''));

  test('should trigger onKeyDown', async () => {
    let keydownEvent: KeyboardEvent = null;
    const { unmount } = render<any>(
      TestComponent(() => {
        const { onKeyDown } = useKeyDownBehavior();

        onKeyDown((e) => (keydownEvent = e));
      }),
    );

    triggerDocument.keydown({ key: 'Escape' });

    await unmount();

    expect(keydownEvent).not.toBeNull();
  });
});
