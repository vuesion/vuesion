import ts from 'typescript';
import { OpenAPIV3_1 } from 'openapi-types';
import { checker } from '../program';

export const ref = (name: string) => ({ $ref: `#/components/schemas/${name}` });

export const normalizeTypeString = (tsType: ts.Type, typeChecker: ts.TypeChecker): string => {
  let typeAsString = typeChecker.typeToString(tsType);
  const promiseTypeMatch = typeAsString.match(/^Promise<(.+)>$/);

  if (promiseTypeMatch) {
    typeAsString = promiseTypeMatch[1];
  }

  return typeAsString;
};

export const parseGeneric = (typeAsString: string): { base: string; params: string[] } | null => {
  const genericMatch = typeAsString.match(/^([A-Za-z0-9_$.]+)\s*<\s*(.+)\s*>$/);

  if (!genericMatch) {
    return null;
  }

  const genericParams = genericMatch[2]
    .split(',')
    .map((param) => param.trim())
    .filter(Boolean);

  return { base: genericMatch[1], params: genericParams };
};

export const isArrayTypeString = (typeAsString: string): string | null => {
  const genericArrayMatch = typeAsString.match(/^Array<(.+)>$/);

  if (genericArrayMatch) {
    return genericArrayMatch[1].trim();
  }

  const shorthandArrayMatch = typeAsString.match(/^(.+)\[\]$/);

  if (shorthandArrayMatch) {
    return shorthandArrayMatch[1].trim();
  }

  return null;
};

export const buildRefSchemaFromTsType = (tsType: ts.Type): OpenAPIV3_1.SchemaObject | OpenAPIV3_1.ReferenceObject => {
  const normalizedTypeString = normalizeTypeString(tsType, checker);
  const arrayElementType = isArrayTypeString(normalizedTypeString);

  if (arrayElementType) {
    return { type: 'array', items: ref(arrayElementType) };
  }

  const genericTypeInfo = parseGeneric(normalizedTypeString);

  if (genericTypeInfo) {
    const { base: genericBaseType, params: genericParams } = genericTypeInfo;

    if (genericBaseType === 'IPaginatedResponse' && genericParams.length === 1) {
      const innerType = genericParams[0];
      return {
        allOf: [
          ref('IPaginatedResponse'),
          {
            type: 'object',
            properties: {
              records: {
                type: 'array',
                items: ref(innerType),
              },
            },
          },
        ],
      };
    }

    return ref(genericBaseType);
  }

  return ref(normalizedTypeString);
};
