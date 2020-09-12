import Vue from 'vue';
import { render } from '@testing-library/vue';
import { ref } from '@vue/composition-api';
import { triggerDocument, TestComponent } from '@/test/test-utils';
import { useOutsideClick } from './use-outside-click';

describe('use-outside-click-behaviour', () => {
  test('should not trigger outside click', async () => {
    let clicked = false;

    const { getByTestId } = render(
      TestComponent(() => {
        const element = ref<HTMLElement>(null);

        useOutsideClick(element, () => (clicked = true));

        return { element };
      }, '<div ref="element" data-testid="foo" />'),
    );

    await Vue.nextTick();

    const el = getByTestId('foo');

    triggerDocument.mousedown({ target: el });

    expect(clicked).toBeFalsy();
  });

  test('should trigger outside click', async () => {
    let clicked = false;

    render(
      TestComponent(() => {
        const element = ref<HTMLElement>(null);

        useOutsideClick(element, () => (clicked = true));

        return { element };
      }, '<div ref="element" data-testid="foo" />'),
    );

    await Vue.nextTick();

    triggerDocument.mousedown({ target: null });

    expect(clicked).toBeTruthy();
  });
});
