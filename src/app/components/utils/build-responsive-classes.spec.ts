import { describe, test, expect } from 'vitest';
import { buildResponsiveClasses } from './build-responsive-classes';
import { BreakPoint } from '#shared/enums/BreakPoint';

describe('buildResponsiveClasses', () => {
  test('scalar mode: generates classes for all breakpoints', () => {
    const result = buildResponsiveClasses({
      prefix: 'p',
      values: {
        phone: '8',
        tabletPortrait: '16',
        tabletLandscape: '24',
        smallDesktop: '32',
        largeDesktop: '40',
      },
    });

    expect(result).toEqual(['p-8', 'p-tp-16', 'p-tl-24', 'p-sd-32', 'p-ld-40']);
  });

  test('vector mode: generates directional classes', () => {
    const result = buildResponsiveClasses({
      prefix: 'p',
      values: {
        phone: { top: '8', right: '8', bottom: '8', left: '8' },
      },
      directions: { top: 't', right: 'r', bottom: 'b', left: 'l' },
    });

    expect(result).toEqual(['pt-8', 'pr-8', 'pb-8', 'pl-8']);
  });

  test('vector mode: skips null directional values', () => {
    const result = buildResponsiveClasses({
      prefix: 'p',
      values: {
        phone: { top: null, right: '8', bottom: null, left: '4' },
      },
      directions: { top: 't', right: 'r', bottom: 'b', left: 'l' },
    });

    expect(result).toEqual(['pr-8', 'pl-4']);
  });

  test('scalar mode: skips null values', () => {
    const result = buildResponsiveClasses({
      prefix: 'p',
      values: {
        phone: null,
        tabletPortrait: '8',
        tabletLandscape: null,
        smallDesktop: '16',
        largeDesktop: null,
      },
    });

    expect(result).toEqual(['p-tp-8', 'p-sd-16']);
  });

  test('vector mode: ignores breakpoints with undefined values', () => {
    const result = buildResponsiveClasses({
      prefix: 'm',
      values: {
        phone: { top: '8', right: null, bottom: null, left: null },
        tabletPortrait: undefined,
        tabletLandscape: undefined,
        smallDesktop: undefined,
        largeDesktop: undefined,
      },
      directions: { top: 't', right: 'r', bottom: 'b', left: 'l' },
    });

    expect(result).toEqual(['mt-8']);
  });

  test('applyValueToClassName=false: scalar', () => {
    const result = buildResponsiveClasses({
      prefix: 'p',
      values: {
        phone: '8',
        tabletPortrait: '16',
      },
      applyValueToClassName: false,
    });

    expect(result).toEqual([
      'p', // phone (no prefix)
      'p-tp', // next breakpoint
    ]);
  });

  test('applyValueToClassName=false: vector mode', () => {
    const result = buildResponsiveClasses({
      prefix: 'm',
      values: {
        phone: { top: '8', right: '4', bottom: null, left: null },
      },
      directions: { top: 't', right: 'r', bottom: 'b', left: 'l' },
      applyValueToClassName: false,
    });

    expect(result).toEqual(['mt-', 'mr-']);
  });

  test('vector mode: direction order must follow directions object order', () => {
    const result = buildResponsiveClasses({
      prefix: 'p',
      values: {
        phone: { top: '1', right: '2', bottom: '3', left: '4' },
      },
      directions: { bottom: 'b', top: 't', left: 'l', right: 'r' },
    });

    // Direction order must follow Object.entries(directions)
    // Values come from the vector provided above
    expect(result).toEqual([
      'pb-3', // bottom:3
      'pt-1', // top:1
      'pl-4', // left:4
      'pr-2', // right:2
    ]);
  });

  test('does nothing when values is empty or all null', () => {
    const result = buildResponsiveClasses({
      prefix: 'p',
      values: {
        phone: null,
        tabletPortrait: null,
        tabletLandscape: null,
        smallDesktop: null,
        largeDesktop: null,
      },
    });

    expect(result).toEqual([]);
  });
});
