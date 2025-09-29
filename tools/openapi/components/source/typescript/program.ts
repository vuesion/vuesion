import ts from 'typescript';
import fg from 'fast-glob';

export const createTsProgram = async (patterns: string[]) => {
  const sourceFiles = await fg(patterns, { absolute: true, onlyFiles: true });
  const program = ts.createProgram({
    rootNames: sourceFiles,
    options: { target: ts.ScriptTarget.ES2021, module: ts.ModuleKind.ESNext, strict: true, skipLibCheck: true },
  });
  const checker = program.getTypeChecker();

  return { program, checker, sourceFiles };
};
