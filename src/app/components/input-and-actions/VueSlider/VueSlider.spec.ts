import { describe, beforeEach, test, expect, vi } from 'vitest';
import { fireEvent, render, type RenderResult } from '@testing-library/vue';
import VueSlider from './VueSlider.vue';
import { sleep, triggerDocument } from '~/test/test-utils';

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
          modelValue: [50],
        },
      });
    });

    test('should render single slider', () => {
      const { getByTestId, queryAllByTestId } = harness;

      getByTestId('handle-slider-1');

      expect(queryAllByTestId('handle-slider-0')).toHaveLength(0);
    });

    test('should move single handle to 0 and emit update:modelValue event', async () => {
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

      expect(emitted()['update:modelValue']).toEqual([[[0]]]);
    });

    test('should move single handle to 100 and emit update:modelValue event', async () => {
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

      expect(emitted()['update:modelValue']).toEqual([[[100]]]);
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
          modelValue: [25, 75],
        },
      });
    });

    test('should render range slider', () => {
      const { getByTestId } = harness;

      getByTestId('handle-slider-0');
      getByTestId('handle-slider-1');
    });

    test('should move left handle to 75 and emit update:modelValue event', async () => {
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

      expect(emitted()['update:modelValue']).toEqual([[[75, 75]]]);
    });

    test('should move right handle to 25 and emit update:modelValue event', async () => {
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

      expect(emitted()['update:modelValue']).toEqual([[[25, 25]]]);
    });

    test('should move left handle to the right on keyboard input and emit update:modelValue event', async () => {
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

      // trigger onKeyUp and emit update:modelValue event
      await fireEvent.keyUp(handle, { key: 'ArrowRight', code: 'ArrowRight' });
      await fireEvent.focusOut(handle);

      expect(emitted()['update:modelValue']).toEqual([[[75, 75]]]);
    });

    test('should move left handle to the left on keyboard input and emit update:modelValue event', async () => {
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

      // trigger onKeyUp and emit update:modelValue event
      await fireEvent.keyUp(handle, { key: 'ArrowLeft', code: 'ArrowLeft' });
      await fireEvent.focusOut(handle);

      expect(emitted()['update:modelValue']).toEqual([[[0, 75]]]);
    });

    test('should move right handle to the right on keyboard input and emit update:modelValue event', async () => {
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

      // trigger onKeyUp and emit update:modelValue event
      await fireEvent.keyUp(handle, { key: 'ArrowRight', code: 'ArrowRight' });
      await fireEvent.focusOut(handle);

      expect(emitted()['update:modelValue']).toEqual([[[25, 100]]]);
    });

    test('should move right handle to the left on keyboard input and emit update:modelValue event', async () => {
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

      // trigger onKeyUp and emit update:modelValue event
      await fireEvent.keyUp(handle, { key: 'ArrowLeft', code: 'ArrowLeft' });
      await fireEvent.focusOut(handle);

      expect(emitted()['update:modelValue']).toEqual([[[25, 25]]]);
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
          modelValue: [25, 75],
        },
      });
    });

    test('should not be able to move handles and emit update:modelValue event', async () => {
      const addEventListenerSpy = vi.spyOn(document, 'addEventListener');

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
          modelValue: [25, 75],
        },
      });
    });

    test('should not be able to move handles with multi-touch on touch devices and emit update:modelValue event', async () => {
      const addEventListenerSpy = vi.spyOn(document, 'addEventListener');

      const { getByTestId } = harness;
      const slider = getByTestId('slider');

      // trigger moveStart and bind events
      await fireEvent.touchStart(slider, { changedTouches: [{}, {}, {}] as any[] });

      expect(addEventListenerSpy).not.toHaveBeenCalled();
    });
  });
});
