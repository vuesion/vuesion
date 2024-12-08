import { describe, beforeEach, test } from 'vitest';
import { render, type RenderResult } from '@testing-library/vue';
import ContactSection from './ContactSection.vue';

describe('ContactSection.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(ContactSection, {});
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('ContactSection.title');
    getByText('ContactSection.description');
    getByText('ContactSection.cta');
  });
});
