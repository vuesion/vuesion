import * as Express from 'express';
import { serve }    from '../utils/Utils';

export const PWARoutes = (app: Express.Application) => {
  app.use('/browserconfig.xml', serve('../assets/pwa/browserconfig.xml'));
  app.use('/sw.js', serve('../client/sw.js'));
  app.use('/manifest.json', serve('../assets/pwa/manifest.json'));
  app.use('/robots.txt', serve('../assets/pwa/robots.txt'));
  app.use('/sitemap.xml', serve('../assets/pwa/sitemap.xml'));
};
