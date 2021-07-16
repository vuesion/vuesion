import { fireEvent, render, RenderResult } from '@testing-library/vue';
import { sleep, triggerDocument } from '@/test/test-utils';
import VueSlider from './VueSlider.vue';

describe('VueSlider.vue', () => {
  beforeEach(() => {
    (global as any).HTMLElement.prototype.getBoundingClientRect = function () {
      return {
        width: 100,
        height: 64,
        top: 0,
        left: 0,
      };
    };
  });

  describe('single slider', () => {
    let harness: RenderResult;

    beforeEach(() => {
      harness = render(VueSlider, {
        props: {
          id: 'slider',
          label: 'Slider label',
          min: 0,
          max: 100,
          range: [50],
        },
      });
    });

    test('should render single slider', () => {
      const { getByText, getByTestId, queryAllByTestId } = harness;

      getByText('Slider label');

      getByTestId('handle-slider-1');

      expect(getByTestId('handle-input-slider-0')).toHaveAttribute('readonly');

      expect(queryAllByTestId('handle-slider-0')).toHaveLength(0);
    });

    test('should move single handle to 0 and emit change event', async () => {
      const { getByTestId, emitted } = harness;
      const slider = getByTestId('slider');

      // trigger moveStart and bind events
      await fireEvent.mouseDown(slider, { clientX: 50 });

      // wait for the setTimeout
      await sleep(10);

      // trigger moving event
      triggerDocument.mousemove({ target: slider, clientX: 0 });

      // trigger moving event
      triggerDocument.mouseup({ target: slider, clientX: 0 });

      expect(emitted().change).toEqual([[[0]]]);
    });

    test('should move single handle to 100 and emit change event', async () => {
      const { getByTestId, emitted } = harness;
      const slider = getByTestId('slider');

      // trigger moveStart and bind events
      await fireEvent.mouseDown(slider, { clientX: 50 });

      // wait for the setTimeout
      await sleep(10);

      // trigger moving event
      triggerDocument.mousemove({ target: slider, clientX: 200 });

      // trigger moving event
      triggerDocument.mouseup({ target: slider, clientX: 200 });

      expect(emitted().change).toEqual([[[100]]]);
    });

    test('should not change max on invalid user input and not emit change event', async () => {
      const { getByTestId, emitted } = harness;
      const maxInput = getByTestId('handle-input-slider-1');

      await fireEvent.update(maxInput, '-1');
      expect(emitted().change).toBeFalsy();

      await fireEvent.update(maxInput, '101');
      expect(emitted().change).toBeFalsy();
    });

    test('should change max on valid user input and emit change event', async () => {
      const { getByTestId, emitted } = harness;
      const maxInput = getByTestId('handle-input-slider-1');

      await fireEvent.update(maxInput, '75');
      expect(emitted().change).toEqual([[[75]]]);
    });
  });

  describe('range slider', () => {
    let harness: RenderResult;

    beforeEach(() => {
      harness = render(VueSlider, {
        props: {
          id: 'slider',
          label: 'Slider label',
          min: 0,
          max: 100,
          range: [25, 75],
        },
      });
    });

    test('should render range slider', () => {
      const { getByText, getByTestId } = harness;

      getByText('Slider label');
      getByTestId('handle-slider-0');
      getByTestId('handle-slider-1');
    });

    test('should move left handle to 75 and emit change event', async () => {
      const { getByTestId, emitted } = harness;
      const slider = getByTestId('slider');

      // trigger moveStart and bind events
      await fireEvent.mouseDown(slider, { clientX: 1 });

      // wait for the setTimeout
      await sleep(10);

      // trigger moving event
      triggerDocument.mousemove({ target: slider, clientX: 80 });

      // trigger moving event
      triggerDocument.mouseup({ target: slider, clientX: 80 });

      expect(emitted().change).toEqual([[[75, 75]]]);
    });

    test('should move right handle to 25 and emit change event', async () => {
      const { getByTestId, emitted } = harness;
      const slider = getByTestId('slider');

      // trigger moveStart and bind events
      await fireEvent.mouseDown(slider, { clientX: 100 });

      // wait for the setTimeout
      await sleep(10);

      // trigger moving event
      triggerDocument.mousemove({ target: slider, clientX: 1 });

      // trigger moving event
      triggerDocument.mouseup({ target: slider, clientX: 1 });

      expect(emitted().change).toEqual([[[25, 25]]]);
    });

    test('should move left handle to the right on keyboard input and emit change event', async () => {
      const { getByTestId, emitted } = harness;
      const handle = getByTestId('handle-slider-0');

      // focus handle to set currentSlider
      await fireEvent.focus(handle);

      // trigger onKeyDown
      await fireEvent.keyDown(handle, { key: 'ArrowRight', code: 'ArrowRight' });
      await fireEvent.keyDown(handle, { key: 'ArrowRight', code: 'ArrowRight' });
      await fireEvent.keyDown(handle, { key: 'ArrowRight', code: 'ArrowRight' });
      await fireEvent.keyDown(handle, { key: 'ArrowRight', code: 'ArrowRight' });
      await fireEvent.keyDown(handle, { key: 'ArrowRight', code: 'ArrowRight' });
      await fireEvent.keyDown(handle, { key: 'ArrowRight', code: 'ArrowRight' });
      await fireEvent.keyDown(handle, { key: 'ArrowRight', code: 'ArrowRight' });
      await fireEvent.keyDown(handle, { key: 'ArrowRight', code: 'ArrowRight' });
      await fireEvent.keyDown(handle, { key: 'ArrowRight', code: 'ArrowRight' });
      await fireEvent.keyDown(handle, { key: 'ArrowRight', code: 'ArrowRight' });
      await fireEvent.keyDown(handle, { key: 'ArrowRight', code: 'ArrowRight' });

      // trigger onKeyUp and emit change event
      await fireEvent.keyUp(handle, { key: 'ArrowRight', code: 'ArrowRight' });

      expect(emitted().change).toEqual([[[75, 75]]]);
    });

    test('should move left handle to the left on keyboard input and emit change event', async () => {
      const { getByTestId, emitted } = harness;
      const handle = getByTestId('handle-slider-0');

      // focus handle to set currentSlider
      await fireEvent.focus(handle);

      // trigger onKeyDown
      await fireEvent.keyDown(handle, { key: 'ArrowLeft', code: 'ArrowLeft' });
      await fireEvent.keyDown(handle, { key: 'ArrowLeft', code: 'ArrowLeft' });
      await fireEvent.keyDown(handle, { key: 'ArrowLeft', code: 'ArrowLeft' });
      await fireEvent.keyDown(handle, { key: 'ArrowLeft', code: 'ArrowLeft' });
      await fireEvent.keyDown(handle, { key: 'ArrowLeft', code: 'ArrowLeft' });
      await fireEvent.keyDown(handle, { key: 'ArrowLeft', code: 'ArrowLeft' });

      // trigger onKeyUp and emit change event
      await fireEvent.keyUp(handle, { key: 'ArrowLeft', code: 'ArrowLeft' });

      expect(emitted().change).toEqual([[[0, 75]]]);
    });

    test('should move right handle to the right on keyboard input and emit change event', async () => {
      const { getByTestId, emitted } = harness;
      const handle = getByTestId('handle-slider-1');

      // focus handle to set currentSlider
      await fireEvent.focus(handle);

      // trigger onKeyDown
      await fireEvent.keyDown(handle, { key: 'ArrowRight', code: 'ArrowRight' });
      await fireEvent.keyDown(handle, { key: 'ArrowRight', code: 'ArrowRight' });
      await fireEvent.keyDown(handle, { key: 'ArrowRight', code: 'ArrowRight' });
      await fireEvent.keyDown(handle, { key: 'ArrowRight', code: 'ArrowRight' });
      await fireEvent.keyDown(handle, { key: 'ArrowRight', code: 'ArrowRight' });
      await fireEvent.keyDown(handle, { key: 'ArrowRight', code: 'ArrowRight' });

      // trigger onKeyUp and emit change event
      await fireEvent.keyUp(handle, { key: 'ArrowRight', code: 'ArrowRight' });

      expect(emitted().change).toEqual([[[25, 100]]]);
    });

    test('should move right handle to the left on keyboard input and emit change event', async () => {
      const { getByTestId, emitted } = harness;
      const handle = getByTestId('handle-slider-1');

      // focus handle to set currentSlider
      await fireEvent.focus(handle);

      // trigger onKeyDown
      await fireEvent.keyDown(handle, { key: 'ArrowLeft', code: 'ArrowLeft' });
      await fireEvent.keyDown(handle, { key: 'ArrowLeft', code: 'ArrowLeft' });
      await fireEvent.keyDown(handle, { key: 'ArrowLeft', code: 'ArrowLeft' });
      await fireEvent.keyDown(handle, { key: 'ArrowLeft', code: 'ArrowLeft' });
      await fireEvent.keyDown(handle, { key: 'ArrowLeft', code: 'ArrowLeft' });
      await fireEvent.keyDown(handle, { key: 'ArrowLeft', code: 'ArrowLeft' });
      await fireEvent.keyDown(handle, { key: 'ArrowLeft', code: 'ArrowLeft' });
      await fireEvent.keyDown(handle, { key: 'ArrowLeft', code: 'ArrowLeft' });
      await fireEvent.keyDown(handle, { key: 'ArrowLeft', code: 'ArrowLeft' });
      await fireEvent.keyDown(handle, { key: 'ArrowLeft', code: 'ArrowLeft' });
      await fireEvent.keyDown(handle, { key: 'ArrowLeft', code: 'ArrowLeft' });

      // trigger onKeyUp and emit change event
      await fireEvent.keyUp(handle, { key: 'ArrowLeft', code: 'ArrowLeft' });

      expect(emitted().change).toEqual([[[25, 25]]]);
    });

    test('should not change min on invalid user input and not emit change event', async () => {
      const { getByTestId, emitted } = harness;
      const maxInput = getByTestId('handle-input-slider-0');

      await fireEvent.update(maxInput, '-1');
      expect(emitted().change).toBeFalsy();

      await fireEvent.update(maxInput, '');
      expect(emitted().change).toBeFalsy();

      await fireEvent.update(maxInput, '76');
      expect(emitted().change).toBeFalsy();
    });

    test('should change min on valid user input and emit change event', async () => {
      const { getByTestId, emitted } = harness;
      const maxInput = getByTestId('handle-input-slider-0');

      await fireEvent.update(maxInput, '24');
      expect(emitted().change).toEqual([[[24, 75]]]);
    });

    test('should not change max on invalid user input and not emit change event', async () => {
      const { getByTestId, emitted } = harness;
      const maxInput = getByTestId('handle-input-slider-1');

      await fireEvent.update(maxInput, '0');
      expect(emitted().change).toBeFalsy();

      await fireEvent.update(maxInput, '');
      expect(emitted().change).toBeFalsy();

      await fireEvent.update(maxInput, '101');
      expect(emitted().change).toBeFalsy();
    });
  });

  describe('disabled slider', () => {
    let harness: RenderResult;

    beforeEach(() => {
      harness = render(VueSlider, {
        props: {
          id: 'slider',
          label: 'Slider label',
          min: 0,
          max: 100,
          disabled: true,
          range: [25, 75],
        },
      });
    });

    test('should disable slider', async () => {
      const { getByTestId, updateProps } = harness;

      await updateProps({ disabled: true, range: [25, 75] });

      expect(getByTestId('handle-input-slider-0')).toHaveAttribute('disabled');
      expect(getByTestId('handle-input-slider-1')).toHaveAttribute('disabled');
      expect(getByTestId('handle-slider-0')).toHaveAttribute('disabled');
      expect(getByTestId('handle-slider-1')).toHaveAttribute('disabled');
    });

    test('should not be able to move handles and emit change event', async () => {
      const addEventListenerSpy = jest.spyOn(document, 'addEventListener');

      const { getByTestId } = harness;
      const slider = getByTestId('slider');

      // trigger moveStart and bind events
      await fireEvent.mouseDown(slider, { clientX: 1 });

      expect(addEventListenerSpy).not.toHaveBeenCalled();
    });
  });

  describe('edge cases', () => {
    let harness: RenderResult;

    beforeEach(() => {
      harness = render(VueSlider, {
        props: {
          id: 'slider',
          label: 'Slider label',
          min: 0,
          max: 100,
          range: [25, 75],
        },
      });
    });

    test('should not be able to move handles with multi-touch on touch devices and emit change event', async () => {
      const addEventListenerSpy = jest.spyOn(document, 'addEventListener');

      const { getByTestId } = harness;
      const slider = getByTestId('slider');

      // trigger moveStart and bind events
      await fireEvent.touchStart(slider, { changedTouches: [{}, {}, {}] as any[] });

      expect(addEventListenerSpy).not.toHaveBeenCalled();
    });
  });
});
