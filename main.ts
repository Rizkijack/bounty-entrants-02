// Entry for make.fun bounty-entrants-02 (Node 22, standard library only).
//
// The entry itself is not this program: it is the bounties we sponsor on
// make.fun. This program only hands the house the list of those bounties —
// it copies BOUNTY.json from the repository root into the output directory,
// where the gate reads it. Nothing else it writes is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

const source = join(botDir, 'BOUNTY.json');
const target = join(outDir, 'BOUNTY.json');

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`Could not copy BOUNTY.json from ${source}: ${(error as Error).message}`);
  process.exit(1);
}
