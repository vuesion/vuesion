---
to: "src/components/forms/<%= h.capitalize(name) %>Form/<%= h.capitalize(name) %>Form.spec.ts"
unless_exists: true
---
import { beforeEach, describe, expect, test } from 'vitest';
import { fireEvent, render, type RenderResult } from '@testing-library/vue';
import flushPromises from 'flush-promises';
import <%= h.capitalize(name) %>Form from './<%= h.capitalize(name) %>Form.vue';
import { Default } from './<%= h.capitalize(name) %>Form.stories';

describe('<%= h.capitalize(name) %>Form.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(<%= h.capitalize(name) %>Form, {
      props: { ...Default.args },
    });
  });

  test('renders component', () => {
    const { getByPlaceholderText } = harness;

    getByPlaceholderText('input.name.placeholder');
  });

  test('emits create event', async () => {
    const { getByPlaceholderText, getByText, emitted } = harness;

    await fireEvent.update(getByPlaceholderText('input.name.placeholder'), 'name');
    await flushPromises();
    await fireEvent.click(getByText('common.Submit'));

    expect(emitted<any>().create[0][0]).toEqual({ name: 'name' });
  });

  test('should emit update event', async () => {
    const { getByPlaceholderText, getByText, emitted, rerender } = harness;

    await rerender({
      <%= name %>: {
        id: '<%= name %>-1',
        name: 'name',
      },
    });

    await fireEvent.update(getByPlaceholderText('input.name.placeholder'), 'name 2');
    await flushPromises();
    await fireEvent.click(getByText('common.Submit'));

    expect(emitted<any>().update[0][0]).toEqual({
      id: '<%= name %>-1',
      name: 'name 2',
    });
  });

  test('emits cancel event', async () => {
    const { getByText, emitted } = harness;

    await fireEvent.click(getByText('common.Cancel'));

    expect(emitted<any>().cancel).toBeTruthy();
  });
});
