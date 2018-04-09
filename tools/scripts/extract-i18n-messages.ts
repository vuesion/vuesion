/* tslint:disable:no-console */

import * as glob                                           from 'glob';
import * as fs                                             from 'fs';
import * as path                                           from 'path';
import { getTranslationObject, getTranslationsFromString } from './Utils';

const run = (): void => {
  glob('./src/app/**/*.vue', (err: any, files: string[]) => {
    const basePath: string = path.resolve(process.cwd());
    const packageJSON: any = JSON.parse(fs.readFileSync(path.join(basePath, 'package.json')).toString());
    const supportedLocales: string[] = packageJSON.config['supported-locales'];
    const defaultLocale: string = packageJSON.config['default-locale'];
    let translations: any = {};

    /**
     * go through all *.vue files end extract the translation object $t('foo') -> {id: 'foo'}
     */
    files.forEach((file: string) => {
      const content = fs.readFileSync(file).toString();
      const matches: string[] = getTranslationsFromString(content);

      if (matches) {
        translations = { ...translations, ...getTranslationObject(matches) };
      }
    });

    /**
     * analyze and write languages files
     */
    supportedLocales.forEach((locale: string) => {
      const i18nFilePath: string = path.join(basePath, 'i18n', `${locale}.json`);
      const i18nFileContent: string = fs.existsSync(i18nFilePath) ? fs.readFileSync(i18nFilePath).toString() : null;
      const i18nFileObject: any = i18nFileContent ? JSON.parse(i18nFileContent) : {};

      (Object as any).keys(i18nFileObject).forEach((key: string) => {
        i18nFileObject[key] = i18nFileObject[key].replace(/\n/g, '\\n').replace(/"/g, '\\"');
      });

      const newI18nObject: any = locale === defaultLocale
                                 ? (Object as any).assign({}, i18nFileObject, translations)
                                 : (Object as any).assign({}, translations, i18nFileObject);

      /**
       * sort entries
       */
      const sortedKeys: string[] = (Object as any).keys(newI18nObject).sort();
      const sortedEntries: string[] = sortedKeys.map((key: string) => {
        return `"${key}": "${newI18nObject[key]}"`;
      });

      fs.writeFileSync(path.join(basePath, 'i18n', `${locale}.json`), `{\n  ${sortedEntries.join(',\n  ')}\n}\n`);

      console.info(`wrote i18n/${locale}.json`);
    });

    console.info('i18n extraction finished');
  });
};

run();
