import path from 'node:path';
import { OpenAPIV3_1 } from 'openapi-types';
import { API_ROOT } from './config';
import { program } from './program';
import { httpMethodFromFilename, pathFromApiFile } from './utils/path';
import { hasAuth, usesMustBeRelatedToEntity } from './utils/auth';
import { getDefaultExportFunction } from './utils/ast';
import { extractOperationMeta } from './openapi/extract';
import { buildOperation } from './openapi/operation';

type Schema = OpenAPIV3_1.SchemaObject;
type Paths = Record<string, any>;

export const buildOpenApi = (
  components: OpenAPIV3_1.ComponentsObject,
): { components: { schemas: Record<string, Schema> }; paths: Paths } => {
  const schemas: Record<string, Schema> = {};
  const paths: Paths = {};

  for (const sf of program.getSourceFiles()) {
    if (!sf.fileName.includes(`${path.sep}${API_ROOT}${path.sep}`)) {
      continue;
    }
    if (sf.isDeclarationFile) {
      continue;
    }

    const method = httpMethodFromFilename(sf.fileName);

    if (!method) {
      continue;
    }

    const url = pathFromApiFile(sf.fileName);
    const requiresAuth = hasAuth(sf);
    const requiresPermission = usesMustBeRelatedToEntity(sf);
    const handler = getDefaultExportFunction(sf);

    if (!handler) {
      continue;
    }

    const meta = extractOperationMeta(sf, handler, components);
    const op = buildOperation({
      url,
      method,
      requiresAuth,
      requiresPermission,
      ...meta,
    });

    paths[url] ||= {};
    paths[url][method] = op;
  }

  return {
    components: { schemas },
    paths,
  };
};
