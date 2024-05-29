/* eslint-disable no-console */

import * as fs from 'fs';
import * as path from 'path';
import { globSync } from 'glob';
import { ensureDirectoryExists, getTranslationObject, getTranslationsFromString } from './utils';

const run = (sort = true, update = true, defaultTranslation = true): void => {
  const files = globSync('./src/**/*.*');

  const basePath: string = path.resolve(process.cwd());
  const locales: Array<any> = [
    { code: 'en-US', iso: 'en-US', file: 'en-US.json' },
    { code: 'de-DE', iso: 'de-DE', file: 'de-DE.json' },
  ];
  const defaultLocale = 'en-US';
  let translations: any = {};

  console.log('Scanning files in: ./src/**/*.*');

  console.log('');

  /**
   * go through all files and extract the translation object t('foo') -> {id: 'foo'}
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
  locales.forEach((locale: any) => {
    try {
      const i18nFilePath: string = path.join(basePath, 'i18n', `${locale.file}`);
      const i18nFileContent: string | null = fs.existsSync(i18nFilePath)
        ? fs.readFileSync(i18nFilePath).toString()
        : null;
      const i18nFileObject: any = i18nFileContent ? JSON.parse(i18nFileContent) : {};
      const isDefaultI18nFile = locale.code === defaultLocale;

      (Object as any).keys(i18nFileObject).forEach((key: string) => {
        i18nFileObject[key] = i18nFileObject[key]
          ? i18nFileObject[key].replace(/\n/g, '\\n').replace(/"/g, '\\"')
          : null;
      });

      if (isDefaultI18nFile === false && defaultTranslation === false) {
        Object.keys(translations).forEach((key) => (translations[key] = null));
      }

      let newI18nObject: any = (Object as any).assign({}, translations, i18nFileObject);

      if (isDefaultI18nFile && update) {
        newI18nObject = (Object as any).assign({}, i18nFileObject, translations);
      }

      newI18nObject = (Object as any).assign({}, i18nFileObject, newI18nObject);

      let translationKeys: string[] = (Object as any).keys(newI18nObject);

      if (sort) {
        translationKeys = translationKeys.sort();
      }

      const entries: string[] = translationKeys.map((key: string) => {
        if (newI18nObject[key]) {
          return `"${key}": "${newI18nObject[key]}"`;
        }

        return `"${key}": null`;
      });

      ensureDirectoryExists(i18nFilePath);

      fs.writeFileSync(i18nFilePath, `{\n  ${entries.join(',\n  ')}\n}\n`);

      console.log(`Updated locale ${locale.code}: ./i18n/${locale.file}.`);
    } catch (e) {
      console.error(`Error in ./i18n/${locale.file}.: ${e}`);
    }
  });

  console.log('');

  console.log('I18n extraction finished.');
};
run();
