import { describe, beforeEach, test, expect } from 'vitest';
import { render, type RenderResult } from '@testing-library/vue';
import VuesionPlusSection from './VuesionPlusSection.vue';

describe('VuesionPlusSection.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VuesionPlusSection, {});
  });

  test('renders component', () => {
    const { getByText, queryAllByText } = harness;

    getByText('VuesionPlusSection.title');
    expect(queryAllByText('VuesionPlusSection.cta.BuyLicense')).toHaveLength(4);
    expect(queryAllByText('VuesionPlusSection.cta.Demo')).toHaveLength(4);
    expect(queryAllByText('VuesionPlusSection.cta.BuyCommercialLicense')).toHaveLength(1);
    expect(queryAllByText('VuesionPlusSection.cta.BuyPersonalLicense')).toHaveLength(1);

    getByText('VuesionPlusSection.datatable.title.');
    getByText('VuesionPlusSection.datatable.description');
    getByText('VuesionPlusSection.dateComponents.title.');
    getByText('VuesionPlusSection.dateComponents.description');
    getByText('VuesionPlusSection.currencyInput.title.');
    getByText('VuesionPlusSection.currencyInput.description');
    getByText('VuesionPlusSection.autocomplete.title.');
    getByText('VuesionPlusSection.autocomplete.description');
  });
});
