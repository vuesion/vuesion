import { createLocalVue, mount } from '@vue/test-utils';
import VueTruncate from './VueTruncate.vue';
import { i18n } from '../../plugins/i18n/i18n';

const localVue = createLocalVue();

describe('VueTruncate.vue', () => {
  test('renders component and truncate text', () => {
    const wrapper = mount<any>(VueTruncate, {
      i18n,
      localVue,
      slots: {
        default: `
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et<br/>
  dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet<br/>
  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,<br/>
  consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,<br/>
  sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,<br/>
  no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
      },
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.vm.isTruncated).toBeTruthy();
  });

  test('renders component and not truncate text', () => {
    const getComputedStyle = window.getComputedStyle;

    (window as any).getComputedStyle = () => {
      return {
        'line-height': 0,
      };
    };

    const wrapper = mount<any>(VueTruncate, {
      i18n,
      localVue,
      slots: {
        default: `
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et<br/>
  dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet<br/>
  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,<br/>
  consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,<br/>
  sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,<br/>
  no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
      },
      propsData: {
        lines: 1,
      },
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.vm.isTruncated).toBeFalsy();

    (window as any).getComputedStyle = getComputedStyle;
  });

  test('truncate text and show whole text and collapse text', (done) => {
    const wrapper = mount<any>(VueTruncate, {
      i18n,
      localVue,
      slots: {
        default: `
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et<br/>
  dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet<br/>
  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,<br/>
  consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,<br/>
  sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,<br/>
  no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
      },
      propsData: {
        duration: 0,
      },
    });

    wrapper.vm.offsetHeight = 150;
    wrapper.vm.collapsedHeight = 25.6 * 3;
    wrapper.vm.lineHeight = 25.6;
    wrapper.vm.isTruncated = true;
    wrapper.vm.showMoreButton = true;

    wrapper.vm.showMore();

    setTimeout(() => {
      expect(wrapper.vm.showMoreButton).toBeFalsy();

      wrapper.vm.showLess();

      setTimeout(() => {
        expect(wrapper.vm.showMoreButton).toBeTruthy();
        done();
      }, 100);
    }, 100);
  });
});
