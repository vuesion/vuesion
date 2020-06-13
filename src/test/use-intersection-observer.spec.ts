import Vue from 'vue';
import { Ref } from '@vue/composition-api';
import { render } from '@testing-library/vue';
import { TestComponent } from '@/components/testing/test-utils';
import { useIntersectionObserver } from '@/components/composables/use-intersection-observer';
import { getDomRef } from '@/components/composables/get-dom-ref';

describe('use-intersection-observer.ts', () => {
  test('should create an observer and call the call back function', async () => {
    let testObserver: Ref<IntersectionObserver>;

    (global as any).IntersectionObserver = jest.fn().mockImplementation(() => {
      return { observe: jest.fn() };
    });

    const { unmount } = render<any>(
      TestComponent(() => {
        const ref = getDomRef(null);
        const { observer } = useIntersectionObserver(ref, null);

        testObserver = observer;

        return {
          ref,
        };
      }, '<div ref="ref"><p>TEST</p></div>'),
    );

    await Vue.nextTick();

    expect(testObserver.value.observe).toHaveBeenCalled();
    expect(testObserver.value).not.toBeNull();

    unmount();

    await Vue.nextTick();

    expect(testObserver.value).toBeNull();

    (global as any).IntersectionObserver = undefined;
  });

  test('should not create an observer and call the call back function', async () => {
    let testObserver: Ref<IntersectionObserver>;

    render<any>(
      TestComponent(() => {
        const ref = getDomRef(null);
        const { observer } = useIntersectionObserver(ref, null);

        testObserver = observer;

        return {
          ref,
        };
      }, '<div ref="ref"><p>TEST</p></div>'),
    );

    await Vue.nextTick();

    expect(testObserver.value).toBeNull();
  });
});
