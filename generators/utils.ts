import * as fs from 'fs';
import * as path from 'path';

export const folderExists = (folder: string) => {
  return fs.existsSync(path.join(path.resolve(process.cwd()), 'src', 'app', folder));
};
