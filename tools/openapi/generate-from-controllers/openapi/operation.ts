import { OpenAPIV3_1 } from 'openapi-types';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import { toOperationId } from '../utils/path';
import { buildParameters } from './parameters';
import { buildResponses } from './responses';

type Schema = OpenAPIV3_1.SchemaObject;

type BuildOperationParams = {
  url: string;
  method: string;
  requiresAuth?: boolean;
  requiresPermission?: boolean;
  responseSchema: Schema | {};
  requestBodySchema?: Schema;
  querySchema?: Schema;
  explicitStatus: number | null;
  errorResponses: Record<number, { description: string }>;
};

export const buildOperation = (params: BuildOperationParams) => {
  const {
    url,
    method,
    requiresAuth,
    requiresPermission,
    responseSchema,
    requestBodySchema,
    querySchema,
    explicitStatus,
    errorResponses,
  } = params;

  const parameters = buildParameters({ url, querySchema });
  const responses = buildResponses({
    requiresAuth,
    requiresPermission,
    responseSchema,
    explicitStatus,
    errorResponses,
  });

  const requestBody = requestBodySchema
    ? {
        required: true,
        content: { 'application/json': { schema: requestBodySchema } },
      }
    : undefined;

  return {
    operationId: toOperationId(method, url),
    tags: [upperFirst(camelCase(url.split('/')[2] || 'default'))],
    security: requiresAuth ? [{ bearerAuth: [] }] : undefined,
    parameters: parameters.length ? parameters : undefined,
    requestBody,
    responses,
  };
};
