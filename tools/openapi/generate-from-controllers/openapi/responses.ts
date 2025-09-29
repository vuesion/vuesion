import { OpenAPIV3_1 } from 'openapi-types';
import { KNOWN_ERROR_STATUS } from '../config';

type Schema = OpenAPIV3_1.SchemaObject;

type BuildResponseParams = {
  requiresAuth?: boolean;
  requiresPermission?: boolean;
  responseSchema: Schema | {};
  explicitStatus: number | null;
  errorResponses: Record<number, { description: string }>;
};

export const buildResponses = ({
  requiresAuth,
  requiresPermission,
  responseSchema,
  explicitStatus,
  errorResponses,
}: BuildResponseParams): OpenAPIV3_1.ResponsesObject => {
  const successStatus = String(explicitStatus ?? 200);
  const successResponse =
    successStatus === '204'
      ? { description: 'No Content' }
      : { description: 'Success', content: { 'application/json': { schema: responseSchema } } };
  const responses: OpenAPIV3_1.ResponsesObject = {
    [successStatus]: successResponse,
    ...Object.fromEntries(Object.entries(errorResponses).map(([k, v]) => [String(k), v])),
  };

  if (requiresAuth && !responses['401']) {
    responses['401'] = { description: KNOWN_ERROR_STATUS['UnauthorizedError'].statusMessage };
  }

  if (requiresPermission && !responses['403']) {
    responses['403'] = { description: KNOWN_ERROR_STATUS['ForbiddenError'].statusMessage };
  }

  return responses;
};
