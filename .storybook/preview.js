import 'assets/_design-system.scss';
import 'assets/reset.scss';
import 'assets/global.scss';
import 'assets/typography.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: { disable: true },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themeSwitcher: {
    themes: [
      { label: 'Light Theme', value: 'light' },
      { label: 'Dark Theme', value: 'dark' },
    ],
  },
  viewport: {
    viewports: {
      phone: {
        name: 'Phone',
        styles: {
          width: '360px',
          height: '740px',
        },
      },
      tabletPortrait: {
        name: 'Tablet Portrait',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      tabletLandscape: {
        name: 'Tablet Landscape',
        styles: {
          width: '1024px',
          height: '768px',
        },
      },
      smallDesktop: {
        name: 'Small Desktop',
        styles: {
          width: '1280px',
          height: '800px',
        },
      },
      largeDesktop: {
        name: 'Large Desktop',
        styles: {
          width: '1440px',
          height: '900px',
        },
      },
    },
  },
};
