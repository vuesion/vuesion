import { describe, test, expect } from 'vitest';
import { getFlexDirectionForBreakpoint } from './get-flex-direction-for-breakpoint';

describe('getFlexDirectionForBreakpoint', () => {
  test('returns "flex-row" when reverse=false, stacked=false', () => {
    expect(getFlexDirectionForBreakpoint(false, false)).toBe('flex-row');
  });

  test('returns "flex-row-reverse" when reverse=true, stacked=false', () => {
    expect(getFlexDirectionForBreakpoint(true, false)).toBe('flex-row-reverse');
  });

  test('returns "flex-col" when reverse=false, stacked=true', () => {
    expect(getFlexDirectionForBreakpoint(false, true)).toBe('flex-col');
  });

  test('returns "flex-col-reverse" when reverse=true, stacked=true', () => {
    expect(getFlexDirectionForBreakpoint(true, true)).toBe('flex-col-reverse');
  });

  test('appends breakpoint suffix when provided (reverse=false, stacked=false)', () => {
    expect(getFlexDirectionForBreakpoint(false, false, 'sd')).toBe('flex-row-sd');
  });

  test('appends breakpoint suffix for reverse row', () => {
    expect(getFlexDirectionForBreakpoint(true, false, 'tp')).toBe('flex-row-reverse-tp');
  });

  test('appends breakpoint suffix for stacked col', () => {
    expect(getFlexDirectionForBreakpoint(false, true, 'tl')).toBe('flex-col-tl');
  });

  test('appends breakpoint suffix for stacked+reverse col', () => {
    expect(getFlexDirectionForBreakpoint(true, true, 'ld')).toBe('flex-col-reverse-ld');
  });

  test('returns null when reverse === null and stacked === false', () => {
    expect(getFlexDirectionForBreakpoint(null, false)).toBeNull();
  });

  test('ignores the null-check when stacked !== false (reverse === null, stacked === true)', () => {
    expect(getFlexDirectionForBreakpoint(null, true)).toBe('flex-col');
  });

  test('when stacked is undefined, behaves like stacked=false (default flex-row)', () => {
    // @ts-expect-error: intentional undefined for stacked
    expect(getFlexDirectionForBreakpoint(false)).toBe('flex-row');
  });

  test('does not append suffix when breakpoint is empty/undefined', () => {
    // empty string falls back to no suffix due to falsy check
    expect(getFlexDirectionForBreakpoint(true, false, '')).toBe('flex-row-reverse');
    expect(getFlexDirectionForBreakpoint(true, false, undefined)).toBe('flex-row-reverse');
  });
});
