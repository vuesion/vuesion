import { fireEvent, render, RenderResult } from '@testing-library/vue';
import { i18n } from '@/test/i18n';
import { ICarouselImage } from '@/components/data-display/VueCarousel/ICarouselImage';
import { sleep } from '@/test/test-utils';
import VueCarousel from './VueCarousel.vue';

const images: ICarouselImage[] = [
  { alt: 'foo1', copyright: 'foo1', url: 'foo1' },
  { alt: 'foo2', copyright: 'foo2', url: 'foo1' },
  { alt: 'foo3', copyright: 'foo3', url: 'foo2' },
];

describe('VueCarousel.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueCarousel, {
      i18n,
    });
  });

  test('renders component', () => {
    const { queryAllByTestId } = harness;

    expect(queryAllByTestId('carousel-image')).toHaveLength(0);
  });

  test('renders component with images', async () => {
    const { getByTestId, updateProps } = harness;

    await updateProps({ images });

    getByTestId('carousel-image');

    expect(getByTestId('carousel-copyright').textContent).toMatch('foo1');
  });

  test('should slide through all images and returns to image number one', async () => {
    const { getByTestId, updateProps } = harness;

    await updateProps({ images, intervalInSeconds: 0.1 });
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo1');

    await sleep(100);
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo2');

    await sleep(100);
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo3');

    await sleep(100);
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo1');
  });

  test('should not slide through all images when paused by mouseover', async () => {
    const { getByTestId, updateProps } = harness;

    await fireEvent.mouseEnter(getByTestId('carousel'));

    await updateProps({ images, intervalInSeconds: 0.1 });
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo1');

    await sleep(100);
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo1');

    await sleep(100);
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo1');

    await sleep(100);
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo1');
  });

  test('should react on selectedSlide change', async () => {
    const { getByTestId, updateProps } = harness;

    await updateProps({ images, intervalInSeconds: 0.1, selectedSlide: 2 });
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo2');
  });

  test('should paginate infinitely in both directions', async () => {
    const { getByTestId, updateProps } = harness;

    await updateProps({ images, intervalInSeconds: 5, showPagination: true });
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo1');

    await fireEvent.click(getByTestId('pagination-next'));
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo2');

    await fireEvent.click(getByTestId('pagination-next'));
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo3');

    await fireEvent.click(getByTestId('pagination-next'));
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo1');

    await fireEvent.click(getByTestId('pagination-prev'));
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo3');

    await fireEvent.click(getByTestId('pagination-prev'));
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo2');

    await fireEvent.click(getByTestId('pagination-prev'));
    expect(getByTestId('carousel-copyright').textContent).toMatch('foo1');
  });
});
