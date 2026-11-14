// ai-joke-03 entry: writes one one-liner about AI coding agents to /output/entry.txt.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  "My agent writes flawless code in seconds. It even comments the bugs so the next agent knows what to keep.";

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
