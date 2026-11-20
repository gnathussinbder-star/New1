import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const extensions = ['.ts', '.tsx', '.js', '.jsx', '.mjs', '.json'];
const sourceFiles = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.next', '.git', 'out', '.vercel'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(ts|tsx|js|jsx|mjs)$/.test(entry.name)) sourceFiles.push(full);
  }
}
walk(root);
const missing = [];
for (const file of sourceFiles) {
  const source = fs.readFileSync(file, 'utf8');
  const imports = [...source.matchAll(/(?:from\s*|import\s*\()(['"])([^'"]+)\1/g)].map((m) => m[2]);
  for (const spec of imports) {
    if (!spec.startsWith('@/') && !spec.startsWith('.')) continue;
    const base = spec.startsWith('@/') ? path.join(root, spec.slice(2)) : path.resolve(path.dirname(file), spec);
    if (![base, ...extensions.map((ext) => base + ext), ...extensions.map((ext) => path.join(base, 'index' + ext))].some((candidate) => fs.existsSync(candidate))) {
      missing.push(`${path.relative(root, file)} -> ${spec}`);
    }
  }
}
if (missing.length) throw new Error(`Unresolved local imports:\n${missing.join('\n')}`);
if (!fs.existsSync(path.join(root, 'app/api/admin/certificates/[id]/revoke/route.ts'))) throw new Error('Certificate revocation endpoint is missing.');
for (const asset of ['public/assets/hb-logo.png', 'public/assets/hb-logo-original.png', 'public/assets/founder-portrait.webp', 'public/og-image.png', 'app/icon.png', 'app/apple-icon.png']) {
  if (!fs.existsSync(path.join(root, asset))) throw new Error(`Required brand asset is missing: ${asset}`);
}
if (fs.existsSync(path.join(root, '.env.local'))) throw new Error('Do not package .env.local.');
const keySource = fs.readFileSync(path.join(root, 'content/private-answer-key.ts'), 'utf8');
if (!keySource.includes("import 'server-only'")) throw new Error('Answer key is not marked server-only.');
console.log(`PROJECT CHECK PASSED — ${sourceFiles.length} source files; local imports resolved; secret-file and private-key checks passed.`);
