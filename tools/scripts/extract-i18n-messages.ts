/* tslint:disable:no-console */

import * as glob from 'glob';
import * as fs   from 'fs';
import * as path from 'path';

const basePath: string = path.resolve(process.cwd());
const packageJSON: any = JSON.parse(fs.readFileSync(path.join(basePath, 'package.json')).toString());
const supportedLanguages: string[] = packageJSON.config['supported-languages'];
const defaultLanguage: string = packageJSON.config['default-language'];
const translations: any = {};
const sanitizeMessage = (message: string): string => {
  const replacements: Array<{ from: string | RegExp, to: string }> = [
    { from: '/*', to: '' },
    { from: '*/', to: '' },
    { from: /\n/g, to: '\\n' },
    { from: '[', to: '<' },
    { from: ']', to: '>' },
  ];

  replacements.forEach((replacement: { from: string | RegExp, to: string }) => {
    message = message.replace(replacement.from, replacement.to);
  });

  return message.trim();
};

const addTranslationObject = (translation: string) => {
  const idMatches: string[] = translation.match(/'\S*'/);
  const id: string = idMatches ? idMatches[0].replace(/[\\']/g, '') : '';
  const defaultMessageMatches: string[] = translation.match(/\/\*[\S\s]*\*\//);
  const defaultMessage: string = defaultMessageMatches
    ? sanitizeMessage(defaultMessageMatches[0])
    : '';

  if (defaultMessage.length > 0) {
    translations[id] = defaultMessage;
  }
};

const run = (): void => {
  glob('./src/app/**/*.vue', (err: any, files: string[]) => {
    /**
     * go through all *.vue files end extract the translation object $t('foo') -> {id: 'foo'}
     */
    files.forEach((file: string) => {
      const content = fs.readFileSync(file).toString();
      const matches: string[] = content.match(/\$t\([\S, ]*\)/g);

      if (matches) {
        matches.forEach((translation: string) => {
          addTranslationObject(translation);
        });
      }
    });

    /**
     * analyze and write languages files
     */
    supportedLanguages.forEach((lang: string) => {
      const langFilePath: string = path.join(basePath, 'i18n', `${lang}.json`);
      const langFile: string = fs.existsSync(langFilePath) ? fs.readFileSync(langFilePath).toString() : null;
      const langFileObject: any = langFile ? JSON.parse(langFile) : {};
      const newLangObject: any = lang === defaultLanguage
        ? (Object as any).assign({}, langFileObject, translations)
        : (Object as any).assign({}, translations, langFileObject);

      /**
       * sort entries
       */
      const sortedKeys: string[] = (Object as any).keys(newLangObject).sort();
      const sortedEntries: string[] = sortedKeys.map((key: string) => {
        return `"${key}": "${newLangObject[key].replace(/\n/g, '\\n')}"`;
      });

      fs.writeFileSync(path.join(basePath, 'i18n', `${lang}.json`), `{\n  ${sortedEntries.join(',\n  ')}\n}\n`);

      console.info(`wrote i18n/${lang}.json`);
    });

    console.info('i18n extraction finished');
  });
};

run();
