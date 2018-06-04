import { createLocalVue, mount } from '@vue/test-utils';
import VueSlider                 from './VueSlider.vue';

const localVue = createLocalVue();

describe('VueSlider.vue', () => {

  test('renders component with multiple handles', () => {
    window.addEventListener = jest.fn();
    window.removeEventListener = jest.fn();
    const wrapper = mount(VueSlider,
                          {
                            localVue,
                            propsData: {
                              min:    0,
                              max:    100,
                              values: [0, 100],
                            },
                          });

    (wrapper as any).vm.refresh();

    expect(wrapper.findAll('button')).toHaveLength(2);
    expect(window.addEventListener).toHaveBeenCalled();

    wrapper.vm.$destroy();
    expect(window.removeEventListener).toHaveBeenCalled();
  });

  test('renders component with single handles', () => {
    const wrapper = mount(VueSlider,
                          {
                            localVue,
                            propsData: {
                              min:    0,
                              max:    100,
                              values: [50],
                            },
                          });

    expect(wrapper.findAll('button')).toHaveLength(1);
  });

  test('renders disable slider', () => {
    document.addEventListener = jest.fn();
    const wrapper = mount(VueSlider,
                          {
                            localVue,
                            propsData: {
                              min:      0,
                              max:      100,
                              values:   [50],
                              disabled: true,
                            },
                          });

    expect(wrapper.findAll(`.disabled`)).toHaveLength(1);

    (wrapper as any).vm.moveStart();

    expect(document.addEventListener).not.toHaveBeenCalled();
  });

  test('should add handlers on moveStart', () => {
    document.addEventListener = jest.fn();
    const wrapper = mount(VueSlider,
                          {
                            localVue,
                            propsData: {
                              min:    0,
                              max:    100,
                              values: [50],
                            },
                          });

    (wrapper as any).vm.moveStart({ changedTouches: [1, 2] }, 0);

    expect(document.addEventListener).toHaveBeenCalledTimes(0);
    expect((wrapper as any).vm.currentSlider).toBe(null);

    (wrapper as any).vm.moveStart({}, 0);

    expect(document.addEventListener).toHaveBeenCalledTimes(5);
    expect((wrapper as any).vm.currentSlider).toBe(0);
  });

  test('should remove handlers on moveEnd', () => {
    document.removeEventListener = jest.fn();
    const wrapper = mount(VueSlider,
                          {
                            localVue,
                            propsData: {
                              min:    0,
                              max:    100,
                              values: [50],
                            },
                          });

    (wrapper as any).vm.currentSlider = 1;
    (wrapper as any).vm.moveEnd(null, 0);

    expect(document.removeEventListener).toHaveBeenCalledTimes(5);
    expect((wrapper as any).vm.currentSlider).toBe(null);
    expect(wrapper.emitted('change')).toBeTruthy();
  });

  test('should do nothing on moveEnd if currentSlider is null', () => {
    document.removeEventListener = jest.fn();
    const wrapper = mount(VueSlider,
                          {
                            localVue,
                            propsData: {
                              min:    0,
                              max:    100,
                              values: [50],
                            },
                          });

    (wrapper as any).vm.moveEnd(null, 0);

    expect(document.removeEventListener).toHaveBeenCalledTimes(0);
    expect((wrapper as any).vm.currentSlider).toBe(null);
    expect(wrapper.emitted('change')).toBeFalsy();
  });

  test('should add active class to handle', () => {
    document.removeEventListener = jest.fn();
    const wrapper = mount(VueSlider,
                          {
                            localVue,
                            propsData: {
                              min:    0,
                              max:    100,
                              values: [50],
                            },
                          });

    (wrapper as any).vm.currentSlider = 1;

    expect((wrapper as any).vm.handleCssClasses()).toEqual(['handle']);
    expect((wrapper as any).vm.handleCssClasses(1)).toEqual(['handle', 'active']);
  });

  test('should move left handle with multi handles', () => {
    const wrapper = mount(VueSlider,
                          {
                            localVue,
                            propsData: {
                              min:    0,
                              max:    100,
                              values: [50, 100],
                            },
                          });

    (wrapper as any).vm.currentSlider = 0;
    (wrapper as any).vm.sliderBox = {
      left:  0,
      width: 100,
    };

    (wrapper as any).vm.moving({ clientX: 50 });
    expect((wrapper as any).vm.currentMin).toBe(50);
    expect((wrapper as any).vm.currentMax).toBe(100);

    (wrapper as any).vm.moving({ changedTouches: [{ clientX: 50 }] });
    expect((wrapper as any).vm.currentMin).toBe(50);
    expect((wrapper as any).vm.currentMax).toBe(100);

    (wrapper as any).vm.moving({ clientX: -50 });
    expect((wrapper as any).vm.currentMin).toBe(0);
    expect((wrapper as any).vm.currentMax).toBe(100);

    (wrapper as any).vm.moving({ clientX: 150 });
    expect((wrapper as any).vm.currentMin).toBe(99);
    expect((wrapper as any).vm.currentMax).toBe(100);
  });

  test('should move left handle with multi handles', () => {
    const wrapper = mount(VueSlider,
                          {
                            localVue,
                            propsData: {
                              min:    0,
                              max:    100,
                              values: [50],
                            },
                          });

    (wrapper as any).vm.currentSlider = 0;
    (wrapper as any).vm.sliderBox = {
      left:  0,
      width: 100,
    };

    (wrapper as any).vm.moving({ clientX: 50 });
    expect((wrapper as any).vm.currentMin).toBe(50);
    expect((wrapper as any).vm.currentMax).toBe(100);

    (wrapper as any).vm.moving({ changedTouches: [{ clientX: 50 }] });
    expect((wrapper as any).vm.currentMin).toBe(50);
    expect((wrapper as any).vm.currentMax).toBe(100);

    (wrapper as any).vm.moving({ clientX: -50 });
    expect((wrapper as any).vm.currentMin).toBe(0);
    expect((wrapper as any).vm.currentMax).toBe(100);

    (wrapper as any).vm.moving({ clientX: 150 });
    expect((wrapper as any).vm.currentMin).toBe(100);
    expect((wrapper as any).vm.currentMax).toBe(100);
  });

  test('should move right handle', () => {
    const wrapper = mount(VueSlider,
                          {
                            localVue,
                            propsData: {
                              min:    0,
                              max:    100,
                              values: [50, 100],
                            },
                          });

    (wrapper as any).vm.currentSlider = 1;
    (wrapper as any).vm.sliderBox = {
      left:  0,
      width: 100,
    };

    (wrapper as any).vm.moving({ clientX: 50 });
    expect((wrapper as any).vm.currentMin).toBe(50);
    expect((wrapper as any).vm.currentMax).toBe(51);

    (wrapper as any).vm.moving({ clientX: 150 });
    expect((wrapper as any).vm.currentMin).toBe(50);
    expect((wrapper as any).vm.currentMax).toBe(100);

    (wrapper as any).vm.moving({ clientX: 30 });
    expect((wrapper as any).vm.currentMin).toBe(50);
    expect((wrapper as any).vm.currentMax).toBe(51);
  });

  test('should return closest handle with multi range', () => {
    const wrapper = mount(VueSlider,
                          {
                            localVue,
                            propsData: {
                              min:    0,
                              max:    100,
                              values: [0, 100],
                            },
                          });

    expect((wrapper as any).vm.getClosestHandle(25)).toBe(0);
    expect((wrapper as any).vm.getClosestHandle(75)).toBe(1);
    expect((wrapper as any).vm.getClosestHandle(50)).toBe(1);
  });

  test('should return closest handle with single range', () => {
    const wrapper = mount(VueSlider,
                          {
                            localVue,
                            propsData: {
                              min:    0,
                              max:    100,
                              values: [50],
                            },
                          });

    expect((wrapper as any).vm.getClosestHandle(25)).toBe(0);
    expect((wrapper as any).vm.getClosestHandle(75)).toBe(0);
    expect((wrapper as any).vm.getClosestHandle(50)).toBe(0);
  });

  test('should handle key events on left handle', () => {
    const wrapper = mount(VueSlider,
                          {
                            localVue,
                            propsData: {
                              min:    0,
                              max:    100,
                              values: [10, 100],
                            },
                          }) as any;

    wrapper.vm.currentSlider = 0;
    wrapper.vm.onKeyDown({ code: 'Enter' });

    wrapper.vm.onKeyDown({ code: 'ArrowLeft' });
    expect(wrapper.vm.currentMin).toBe(5);

    wrapper.vm.onKeyDown({ code: 'ArrowLeft' });
    expect(wrapper.vm.currentMin).toBe(0);

    wrapper.vm.onKeyDown({ code: 'ArrowLeft' });
    expect(wrapper.vm.currentMin).toBe(0);

    wrapper.vm.currentMin = 80;
    wrapper.vm.currentMax = 90;

    wrapper.vm.onKeyDown({ code: 'ArrowRight' });
    expect(wrapper.vm.currentMin).toBe(85);

    wrapper.vm.onKeyDown({ code: 'ArrowRight' });
    expect(wrapper.vm.currentMin).toBe(89);
  });

  test('should handle key events on right handle', () => {
    const wrapper = mount(VueSlider,
                          {
                            localVue,
                            propsData: {
                              min:    0,
                              max:    100,
                              values: [0, 90],
                            },
                          }) as any;

    wrapper.vm.currentSlider = 1;

    wrapper.vm.onKeyDown({ code: 'ArrowRight' });
    expect(wrapper.vm.currentMax).toBe(95);

    wrapper.vm.onKeyDown({ code: 'ArrowRight' });
    expect(wrapper.vm.currentMax).toBe(100);

    wrapper.vm.onKeyDown({ code: 'ArrowRight' });
    expect(wrapper.vm.currentMax).toBe(100);

    wrapper.vm.currentMin = 80;
    wrapper.vm.currentMax = 90;

    wrapper.vm.onKeyDown({ code: 'ArrowLeft' });
    expect(wrapper.vm.currentMax).toBe(85);

    wrapper.vm.onKeyDown({ code: 'ArrowLeft' });
    expect(wrapper.vm.currentMax).toBe(81);
  });

  test('should handle key events on left handle with single range', () => {
    const wrapper = mount(VueSlider,
                          {
                            localVue,
                            propsData: {
                              min:    0,
                              max:    100,
                              values: [10],
                            },
                          }) as any;

    wrapper.vm.currentSlider = 0;

    wrapper.vm.onKeyDown({ code: 'ArrowLeft' });
    expect(wrapper.vm.currentMin).toBe(5);

    wrapper.vm.onKeyDown({ code: 'ArrowLeft' });
    expect(wrapper.vm.currentMin).toBe(0);

    wrapper.vm.onKeyDown({ code: 'ArrowLeft' });
    expect(wrapper.vm.currentMin).toBe(0);

    wrapper.vm.currentMin = 90;

    wrapper.vm.onKeyDown({ code: 'ArrowRight' });
    expect(wrapper.vm.currentMin).toBe(95);

    wrapper.vm.onKeyDown({ code: 'ArrowRight' });
    expect(wrapper.vm.currentMin).toBe(100);

    wrapper.vm.onKeyDown({ code: 'ArrowRight' });
    expect(wrapper.vm.currentMin).toBe(100);
  });

  test('should  emit on key up', () => {
    const wrapper = mount(VueSlider,
                          {
                            localVue,
                            propsData: {
                              min:    0,
                              max:    100,
                              values: [10, 80],
                            },
                          }) as any;

    wrapper.vm.onKeyUp();

    expect(wrapper.emitted('change')).toBeTruthy();
    expect(wrapper.emitted('change')[0][0]).toEqual({ values: [ 10, 80 ] });
  });

});
