import ts from 'typescript';
import { OpenAPIV3_1 } from 'openapi-types';
import { typeToSchema } from './index';

export const schemaForArray = (
  tsType: ts.Type,
  parentNode: ts.Node | undefined,
  checker: ts.TypeChecker,
  program: ts.Program,
): OpenAPIV3_1.SchemaObject | null => {
  if (!checker.isArrayType(tsType)) {
    return null;
  }

  const elementType = (checker as any).getElementTypeOfArrayType(tsType) as ts.Type;

  return {
    type: 'array',
    items: typeToSchema(elementType, parentNode, checker, program),
  };
};

export const schemaForTuple = (
  tsType: ts.Type,
  parentNode: ts.Node | undefined,
  checker: ts.TypeChecker,
  program: ts.Program,
): OpenAPIV3_1.SchemaObject | null => {
  if (!checker.isTupleType(tsType)) {
    return null;
  }

  const tupleElementTypes = (tsType as ts.TupleTypeReference).typeArguments ?? [];

  return {
    type: 'array',
    items: tupleElementTypes.length ? typeToSchema(tupleElementTypes[0], parentNode, checker, program) : {},
  };
};
