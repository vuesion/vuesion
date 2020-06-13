export const TestComponent = (setup: (props?: any, options?: any) => void, template = '<div/>'): any => ({
  setup,
  template,
});

export const triggerDocument: any = {};

const addEventListener = document.addEventListener;
const removeEventListener = document.removeEventListener;
beforeEach(() => {
  document.addEventListener = jest.fn((event, cb) => {
    triggerDocument[event] = cb;
  });

  document.removeEventListener = jest.fn((event) => {
    delete triggerDocument[event];
  });
});

afterEach(() => {
  document.addEventListener = addEventListener;
  document.removeEventListener = removeEventListener;
});
