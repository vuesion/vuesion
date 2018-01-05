import * as glob from 'glob';
import * as fs from 'fs';
import * as path from 'path';

const basePath: string = path.resolve(process.cwd());

const supportedLanguages: string[] = JSON.parse(fs.readFileSync(path.join(basePath, 'package.json')).toString()).config['supported-languages'] as string[];

const translations: any = {};

const addTranslationObject = (translation: string) => {
  const id: string = translation.match(/'\S*'/)[0].replace(/[\\']/g, '');

  translations[id] = '';
};

const run = (): void => {
  glob('./src/app/**/*.vue', (err: any, files: string[]) => {
    /**
     * go through all *.vue files end extract the translation object $t('foo') -> {id: 'foo'}
     */
    files.forEach((file: string) => {
      const content = fs.readFileSync(file).toString();
      const matches: string[] = content.match(/\$t\S*\)/g);

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
      const newLangObject: any = (Object as any).assign({}, translations, langFileObject);

      /**
       * sort entries
       */
      const sortedKeys: string[] = (Object as any).keys(newLangObject).sort();
      const sortedEntries: string[] = sortedKeys.map((key: string) => {
        return `"${key}": "${newLangObject[key]}"`;
      });

      fs.writeFileSync(path.join(basePath, 'i18n', `${lang}.json`), `{\n  ${sortedEntries.join(',\n  ')}\n}\n`);

      console.info(`wrote i18n/${lang}.json`);
    });

    console.info('i18n extraction finished');
  });
};

run();
