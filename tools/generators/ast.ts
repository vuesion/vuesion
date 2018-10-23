import * as fs                    from 'fs';
import * as ts                    from 'typescript';
import { lowerFirst, upperFirst } from 'lodash';

let sourceFile: ts.SourceFile;

const insertAt = (file: string, index: number, insert: string): string => {
  return file.substr(0, index) + insert + file.substr(index);
};
const getAST = (file: string): void => {
  sourceFile = ts.createSourceFile('ast', file, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
};
const findAstNodes = (node: ts.Node, kind: ts.SyntaxKind, recursive: boolean = false, max: number = Infinity): ts.Node[] => {
  if (max === 0) {
    return [];
  }

  const arr: ts.Node[] = [];
  if (node.kind === kind) {
    if (!recursive) {
      return [node];
    }

    arr.push(node);
    max--;
  }

  if (max > 0) {
    for (const child of node.getChildren(sourceFile)) {
      findAstNodes(child, kind, recursive, max)
      .forEach((currentNode: ts.Node) => {
        if (max > 0) {
          arr.push(currentNode);
        }
        max--;
      });

      if (max <= 0) {
        break;
      }
    }
  }
  return arr;
};

export const addModuleToRoutes = (pathToAppRoutes: string, moduleName: string): void => {
  try {
    let file = fs.readFileSync(pathToAppRoutes, 'utf-8');

    getAST(file);

    file = insertAt(
      file,
      findAstNodes(sourceFile, ts.SyntaxKind.ArrayLiteralExpression, true).pop().end - 4,
      `     ...${upperFirst(moduleName)}Routes,\n`,
    );

    file = insertAt(
      file,
      findAstNodes(sourceFile, ts.SyntaxKind.ImportDeclaration, true).pop().end,
      `\nimport { ${upperFirst(moduleName)}Routes }         from './${lowerFirst(moduleName)}/routes';`,
    );

    fs.writeFileSync(pathToAppRoutes, file, { encoding: 'utf-8' });
  } catch (e) {
    throw new Error(e);
  }
};

export const addModuleToState = (pathToAppActions: string, moduleName: string): void => {
  try {
    let file = fs.readFileSync(pathToAppActions, 'utf-8');

    getAST(file);

    const interfaces: ts.Node[] = findAstNodes(sourceFile, ts.SyntaxKind.InterfaceDeclaration, true);

    file = insertAt(
      file,
      interfaces.shift().end - 2,
      `\n  ${lowerFirst(moduleName)}?: I${upperFirst(moduleName)}State;`,
    );

    file = insertAt(
      file,
      findAstNodes(sourceFile, ts.SyntaxKind.ImportDeclaration, true).pop().end,
      `\nimport { I${upperFirst(moduleName)}State }              from './${lowerFirst(moduleName)}/state';`,
    );

    fs.writeFileSync(pathToAppActions, file, { encoding: 'utf-8' });
  } catch (e) {
    throw new Error(e);
  }
};
