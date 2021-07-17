import Vue from 'vue';
import { fireEvent, render, RenderResult } from '@testing-library/vue';
import VueAccordion from './VueAccordion.vue';
import VueAccordionItem from './VueAccordionItem.vue';

Vue.component('VueAccordionItem', VueAccordionItem);

describe('VueAccordion.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueAccordion, {
      slots: {
        default: [
          '<vue-accordion-item title="Item 1" :init-open="true">Content 1</vue-accordion-item>',
          '<vue-accordion-item title="Item 2">Content 2</vue-accordion-item>',
          '<vue-accordion-item title="Item 3">Content 3</vue-accordion-item>',
        ],
      },
    });
  });

  test('renders component with no item open', () => {
    const { html } = render(VueAccordion, {
      slots: {
        default: [
          '<vue-accordion-item title="Item 1">Content 1</vue-accordion-item>',
          '<vue-accordion-item title="Item 2">Content 2</vue-accordion-item>',
          '<vue-accordion-item title="Item 3">Content 3</vue-accordion-item>',
        ],
      },
    });

    expect(html()).not.toMatch('Content 1');
    expect(html()).not.toMatch('Content 2');
    expect(html()).not.toMatch('Content 3');
  });

  test('renders component with first item open and closes it', async () => {
    const { getByText, queryAllByText } = harness;

    getByText('Item 1');
    getByText('Item 2');
    getByText('Item 3');
    getByText('Content 1');

    expect(queryAllByText('Content 2')).toHaveLength(0);
    expect(queryAllByText('Content 3')).toHaveLength(0);

    await fireEvent.click(getByText('Item 1'));

    expect(queryAllByText('Content 1')).toHaveLength(0);
    expect(queryAllByText('Content 2')).toHaveLength(0);
    expect(queryAllByText('Content 3')).toHaveLength(0);
  });

  test('should open item 2 and 3', async () => {
    const { getByText, queryAllByText } = harness;

    expect(queryAllByText('Content 1')).toHaveLength(1);
    expect(queryAllByText('Content 2')).toHaveLength(0);
    expect(queryAllByText('Content 3')).toHaveLength(0);

    await fireEvent.click(getByText('Item 2'));

    expect(queryAllByText('Content 1')).toHaveLength(0);
    expect(queryAllByText('Content 2')).toHaveLength(1);
    expect(queryAllByText('Content 3')).toHaveLength(0);

    await fireEvent.click(getByText('Item 3'));

    expect(queryAllByText('Content 1')).toHaveLength(0);
    expect(queryAllByText('Content 2')).toHaveLength(0);
    expect(queryAllByText('Content 3')).toHaveLength(1);
  });

  test('should open all items and close one', async () => {
    const { getByText, queryAllByText, updateProps } = harness;

    await updateProps({ multiple: true });

    expect(queryAllByText('Content 1')).toHaveLength(1);
    expect(queryAllByText('Content 2')).toHaveLength(0);
    expect(queryAllByText('Content 3')).toHaveLength(0);

    await fireEvent.click(getByText('Item 2'));

    expect(queryAllByText('Content 1')).toHaveLength(1);
    expect(queryAllByText('Content 2')).toHaveLength(1);
    expect(queryAllByText('Content 3')).toHaveLength(0);

    await fireEvent.click(getByText('Item 3'));

    expect(queryAllByText('Content 1')).toHaveLength(1);
    expect(queryAllByText('Content 2')).toHaveLength(1);
    expect(queryAllByText('Content 3')).toHaveLength(1);

    await fireEvent.click(getByText('Item 3'));

    expect(queryAllByText('Content 1')).toHaveLength(1);
    expect(queryAllByText('Content 2')).toHaveLength(1);
    expect(queryAllByText('Content 3')).toHaveLength(0);
  });
});
