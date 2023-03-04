import { beforeEach, vi, afterEach } from 'vitest';

export const TestComponent = (
  setup: (props?: any, options?: any) => void,
  template = '<div/>',
  components: any = {},
): any => ({
  setup,
  template,
  components,
});

export const triggerDocument: any = {};
export const triggerWindow: any = {};

if (typeof beforeEach !== 'undefined') {
  const addEventListener = document.addEventListener;
  const removeEventListener = document.removeEventListener;

  beforeEach(() => {
    document.addEventListener = vi.fn((event, cb) => {
      triggerDocument[event] = cb;
    });

    document.removeEventListener = vi.fn((event) => {
      delete triggerDocument[event];
    });

    window.addEventListener = vi.fn((event, cb) => {
      triggerWindow[event] = cb;
    });

    window.removeEventListener = vi.fn((event) => {
      delete triggerWindow[event];
    });
  });

  afterEach(() => {
    document.addEventListener = addEventListener;
    document.removeEventListener = removeEventListener;
  });
}

export const sleep = (ms: number): Promise<unknown> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
