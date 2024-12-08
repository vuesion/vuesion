import 'vitest';

declare global {
  namespace Vi {
    interface Assertion {
      toHaveAttribute(attr: string): void;
    }
  }
}
