import ts from 'typescript';
import path from 'node:path';

export const iterateModuleExports = (
  program: ts.Program,
  checker: ts.TypeChecker,
  files: string[],
  onExport: (args: { name: string; decl: ts.Node; type: ts.Type }) => void,
) => {
  for (const sf of program.getSourceFiles()) {
    if (!files.includes(path.resolve(sf.fileName)) || sf.isDeclarationFile) {
      continue;
    }

    const mod = (sf as any).symbol as ts.Symbol | undefined;

    if (!mod) {
      continue;
    }

    for (const sym of checker.getExportsOfModule(mod)) {
      const name = sym.getName();

      if (name.startsWith('_')) {
        continue;
      }

      const decl = sym.declarations?.[0];

      if (!decl || (!ts.isTypeAliasDeclaration(decl) && !ts.isInterfaceDeclaration(decl))) {
        continue;
      }

      const type = ts.isTypeAliasDeclaration(decl)
        ? checker.getTypeFromTypeNode(decl.type)
        : checker.getDeclaredTypeOfSymbol(sym);

      onExport({ name, decl, type: checker.getApparentType(type) });
    }
  }
};
