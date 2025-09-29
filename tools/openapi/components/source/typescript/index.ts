import { OpenAPIV3_1 } from 'openapi-types';
import { createTsProgram } from './program';
import { iterateModuleExports } from './walkers';
import { typeToSchema } from '../../../shared/type-to-schema';

export const generateApiSchemas = async (globs: string[]): Promise<Record<string, OpenAPIV3_1.SchemaObject>> => {
  const { program, checker, sourceFiles } = await createTsProgram(globs);

  const schemaRegistry: Record<string, OpenAPIV3_1.SchemaObject> = {};

  iterateModuleExports(program, checker, sourceFiles, ({ name: exportName, decl: declaration, type: exportedType }) => {
    schemaRegistry[exportName] = typeToSchema(exportedType, declaration, checker, program);
  });

  return schemaRegistry;
};
