import Vue from 'vue';
import { render } from '@testing-library/vue';
import { triggerDocument, TestComponent } from '@shared/testing/test-utils';
import { ref } from '@vue/composition-api';
import { useOutsideClick } from '@shared/composables/use-outside-click';

describe('use-outside-click-behaviour', () => {
  test('should not trigger outside click', async () => {
    let clicked = false;

    const { getByTestId } = render<any>(
      TestComponent(() => {
        const element = ref<HTMLElement>(null);
        const { onOutsideClick } = useOutsideClick(element);

        onOutsideClick(() => (clicked = true));

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

    render<any>(
      TestComponent(() => {
        const element = ref<HTMLElement>(null);
        const { onOutsideClick } = useOutsideClick(element);

        onOutsideClick(() => (clicked = true));

        return { element };
      }, '<div ref="element" data-testid="foo" />'),
    );

    await Vue.nextTick();

    triggerDocument.mousedown({ target: null });

    expect(clicked).toBeTruthy();
  });
});
