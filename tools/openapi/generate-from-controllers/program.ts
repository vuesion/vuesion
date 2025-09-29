import ts from 'typescript';
import { listTsFiles } from './utils/file';
import { API_ROOT } from './config';
import path from 'node:path';

export const program = ts.createProgram({
  rootNames: listTsFiles(API_ROOT).map((p) => path.resolve(p)),
  options: {
    target: ts.ScriptTarget.ES2021,
    module: ts.ModuleKind.ESNext,
    strict: true,
    esModuleInterop: true,
    skipLibCheck: true,
  },
});
export const checker = program.getTypeChecker();
