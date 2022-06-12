import { describe, test, vi, expect } from 'vitest';
import { CircleAnimation } from './CircleAnimation';

describe('CircleAnimation', () => {
  test('should animate', () => {
    const context: any = {
      clearRect: vi.fn(),
      beginPath: vi.fn(),
      arc: vi.fn(),
      fill: vi.fn(),
      closePath: vi.fn(),
    };
    const canvas: any = {
      width: 300,
      height: 300,
      getContext(): any {
        return context;
      },
    };

    const animation = CircleAnimation(canvas);

    expect(context.clearRect).toHaveBeenCalledTimes(1);
    expect(context.beginPath).toHaveBeenCalledTimes(50);
    expect(context.arc).toHaveBeenCalledTimes(50);
    expect(context.fill).toHaveBeenCalledTimes(50);
    expect(context.closePath).toHaveBeenCalledTimes(50);

    animation.circles[0].opacity = -1000;
    animation.draw(canvas, context, animation.circles);

    expect(context.clearRect).toHaveBeenCalledTimes(2);
    expect(context.beginPath).toHaveBeenCalledTimes(100);
    expect(context.arc).toHaveBeenCalledTimes(100);
    expect(context.fill).toHaveBeenCalledTimes(100);
    expect(context.closePath).toHaveBeenCalledTimes(100);
  });

  test('should not animate', () => {
    const canvas: any = {
      width: 300,
      height: 300,
      getContext: vi.fn().mockReturnValue(null),
    };

    CircleAnimation(canvas);

    expect(canvas.getContext).toHaveBeenCalledTimes(1);
  });
});
