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
});
