import ts from 'typescript';

export const hasAuth = (sf: ts.SourceFile): boolean => {
  let imported = false;
  let used = false;

  const visit = (node: ts.Node) => {
    if (ts.isImportDeclaration(node)) {
      const mod = (node.moduleSpecifier as ts.StringLiteral).text;

      if (mod === '~/server/utils/get-authorized-server-session') {
        const bindings = node.importClause?.namedBindings;

        if (bindings && ts.isNamedImports(bindings)) {
          imported = bindings.elements.some((el) => el.name.text === 'getAuthorizedServerSession');
        }
      }
    }

    if (ts.isCallExpression(node)) {
      const expr = node.expression;

      if (ts.isIdentifier(expr) && expr.text === 'getAuthorizedServerSession') {
        used = true;
      }
    }

    ts.forEachChild(node, visit);
  };

  ts.forEachChild(sf, visit);

  return imported && used;
};

export const usesMustBeRelatedToEntity = (sf: ts.SourceFile): boolean => {
  let imported = false;
  let used = false;

  const visit = (node: ts.Node) => {
    if (ts.isImportDeclaration(node)) {
      const mod = (node.moduleSpecifier as ts.StringLiteral).text;

      if (mod === '~/server/utils/access-control') {
        const bindings = node.importClause?.namedBindings;

        if (bindings && ts.isNamedImports(bindings)) {
          imported = bindings.elements.some((el) => el.name.text === 'mustBeRelatedToEntity');
        }
      }
    }

    if (ts.isCallExpression(node)) {
      const expr = node.expression;

      if (ts.isIdentifier(expr) && expr.text === 'mustBeRelatedToEntity') {
        used = true;
      }
    }
    ts.forEachChild(node, visit);
  };

  ts.forEachChild(sf, visit);

  return imported && used;
};
