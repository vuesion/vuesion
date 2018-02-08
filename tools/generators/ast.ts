import * as fs from 'fs';
import * as ts from 'typescript';
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
      `\n    ...${upperFirst(moduleName)}Routes,`
    );

    file = insertAt(
      file,
      findAstNodes(sourceFile, ts.SyntaxKind.ImportDeclaration, true).pop().end,
      `\nimport { ${upperFirst(moduleName)}Routes } from './${lowerFirst(moduleName)}/routes';`
    );

    fs.writeFileSync(pathToAppRoutes, file, { encoding: 'utf-8' });
  } catch (e) {
    throw new Error(e);
  }
};

export const addModuleToActions = (pathToAppActions: string, moduleName: string): void => {
  try {
    let file = fs.readFileSync(pathToAppActions, 'utf-8');

    getAST(file);

    file = insertAt(
      file,
      findAstNodes(sourceFile, ts.SyntaxKind.ObjectLiteralExpression, true).pop().end - 2,
      `\n  ...${upperFirst(moduleName)}Actions,`
    );

    const interfaces: ts.Node[] = findAstNodes(sourceFile, ts.SyntaxKind.InterfaceDeclaration, true);

    file = insertAt(
      file,
      findAstNodes(interfaces.shift(), ts.SyntaxKind.FirstPunctuation, true).shift().end - 2,
      `, I${upperFirst(moduleName)}Actions`
    );

    file = insertAt(
      file,
      findAstNodes(sourceFile, ts.SyntaxKind.ImportDeclaration, true).pop().end,
      `\nimport { I${upperFirst(moduleName)}Actions, ${upperFirst(moduleName)}Actions } from './${lowerFirst(moduleName)}/actions';`
    );

    fs.writeFileSync(pathToAppActions, file, { encoding: 'utf-8' });
  } catch (e) {
    throw new Error(e);
  }
};

export const addModuleToGetters = (pathToAppGetters: string, moduleName: string): void => {
  try {
    let file = fs.readFileSync(pathToAppGetters, 'utf-8');

    getAST(file);

    file = insertAt(
      file,
      findAstNodes(sourceFile, ts.SyntaxKind.ObjectLiteralExpression, true).pop().end - 2,
      `\n  ...${upperFirst(moduleName)}Getters,`
    );

    const interfaces: ts.Node[] = findAstNodes(sourceFile, ts.SyntaxKind.InterfaceDeclaration, true);

    file = insertAt(
      file,
      findAstNodes(interfaces.shift(), ts.SyntaxKind.FirstPunctuation, true).shift().end - 2,
      `, I${upperFirst(moduleName)}Getters`
    );

    file = insertAt(
      file,
      findAstNodes(sourceFile, ts.SyntaxKind.ImportDeclaration, true).pop().end,
      `\nimport { I${upperFirst(moduleName)}Getters, ${upperFirst(moduleName)}Getters } from './${lowerFirst(moduleName)}/getters';`
    );

    fs.writeFileSync(pathToAppGetters, file, { encoding: 'utf-8' });
  } catch (e) {
    throw new Error(e);
  }
};

export const addModuleToMutations = (pathToAppMutations: string, moduleName: string): void => {
  try {
    let file = fs.readFileSync(pathToAppMutations, 'utf-8');

    getAST(file);

    const literals: ts.Node[] = findAstNodes(sourceFile, ts.SyntaxKind.ObjectLiteralExpression, true);
    const interfaces: ts.Node[] = findAstNodes(sourceFile, ts.SyntaxKind.InterfaceDeclaration, true);

    file = insertAt(
      file,
      literals.pop().end - 2,
      `\n  ...${upperFirst(moduleName)}Mutations,`
    );

    literals.pop();

    file = insertAt(
      file,
      literals.pop().end - 2,
      `\n  ...${upperFirst(moduleName)}DefaultState,`
    );

    file = insertAt(
      file,
      findAstNodes(interfaces.pop(), ts.SyntaxKind.FirstPunctuation, true).shift().end - 2,
      `, I${upperFirst(moduleName)}Mutations`
    );

    file = insertAt(
      file,
      findAstNodes(interfaces.pop(), ts.SyntaxKind.FirstPunctuation, true).shift().end - 2,
      `, I${upperFirst(moduleName)}State`
    );

    file = insertAt(
      file,
      findAstNodes(sourceFile, ts.SyntaxKind.ImportDeclaration, true).pop().end,
      `\nimport { I${upperFirst(moduleName)}State, I${upperFirst(moduleName)}Mutations, ${upperFirst(moduleName)}DefaultState, ${upperFirst(moduleName)}Mutations } from './${lowerFirst(moduleName)}/mutations';`
    );

    fs.writeFileSync(pathToAppMutations, file, { encoding: 'utf-8' });
  } catch (e) {
    throw new Error(e);
  }
};
