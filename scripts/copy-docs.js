import { mkdirSync, rmSync, copyFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { resolve, join } from 'node:path';

const root = resolve('.', 'docs');
const dist = resolve('.', 'dist');

function copyRecursive(src, dest) {
  const items = readdirSync(src);
  mkdirSync(dest, { recursive: true });
  for (const item of items) {
    const srcPath = join(src, item);
    const destPath = join(dest, item);
    const stats = statSync(srcPath);
    if (stats.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

if (existsSync(root)) {
  rmSync(root, { recursive: true, force: true });
}
mkdirSync(root, { recursive: true });
copyRecursive(dist, root);
console.log('Copied dist/ to docs/');
