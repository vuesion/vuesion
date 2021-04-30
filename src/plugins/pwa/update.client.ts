import { Context } from '@nuxt/types';

export default async (_: Context) => {
  const workbox = await window.$workbox;

  if (!workbox) {
    console.debug("Workbox couldn't be loaded."); // eslint-disable-line
    return;
  }

  workbox.addEventListener('installed', (event: any) => {
    console.log(event.isUpdate); // eslint-disable-line

    if (event.isUpdate === true) {
      console.debug('There is an update for the PWA, reloading...'); // eslint-disable-line

      window.location.reload();

      return;
    }

    console.debug('The PWA is on the latest version.'); // eslint-disable-line
  });
};
