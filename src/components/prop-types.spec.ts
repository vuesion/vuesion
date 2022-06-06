import { describe, test, expect } from 'vitest';
import {
  FontWeightValues,
  AlignmentValues,
  SpacingValues,
  TextColorValues,
  TextStyleValues,
} from '@/components/prop-types';

describe('prop-types', () => {
  test('All type values should be present', () => {
    expect(TextStyleValues).not.toBeUndefined();
    expect(TextColorValues).not.toBeUndefined();
    expect(FontWeightValues).not.toBeUndefined();
    expect(AlignmentValues).not.toBeUndefined();
    expect(SpacingValues).not.toBeUndefined();
  });
});
