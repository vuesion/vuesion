import Vue from 'vue';
import { fireEvent, render, RenderResult } from '@testing-library/vue';
import VueTabGroup from './VueTabGroup.vue';
import VueTabItem from './VueTabItem.vue';

Vue.component('VueTabItem', VueTabItem);

describe('VueTabGroup.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueTabGroup, {
      slots: {
        default: [
          '<vue-tab-item name="Tab 1">Tab Content 1</vue-tab-item>',
          '<vue-tab-item name="Tab 2" is-active>Tab Content 2</vue-tab-item>',
          '<vue-tab-item name="Tab 3">Tab Content 3</vue-tab-item>',
        ],
      },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('Tab 1');
    getByText('Tab 2');
    getByText('Tab 3');
    getByText('Tab Content 2');
  });

  test('should change tab', async () => {
    const { getByText } = harness;

    await fireEvent.click(getByText('Tab 1'));

    getByText('Tab 1');
    getByText('Tab 2');
    getByText('Tab 3');
    getByText('Tab Content 1');
  });
});
