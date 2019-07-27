import { createLocalVue, mount } from '@vue/test-utils';
import VueStarRating from './VueStarRating.vue';

const localVue = createLocalVue();

describe('VueStarRating.vue', () => {
  test('renders component', () => {
    const wrapper = mount<any>(VueStarRating, {
      localVue,
    });
    expect(wrapper.findAll(`.star`)).toHaveLength(5);
    expect(wrapper.findAll(`.numberDisplay`)).toHaveLength(1);
  });

  test('renders component with max num stars', () => {
    const wrapper = mount<any>(VueStarRating, {
      localVue,
      propsData: {
        maxNumStars: 10,
      },
    });
    expect(wrapper.findAll(`.star`)).toHaveLength(10);
    expect(wrapper.findAll(`.numberDisplay`)).toHaveLength(1);
  });

  test('renders component with max num stars', () => {
    const wrapper = mount<any>(VueStarRating, {
      localVue,
      propsData: {
        maxNumStars: 10,
        selectedNumStars: 5,
      },
    });
    expect(wrapper.findAll(`.star`)).toHaveLength(10);
    expect(wrapper.findAll(`.active`)).toHaveLength(5);
    expect(wrapper.findAll(`.numberDisplay`)).toHaveLength(1);

    const starComponents = wrapper.findAll(`.star`);
    for (let i = 9; i >= 5; i--) {
      expect(starComponents.at(i).attributes('class')).toEqual('star');
    }

    for (let i = 4; i >= 0; i--) {
      expect(starComponents.at(i).attributes('class')).toEqual('star active');
    }
  });

  test('mousing over a star adds active to that star & all prior stars', () => {
    const wrapper = mount<any>(VueStarRating, {
      localVue,
    });
    const starComponents = wrapper.findAll(`.star`);

    for (let i = 4; i >= 0; i--) {
      expect(starComponents.at(i).attributes('class')).toEqual('star');
    }

    // 5/5 stars
    starComponents.at(4).trigger('mouseenter');

    for (let i = 4; i >= 0; i--) {
      expect(starComponents.at(i).attributes('class')).toEqual('star active');
    }

    // 3/5 stars
    starComponents.at(2).trigger('mouseenter');

    for (let i = 4; i >= 3; i--) {
      expect(starComponents.at(i).attributes('class')).toEqual('star');
    }

    for (let i = 2; i >= 0; i--) {
      expect(starComponents.at(i).attributes('class')).toEqual('star active');
    }

    // 1/5 stars
    starComponents.at(0).trigger('mouseenter');

    for (let i = 4; i >= 1; i--) {
      expect(starComponents.at(i).attributes('class')).toEqual('star');
    }
    expect(starComponents.at(0).attributes('class')).toEqual('star active');
  });

  test('mousing over a star updates display number', () => {
    const wrapper = mount<any>(VueStarRating, {
      localVue,
    });
    const starComponents = wrapper.findAll(`.star`);

    // 5/5 stars
    starComponents.at(4).trigger('mouseenter');
    expect(
      wrapper
        .find('.numberDisplay')
        .find('span')
        .text(),
    ).toEqual('5');

    // 2/5 stars
    starComponents.at(1).trigger('mouseenter');
    expect(
      wrapper
        .find('.numberDisplay')
        .find('span')
        .text(),
    ).toEqual('2');
  });

  test('mouse leaving a star resets active stars to selected number', () => {
    const wrapper = mount<any>(VueStarRating, {
      localVue,
      propsData: {
        selectedNumStars: 2,
      },
    });
    const starComponents = wrapper.findAll(`.star`);

    // 5/5 stars mouseenter
    starComponents.at(4).trigger('mouseenter');

    for (let i = 4; i >= 0; i--) {
      expect(starComponents.at(i).attributes('class')).toEqual('star active');
    }

    // 5/5 stars mouseleave
    starComponents.at(4).trigger('mouseleave');

    for (let i = 4; i >= 2; i--) {
      expect(starComponents.at(i).attributes('class')).toEqual('star');
    }

    for (let i = 1; i >= 0; i--) {
      expect(starComponents.at(i).attributes('class')).toEqual('star active');
    }
  });

  test('mouse leaving a star updates display number', () => {
    const wrapper = mount<any>(VueStarRating, {
      localVue,
      propsData: {
        selectedNumStars: 3,
      },
    });
    const starComponents = wrapper.findAll(`.star`);

    // 5/5 star mouseenter
    starComponents.at(4).trigger('mouseenter');
    expect(
      wrapper
        .find('.numberDisplay')
        .find('span')
        .text(),
    ).toEqual('5');

    // 5/5 star mouseleave
    starComponents.at(4).trigger('mouseleave');
    expect(
      wrapper
        .find('.numberDisplay')
        .find('span')
        .text(),
    ).toEqual('3');
  });

  test('star click sets selected num stars', () => {
    const wrapper = mount<any>(VueStarRating, {
      localVue,
    });
    const starComponents = wrapper.findAll(`.star`);

    starComponents.at(3).trigger('click');
    expect(wrapper.vm.numSelectedStars).toEqual(4);
  });

  test('prop selectedNumStars is bigger than maxNumStars, take max as selection', () => {
    const wrapper = mount<any>(VueStarRating, {
      localVue,
      propsData: {
        maxNumStars: 5,
        selectedNumStars: 10,
      },
    });

    expect(wrapper.vm.numStarDisplay).toEqual(5);
    expect(wrapper.vm.numSelectedStars).toEqual(5);
  });

  test('prop selectedNumStars is negative, take zero as selection', () => {
    const wrapper = mount<any>(VueStarRating, {
      localVue,
      propsData: {
        maxNumStars: 5,
        selectedNumStars: -1,
      },
    });
    expect(wrapper.vm.numStarDisplay).toEqual(0);
    expect(wrapper.vm.numSelectedStars).toEqual(0);
  });
});
