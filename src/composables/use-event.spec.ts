import Vue from 'vue';
import { render } from '@testing-library/vue';
import { TestComponent } from '@/test/test-utils';
import { useEvent } from './use-event';

describe('use-event.ts', () => {
  test('should add and remove eventListener', async () => {
    document.addEventListener = jest.fn();
    document.removeEventListener = jest.fn();

    const { unmount } = render(
      TestComponent(() => {
        useEvent('click', null);
        return {};
      }),
    );

    await Vue.nextTick();

    unmount();

    await Vue.nextTick();

    expect(document.addEventListener).toHaveBeenCalled();
    expect(document.removeEventListener).toHaveBeenCalled();
  });

  test('should not add and remove eventListener', async () => {
    document.addEventListener = jest.fn();
    document.removeEventListener = jest.fn();

    const { unmount } = render(
      TestComponent(() => {
        useEvent('click', null, {}, null);
        return {};
      }),
    );

    await Vue.nextTick();

    unmount();

    await Vue.nextTick();

    expect(document.addEventListener).not.toHaveBeenCalled();
    expect(document.removeEventListener).not.toHaveBeenCalled();
  });
});
