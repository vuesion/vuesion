import {
  horizontalAlignmentValidator,
  verticalAlignmentValidator,
  breakpointValidator,
  colorVariationValidator,
  fontWeightValidator,
  responsivePropValidator,
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

  test('horizontalAlignmentValidator should return false', () => {
    expect(horizontalAlignmentValidator('foo')).toBeFalsy();
  });

  test('verticalAlignmentValidator should return false', () => {
    expect(verticalAlignmentValidator('foo')).toBeFalsy();
  });

  test('responsivePropValidator should return true with single null value', () => {
    expect(responsivePropValidator(spacingValidator)(null)).toBeTruthy();
  });

  test('responsivePropValidator should return false with single value', () => {
    expect(responsivePropValidator(spacingValidator)('foo')).toBeFalsy();
  });

  test('responsivePropValidator should return true with single value', () => {
    expect(responsivePropValidator(spacingValidator)('8')).toBeTruthy();
  });

  test('responsivePropValidator should return true with array of null values', () => {
    expect(responsivePropValidator(spacingValidator)([null, null])).toBeTruthy();
  });

  test('responsivePropValidator should return false with array value', () => {
    expect(responsivePropValidator(spacingValidator)([8, 'foo'])).toBeFalsy();
  });

  test('responsivePropValidator should return true with array value', () => {
    expect(responsivePropValidator(spacingValidator)([8, 32])).toBeTruthy();
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

  test('spacingValidator should return true for null as string', () => {
    expect(spacingValidator('8 null')).toBeTruthy();
  });
});
