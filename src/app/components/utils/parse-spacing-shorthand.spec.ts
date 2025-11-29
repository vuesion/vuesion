import { describe, test, expect } from 'vitest';
import { parseSpacingShorthand } from './parse-spacing-shorthand';

describe('parseSpacingShorthand', () => {
  test('should handle null value', () => {
    expect(parseSpacingShorthand(null)).toEqual({ top: null, right: null, bottom: null, left: null });
  });

  test('should parse one padding value', () => {
    expect(parseSpacingShorthand('24')).toEqual({ top: '24', right: '24', bottom: '24', left: '24' });
  });

  test('should parse two padding values', () => {
    expect(parseSpacingShorthand('24 16')).toEqual({ top: '24', right: '16', bottom: '24', left: '16' });
  });

  test('should parse three padding values', () => {
    expect(parseSpacingShorthand('24 16 8')).toEqual({ top: '24', right: '16', bottom: '8', left: '16' });
  });

  test('should parse four padding values', () => {
    expect(parseSpacingShorthand('24 16 8 4')).toEqual({ top: '24', right: '16', bottom: '8', left: '4' });
  });

  test('should treat whitespace-only value as empty spacing', () => {
    expect(parseSpacingShorthand('   ')).toEqual({
      top: null,
      right: null,
      bottom: null,
      left: null,
    });
  });

  test('should handle excessive inner whitespace between tokens', () => {
    expect(parseSpacingShorthand('24    16')).toEqual({
      top: '24',
      right: '16',
      bottom: '24',
      left: '16',
    });
  });

  test('should ignore more than four spacing tokens', () => {
    expect(parseSpacingShorthand('1 2 3 4 5 6 7')).toEqual({
      top: '1',
      right: '2',
      bottom: '3',
      left: '4',
    });
  });

  test('should handle trailing whitespace', () => {
    expect(parseSpacingShorthand('24 16 8 4   ')).toEqual({
      top: '24',
      right: '16',
      bottom: '8',
      left: '4',
    });
  });

  test('does not push empty trailing token when string ends with space and many tokens', () => {
    expect(parseSpacingShorthand('1 2 3 4 5 ')).toEqual({
      top: '1',
      right: '2',
      bottom: '3',
      left: '4',
    });
  });

  test('parses more than four tokens but truncates correctly', () => {
    expect(parseSpacingShorthand('10 20 30 40 50 60')).toEqual({
      top: '10',
      right: '20',
      bottom: '30',
      left: '40',
    });
  });
});
