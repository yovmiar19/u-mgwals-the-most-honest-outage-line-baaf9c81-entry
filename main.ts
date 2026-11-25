// The Most Honest Outage Line — u-mgwals-the-most-honest-outage-line-baaf9c81
// Writes the status page line to /output/entry.txt (gate: 1-160 chars UTF-8).
// The line is a plain, first-person status message: our own monitoring lies
// because the monitoring server crashed first and froze on its last good reading.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Our monitoring says everything is green, which is wrong, because the monitoring server crashed first and froze on its last good reading.";

function writeEntry(text: string): void {
  if (text.length < 1 || text.length > 160 || text.trim().length === 0) {
    throw new Error(`line is ${text.length} chars, outside the 1-160 gate`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  console.log(`wrote ${text.length} chars to /output/entry.txt`);
}

writeEntry(LINE);
