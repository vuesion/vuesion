import { createLocalVue, mount } from '@vue/test-utils';
import VueCarousel from './VueCarousel.vue';

const localVue = createLocalVue();
const images: any[] = [
  { alt: 'foo', copyright: 'foo', url: 'foo' },
  { alt: 'foo', copyright: 'foo', url: 'foo' },
  { alt: 'foo', copyright: 'foo', url: 'foo' },
];

describe('VueCarousel.vue', () => {
  test('renders component', () => {
    const wrapper = mount<any>(VueCarousel, {
      localVue,
    });

    expect(wrapper.isVueInstance()).toBe(true);

    wrapper.destroy();
  });

  test('renders component with images', (done) => {
    const wrapper = mount<any>(VueCarousel, {
      localVue,
      propsData: {
        images,
      },
    });

    setTimeout(() => {
      expect(wrapper.findAll('.image')).toHaveLength(1);
      done();
    }, 100);
  });

  test('should change slide', () => {
    const wrapper = mount<any>(VueCarousel, {
      localVue,
      propsData: {
        images,
        intervalDuration: 10,
      },
    });

    expect(wrapper.vm.currentSlide).toBe(0);

    wrapper.vm.changeSlide();
    expect(wrapper.vm.currentSlide).toBe(1);

    wrapper.vm.changeSlide();
    expect(wrapper.vm.currentSlide).toBe(2);

    wrapper.vm.changeSlide();
    expect(wrapper.vm.currentSlide).toBe(0);

    wrapper.vm.pause = true;
    wrapper.vm.changeSlide();
    expect(wrapper.vm.currentSlide).toBe(0);

    wrapper.vm.pause = false;
    wrapper.vm.changeSlide();
    expect(wrapper.vm.currentSlide).toBe(1);
  });
});
