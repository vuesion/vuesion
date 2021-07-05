import { render, RenderResult } from '@testing-library/vue';
import { badgeStatuses } from '@/components/prop-validators';
import VueBadge from './VueBadge.vue';

describe('VueBadge.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueBadge, {
      slots: {
        default: 'VueBadge',
      },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('VueBadge');
  });

  test('renders badge statuses', async () => {
    for (let i = 0; i < badgeStatuses.length; i++) {
      const status = badgeStatuses[i];

      const { getByText, updateProps } = harness;

      await updateProps({ status });

      const el = getByText('VueBadge');

      expect(el.classList.contains(status)).toBeTruthy();
    }
  });
});
