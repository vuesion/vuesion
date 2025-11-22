import { describe, test, expect } from 'vitest';
import {
  FontWeightValues,
  AlignmentValues,
  FlexJustifyValues,
  FlexAlignValues,
  SpacingValues,
  TextColorValues,
  TextStyleValues,
  WidthValues,
  ButtonStyleValues,
  ShirtSizeValues,
  VerticalDirectionValues,
  HorizontalDirectionValues,
} from '@/components/utils/prop-types';

describe('prop-types', () => {
  test('All type values should be present', () => {
    expect(TextStyleValues).not.toBeUndefined();
    expect(TextColorValues).not.toBeUndefined();
    expect(FontWeightValues).not.toBeUndefined();
    expect(AlignmentValues).not.toBeUndefined();
    expect(FlexJustifyValues).not.toBeUndefined();
    expect(FlexAlignValues).not.toBeUndefined();
    expect(SpacingValues).not.toBeUndefined();
    expect(WidthValues).not.toBeUndefined();
    expect(ButtonStyleValues).not.toBeUndefined();
    expect(ShirtSizeValues).not.toBeUndefined();
    expect(VerticalDirectionValues).not.toBeUndefined();
    expect(HorizontalDirectionValues).not.toBeUndefined();
  });
});
