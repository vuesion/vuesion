---
to: "src/components/<%= folder %>/<%= name %>/<%= name %>.spec.ts"
---
import { describe, beforeEach, test } from 'vitest';
import { render, RenderResult } from '@testing-library/vue';
import <%= name %> from './<%= name %>.vue';

describe('<%= name %>.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(<%= name %>, {});
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('<%= name %>');
  });
});
