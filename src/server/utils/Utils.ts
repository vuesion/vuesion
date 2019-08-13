import * as Express from 'express';
import { Handler, Response } from 'express';
import * as path from 'path';

export const isProd: boolean = process.env.NODE_ENV === 'production';

export const resolve = (file: string): string => path.resolve(__dirname, file);

export const serve = (servePath: string, cache: boolean = true): Handler =>
  Express.static(resolve(servePath), {
    maxAge: cache && isProd ? '4w' : 0,
  });
