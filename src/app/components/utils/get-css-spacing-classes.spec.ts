import { describe, test, expect } from 'vitest';
import { getCssSpacingClasses } from './get-css-spacing-classes';

describe('getCssSpacingClasses', () => {
  test('should return spacing classes for all directions that are not null without breakpoint prefix', () => {
    expect(
      getCssSpacingClasses(
        {
          'pt-8': 'pt-8',
          'pr-8': 'pr-8',
          'pb-8': 'pb-8',
          'pl-8': 'pl-8',
        },
        {
          top: '8',
          right: '8',
          bottom: '8',
          left: 'null',
        },
        'p',
      ),
    ).toEqual(['pt-8', 'pr-8', 'pb-8']);
  });

  test('should return spacing classes for all directions that are not null with breakpoint prefix', () => {
    expect(
      getCssSpacingClasses(
        {
          'pt-sd-8': 'pt-sd-8',
          'pr-sd-8': 'pr-sd-8',
          'pb-sd-8': 'pb-sd-8',
          'pl-sd-8': 'pl-sd-8',
        },
        {
          top: '8',
          right: '8',
          bottom: '8',
          left: '8',
        },
        'p',
        'sd',
      ),
    ).toEqual(['pt-sd-8', 'pr-sd-8', 'pb-sd-8', 'pl-sd-8']);
  });
});
