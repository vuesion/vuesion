import * as fs from 'fs';
import * as _ from 'lodash';
import * as ts from 'typescript';

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

    moduleName = _.lowerFirst(moduleName);

    getAST(file);

    file = insertAt(
      file,
      findAstNodes(sourceFile, ts.SyntaxKind.ImportDeclaration, true).pop().end,
      `\nimport { ${moduleName}Routes } from './${moduleName}/routes';`
    );

    getAST(file);

    file = insertAt(
      file,
      findAstNodes(sourceFile, ts.SyntaxKind.ArrayLiteralExpression, true).pop().end - 4,
      `\n    ...${moduleName}Routes,`
    );

    fs.writeFileSync(pathToAppRoutes, file, { encoding: 'utf-8' });
  } catch (e) {
    throw new Error(e);
  }
};

export const addModuleToActions = (pathToAppActions: string, moduleName: string): void => {
  try {
    let file = fs.readFileSync(pathToAppActions, 'utf-8');

    moduleName = _.lowerFirst(moduleName);

    getAST(file);

    file = insertAt(
      file,
      findAstNodes(sourceFile, ts.SyntaxKind.ImportDeclaration, true).pop().end,
      `\nimport * as ${moduleName}Actions from './${moduleName}/actions';`
    );

    getAST(file);

    file = insertAt(
      file,
      findAstNodes(sourceFile, ts.SyntaxKind.ObjectLiteralExpression, true).pop().end - 2,
      `\n  ...${moduleName}Actions,`
    );

    fs.writeFileSync(pathToAppActions, file, { encoding: 'utf-8' });
  } catch (e) {
    throw new Error(e);
  }
};

export const addModuleToGetters = (pathToAppGetters: string, moduleName: string): void => {
  try {
    let file = fs.readFileSync(pathToAppGetters, 'utf-8');

    moduleName = _.lowerFirst(moduleName);

    getAST(file);

    file = insertAt(
      file,
      findAstNodes(sourceFile, ts.SyntaxKind.ImportDeclaration, true).pop().end,
      `\nimport * as ${moduleName}Getters from './${moduleName}/getters';`
    );

    getAST(file);

    file = insertAt(
      file,
      findAstNodes(sourceFile, ts.SyntaxKind.ObjectLiteralExpression, true).pop().end - 2,
      `\n  ...${moduleName}Getters,`
    );

    fs.writeFileSync(pathToAppGetters, file, { encoding: 'utf-8' });
  } catch (e) {
    throw new Error(e);
  }
};

export const addModuleToMutations = (pathToAppMutations: string, moduleName: string): void => {
  try {
    let file = fs.readFileSync(pathToAppMutations, 'utf-8');

    moduleName = _.lowerFirst(moduleName);

    getAST(file);

    file = insertAt(
      file,
      findAstNodes(sourceFile, ts.SyntaxKind.ImportDeclaration, true).pop().end,
      `\nimport { ${moduleName}DefaultState, ${moduleName}Mutations } from './${moduleName}/mutations';`
    );

    getAST(file);

    const nodes: ts.Node[] = findAstNodes(sourceFile, ts.SyntaxKind.ObjectLiteralExpression, true);

    file = insertAt(
      file,
      nodes.pop().end - 2,
      `\n  ...${moduleName}Mutations,`
    );

    file = insertAt(
      file,
      nodes.pop().end - 2,
      `\n  ...${moduleName}DefaultState,`
    );

    fs.writeFileSync(pathToAppMutations, file, { encoding: 'utf-8' });
  } catch (e) {
    throw new Error(e);
  }
};
