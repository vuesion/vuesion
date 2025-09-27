---
to: "src/app/components/<%= folder %>/<%= name %>/<%= name %>.spec.ts"
---
import { describe, beforeEach, test } from 'vitest';
import { render, type RenderResult } from '@testing-library/vue';
import <%= name %> from './<%= name %>.vue';
import { Default } from './<%= h.capitalize(name) %>.stories';

describe('<%= name %>.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(<%= h.capitalize(name) %>, {
      props: { ...Default.args },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('<%= name %>');
  });
});
