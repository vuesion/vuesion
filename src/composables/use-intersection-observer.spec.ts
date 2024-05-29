import { describe, test, expect, vi } from 'vitest';
import { type Ref, nextTick } from 'vue';
import { render } from '@testing-library/vue';
import { getDomRef } from './get-dom-ref';
import { useIntersectionObserver } from './use-intersection-observer';
import { TestComponent } from '~/test/test-utils';

describe('use-intersection-observer.ts', () => {
  test('should create an observer and call the call back function', async () => {
    let testObserver: Ref<IntersectionObserver> = null as any;

    (global as any).IntersectionObserver = vi.fn().mockImplementation(() => {
      return { observe: vi.fn() };
    });

    const { unmount } = render(
      TestComponent(() => {
        const ref = getDomRef<HTMLElement>(null);
        const { observer } = useIntersectionObserver(ref, () => null);

        testObserver = observer as Ref<IntersectionObserver>;

        return {
          ref,
        };
      }, '<div ref="ref"><p>TEST</p></div>'),
    );

    await nextTick();

    expect(testObserver.value.observe).toHaveBeenCalled();
    expect(testObserver.value).not.toBeNull();

    unmount();

    await nextTick();

    expect(testObserver.value).toBeNull();

    (global as any).IntersectionObserver = undefined;
  });

  test('should not create an observer and call the call back function', async () => {
    let testObserver: Ref<IntersectionObserver> = null as any;
    const callback = vi.fn();

    render(
      TestComponent(() => {
        const ref = getDomRef<HTMLElement>(null);
        const { observer } = useIntersectionObserver(ref, callback);

        testObserver = observer as Ref<IntersectionObserver>;

        return {
          ref,
        };
      }, '<div ref="ref"><p>TEST</p></div>'),
    );

    await nextTick();

    expect(testObserver.value).toBeNull();
    expect(callback).toHaveBeenCalled();
  });
});
