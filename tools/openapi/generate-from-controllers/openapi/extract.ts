import { OpenAPIV3_1 } from 'openapi-types';
import ts from 'typescript';
import { buildRefSchemaFromTsType } from '../utils/schema';
import {
  findGenericTypeNameInCall,
  findGenericTypeUsedInCall,
  findSetResponseStatus,
  findThrownErrors,
  getReturnTypeFromHandler,
} from '../utils/ast';
import { KNOWN_ERROR_STATUS } from '../config';
import { schemaFromComponents } from '../utils/components-schema';

type Schema = OpenAPIV3_1.SchemaObject;

export type ExtractedMeta = {
  responseSchema: Schema | {};
  requestBodySchema?: Schema;
  querySchema?: Schema;
  explicitStatus: number | null;
  errorResponses: Record<number, { description: string }>;
};

export const extractOperationMeta = (
  sf: ts.SourceFile,
  handler: ts.FunctionLikeDeclarationBase,
  components: OpenAPIV3_1.ComponentsObject,
): ExtractedMeta => {
  const returnTypeFromHandler = getReturnTypeFromHandler(handler);
  const responseSchema = returnTypeFromHandler ? buildRefSchemaFromTsType(returnTypeFromHandler) : {};

  const readBodyType = findGenericTypeUsedInCall(sf, 'readBody');
  const requestBodySchema = readBodyType ? buildRefSchemaFromTsType(readBodyType) : undefined;

  const queryTypeName = findGenericTypeNameInCall(sf, 'getQuery');
  const querySchema = queryTypeName ? (schemaFromComponents(queryTypeName, components) as any) : undefined;

  const explicitStatus = findSetResponseStatus(sf);

  const thrownErrors = findThrownErrors(sf);
  const errorResponses: Record<number, { description: string }> = {};

  for (const errName of thrownErrors) {
    const code = KNOWN_ERROR_STATUS[errName].statusCode ?? 400;
    errorResponses[code] = { description: KNOWN_ERROR_STATUS[errName].statusMessage ?? errName };
  }

  return { responseSchema, requestBodySchema, querySchema, explicitStatus, errorResponses };
};
