import ts from 'typescript';
import { typeToSchema } from './index';
import { OpenAPIV3_1 } from 'openapi-types';

export const schemaForRecordLike = (
  apparent: ts.Type,
  node: ts.Node | undefined,
  checker: ts.TypeChecker,
  program: ts.Program,
): OpenAPIV3_1.SchemaObject | null => {
  const indexString = checker.getIndexTypeOfType(apparent, ts.IndexKind.String);
  const props = checker.getPropertiesOfType(apparent);

  if (indexString && props.length === 0) {
    return { type: 'object', additionalProperties: typeToSchema(indexString, node, checker, program) };
  }

  return null;
};

export const schemaForObjectLike = (
  tsType: ts.Type,
  parentNode: ts.Node | undefined,
  checker: ts.TypeChecker,
  program: ts.Program,
): OpenAPIV3_1.SchemaObject | null => {
  const apparentType = checker.getApparentType(tsType);
  const recordLikeSchema = schemaForRecordLike(apparentType, parentNode, checker, program);

  if (recordLikeSchema) {
    return recordLikeSchema;
  }

  const symbols = checker.getPropertiesOfType(apparentType);

  if (!symbols.length) {
    return null;
  }

  const propertiesMap: Record<string, OpenAPIV3_1.SchemaObject> = {};
  const requiredKeys: string[] = [];
  const stringIndexType = checker.getIndexTypeOfType(apparentType, ts.IndexKind.String);

  for (const symbol of symbols) {
    const propDecl = symbol.valueDeclaration || symbol.declarations?.[0] || parentNode || program.getSourceFiles()[0];

    const propType = checker.getTypeOfSymbolAtLocation(symbol, propDecl);
    const propSchema = typeToSchema(propType, propDecl, checker, program);
    const propName = symbol.getName();

    propertiesMap[propName] = propSchema;

    const isOptionalProperty =
      (symbol.getFlags() & ts.SymbolFlags.Optional) !== 0 ||
      (propDecl && ts.isPropertySignature(propDecl as any) && !!(propDecl as any).questionToken);

    if (!isOptionalProperty && propSchema.type !== 'null') {
      requiredKeys.push(propName);
    }
  }

  const objectSchema: OpenAPIV3_1.SchemaObject = { type: 'object', properties: propertiesMap };

  if (requiredKeys.length) {
    objectSchema.required = requiredKeys;
  }

  if (stringIndexType) {
    objectSchema.additionalProperties = typeToSchema(stringIndexType, parentNode, checker, program);
  }

  return objectSchema;
};
