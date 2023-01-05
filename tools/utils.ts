import * as fs from 'fs';
import * as path from 'path';

export const getTranslationsFromString = (content: string): RegExpMatchArray => {
  const result: any = [];
  let matches = content.match(/t\(.*\/\*[\S,\s]*?\*\/\)/gm) || ([] as any);

  matches = matches.concat(content.match(/t\([^/)]*\/\*[^*]*\*\//gm) || ([] as any));

  /**
   * handle if statements
   */
  matches.forEach((match: string) => match.split(' : ').forEach((m: string) => result.push(m.trim())));

  return result;
};
export const sanitizeMessage = (message: string): string => {
  const replacements: Array<{ from: string | RegExp; to: string }> = [
    { from: /\s\s+/g, to: ' ' },
    { from: '/*', to: '' },
    { from: '*/', to: '' },
    { from: /\[/g, to: '<' },
    { from: /\]/g, to: '>' },
    { from: /"/g, to: '\\"' },
  ];

  replacements.forEach((replacement: { from: string | RegExp; to: string }) => {
    message = message.replace(replacement.from, replacement.to);
  });

  return message.trim();
};
export const getTranslationObject = (matches: string[]): any => {
  const translations: any = {};

  matches.forEach((translation: string) => {
    const id = translation.match(/'\S*'/);
    const comment = translation.match(/\/\*[\S\s]*\*\//);
    const key = id && id[0].replace(/[\\']/g, '');
    const value = comment && comment[0];

    if (key && value) {
      translations[key] = sanitizeMessage(value);
    }
  });

  return translations;
};

// Untested utilities
/* c8 ignore start */

export const ensureDirectoryExists = (filePath: string) => {
  const dirname = path.dirname(filePath);

  if (fs.existsSync(dirname)) {
    return true;
  }

  ensureDirectoryExists(dirname);
  fs.mkdirSync(dirname);
};

/* c8 ignore end */
