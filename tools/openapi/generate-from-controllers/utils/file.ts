import fs from 'node:fs';
import path from 'node:path';

export const listTsFiles = (directory: string): string[] => {
  const tsFiles: string[] = [];
  const entries = fs.readdirSync(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      tsFiles.push(...listTsFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.ts')) {
      tsFiles.push(fullPath);
    }
  }

  return tsFiles;
};
