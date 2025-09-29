import ts from 'typescript';
import { OpenAPIV3_1 } from 'openapi-types';

export const schemaForStringLiteral = (tsType: ts.Type): OpenAPIV3_1.SchemaObject => {
  return { type: 'string', enum: [(tsType as ts.StringLiteralType).value] };
};

export const schemaForNumberLiteral = (tsType: ts.Type): OpenAPIV3_1.SchemaObject => {
  return { type: 'number', enum: [(tsType as any).value] };
};

export const schemaForBooleanLiteral = (tsType: ts.Type): OpenAPIV3_1.SchemaObject => {
  const v = (tsType as any).intrinsicName === 'true';
  return { type: 'boolean', enum: [v] };
};

export const schemaForPrimitive = (tsType: ts.Type): OpenAPIV3_1.SchemaObject | null => {
  if ((tsType.flags & ts.TypeFlags.String) !== 0) {
    return { type: 'string' };
  }
  if ((tsType.flags & ts.TypeFlags.Number) !== 0) {
    return { type: 'number' };
  }
  if ((tsType.flags & ts.TypeFlags.Boolean) !== 0) {
    return { type: 'boolean' };
  }
  if ((tsType.flags & ts.TypeFlags.BigInt) !== 0) {
    return { type: 'string', format: 'bigint' };
  }
  if ((tsType.flags & ts.TypeFlags.Null) !== 0) {
    return { type: 'null' };
  }
  if ((tsType.flags & ts.TypeFlags.Undefined) !== 0) {
    return {};
  }
  if ((tsType.flags & ts.TypeFlags.Any) !== 0 || (tsType.flags & ts.TypeFlags.Unknown) !== 0) {
    return {};
  }

  return null;
};
