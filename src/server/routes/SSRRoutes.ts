import * as Express from 'express';
import { Request, Response } from 'express';
import * as fs from 'fs';
import * as URL from 'url';
import acceptLanguage from 'accept-language';
import { BundleRenderer } from 'vue-server-renderer';
import { IServerContext } from '../isomorphic';
import { Logger } from '../utils/Logger';
import { AppConfig } from '@/app/config/AppConfig';
import { isProd, resolve } from '../utils/Utils';
import { RuntimeConfig } from '../utils/RuntimeConfig';

let renderer: BundleRenderer;

const createRenderer = (bundle: string, template: string): void => {
  const LRU = nodeRequire('lru-cache');

  renderer = nodeRequire('vue-server-renderer').createBundleRenderer(bundle, {
    template,
    cache: new LRU({
      max: 1000,
      maxAge: 1000 * 60 * 15,
    }),
  });
};
const setHeaders = (res: Response): void => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('max-age', '0');
};
const vuesionConfig: any = JSON.parse(fs.readFileSync(resolve('../../.vuesion/config.json')).toString());

export const SSRRoutes = (app: Express.Application): any => {
  if (isProd) {
    const bundle: any = nodeRequire('./vue-ssr-bundle.json');
    const template: string = fs.readFileSync(resolve('../client/index.html'), 'utf-8');

    createRenderer(bundle, template);
  } else {
    const devServer: any = nodeRequire('./dev-server.js').default;

    devServer(app, (bundle: string, template: string) => {
      createRenderer(bundle, template);
    });
  }

  app.get('*', (req: Request, res: Response) => {
    setHeaders(res);

    if (!renderer) {
      return res.status(503).end('waiting for compilation... refresh in a moment.');
    }

    acceptLanguage.languages(vuesionConfig.i18n.supportedLocales);

    const startTime: number = Date.now();
    const acceptLang: string = req.headers['accept-language']
      ? req.headers['accept-language'].toString()
      : vuesionConfig.i18n.defaultLocale;
    const defaultLang: string = acceptLanguage.get(acceptLang);
    const errorHandler = (err: any) => {
      if (err && err.code === 404) {
        res.status(404);
        Logger.warn('unsupported route: %s; error: %s', req.url, JSON.stringify(err, Object.getOwnPropertyNames(err)));
        render('/not-found');
      } else if (err && err.code === 302) {
        const redirectUrl =
          URL.format({
            protocol: req.protocol,
            host: req.get('host'),
          }) + err.path;

        /**
         * transfer server state to cookies
         */
        err.cookies.forEach((cookie: any) => res.cookie(cookie.name, cookie.value));

        res.redirect(302, redirectUrl);
        res.send();
      } else {
        res.status(500);
        Logger.error(
          'error during rendering: %s; error: %s',
          req.url,
          JSON.stringify(err, Object.getOwnPropertyNames(err)),
        );
        render('/error', true);
      }
    };
    const render = (url: string, redirect: boolean = false): void => {
      const serverContext: IServerContext = {
        url,
        cookies: req.cookies,
        acceptLanguage: defaultLang,
        htmlLang: defaultLang.substr(0, 2),
        appConfig: RuntimeConfig(AppConfig, req),
        redirect,
      };

      renderer
        .renderToStream(serverContext)
        .on('error', errorHandler)
        .on('end', () => Logger.debug(`whole request: ${Date.now() - startTime}ms`))
        .pipe(res);
    };

    render(req.url);
  });
};
