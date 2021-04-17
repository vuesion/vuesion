import {
  alignmentValidator,
  breakpointValidator,
  colorVariationValidator,
  fontWeightValidator,
  responsiveAlignmentValidator,
  responsiveSpacingValidator,
  spacingValidator,
  textColorVariationValidator,
  textStyleValidator,
} from '@/components/prop-validators';

describe('prop-validators', () => {
  test('colorVariationValidator should return false', () => {
    expect(colorVariationValidator('foo')).toBeFalsy();
  });

  test('textColorVariationValidator should return false', () => {
    expect(textColorVariationValidator('foo')).toBeFalsy();
  });

  test('textStyleValidator should return false', () => {
    expect(textStyleValidator('foo')).toBeFalsy();
  });

  test('fontWeightValidator should return false', () => {
    expect(fontWeightValidator('foo')).toBeFalsy();
  });

  test('alignmentValidator should return false', () => {
    expect(alignmentValidator('foo')).toBeFalsy();
  });

  test('responsiveAlignmentValidator should return false with single value', () => {
    expect(responsiveAlignmentValidator('foo')).toBeFalsy();
  });

  test('responsiveAlignmentValidator should return false with array value', () => {
    expect(responsiveAlignmentValidator(['foo', 'bar'])).toBeFalsy();
  });

  test('breakpointValidator should return false', () => {
    expect(breakpointValidator('foo')).toBeFalsy();
  });

  test('spacingValidator should return true', () => {
    expect(spacingValidator('8 8')).toBeTruthy();
  });

  test('spacingValidator should return false', () => {
    expect(spacingValidator('8 foo')).toBeFalsy();
  });

  test('responsiveSpacingValidator should return false with single value', () => {
    expect(responsiveSpacingValidator('foo')).toBeFalsy();
  });

  test('responsiveSpacingValidator should return false with array value', () => {
    expect(responsiveSpacingValidator(['foo', 'bar'])).toBeFalsy();
  });
});
