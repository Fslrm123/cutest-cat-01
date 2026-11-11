// cutest-cat-01 entry: copies the cat picture beside this file to the output
// directory the harness provides (/output, or MAKEFUN_OUTPUT_DIR locally).
// Node 22+, standard library only. Run locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outFile = join(outDir, 'entry.png');
mkdirSync(outDir, { recursive: true });
copyFileSync(
  join(dirname(fileURLToPath(import.meta.url)), 'entry.png'),
  outFile,
);
console.log(`wrote ${outFile} (${statSync(outFile).size} bytes)`);
