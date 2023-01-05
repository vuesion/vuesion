import * as fs from 'fs';
import * as path from 'path';
import { spawn, SpawnOptions } from 'child_process';

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

export interface IProcessOptions {
  cwd?: string;
  silent?: boolean;
  debug?: boolean;
}

export interface IProcessError {
  code: number;
  trace: string;
}

export const runProcess = (name: string, args: string[] = [], options?: IProcessOptions): Promise<any> => {
  return new Promise((resolve: any, reject: any) => {
    options = Object.assign({ cwd: process.cwd(), silent: false, debug: false }, options);

    const localOptions: SpawnOptions = Object.assign(
      {
        detached: false,
        cwd: options.cwd,
        env: process.env,
      },
      options.silent === false || options.debug === true ? { stdio: 'inherit' as const } : {},
    );
    const childProcess: any = spawn(name, args, localOptions);

    childProcess.on('exit', (code: number) => {
      childProcess.kill();

      if (code === 0) {
        resolve(undefined);
      } else {
        const err: IProcessError = { code, trace: '' };
        reject(err);
      }
    });

    childProcess.on('error', (e: Error) => {
      childProcess.kill();
      reject(e);
    });
  });
};

/* c8 ignore end */
