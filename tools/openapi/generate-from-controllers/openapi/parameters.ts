import { OpenAPIV3_1 } from 'openapi-types';

type Schema = OpenAPIV3_1.SchemaObject;

type BuildParams = {
  url: string;
  querySchema?: Schema;
};

export const buildParameters = ({ url, querySchema }: BuildParams): OpenAPIV3_1.ParameterObject[] => {
  const parameters: OpenAPIV3_1.ParameterObject[] = [];
  const pathParameterNames = [...url.matchAll(/\{([^}]+)\}/g)].map((match) => match[1]);

  for (const pathParamName of pathParameterNames) {
    parameters.push({
      name: pathParamName,
      in: 'path',
      required: true,
      schema: { type: 'string' },
    });
  }

  if (querySchema?.type === 'object' && querySchema.properties) {
    const requiredQueryParams = Array.isArray(querySchema.required) ? querySchema.required : [];

    for (const [queryParamName, queryParamSchema] of Object.entries(querySchema.properties)) {
      parameters.push({
        name: queryParamName,
        in: 'query',
        required: requiredQueryParams.includes(queryParamName),
        schema: queryParamSchema as any,
      });
    }
  }

  return parameters;
};
