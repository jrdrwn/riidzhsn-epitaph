import { mkdirSync, writeFileSync } from "node:fs";

// One line of famous last words, a tombstone epitaph of 150 characters or
// fewer. Written verbatim to /output/entry.txt, byte-identical every run.
const SETUP = "I took the Wi-Fi password to my grave.";
const REVEAL = "It was 'password123'."; // the punchline, and the joke
const LINE = [SETUP, REVEAL].join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
