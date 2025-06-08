import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: true,
  theme: create({
    base: 'dark',
    brandTitle: 'Vuesion',
    brandUrl: 'https://vuesion.herokuapp.com',
    brandImage: '/logo.png',
    brandTarget: '_blank',
  }),
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
    viewport: { hidden: false },
  },
});
