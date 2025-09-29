import ts from 'typescript';
import { OpenAPIV3_1 } from 'openapi-types';
import { schemaForTemplateLiteral } from './literals';
import {
  schemaForBooleanLiteral,
  schemaForNumberLiteral,
  schemaForPrimitive,
  schemaForStringLiteral,
} from './primitives';
import { schemaForArray, schemaForTuple } from './arrays-tuples';
import { schemaForUnion } from './unions';
import { schemaForObjectLike } from './objects';

export const typeToSchema = (
  tsType: ts.Type,
  parentNode: ts.Node | undefined,
  checker: ts.TypeChecker,
  program: ts.Program,
): OpenAPIV3_1.SchemaObject => {
  if ((tsType.flags & ts.TypeFlags.TemplateLiteral) !== 0) {
    return schemaForTemplateLiteral();
  }

  if ((tsType.flags & ts.TypeFlags.StringLiteral) !== 0) {
    return schemaForStringLiteral(tsType);
  }

  if ((tsType.flags & ts.TypeFlags.NumberLiteral) !== 0) {
    return schemaForNumberLiteral(tsType);
  }

  if ((tsType.flags & ts.TypeFlags.BooleanLiteral) !== 0) {
    return schemaForBooleanLiteral(tsType);
  }

  const primitiveSchema = schemaForPrimitive(tsType);
  if (primitiveSchema) {
    return primitiveSchema;
  }

  const arraySchema = schemaForArray(tsType, parentNode, checker, program);
  if (arraySchema) {
    return arraySchema;
  }

  const tupleSchema = schemaForTuple(tsType, parentNode, checker, program);
  if (tupleSchema) {
    return tupleSchema;
  }

  if (tsType.isUnion()) {
    return schemaForUnion(tsType as ts.UnionType, parentNode, checker, program);
  }

  const objectSchema = schemaForObjectLike(tsType, parentNode, checker, program);
  if (objectSchema) {
    return objectSchema;
  }

  return {};
};
