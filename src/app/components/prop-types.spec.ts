import { describe, test, expect } from 'vitest';
import {
  FontWeightValues,
  AlignmentValues,
  HorizontalAlignmentValues,
  VerticalAlignmentValues,
  SpacingValues,
  TextColorValues,
  TextStyleValues,
  WidthValues,
  ButtonStyleValues,
  ShirtSizeValues,
  VerticalDirectionValues,
  HorizontalDirectionValues,
} from '~/app/components/prop-types';

describe('prop-types', () => {
  test('All type values should be present', () => {
    expect(TextStyleValues).not.toBeUndefined();
    expect(TextColorValues).not.toBeUndefined();
    expect(FontWeightValues).not.toBeUndefined();
    expect(AlignmentValues).not.toBeUndefined();
    expect(HorizontalAlignmentValues).not.toBeUndefined();
    expect(VerticalAlignmentValues).not.toBeUndefined();
    expect(SpacingValues).not.toBeUndefined();
    expect(WidthValues).not.toBeUndefined();
    expect(ButtonStyleValues).not.toBeUndefined();
    expect(ShirtSizeValues).not.toBeUndefined();
    expect(VerticalDirectionValues).not.toBeUndefined();
    expect(HorizontalDirectionValues).not.toBeUndefined();
  });
});
