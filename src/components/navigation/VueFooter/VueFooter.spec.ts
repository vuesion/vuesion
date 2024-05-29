import { describe, beforeEach, test, expect } from 'vitest';
import { fireEvent, render, type RenderResult } from '@testing-library/vue';
import VueFooter from './VueFooter.vue';

describe('VueFooter.vue', () => {
  let harness: RenderResult;
  let $colorMode: any;

  beforeEach(() => {
    $colorMode = {
      value: 'light',
      preference: 'light',
    };

    harness = render(VueFooter, {
      global: {
        mocks: {
          $colorMode,
        },
      },
      props: {
        slim: false,
        languages: [
          { label: 'English', value: 'en' },
          { label: 'Deutsch', value: 'de' },
        ],
        themes: [
          { label: 'Light', value: 'light' },
          { label: 'Dark', value: 'dark' },
        ],
        selectedLocale: 'en',
        selectDuration: 0,
      },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;
    const year = new Date().getFullYear();

    getByText('© ' + year + ' Johannes Werner. All rights reserved.');
  });

  test('renders component in slim mode', async () => {
    const { getByText, queryAllByText, rerender } = harness;
    const year = new Date().getFullYear();

    await rerender({ slim: true });

    getByText('© ' + year + ' Johannes Werner. All rights reserved.');
    expect(queryAllByText('Subscribe to our newsletter')).toHaveLength(0);
  });

  test('should emit local-change event', async () => {
    const { getByTestId, emitted } = harness;

    await fireEvent.click(getByTestId('custom-lang'));
    await fireEvent.click(getByTestId('en-0'));

    expect(emitted()['locale-change']).toBeTruthy();
  });

  test('should change theme', async () => {
    const { getByTestId } = harness;

    await fireEvent.click(getByTestId('custom-theme'));
    await fireEvent.click(getByTestId('dark-1'));

    expect($colorMode.preference).toBe('dark');
  });
});
