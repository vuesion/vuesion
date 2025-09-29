import ts from 'typescript';
import { checker } from '../program';

export const findSetResponseStatus = (sf: ts.SourceFile): number | null => {
  let code: number | null = null;

  const visit = (n: ts.Node) => {
    if (ts.isCallExpression(n) && ts.isIdentifier(n.expression) && n.expression.text === 'setResponseStatus') {
      const arg = n.arguments?.[1];
      if (arg && ts.isNumericLiteral(arg)) code = Number(arg.text);
    }

    n.forEachChild(visit);
  };

  sf.forEachChild(visit);

  return code;
};

export const findThrownErrors = (sf: ts.SourceFile): string[] => {
  const names: string[] = [];

  const visit = (n: ts.Node) => {
    if (ts.isThrowStatement(n)) {
      const ex = n.expression;

      if (ex && ts.isIdentifier(ex)) {
        names.push(ex.text);
      }

      if (ex && ts.isCallExpression(ex) && ts.isIdentifier(ex.expression)) {
        names.push(ex.expression.text);
      }
    }

    n.forEachChild(visit);
  };

  sf.forEachChild(visit);

  return names;
};

export const getDefaultExportFunction = (sf: ts.SourceFile): ts.FunctionLikeDeclarationBase | null => {
  for (const st of sf.statements) {
    if (ts.isExportAssignment(st)) {
      const expr = st.expression;

      if (ts.isCallExpression(expr)) {
        const arg = expr.arguments[0];

        if (arg && (ts.isFunctionExpression(arg) || ts.isArrowFunction(arg))) return arg as any;
      }

      if (ts.isFunctionExpression(expr) || ts.isArrowFunction(expr)) return expr as any;
    }
  }

  return null;
};

export const getReturnTypeFromHandler = (fn: ts.FunctionLikeDeclarationBase): ts.Type | null => {
  if (!fn.type) {
    return null;
  }

  return checker.getTypeFromTypeNode(fn.type);
};

export const findGenericTypeUsedInCall = (sf: ts.SourceFile, id: string): ts.Type | null => {
  let found: ts.Type | null = null;

  const visit = (n: ts.Node) => {
    if (ts.isCallExpression(n) && ts.isIdentifier(n.expression) && n.expression.text === id) {
      const tArg = n.typeArguments?.[0];

      if (tArg) {
        found = checker.getTypeFromTypeNode(tArg);
      }
    }

    n.forEachChild(visit);
  };

  sf.forEachChild(visit);

  return found;
};

export const findGenericTypeNameInCall = (sf: ts.SourceFile, fnName: string): string | null => {
  let found: string | null = null;

  const visit = (n: ts.Node) => {
    if (ts.isCallExpression(n)) {
      const expr = n.expression;
      const isTarget =
        (ts.isIdentifier(expr) && expr.text === fnName) ||
        (ts.isPropertyAccessExpression(expr) && expr.name.text === fnName);

      if (isTarget) {
        const tArg = n.typeArguments?.[0];
        if (tArg && ts.isTypeReferenceNode(tArg) && ts.isIdentifier(tArg.typeName)) {
          found = tArg.typeName.text; // <- nur der Name, z.B. "IListQuery"
          return;
        }
      }
    }
    n.forEachChild(visit);
  };
  sf.forEachChild(visit);
  return found;
};
