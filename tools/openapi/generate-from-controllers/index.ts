import fs from 'node:fs';
import path from 'node:path';
import prettier from 'prettier';
import { getComponents } from '../components';
import { OUT_FILE } from './config';
import { buildOpenApi } from './build-openapi';

const main = async () => {
  const components = await getComponents();
  const doc = buildOpenApi(components);
  const pkgPath = path.resolve(__dirname, '../../../package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

  const openapi = {
    openapi: '3.1.0',
    info: { title: `${pkg.name} API`, version: pkg.version ?? '0.0.0' },
    components,
    paths: doc.paths,
  };

  const outPath = path.resolve(process.cwd(), OUT_FILE);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });

  const cfg = await prettier.resolveConfig(process.cwd());
  const pretty = await prettier.format(JSON.stringify(openapi, null, 2), {
    ...(cfg ?? {}),
    parser: 'json',
  });

  fs.writeFileSync(outPath, pretty, 'utf8');
  console.log('✅ generated', OUT_FILE);
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
