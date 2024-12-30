import { describe, beforeEach, expect } from 'vitest';
import { fireEvent, render, type RenderResult } from '@testing-library/vue';
import VueCarousel from './VueCarousel.vue';
import type { ICarouselImage } from '~/app/components/data-display/VueCarousel/ICarouselImage';
import { sleep } from '~~/test/test-utils';

const images: ICarouselImage[] = [
  { alt: 'foo1', copyright: 'foo1', url: 'foo1' },
  { alt: 'foo2', copyright: 'foo2', url: 'foo2' },
  { url: 'foo3' },
];

describe('VueCarousel.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueCarousel);
  });

  test('renders component', async () => {
    const { getByTestId, queryAllByTestId } = harness;

    expect(queryAllByTestId('carousel-image')).toHaveLength(0);

    await fireEvent.mouseLeave(getByTestId('carousel'));
  });

  test('renders component with images', async () => {
    const { getByTestId, rerender } = harness;

    await rerender({ images });

    getByTestId('carousel-image');

    expect(getByTestId('carousel-copyright').textContent).toMatch('foo1');
  });

  test('should slide through all images and returns to image number one', async () => {
    const { getByTestId, rerender } = harness;

    await rerender({ images, intervalInSeconds: 0.1 });
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo1');

    await sleep(100);
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo2');
  });

  test('should not slide through all images when paused by mouseover', async () => {
    const { getByTestId, rerender } = harness;

    await fireEvent.mouseEnter(getByTestId('carousel'));

    await rerender({ images, intervalInSeconds: 0.1 });
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo1');

    await sleep(100);
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo1');

    await sleep(100);
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo1');

    await sleep(100);
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo1');
  });

  test('should react on selectedSlide change', async () => {
    const { getByTestId, rerender } = harness;

    await rerender({ images, intervalInSeconds: 0.1, selectedSlide: 2 });
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo2');
  });

  test('should paginate infinitely in both directions', async () => {
    const { getByTestId, rerender } = harness;

    await rerender({ images, intervalInSeconds: 5, showPagination: true, showIndicator: false });
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo1');

    await fireEvent.click(getByTestId('pagination-next'));
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo2');

    await fireEvent.click(getByTestId('pagination-next'));

    await fireEvent.click(getByTestId('pagination-next'));
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo1');

    await fireEvent.click(getByTestId('pagination-prev'));

    await fireEvent.click(getByTestId('pagination-prev'));
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo2');

    await fireEvent.click(getByTestId('pagination-prev'));
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo1');
  });
});
