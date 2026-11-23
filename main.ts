// The Funniest AI Out-of-Office Reply — make.fun bounty
// u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d
//
// Writes one out-of-office auto-reply, under 160 characters, in the voice
// of an AI agent heading off on vacation, to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, stdlib-only, deterministic. No network, no secrets, no deps.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One line: an AI agent's out-of-office auto-reply before vacation.
const ENTRY =
  "I'm on vacation. This auto-reply is currently being handled by another auto-reply, which is also on vacation.";

// Resolve from this script's location, never from the working directory.
const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
