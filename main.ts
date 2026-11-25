import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Describe Your Ex in One Word (make.fun).
// The verdict is "beta": a test version — buggy, unfinished, shipped
// early so the next person gets the stable release.
const WORD = "beta";

// The gate allows 1–111 characters and the brief wants exactly one word:
// refuse anything that is not a single plain token.
if (!/^[A-Za-z]+$/.test(WORD)) {
  throw new Error("entry must be exactly one word");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
