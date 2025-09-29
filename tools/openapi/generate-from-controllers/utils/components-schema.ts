// utils/components-schema.ts
import type { OpenAPIV3_1 } from 'openapi-types';

type Schema = OpenAPIV3_1.SchemaObject | OpenAPIV3_1.ReferenceObject;

export const normalizeSimpleOneOf = (schema: any): any => {
  if (schema && schema.oneOf && Array.isArray(schema.oneOf)) {
    const types = schema.oneOf.map((s: any) => s?.type);
    const isStringNull = types.includes('string') && types.includes('null');
    if (isStringNull && schema.oneOf.length <= 2) {
      return { type: 'string', nullable: true };
    }
  }
  return schema;
};

export const schemaFromComponents = (
  typeName: string,
  components: OpenAPIV3_1.ComponentsObject,
): Schema | undefined => {
  const raw = components.schemas?.[typeName];
  if (!raw) return undefined;

  if (raw.type === 'object' && raw.properties) {
    const clone = { ...raw, properties: { ...raw.properties } };
    for (const [k, v] of Object.entries(clone.properties)) {
      clone.properties[k] = normalizeSimpleOneOf(v);
    }
    return clone;
  }

  return normalizeSimpleOneOf(raw);
};
