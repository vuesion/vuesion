import * as Express          from 'express';
import { Request, Response } from 'express';
import * as fs               from 'fs';
import acceptLanguage        from 'accept-language';
import { BundleRenderer }    from 'vue-server-renderer';
import { IServerContext }    from '../isomorphic';
import { Logger }            from '../utils/Logger';
import { AppConfig }         from '../utils/AppConfig';
import { isProd, resolve }   from '../utils/Utils';

const setHeaders = (res: Response): void => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Strict-Transport-Security', 'max-age=10886400; includeSubDomains; preload');
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('max-age', '0');
};

let renderer: BundleRenderer;
const createRenderer = (bundle: string, template: string): BundleRenderer => {
  return nodeRequire('vue-server-renderer').createBundleRenderer(bundle, {
    template,
    cache: nodeRequire('lru-cache')({
                                      max:    1000,
                                      maxAge: 1000 * 60 * 15,
                                    }),
  });
};
const packageJson: any = JSON.parse(fs.readFileSync(resolve('../../package.json')).toString());

export const SSRRoutes = (app: Express.Application): any => {
  if (isProd) {
    const bundle: any = nodeRequire('./vue-ssr-bundle.json');
    const template: string = fs.readFileSync(resolve('../client/index.html'), 'utf-8');

    renderer = createRenderer(bundle, template);
  } else {
    const devServer: any = nodeRequire('./dev-server.js').default;

    devServer(app, (bundle: string, template: string) => {
      renderer = createRenderer(bundle, template);
    });
  }

  app.get('*', (req: Request, res: Response) => {
    setHeaders(res);

    if (!renderer) {
      return res.end('waiting for compilation... refresh in a moment.');
    }

    acceptLanguage.languages(packageJson.config['supported-locales']);

    const startTime: number = Date.now();
    const acceptLang: string = req.headers['accept-language']
                               ? req.headers['accept-language'].toString()
                               : packageJson.config['default-locale'];
    const defaultLang: string = acceptLanguage.get(acceptLang);
    const errorHandler = (err: any, renderRedirect: any) => {
      if (err && err.code === 404) {
        res.status(404);
        Logger.warn('unsupported route: %s; error: %s', req.url, JSON.stringify(err, Object.getOwnPropertyNames(err)));
        renderRedirect('/not-found', true);
      } else {
        res.status(500);
        Logger.error('error during rendering: %s; error: %s', req.url, JSON.stringify(err, Object.getOwnPropertyNames(err)));
        renderRedirect('/error', true);
      }
    };
    const render = (url: string, redirect: boolean = false): void => {
      const serverContext: IServerContext = {
        url,
        cookies:        req.cookies,
        acceptLanguage: defaultLang,
        htmlLang:       defaultLang.substr(0, 2),
        appConfig:      AppConfig,
        redirect,
      };

      renderer
      .renderToStream(serverContext)
      .on('error', (err: any) => errorHandler(err, render))
      .on('end', () => Logger.debug(`whole request: ${Date.now() - startTime}ms`))
      .pipe(res);
    };

    render(req.url);
  });
};
