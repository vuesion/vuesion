---
to: "src/app/components/field-sets/<%= h.capitalize(name) %>FieldSet/<%= h.capitalize(name) %>FieldSet.spec.ts"
unless_exists: true
---
import { beforeEach, describe, expect, test } from 'vitest';
import { fireEvent, render, type RenderResult } from '@testing-library/vue';
import flushPromises from 'flush-promises';
import <%= h.capitalize(name) %>FieldSet from './<%= h.capitalize(name) %>FieldSet.vue';

describe('<%= h.capitalize(name) %>FieldSet.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(<%= h.capitalize(name) %>FieldSet, {
      props: {
        modelValue: undefined,
      },
    });
  });

  test('renders component', () => {
    const { getByLabelText } = harness;

    getByLabelText('input.name.label *');
  });

  test('should transfer model-value into local state', async () => {
    const { getByDisplayValue, rerender } = harness;

    await rerender({
      modelValue: {
        name: 'New Name',
      },
    });

    getByDisplayValue('New Name');
  });

  test('should sync v-model and v-model:valid', async () => {
    const { emitted, getByLabelText, getByTestId } = harness;

    await fireEvent.update(getByLabelText('input.name.label *'), '');
    await flushPromises();

    await fireEvent.update(getByLabelText('input.name.label *'), 'New Name');
    await flushPromises();

    expect(emitted<any>()['update:modelValue']?.[0]?.[0]).toEqual({
      name: 'New Name',
    });
    expect(emitted<any>()['update:valid']).toEqual([[true], [false], [true]]);
  });
});
