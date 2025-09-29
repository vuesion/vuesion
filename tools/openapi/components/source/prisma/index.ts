import { readFileSync } from 'node:fs';
import { getDMMF } from '@prisma/internals';
import type * as DMMF from '@prisma/dmmf';
import { OpenAPIV3_1 } from 'openapi-types';

type Schema = OpenAPIV3_1.SchemaObject;

const scalarMap: Record<string, Schema> = {
  String: { type: 'string' },
  Int: { type: 'integer', format: 'int32' },
  BigInt: { type: 'integer', format: 'int64' },
  Float: { type: 'number', format: 'float' },
  Decimal: { type: 'string', format: 'decimal' },
  Boolean: { type: 'boolean' },
  DateTime: { type: 'string', format: 'date-time' },
  Json: { type: 'object' },
  Bytes: { type: 'string', format: 'byte' },
};

const prismaScalarToSchema = (type: string): Schema => {
  return scalarMap[type] ?? {};
};
const generateListViewSchema = (schemaRegistry: Record<string, Schema>, prismaModel: any, modelSchema: Schema) => {
  // TODO: get selected/included fields from Interface definition
  schemaRegistry[`I${prismaModel.name}ListView`] = modelSchema;
};
const generateDetailViewSchema = (schemaRegistry: Record<string, Schema>, prismaModel: any, modelSchema: Schema) => {
  // TODO: get selected/included fields from Interface definition
  schemaRegistry[`I${prismaModel.name}DetailView`] = modelSchema;
};
const generateViewSchemas = (dmmf: DMMF.Document, schemaRegistry: Record<string, Schema>) => {
  for (const prismaModel of dmmf.datamodel.models) {
    const fieldSchemas: Record<string, Schema> = {};
    const requiredFields: string[] = [];

    for (const field of prismaModel.fields) {
      if (field.kind === 'object') {
        // TODO: Relations später verarbeiten
        continue;
      }

      let fieldSchema: Schema = prismaScalarToSchema(field.type);

      if (field.isList) {
        fieldSchema = { type: 'array', items: fieldSchema };
      }

      fieldSchemas[field.name] = fieldSchema;

      if (field.isRequired && !field.hasDefaultValue && !field.isUpdatedAt) {
        requiredFields.push(field.name);
      }
    }

    const modelSchema: Schema = { type: 'object', properties: fieldSchemas };

    if (requiredFields.length) {
      modelSchema.required = requiredFields;
    }

    generateListViewSchema(schemaRegistry, prismaModel, modelSchema);
    generateDetailViewSchema(schemaRegistry, prismaModel, modelSchema);
  }
};
const generateInputSchemas = (dmmf: DMMF.Document, schemaRegistry: Record<string, Schema>) => {
  const allInputObjectTypes = [
    ...(dmmf.schema.inputObjectTypes?.model ?? []),
    ...(dmmf.schema.inputObjectTypes?.prisma ?? []),
  ];

  for (const inputObjectType of allInputObjectTypes) {
    // Nur Create- und Update-Inputs berücksichtigen, Unchecked ausschließen
    if (!/(CreateInput|UpdateInput)$/.test(inputObjectType.name)) {
      continue;
    }
    if (/Unchecked/.test(inputObjectType.name)) {
      continue;
    }

    const fieldSchemas: Record<string, Schema> = {};
    const requiredFields: string[] = [];

    for (const field of inputObjectType.fields) {
      const preferredType =
        field.inputTypes.find((t) => t.location === 'scalar') ??
        field.inputTypes.find((t) => t.location === 'enumTypes') ??
        field.inputTypes.find((t) => t.location === 'inputObjectTypes') ??
        field.inputTypes[0];

      let fieldSchema: Schema = {};

      if (preferredType.location === 'scalar') {
        fieldSchema = prismaScalarToSchema(String(preferredType.type));
      } else if (preferredType.location === 'enumTypes') {
        fieldSchema = { type: 'string' };
      } else {
        fieldSchema = { type: 'object' };
      }

      if (preferredType.isList) {
        fieldSchema = { type: 'array', items: fieldSchema };
      }

      fieldSchemas[field.name] = fieldSchema;

      const isOptional =
        (field as any).isOptional === true || (field as any).isNullable === true || (field as any).isRequired === false;

      if (!isOptional) {
        requiredFields.push(field.name);
      }
    }

    const schemaObject: Schema = { type: 'object', properties: fieldSchemas };

    if (requiredFields.length) {
      schemaObject.required = requiredFields;
    }

    const schemaName = inputObjectType.name.replace(/(Create|Update)Input$/, '$1');
    schemaRegistry[`I${schemaName}`] = schemaObject;
  }
};
const addEnums = (dmmf: DMMF.Document, schemaRegistry: Record<string, Schema>) => {
  for (const enumEntry of dmmf.datamodel.enums) {
    schemaRegistry[enumEntry.name] = { type: 'string', enum: enumEntry.values.map((v) => v.name) };
  }
};

export async function generateDomainSchemas(schemaPath: string): Promise<Record<string, Schema>> {
  const datamodel = readFileSync(schemaPath, 'utf8');
  const dmmf = await getDMMF({ datamodel });
  const schemaRegistry: Record<string, Schema> = {};

  generateViewSchemas(dmmf, schemaRegistry);
  generateInputSchemas(dmmf, schemaRegistry);
  addEnums(dmmf, schemaRegistry);

  return schemaRegistry;
}
