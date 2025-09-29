import ts from 'typescript';
import { typeToSchema } from './index';
import { OpenAPIV3_1 } from 'openapi-types';

export const schemaForUnion = (
  unionType: ts.UnionType,
  parentNode: ts.Node | undefined,
  checker: ts.TypeChecker,
  program: ts.Program,
): OpenAPIV3_1.SchemaObject => {
  const members = unionType.types;
  const withoutUndefined = members.filter((t) => (t.flags & ts.TypeFlags.Undefined) === 0);
  const hasNullMember = withoutUndefined.some((t) => (t.flags & ts.TypeFlags.Null) !== 0);
  const coreMembers = withoutUndefined.filter((t) => (t.flags & ts.TypeFlags.Null) === 0);

  if (coreMembers.some((t) => (t.flags & ts.TypeFlags.TemplateLiteral) !== 0)) {
    const base: OpenAPIV3_1.SchemaObject = { type: 'string' };
    return hasNullMember ? { oneOf: [base, { type: 'null' }] } : base;
  }

  const allStringLiterals =
    coreMembers.length > 0 && coreMembers.every((t) => (t.flags & ts.TypeFlags.StringLiteral) !== 0);

  if (allStringLiterals) {
    const values = coreMembers.map((t) => (t as ts.StringLiteralType).value);
    const base: OpenAPIV3_1.SchemaObject = values.length <= 20 ? { type: 'string', enum: values } : { type: 'string' };
    return hasNullMember ? { oneOf: [base, { type: 'null' }] } : base;
  }

  const memberSchemas = coreMembers
    .map((t) => typeToSchema(t, parentNode, checker, program))
    .filter((s) => s && (Object.keys(s).length > 0 || 'oneOf' in s)) as OpenAPIV3_1.SchemaObject[];

  const combined: OpenAPIV3_1.SchemaObject =
    memberSchemas.length === 0
      ? {}
      : memberSchemas.length === 1
        ? memberSchemas[0]
        : ({ oneOf: memberSchemas } as OpenAPIV3_1.SchemaObject);

  if (hasNullMember) {
    if ('oneOf' in combined && Array.isArray(combined.oneOf)) {
      return { oneOf: [...combined.oneOf, { type: 'null' }] };
    }
    return { oneOf: [combined, { type: 'null' }] };
  }

  return combined;
};
