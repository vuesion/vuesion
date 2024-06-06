import { beforeEach, test } from 'vitest';
import { fireEvent, render, type RenderResult } from '@testing-library/vue';
import VueTabGroup from './VueTabGroup.vue';
import VueTabItem from './VueTabItem.vue';

describe('VueTabGroup.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueTabGroup, {
      global: {
        stubs: {
          'vue-tab-item': VueTabItem,
        },
      },
      slots: {
        default: [
          '<vue-tab-item name="Tab 1" icon="cog" badge-content="badge-1">Tab Content 1</vue-tab-item>',
          '<vue-tab-item name="Tab 2" is-active>Tab Content 2</vue-tab-item>',
          '<vue-tab-item name="Tab 3">Tab Content 3</vue-tab-item>',
          // this should not show up because it is a duplicate
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
    getByText('badge-1');
  });

  test('should change tab with clicking', async () => {
    const { getByText } = harness;

    await fireEvent.click(getByText('Tab 1'));

    getByText('Tab 1');
    getByText('Tab 2');
    getByText('Tab 3');
    getByText('Tab Content 1');
  });

  test('should change tab with keyboard', async () => {
    const { getByText } = harness;

    await fireEvent.keyDown(getByText('Tab 1'), { key: 'Enter', code: 'Enter', charCode: 13 });

    getByText('Tab 1');
    getByText('Tab 2');
    getByText('Tab 3');
    getByText('Tab Content 1');
  });
});
