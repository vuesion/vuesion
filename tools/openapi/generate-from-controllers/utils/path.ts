import { API_ROOT } from '../config';
import path from 'node:path';

export const httpMethodFromFilename = (file: string): string | null => {
  const m = file.match(/\.(get|post|put|patch|delete|options|head)\.ts$/i);

  return m ? m[1].toLowerCase() : null;
};

export const pathFromApiFile = (absoluteFilePath: string): string => {
  const relativePath = absoluteFilePath.split(`${API_ROOT}${path.sep}`)[1];
  const pathSegments = relativePath.split(path.sep);
  const directorySegments = pathSegments.slice(0, -1);
  const apiSegments = directorySegments.map((segment) =>
    segment.startsWith('[') && segment.endsWith(']') ? `{${segment.slice(1, -1)}}` : segment,
  );

  return `/api/${apiSegments.join('/') || ''}`;
};

export function toOperationId(method: string, url: string) {
  return `${method.toUpperCase()} ${url}`.replace(/[^\w]+/g, '_');
}
