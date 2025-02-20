#!/usr/bin/env node
const flamesMatch = require("./src/flames");

const args = process.argv.slice(2);
if (args.length !== 2) {
  console.log("Usage: flames <name1> <name2>");
  process.exit(1);
}

console.log(`Relationship: ${flamesMatch(args[0], args[1])}`);
