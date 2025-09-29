import { generateApiSchemas } from './source/typescript';
import { generateDomainSchemas } from './source/prisma';
import type { OpenAPIV3_1 } from 'openapi-types';

export async function getComponents(): Promise<OpenAPIV3_1.ComponentsObject> {
  const apiSchemas = await generateApiSchemas(['src/shared/interfaces/api/**/*.ts']);
  const domainSchemas = await generateDomainSchemas('prisma/schema.prisma');
  const schemas = { ...apiSchemas, ...domainSchemas };

  return {
    securitySchemes: {
      bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
    },
    schemas,
  };
}
