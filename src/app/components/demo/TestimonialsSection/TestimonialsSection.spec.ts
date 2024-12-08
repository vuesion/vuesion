import { describe, beforeEach, test } from 'vitest';
import { render, type RenderResult } from '@testing-library/vue';
import TestimonialsSection from './TestimonialsSection.vue';

describe('TestimonialsSection.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(TestimonialsSection, {});
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('TestimonialsSection.title');
    getByText('“TestimonialsSection.testimonial1”');
    getByText('“TestimonialsSection.testimonial2”');
    getByText('“TestimonialsSection.testimonial3”');
    getByText('“TestimonialsSection.testimonial4”');
  });
});
